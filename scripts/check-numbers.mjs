// Number check for the prototype-funding deck (brief, section 6.4).
//
//   npm run check            → this, then the layout check
//   node scripts/check-numbers.mjs
//
// Imports src/lib/budget.js and asserts every expected value to 2 decimals.
// Also checks that slide 3's rounded rows add up to its rounded total, that
// every copy token resolves, and that switching the ask to 385 behaves as
// section 6.3 says. Exits non-zero on any mismatch.
import { budget, slides } from '../src/data/startupData.js';
import { compute, money, fillDeep, round } from '../src/lib/budget.js';

let failed = 0;
const near = (a, b, dp) => Math.abs(round(a, dp) - round(b, dp)) < 10 ** -(dp + 2);

function expect(name, actual, expected, dp = 2) {
  const ok = typeof expected === 'number' ? near(actual, expected, dp) : actual === expected;
  if (!ok) failed++;
  const shown = typeof actual === 'number' ? round(actual, dp).toFixed(dp) : String(actual);
  const want = typeof expected === 'number' ? expected.toFixed(dp) : String(expected);
  console.log(`${ok ? '✓' : '✗'} ${name.padEnd(42)} ${shown.padStart(9)}${ok ? '' : `   expected ${want}`}`);
}

// The 6.4 values assume the C$390 ask; costs don't depend on the ask, so
// the check passes whichever ask is switched on in startupData.js.
const m = compute({ ...budget, ask: 390 });
const atBoC = compute({ ...budget, fx: budget.fxBoC });

console.log('Section 6.4, expected values\n');
expect('Claude (C$)', m.rows.claude, 112.8);
expect('Vercel (C$)', m.rows.vercel, 56.4);
expect('Railway (C$)', m.rows.railway, 28.2);
expect('Twilio (US$)', m.twilioUsd, 30.75);
expect('Twilio (C$)', m.rows.twilio, 43.36);
expect('Certn + OneID (C$)', m.rows.certn, 89.94);
expect('Stripe Identity (C$)', m.rows.stripeId, 0);
expect('USD charges in C$', m.usdInCad, 240.76);
expect('Subtotal', m.subtotal, 330.7);
expect('HST', m.hst, 49.6);
expect('Card FX fee', m.fxFee, 6.92);
expect('Total', m.total, 387.22);
expect('Request', m.request, 390);
expect('Top-up', m.topUp, 5);
expect('Not asked for', m.notAsked, 110);
expect('Total at the Bank of Canada rate', atBoC.total, 385.09);
expect('Clear one companion, with HST', m.clearOne, 34.48);
expect('Masked call minute (US$)', m.maskedMinute, 0.0225, 4);
expect('Card fee per trip', m.cardFee, 8.28);
expect('Left before team time, pilot', m.keptPilot, 32.25);
expect('Left before team time, after free 50', m.keptAfterFree, 27.65);
expect('Break-even hands-on minutes', m.breakEvenMinutes, 66, 0);
expect('{kept} token, slide 4', m.tokens.kept, '32.25');

console.log('\nSlide 3 adds up as shown\n');
const shownRows = ['certn', 'stripeId', 'twilio', 'claude', 'vercel', 'railway', 'hst', 'fxFee'];
const shownSum = shownRows.reduce((t, id) => t + round(m.amounts[id], 2), 0);
expect('Rounded rows sum to the rounded total', round(shownSum, 2), round(m.total, 2));

console.log('\nCopy tokens\n');
try {
  fillDeep(slides);
  expect('Every {token} in startupData.js resolves', true, true);
} catch (e) {
  expect(`Tokens: ${e.message}`, false, true);
}

console.log('\nSection 6.3, with ask: 385\n');
const alt = compute({ ...budget, ask: 385 });
expect('Ask shown on slides 1 and 5', alt.tokens.ask, '385');
expect('Slide 3 "Asked C$385" note hidden', alt.hasTopUp, false);
expect('Not asked for', alt.notAsked, 115);
expect('Slide 3 Request row stays', alt.request, 390);
expect('Request row label switches', alt.asksForRequest, false);

const note = money.ask === 390 ? '' : ' (the brief default is C$390)';
console.log(`\nLive ask in startupData.js: C$${money.ask}${note}.`);
console.log(failed ? `${failed} number(s) wrong.` : 'All numbers match.');
process.exitCode = failed ? 1 : 0;
