// Layout check + screenshots for the deck (brief, section 18).
//
//   npm run build && npm run check            → report + screenshots/
//   CHECK_URL=http://localhost:5173 npm run check   (use a running server)
//   npm run check -- --layout-only            → report only, no screenshots
//
// Needs playwright-core and a Chromium binary (CHROMIUM_PATH, default
// /opt/pw-browsers/chromium).
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright-core';

const EXEC = process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium';
const OUT = 'screenshots';
const SLIDES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'];
const SAFE = { left: 118, right: 1802, bottom: 1000 }; // flight path lives below y 1000
const LAYOUT_ONLY = process.argv.includes('--layout-only');
const MIN_BODY = 32;

async function startServer() {
  if (process.env.CHECK_URL) return { url: process.env.CHECK_URL, stop: () => {} };
  // Run vite's own entry point (not through npx) so stop() ends the server
  // itself and the script can exit.
  const proc = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--port', '4179', '--strictPort'], { stdio: 'pipe' });
  await new Promise((resolve, reject) => {
    proc.stdout.on('data', (d) => d.toString().includes('4179') && resolve());
    proc.on('exit', (code) => reject(new Error(`preview exited ${code}`)));
  });
  return { url: 'http://localhost:4179', stop: () => proc.kill() };
}

// Runs in the page: text rects per page, out-of-bounds, collisions, small type.
function inspect({ SAFE, MIN_BODY }) {
  const pages = [...document.querySelectorAll('[data-slide]')];
  return pages.map((page) => {
    const origin = page.getBoundingClientRect();
    const walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT);
    const boxes = [];
    const small = new Map();
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent.trim();
      if (!text) continue;
      const el = node.parentElement;
      if (el.closest('.sr-only')) continue;
      if (el.closest('[data-print-line]')) continue; // print footer sits where the flight path would
      const inPhone = !!el.closest('[data-phone]');
      const range = document.createRange();
      range.selectNodeContents(node);
      for (const r of range.getClientRects()) {
        if (r.width < 1 || r.height < 1) continue;
        boxes.push({
          el,
          text: text.slice(0, 50),
          x: r.left - origin.left,
          y: r.top - origin.top,
          w: r.width,
          h: r.height,
          inPhone,
        });
      }
      const size = parseFloat(getComputedStyle(el).fontSize);
      if (!inPhone && size < MIN_BODY) {
        const key = `${size}px`;
        if (!small.has(key)) small.set(key, []);
        if (small.get(key).length < 3) small.get(key).push(text.slice(0, 40));
      }
    }

    const out = boxes
      .filter((b) => !b.inPhone)
      .filter((b) => b.x < SAFE.left || b.x + b.w > SAFE.right || b.y + b.h > SAFE.bottom)
      .map((b) => `${b.text} → x ${Math.round(b.x)}–${Math.round(b.x + b.w)}, y ${Math.round(b.y)}–${Math.round(b.y + b.h)}`);

    const overlaps = [];
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i];
        const b = boxes[j];
        if (a.el === b.el || a.el.contains(b.el) || b.el.contains(a.el)) continue;
        if (a.el.parentElement === b.el.parentElement) continue; // stacked lines of one label
        const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
        const oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
        if (ox > 4 && oy > 14) overlaps.push(`"${a.text}" × "${b.text}"`);
      }
    }

    const bottom = Math.max(...boxes.filter((b) => !b.inPhone).map((b) => b.y + b.h));
    return {
      id: page.dataset.slide,
      bottom: Math.round(bottom),
      out,
      overlaps: [...new Set(overlaps)].slice(0, 8),
      small: Object.fromEntries(small),
    };
  });
}

const server = await startServer();
const browser = await chromium.launch({ executablePath: EXEC });
await mkdir(OUT, { recursive: true });
let problems = 0;

try {
  // 1. Layout report from ?print (every slide at native 1920 × 1080).
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto(`${server.url}/?print`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const report = await page.evaluate(inspect, { SAFE, MIN_BODY });
  for (const r of report) {
    const bad = r.out.length || r.overlaps.length;
    problems += bad ? 1 : 0;
    console.log(`\n${bad ? '✗' : '✓'} ${r.id.padEnd(15)} text bottom y=${r.bottom}`);
    r.out.forEach((o) => console.log(`   out of safe area: ${o}`));
    r.overlaps.forEach((o) => console.log(`   overlap: ${o}`));
    if (Object.keys(r.small).length) console.log(`   under ${MIN_BODY}px:`, JSON.stringify(r.small));
  }
  if (!LAYOUT_ONLY) {
    await page.emulateMedia({ media: 'print' });
    await page.pdf({ path: `${OUT}/deck.pdf`, width: '1920px', height: '1080px', printBackground: true });
  }
  await page.close();
  if (!LAYOUT_ONLY) await shoot();
} finally {
  await browser.close();
  server.stop();
}

async function shoot() {
  // 2. Screenshots of the live stage at each viewport.
  const viewports = [
    [1920, 1080],
    [1366, 768],
    [820, 1180],
  ];
  for (const [w, h] of viewports) {
    const p = await browser.newPage({ viewport: { width: w, height: h } });
    await p.goto(`${server.url}/#/1`, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    for (const s of SLIDES) {
      await p.evaluate((h) => (window.location.hash = h), `#/${s}`);
      // Slide 4's colour reveal ends 2.1s after entry; shoot it settled.
      await p.waitForTimeout(w === 1920 ? (s === '4' ? 2600 : 1000) : 300);
      if (w === 1920 || ['1', '4', '7', '10'].includes(s)) {
        await p.screenshot({ path: `${OUT}/${w}x${h}-${s}.png` });
      }
      const hScroll = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      if (hScroll) {
        problems++;
        console.log(`✗ horizontal scroll at ${w}×${h} on slide ${s}`);
      }
    }
    await p.close();
  }

  // 3. Reading mode on a phone.
  const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await phone.goto(server.url, { waitUntil: 'networkidle' });
  await phone.evaluate(() => document.fonts.ready);
  await phone.screenshot({ path: `${OUT}/390x844-reading.png`, fullPage: true });
  const phoneScroll = await phone.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  if (phoneScroll) {
    problems++;
    console.log('✗ horizontal scroll in reading mode at 390×844');
  }
  await phone.close();
}

console.log(problems ? `\n${problems} problem(s) found.` : '\nAll slides fit.');
process.exitCode = problems ? 1 : 0;
