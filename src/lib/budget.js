// Every derived number in the prototype-funding deck (brief, section 6.2).
// Inputs live in `budget` in src/data/startupData.js; nothing here is typed
// into a slide. Values stay unrounded; only display() and the tokens round.
// scripts/check-numbers.mjs asserts the expected values (section 6.4).
import { budget as input } from '../data/startupData.js';

const ROUND_TO = 5; // the request is the total rounded up to the next C$5
const ID_CHECKS_PER_TRIP = 2; // companion and traveller, once the 50 free run out

// Half-up rounding on the decimal value, so 8.275 shows as 8.28 (as a binary
// float it is 8.27499…). toPrecision(12) clears float noise first.
export function round(x, dp = 2) {
  const clean = Number(Math.abs(x).toPrecision(12));
  return Math.sign(x) * Number(`${Math.round(Number(`${clean}e${dp}`))}e-${dp}`);
}

// 200 → '200', 8.275 → '8.28'; fixed decimals when `dp` is given.
export function num(x, dp) {
  if (dp != null) return round(x, dp).toFixed(dp);
  const r = round(x, 2);
  return Number.isInteger(r) ? String(r) : r.toFixed(2);
}

export const cad = (x, dp) => `${x < 0 ? '−' : ''}C$${num(Math.abs(x), dp)}`;

// The slide-3 rows, in order, and the lines each one adds up.
const GROUPS = [
  ['certn', (l) => l.id === 'certn' || l.id === 'oneid'],
  ['stripeId', (l) => l.id === 'stripeId'],
  ['twilio', (l) => l.id.startsWith('tw')],
  ['claude', (l) => l.id === 'claude'],
  ['vercel', (l) => l.id === 'vercel'],
  ['railway', (l) => l.id === 'railPlan' || l.id === 'railUse'],
];

export function compute(b = input) {
  const line = Object.fromEntries(b.lines.map((l) => [l.id, l]));
  // In the line's own currency: qty × unit × (months, if monthly).
  const own = (l) => l.qty * l.unit * (l.monthly ? b.months : 1);
  const toCad = (l) => own(l) * (l.cur === 'USD' ? b.fx : 1);
  const sum = (ls, f) => ls.reduce((t, l) => t + f(l), 0);

  const usdLines = b.lines.filter((l) => l.cur === 'USD');
  const cadLines = b.lines.filter((l) => l.cur === 'CAD');
  const usd = sum(usdLines, own);
  const usdInCad = usd * b.fx;
  const cadDirect = sum(cadLines, own);

  const subtotal = usdInCad + cadDirect;
  const hst = subtotal * b.hst;
  // The card's FX fee applies to the US-dollar charges, HST billed with them.
  const fxFee = usdInCad * (1 + b.hst) * b.cardFxFee;
  const total = subtotal + hst + fxFee;
  const request = Math.ceil(round(total, 2) / ROUND_TO) * ROUND_TO;

  const rows = Object.fromEntries(
    GROUPS.map(([id, test]) => {
      const ls = b.lines.filter(test);
      return [id, sum(ls, toCad)];
    }),
  );
  const twilioUsd = sum(b.lines.filter((l) => l.id.startsWith('tw')), own);
  const amounts = { ...rows, hst, fxFee, total, request };

  // One trip (slide 5).
  const t = b.trip;
  const clearOne = (line.certn.unit + line.oneid.unit) * (1 + b.hst);
  const cardFee = t.price * t.cardRate + t.cardFixed;
  const keptPilot = t.price - t.payout - cardFee - clearOne;
  const idCheckWithHst = t.idCheckAfterFree * (1 + b.hst);
  const keptAfterFree = keptPilot - ID_CHECKS_PER_TRIP * idCheckWithHst;
  const breakEvenMinutes = (keptAfterFree / t.hourCost) * 60;
  const maskedMinute = line.twCallIn.unit + line.twCallOut.unit;

  const waterfall = [
    { key: 'pays', value: t.price, kind: 'total' },
    { key: 'companion', value: -t.payout, kind: 'companion' },
    { key: 'card', value: -cardFee, kind: 'cost' },
    { key: 'checks', value: -clearOne, kind: 'cost' },
    { key: 'kept', value: keptPilot, kind: 'kept' },
  ].map((st) => ({ ...st, display: cad(st.value) }));

  const topUp = b.ask - b.alreadyRequested;

  return {
    ask: b.ask,
    cap: b.cap,
    alreadyRequested: b.alreadyRequested,
    usd,
    usdInCad,
    cadDirect,
    subtotal,
    hst,
    fxFee,
    total,
    request,
    rows,
    amounts,
    twilioUsd,
    topUp,
    hasTopUp: b.ask > b.alreadyRequested,
    asksForRequest: b.ask === request,
    notAsked: b.cap - b.ask,
    clearOne,
    maskedMinute,
    cardFee,
    keptPilot,
    idCheckWithHst,
    keptAfterFree,
    breakEvenMinutes,
    waterfall,
    // Copy tokens: `{ask}` in startupData.js copy becomes '390', and so on.
    tokens: {
      ask: num(b.ask),
      cap: num(b.cap),
      alreadyRequested: num(b.alreadyRequested),
      topUp: num(topUp),
      notAsked: num(b.cap - b.ask),
      months: num(b.months),
      fx: String(b.fx),
      fxBoC: String(b.fxBoC),
      hstPct: num(b.hst * 100),
      cardFxPct: String(round(b.cardFxFee * 100, 2)),
      certn: num(line.certn.unit, 2),
      oneid: num(line.oneid.unit, 2),
      callIn: line.twCallIn.unit.toFixed(4),
      callOut: line.twCallOut.unit.toFixed(4),
      maskedMinute: round(maskedMinute, 4).toFixed(4),
      clearOne: num(clearOne, 2),
      kept: num(keptPilot, 2), // the waterfall's pilot "Left before team time" (slide 4, A1)
      keptAfterFree: num(keptAfterFree, 2),
      idCheckWithHst: num(idCheckWithHst, 2),
      breakEvenMinutes: num(round(breakEvenMinutes, 0)),
      hourCost: num(t.hourCost),
      modelKept: num(round(t.modelKept, 0)),
    },
  };
}

export const money = compute();

// Big metrics, ready to show.
export const display = {
  ask: cad(money.ask),
  notAsked: cad(money.notAsked),
};

// Replace `{token}` in a copy string. An unknown token throws, so a typo
// fails the build and the check instead of reaching a slide.
const TOKEN = /\{(\w+)\}/g;
export function fill(text, tokens = money.tokens) {
  return text.replace(TOKEN, (_, k) => {
    if (!(k in tokens)) throw new Error(`Unknown copy token {${k}} in: ${text}`);
    return tokens[k];
  });
}

// Fill every string in a slide object (copy, notes, sources).
export function fillDeep(value, tokens = money.tokens) {
  if (typeof value === 'string') return fill(value, tokens);
  if (Array.isArray(value)) return value.map((v) => fillDeep(v, tokens));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fillDeep(v, tokens)]));
  }
  return value;
}
