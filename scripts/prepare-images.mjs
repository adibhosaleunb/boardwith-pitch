// Converts the attached originals into the files the deck uses (brief, 12.4).
//
//   1. Put the originals in source-images/ (names as attached; see README there).
//   2. npm run images
//
// Only the manifest files are used. Everything else in source-images/ is ignored.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = 'source-images';
const OUT = 'public/images';
const WEBP = { quality: 81 };
const SCENE = { quality: 82 };

// The scene SVGs are drawn on a 1400 × 900 canvas; render them at 2×.
const renderScene = (src) => sharp(src, { density: 144 }).resize(2800, 1800).png().toBuffer();

const find = (...names) => {
  if (!existsSync(SRC)) return null;
  const files = readdirSync(SRC);
  // Match loosely: case, spaces and underscores vary between uploads
  // ("Lost at the Airport@2x.png" vs "Lost_at_the_Airport@2x.png").
  const norm = (f) => f.toLowerCase().replace(/[\s_]+/g, '');
  for (const name of names) {
    const hit = files.find((f) => norm(f) === norm(name));
    if (hit) return join(SRC, hit);
  }
  return null;
};

const jobs = [
  {
    label: 'logo lockup (slides 1 and 10) + favicon',
    src: find('boardwith-lockup-on-teal.png'),
    async run(src) {
      await sharp(src).png().toFile(join(OUT, 'logo-lockup.png'));
      // Favicon: the window icon is the left ~440px of the 2000 × 613 lockup.
      // Cut and trim in separate passes: in one pipeline sharp may trim
      // first, which leaves the cut outside the image ("bad extract area").
      const { width, height } = await sharp(src).metadata();
      const iconW = Math.min(width, Math.round((440 / 2000) * width));
      const cut = await sharp(src).extract({ left: 0, top: 0, width: iconW, height }).png().toBuffer();
      let icon = cut;
      try {
        icon = await sharp(cut).trim().png().toBuffer();
      } catch {
        // nothing to trim (no uniform border); keep the uncut edges
      }
      const meta = await sharp(icon).metadata();
      const side = Math.max(meta.width, meta.height);
      const square = await sharp(icon)
        .extend({
          top: Math.floor((side - meta.height) / 2),
          bottom: Math.ceil((side - meta.height) / 2),
          left: Math.floor((side - meta.width) / 2),
          right: Math.ceil((side - meta.width) / 2),
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();
      await sharp(square).resize(192, 192).png().toFile('public/favicon.png');
    },
  },
  // The two airport scenes (5 October 2026) are redrawn as SVGs in
  // source-images/: the mother alone, then with her companion. The original
  // PNG scenes ("Lost at the Airport", "With someone") showed a couple and are
  // no longer used; don't convert them, or slide 4 goes back to the couple.
  {
    label: 'story-alone.webp + cover-story.webp (slide 1)',
    src: find('story-alone.svg'),
    async run(src) {
      const png = await renderScene(src);
      await sharp(png).resize({ width: 2000 }).webp(SCENE).toFile(join(OUT, 'story-alone.webp'));
      // The cover: a portrait crop around the mother, for the window frame.
      await sharp(png).extract({ left: 772, top: 280, width: 1040, height: 1520 }).webp(SCENE).toFile(join(OUT, 'cover-story.webp'));
    },
  },
  {
    label: 'solution-together.webp (slide 4)',
    src: find('solution-together.svg'),
    run: async (src) => sharp(await renderScene(src)).resize({ width: 2000 }).webp(SCENE).toFile(join(OUT, 'solution-together.webp')),
  },
  ...teamJobs(),
];

// ── Team photos (slide 9, brief 12.4) ───────────────────────────────
// Matched by first name (any capitals or extension). Every photo gets the
// same framing: head and shoulders, eyes 38% from the top, and the same head
// size, measured as the eye-to-chin distance. x/y is the midpoint between the
// eyes and eyeChin the eye-to-chin distance, both in pixels of the upright
// original. If you replace a photo, measure these again.
function teamJobs() {
  const RATIO = 160 / 234;
  const SIZE = { width: 480, height: 702 };
  const people = [
    { key: 'aditya', face: { x: 858, y: 862, eyeChin: 600 } },
    { key: 'adarsh', face: { x: 196, y: 146, eyeChin: 112 } },
    { key: 'shivani', face: { x: 1438, y: 1483, eyeChin: 461 } },
  ];
  const files = existsSync(SRC) ? readdirSync(SRC) : [];
  return people.map(({ key, face }) => {
    // Ready-made headshots (e.g. "Aditya_headshot_portrait_4x5.jpg") are
    // already cropped and matched: convert them as they are (brief, 12.4).
    const ready = files.find((f) => f.toLowerCase().startsWith(key) && f.toLowerCase().includes('headshot'));
    if (ready) {
      return {
        label: `team-${key}.webp (slide 9, used as supplied)`,
        src: join(SRC, ready),
        run: (src) => sharp(src).rotate().resize({ width: 600 }).webp({ quality: 82 }).toFile(join(OUT, `team-${key}.webp`)),
      };
    }
    // Otherwise crop an ordinary photo; prefer a format sharp reads over HEIC.
    const hits = files.filter((f) => f.toLowerCase().startsWith(key) && /\.(jpe?g|png|webp|heic|heif)$/i.test(f));
    hits.sort((x, y) => /\.hei[cf]$/i.test(x) - /\.hei[cf]$/i.test(y));
    return {
      label: `team-${key}.webp (slide 9)`,
      src: hits[0] ? join(SRC, hits[0]) : null,
      async run(src) {
        const input = await readable(src);
        const { width, height } = await sharp(input).rotate().metadata();
        const h = Math.round(face.eyeChin * 3);
        const w = Math.round(h * RATIO);
        const left = clamp(Math.round(face.x - w / 2), 0, width - w);
        const top = clamp(Math.round(face.y - 0.38 * h), 0, height - h);
        if (w < 600 * RATIO) console.warn(`  ! ${key}: the crop is only ${w} × ${h}px, so it is upscaled and may look soft`);
        await sharp(input)
          .rotate()
          .extract({ left, top, width: w, height: h })
          .resize(SIZE)
          .webp({ quality: 82 })
          .toFile(join(OUT, `team-${key}.webp`));
      },
    };
  });
}

const clamp = (v, lo, hi) => Math.max(lo, Math.min(v, hi));

// sharp's prebuilt binaries can't decode iPhone HEIC photos. On a Mac, fall
// back to the built-in `sips` to make a temporary JPEG.
async function readable(src) {
  if (!/\.hei[cf]$/i.test(src)) return src;
  try {
    await sharp(src).metadata().then(() => sharp(src).toBuffer());
    return src;
  } catch {
    const out = join(mkdtempSync(join(tmpdir(), 'bw-')), 'photo.jpg');
    try {
      execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '95', src, '--out', out], { stdio: 'ignore' });
      return out;
    } catch {
      throw new Error(`Can't read ${src}. Export it as a JPEG (on a Mac: open it in Preview, File → Export) and put that in ${SRC}/.`);
    }
  }
}

mkdirSync(OUT, { recursive: true });
let missing = 0;
for (const job of jobs) {
  if (!job.src) {
    missing++;
    console.warn(`– skipped ${job.label}: original not found in ${SRC}/`);
    continue;
  }
  try {
    await job.run(job.src);
    console.log(`✓ ${job.label}  ←  ${job.src}`);
  } catch (err) {
    missing++;
    console.warn(`✗ ${job.label}: ${err.message}`);
  }
}
if (missing) console.warn(`\n${missing} image(s) still missing; the deck shows a marked gap where each belongs.`);
