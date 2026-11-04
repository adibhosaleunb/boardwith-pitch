// All deck copy lives here. Copy is final (brief, section 4): headlines,
// numbers and labels are word for word. Slide components only lay it out.
//
// Branch prototype-funding-pitch (4 November 2026): the Accelerator
// Prototype Funding pitch (J Herbert Smith Centre, Fri 6 Nov 2026,
// 2:40–2:50 pm), cut from 3min-pitch. Seven core slides and one backup:
// 1 the ask up front, 2 the test, 3 what each dollar buys, 4 what we'll
// know, 5 does C$28 a trip hold up, 6 timeline and fallback, 7 the ask;
// A1 where every price comes from.
// `notes.five` and `timing.five` hold the live script, 3:00 here
// (`pitch.shortSeconds`); `twenty` holds the Q&A answers.
//
// Every figure on slides 1–7 that depends on the budget is computed in
// src/lib/budget.js from `budget` below and written into copy as a token:
// `{ask}`, `{topUp}`, `{clearOne}` and so on (see `tokens` in budget.js).
//
// Inline markup understood by <Rich>:
//   **bold**   *italic*   [FOUNDER INPUT: …]  (renders as a visible placeholder)

export const company = {
  name: 'Boardwith',
  oneLiner: 'Fly alone, with peace of mind.',
  founder: { name: 'Aditya Bhosale', title: 'Founder & CEO' },
  stage: 'Pre-seed',
  confidential: true,
  confidentialLine: 'Accelerator Prototype Funding.',
  printLine: 'Boardwith. Accelerator Prototype Funding, 6 Nov 2026.',
  email: 'adityabhosale@boardwith.com',
  website: 'boardwith.com',
};

// Two notes tabs: the live script and the Q&A answers.
export const pitch = { shortLabel: '3 min', shortSeconds: 180, longLabel: 'Q&A', longSeconds: 420 };

// Slide 5 (`short`) and backup copy. Photos: public/images/team-*.webp.
// Full bios are in slide 5's longer notes.
export const team = [
  {
    name: 'Aditya Bhosale',
    role: 'Founder & CEO',
    initials: 'AB',
    photo: '/images/team-aditya.webp',
    lines: ['Identity verification at Copart, 2021–2025', 'MCS at UNB; 6+ years in production software'],
    short: 'Identity verification at Copart',
  },
  {
    name: 'Adarsh Shaw',
    role: 'CTO',
    initials: 'AS',
    photo: '/images/team-adarsh.webp',
    lines: ['Software architect at Tavant', 'Built the AI engine behind NutriLens'],
    short: 'Software architect at Tavant',
  },
  {
    name: 'Shivani Shinde',
    role: 'HR & Operations',
    initials: 'SS',
    photo: '/images/team-shivani.webp',
    lines: ['MBA in HR and Finance', 'Runs companion recruitment and support'],
    short: 'Runs companion operations',
  },
];

export const images = {
  lockup: { src: '/images/logo-lockup.png', alt: 'Boardwith', width: 2000, height: 613 },
  cover: {
    src: '/images/cover-story.webp',
    alt: 'Illustration: an older woman in a mustard coat stands alone in a grey airport, holding a phone with no Wi-Fi, under signs pointing in different directions.',
    position: '50% 50%',
  },
  solution: {
    src: '/images/solution-together.webp',
    alt: 'Illustration: the same woman in a warm, bright airport, her hand on the arm of a young companion with a backpack, who points the way to their gate.',
    position: '44% 50%',
  },
};

// Budget inputs (brief, section 6.1). src/lib/budget.js computes every
// derived number from these; scripts/check-numbers.mjs asserts the results.
// Matches Boardwith_Prototype_Budget.xlsx; prices re-checked 4 Nov 2026.
export const budget = {
  fx: 1.41, // CAD per USD used in the request (Bank of Canada, 3 Nov 2026: 1.3994)
  fxBoC: 1.3994,
  hst: 0.15, // New Brunswick
  cardFxFee: 0.025, // on the USD charges including the HST billed with them
  months: 2,
  cap: 500,
  alreadyRequested: 385,
  ask: 390, // the one switch: set to 385 to keep the original request
  lines: [
    // amount = qty x unit x (monthly ? months : 1), in the line's own currency
    { id: 'claude', cur: 'USD', qty: 2, unit: 20, monthly: true },
    { id: 'vercel', cur: 'USD', qty: 1, unit: 20, monthly: true },
    { id: 'railPlan', cur: 'USD', qty: 1, unit: 5, monthly: true },
    { id: 'railUse', cur: 'USD', qty: 1, unit: 5, monthly: true },
    { id: 'twNumbers', cur: 'USD', qty: 2, unit: 1.15, monthly: true },
    { id: 'twCallIn', cur: 'USD', qty: 600, unit: 0.0085 },
    { id: 'twCallOut', cur: 'USD', qty: 600, unit: 0.0140 },
    { id: 'twSmsIn', cur: 'USD', qty: 500, unit: 0.0083 },
    { id: 'twSmsOut', cur: 'USD', qty: 500, unit: 0.0083 },
    { id: 'twCarrier', cur: 'USD', qty: 500, unit: 0.0087 }, // Bell & Virgin, the highest carrier fee
    { id: 'certn', cur: 'CAD', qty: 3, unit: 24.99 },
    { id: 'oneid', cur: 'CAD', qty: 3, unit: 4.99 },
    { id: 'stripeId', cur: 'CAD', qty: 3, unit: 0 }, // first 50 free; C$2.00 each after
  ],
  trip: { price: 275, payout: 200, cardRate: 0.029, cardFixed: 0.30, idCheckAfterFree: 2.00, hourCost: 25, modelKept: 28.22 },
};

export const slides = [
  // ─── 1 ──────────────────────────────────────────────────────────────
  // The ask up front. C$390 is the one orange element.
  {
    id: 'pf-cover',
    number: 1,
    title: 'One trip, end to end',
    layout: 'L1',
    theme: 'teal',
    event: 'Accelerator Prototype Funding · Fri 6 Nov 2026, 2:40 pm',
    headline: 'One trip, end to end, on our own stack',
    sub: 'Boardwith puts a checked companion on the same flights as someone who shouldn’t fly alone. We’ll run one hand-matched trip from sign-up to landing and learn what it really costs us.',
    askCard: {
      label: 'requested',
      // Shown only when budget.ask > budget.alreadyRequested.
      topUp: 'C${alreadyRequested} asked on 2 Nov, plus C${topUp} after re-checking Twilio’s Canadian rates',
    },
    timing: { five: 20, twenty: 60 },
    notes: {
      five: '“I’m Aditya, founder of Boardwith. We put a checked companion on the same flights as someone who shouldn’t fly alone. I’m asking for 390 dollars to run one hand-matched trip, end to end, on our own stack, and to find out what it really costs us.”',
      twenty: [
        '**Why the change from C$385?** Twilio prices each leg of a masked call separately (US$0.0085 a minute to receive, US$0.0140 to make), and its Canadian text rate is US$0.0083, up from US$0.0079. The total is C$387.22, rounded up to C$390.',
      ],
    },
  },

  // ─── 2 ──────────────────────────────────────────────────────────────
  {
    id: 'pf-test',
    number: 2,
    title: 'The test',
    layout: 'L3',
    headline: 'The test: one trip, match to landing',
    sub: 'Each step runs on our own systems. Anything we finish by hand gets logged.',
    steps: [
      { icon: 'signup', name: 'Sign-up', tool: 'Vercel + Railway' },
      { icon: 'id', name: 'ID check', tool: 'Stripe Identity' },
      { icon: 'record', name: 'Criminal record check', tool: 'Certn' },
      { icon: 'deposit', name: 'Deposit', tool: 'Stripe payment link' },
      { icon: 'chat', name: 'Trip chat', tool: 'Our app' },
      { icon: 'calls', name: 'Masked calls', tool: 'Twilio' },
    ],
    panels: [
      {
        icon: 'timer',
        head: 'Three companions through full verification.',
        body: 'ID + selfie and a criminal record check on each. We record what each one costs and how long it takes.',
      },
      {
        icon: 'clock',
        head: 'Every team-hour logged, match to landing.',
        body: 'Hands-on minutes and on-call hours kept separate, so the number still means something once trips overlap.',
      },
    ],
    sources: ['Boardwith pilot plan, November 2026.'],
    timing: { five: 30, twenty: 60 },
    notes: {
      five: '“Here’s the test. One real trip, from sign-up to landing: sign-up, ID check, criminal record check, deposit, trip chat and masked calls, all on our own systems. Around it, we take three companions through full verification and time and cost each one. And we log every team-hour the trip takes, from match to landing.”',
      twenty: [
        '**Why only three companions?** Three shows whether the pipeline works and what it costs and takes. It isn’t enough for a rate, and we don’t claim one. One companion flies; the other two let us rematch if that companion cancels, as our trip terms promise.',
        '**Why masked calls, not WhatsApp?** We decided on 29 Oct that nobody’s personal number changes hands, so the trip stays on the platform, which also keeps payments from going around us. This test shows whether families accept it.',
      ],
    },
  },

  // ─── 3 ──────────────────────────────────────────────────────────────
  // Every amount comes from src/lib/budget.js, by row id. No orange fill;
  // the C$34.48 is orange-ink text on white.
  {
    id: 'pf-dollars',
    number: 3,
    title: 'What each dollar buys',
    layout: 'L4',
    headline: 'What each dollar buys',
    table: {
      head: ['Line', 'What it buys', 'C$'],
      rows: [
        { id: 'certn', line: 'Certn check + OneID x 3', buys: 'Criminal record checks on 3 companions' },
        { id: 'stripeId', line: 'Stripe Identity x 3', buys: 'ID + selfie on the same 3 (first 50 free)' },
        { id: 'twilio', line: 'Twilio', buys: '2 numbers, ~600 call-min, ~500 masked texts' },
        { id: 'claude', line: 'Claude Pro, 2 seats', buys: 'Two of us building the six steps' },
        { id: 'vercel', line: 'Vercel Pro, 1 seat', buys: 'Sign-up on a plan allowing business use' },
        { id: 'railway', line: 'Railway Hobby + usage', buys: 'API and database for the trip' },
        { id: 'hst', line: 'HST, {hstPct}%', buys: '' },
        { id: 'fxFee', line: 'Card FX fee, {cardFxPct}%', buys: 'On the US-dollar charges' },
        { id: 'total', line: 'Total', buys: '', strong: true },
        {
          id: 'request',
          line: 'Request',
          buys: 'Rounded up to the next C$5',
          // Used instead when budget.ask isn't the rounded cost (section 6.3).
          buysOtherAsk: 'Cost rounded up; we’re asking for C${ask}',
          strong: true,
        },
      ],
    },
    caption: 'Monthly items for {months} months. US dollars at {fx} (Bank of Canada, 3 Nov: {fxBoC}).',
    stats: [
      {
        value: 'C${clearOne}',
        tone: 'orange',
        label: 'to verify one companion at list price, with HST: Certn C${certn} plus the OneID step it requires, C${oneid}',
      },
      {
        value: 'US${maskedMinute}',
        tone: 'teal',
        label: 'per minute of a masked call: Twilio bills both legs, US${callIn} in and US${callOut} out',
      },
    ],
    sources: [
      'certn.co/pricing · stripe.com/identity · twilio.com/voice/pricing/ca · twilio.com/en-us/sms/pricing/ca · Claude Pro (support.claude.com) · vercel.com/pricing · docs.railway.com/pricing/plans · Bank of Canada daily rates. All checked 4 Nov 2026.',
    ],
    timing: { five: 35, twenty: 60 },
    notes: {
      five: '“Every line is a published price. Certn’s record check and the ID step it requires: about 30 dollars a companion, for three companions. Stripe Identity is free for our first 50 checks. Twilio gives us two Canadian numbers so families and companions never swap personal numbers. A masked call bills both legs, so I priced both. Claude Pro for the two of us who build it, Vercel Pro because the free plan bans commercial use, and Railway for the backend. With HST and the card fee, that’s 387 dollars and 22 cents. I’m asking for 390.”',
      twenty: [
        '**Why Claude Pro?** It’s the only line that buys build speed. Two of us build part-time, and the free tier stalls a build day. The proof is the Gate 2 demo on 18 Nov.',
        '**Why Vercel Pro?** Vercel’s Hobby plan is personal and non-commercial only.',
        '**Why is Railway fine on Hobby?** Railway’s Terms (effective 20 Apr 2026) allow business use, and Hobby includes US$5 of usage a month. We budget another US$5 on top.',
        '**Is the HST recoverable?** Only if Boardwith registers for GST/HST. If it does, about C$50 of this comes back.',
        '**Why a card fee?** Four vendors bill in US dollars. A no-FX-fee card saves the C$6.92.',
      ],
    },
  },

  // ─── 4 ──────────────────────────────────────────────────────────────
  {
    id: 'pf-know',
    number: 4,
    title: 'What we’ll know',
    layout: 'L3',
    headline: 'What we’ll know by Friday 8 January',
    cards: [
      {
        icon: 'timer',
        head: 'Real cost and time per check.',
        body: 'For each of the three companions: what we actually paid (quote: C${clearOne} with HST) and how long it took (Certn says 4 to 72 hours).',
      },
      {
        icon: 'clock',
        head: 'The team-hours one trip takes.',
        body: 'Every hour from match to landing, hands-on and on-call kept apart. None of it is in our C${modelKept} a trip today.',
      },
      {
        icon: 'route',
        head: 'Which steps run on our stack.',
        body: 'Sign-up, ID check, record check, deposit, trip chat and masked calls: which ran clean, which we finished by hand, and what contact cost.',
      },
    ],
    takeaway: 'All three answer one question: does our C${modelKept} a trip hold up against real numbers?',
    sources: ['Certn pricing (turnaround 4–72 hours). Pre-seed deck, slide 8 (C$28.22 a trip).'],
    timing: { five: 30, twenty: 60 },
    notes: {
      five: '“Here’s what you get back by January 8th. The real cost and turnaround of each check. The team-hours one trip takes, from match to landing. And which of the six steps ran clean, which we had to finish by hand, and what contact cost.”',
      twenty: [
        '**How will you log hours honestly?** Each of us logs start and stop times for every task, with hands-on and on-call kept separate. The report includes the raw log.',
        '**Privacy with record checks?** Certn collects each companion’s consent and runs the check. Our privacy notice (v1.0, drafted) covers what we keep.',
      ],
    },
  },

  // ─── 5 ──────────────────────────────────────────────────────────────
  // The waterfall's values come from src/lib/budget.js (`money.waterfall`);
  // only the labels live here. "Left before team time" is the orange bar.
  {
    id: 'pf-margin',
    number: 5,
    title: 'Does it hold up?',
    layout: 'L4',
    headline: 'Does C${modelKept} a trip hold up?',
    waterfall: {
      caption: 'One trip, Delhi to Toronto to Fredericton, with every companion check charged to this trip (pilot prices).',
      labels: {
        pays: 'Family pays',
        companion: 'Companion',
        card: 'Card fee',
        checks: 'Checks, all on this trip',
        kept: 'Left before team time',
      },
    },
    footnote: 'After the first 50 free ID checks: C${keptAfterFree} (C${idCheckWithHst} per ID check, both sides).',
    point: 'The checks don’t break it. Team time might.',
    line: {
      before: 'At C${hourCost} an hour',
      tag: { kind: 'assumption', text: 'Illustrative' },
      after: ', {breakEvenMinutes} minutes of hands-on work per trip uses up the C${keptAfterFree}.',
    },
    optionsHead: 'If the numbers don’t hold, we decide before launch:',
    options: [
      'Raise the price',
      'Have companions pay for their own check',
      'Accept only companions who’ll take repeat trips',
      'Cut the hands-on time per trip',
    ],
    sources: [
      'Boardwith pricing (C$275 one connection, C$200 payout). Stripe Canada card fees (2.9% + C$0.30). Certn and Stripe Identity pricing. The pre-seed C$28.22 spreads C$73 of checks, including Indian police clearance (now an optional tier), over two trips.',
    ],
    timing: { five: 40, twenty: 60 },
    notes: {
      five: '“Why it matters: our model says we keep about 28 dollars a trip. That number spreads the checks over two trips and counts no team time. Put every companion check on this one trip and it still keeps about 32 dollars at pilot prices, and about 28 once our free ID checks run out. So the checks don’t break the margin. Team time might. At 25 dollars an hour, about an hour of hands-on work per trip uses up what’s left. If the numbers don’t hold, we’ll know before launch, and we’ll raise the price, have companions pay for their own check, take only companions who fly with us again, or cut the hands-on time.”',
      twenty: [
        '**Where does C$25 an hour come from?** It’s illustrative, since nobody draws pay yet. What matters is the break-even: about an hour of hands-on work per trip.',
        '**Why not have companions pay now?** We might, if the numbers say so. Companions are the harder side to recruit, so we want the real cost before we shift it onto them.',
      ],
    },
  },

  // ─── 6 ──────────────────────────────────────────────────────────────
  {
    id: 'pf-timeline',
    number: 6,
    title: 'Timeline and fallback',
    layout: 'L4',
    headline: 'Timeline, and what we report if the trip slips',
    steps: [
      { when: 'Fri 6 Nov', what: 'Funding decision' },
      { when: 'Wed 11 Nov', what: 'Demo-ready hand-matched pilot' },
      { when: 'Wed 18 Nov', what: 'Gate 2 demo' },
      { when: 'Late Nov to Dec', what: 'Three companions verified; one trip, Canada to India', tag: { kind: 'plan' } },
      { when: 'Fri 8 Jan', what: 'Report to the committee, with receipts' },
    ],
    fallback: {
      head: 'If the trip slips, or insurance isn’t in place (no paid trip runs without it)',
      items: [
        'The three verifications, each timed and costed',
        'The hands-on hours up to a confirmed match',
        'A dry run of trip chat and masked calls between a real companion and a family',
      ],
    },
    sources: ['Boardwith Gate 2 plan, November 2026.'],
    timing: { five: 20, twenty: 60 },
    notes: {
      five: '“Demo-ready on November 11th, Gate 2 on the 18th, and the trip in late November or December. If the trip slips, or insurance isn’t in place, you still get the three verifications, the hours it took to reach a match, and a dry run of trip chat and masked calls.”',
      twenty: [
        '**What if the trip doesn’t happen?** No paid trip runs without insurance. The report still covers the verifications, the hours to a match, and a dry run.',
      ],
    },
  },

  // ─── 7 ──────────────────────────────────────────────────────────────
  // The C$110 (budget.cap − budget.ask) is the one orange element.
  {
    id: 'pf-ask',
    number: 7,
    title: 'The ask',
    layout: 'L1',
    theme: 'teal',
    headline: 'The ask: C${ask}',
    // Shown only when budget.ask > budget.alreadyRequested.
    topUp: 'C${alreadyRequested} asked on 2 Nov, plus C${topUp} after re-checking Twilio: a masked call bills both legs.',
    body: 'Every line is a published price. Receipts and the report by Fri 8 Jan.',
    notAskedLabel: 'of the C${cap} we’re not asking for',
    close: 'The gates change. The face doesn’t.',
    timing: { five: 10, twenty: 60 },
    notes: {
      five: '“390 dollars, every line a real quote, and we’re not asking for the other 110. Thank you.” *(Then stop talking.)*',
      twenty: [
        '**What happens to unspent money?** We report actual spend with receipts by 8 Jan. Ask the committee how they want unspent funds handled.',
      ],
    },
  },

  // ─── A1 ─────────────────────────────────────────────────────────────
  // The published prices behind slide 3, as quoted on each page.
  {
    id: 'pf-sources',
    number: 'A1',
    title: 'Where every price comes from',
    layout: 'L4',
    headline: 'Backup: where every price comes from',
    table: {
      head: ['Vendor', 'Published price', 'Page'],
      rows: [
        ['Certn (Canada, self-serve)', 'Basic Canadian Criminal Record Check C$24.99; OneID C$4.99; ID check required first', 'certn.co/pricing'],
        ['Stripe Identity', 'US$1.50 per ID + selfie check; first 50 free', 'stripe.com/identity'],
        ['Twilio, Canada voice', 'Receive US$0.0085/min; make local calls US$0.0140/min', 'twilio.com/voice/pricing/ca'],
        ['Twilio, Canada SMS', 'Local number US$1.15/mo; SMS US$0.0083 in or out; carrier fee up to US$0.0087', 'twilio.com/en-us/sms/pricing/ca'],
        ['Anthropic, Claude Pro', 'US$20/month; local currency where supported', 'support.claude.com (article 8325610)'],
        ['Vercel, Pro', 'US$20 per deploying seat per month; Hobby is non-commercial only', 'vercel.com/pricing'],
        ['Railway, Hobby', 'US$5/month incl. US$5 of usage; Terms allow business use', 'docs.railway.com/pricing/plans'],
        ['Bank of Canada', 'USD 1.3994 CAD, 3 Nov 2026 (we use 1.41)', 'bankofcanada.ca'],
        ['Canada Revenue Agency', 'HST in New Brunswick: 15%', 'canada.ca, GST/HST rates'],
      ],
    },
    caption: 'All pages checked 4 Nov 2026.',
    timing: { five: 0, twenty: 0 },
    notes: {
      five: 'Open only if someone asks where a price came from.',
      twenty: ['Open only if someone asks where a price came from.'],
    },
  },
];
