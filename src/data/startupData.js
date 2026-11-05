// All deck copy lives here. Copy is final (brief, section 4): headlines,
// numbers and labels are word for word. Slide components only lay it out.
//
// Branch prototype-funding-pitch (4 November 2026): the Accelerator
// Prototype Funding pitch (J Herbert Smith Centre, Fri 6 Nov 2026,
// 2:40–2:50 pm), cut from 3min-pitch. Five core slides and three
// backups: 1 the ask up front, 2 the test, 3 what each dollar buys, 4 what
// we'll know and what it decides, 5 the ask and what happens next; A1 does
// C$28 a trip hold up, A2 where every price comes from, A3 if the first
// flight moves. Insurance and the moved-flight answer live only in A3 and
// the Q&A notes, never on slides 1–5.
// `notes.five` and `timing.five` hold the live script, about 2:50 against
// the 3:00 timer (`pitch.shortSeconds`); `twenty` holds the Q&A answers.
//
// Every figure on slides 1–5 that depends on the budget is computed in
// src/lib/budget.js from `budget` below and written into copy as a token:
// `{ask}`, `{kept}`, `{clearOne}` and so on (see `tokens` in budget.js).
//
// Inline markup understood by <Rich>:
//   **bold**   *italic*   [FOUNDER INPUT: …]  (renders as a visible placeholder)
//
// `-\u2060` (hyphen + word joiner) keeps a hyphenated word on one line, e.g.
// "on-call"; Mukta has no non-breaking hyphen (U+2011) glyph.

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

// Team copy for the Gate 1 and 3-minute slides (unused on this branch).
// Photos: public/images/team-*.webp.
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
    headline: 'One trip, end to end, on our own stack',
    sub: 'Boardwith puts a checked companion on the same flights as someone who shouldn’t fly alone. This runs our first hand-\u2060matched trip and tells us what one really costs.',
    askCard: { label: 'requested' },
    timing: { five: 25, twenty: 60 },
    notes: {
      five: '“I’m Aditya, founder of Boardwith. We put a checked companion on the same flights as someone who shouldn’t fly alone. I’m asking for 390 dollars to run our first hand-matched trip end to end, on our own stack, and find out what one trip really costs us.”',
      twenty: [],
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
    timing: { five: 35, twenty: 60 },
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
  // the C$34.48 is orange-ink text on white. The C$385 → C$390 note shows
  // only when budget.ask > budget.alreadyRequested, and only here.
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
    stat: {
      value: 'C${clearOne}',
      label: 'to verify one companion at list price, with HST: Certn C${certn} plus the OneID step it requires, C${oneid}',
    },
    // Shown only when budget.ask > budget.alreadyRequested.
    askedNote: '**Asked C${alreadyRequested} on 2 Nov.** Re-\u2060checking Twilio on 4 Nov (a masked call bills both legs) brought it to C${ask}.',
    sources: [
      'certn.co/pricing · stripe.com/identity · twilio.com/voice/pricing/ca · twilio.com/en-us/sms/pricing/ca · Claude Pro (support.claude.com) · vercel.com/pricing · docs.railway.com/pricing/plans · Bank of Canada daily rates. All checked 4 Nov 2026.',
    ],
    timing: { five: 40, twenty: 60 },
    notes: {
      five: '“Every line is a published price. Certn’s record check and the ID step it requires: about 30 dollars a companion, for three companions. Stripe Identity is free for our first 50 checks. Twilio gives us two Canadian numbers, so families and companions never swap personal numbers. Claude Pro for the two of us who build it, Vercel Pro because the free plan bans commercial use, and Railway for the backend. With HST and the card fee, 387 dollars and 22 cents. I asked for 385 on Monday. When I re-checked Twilio, a masked call bills both ends, so it’s 390.”',
      twenty: [
        '**Why the change from C$385?** Twilio prices each leg of a masked call separately (US${callIn} a minute to receive, US${callOut} to make), and its Canadian text rate is US$0.0083, up from US$0.0079. The total is C$387.22, rounded up to C$390. Masked call minute: US${maskedMinute}, both legs.',
        '**Why Claude Pro?** It’s the only line that buys build speed. Two of us build part-time, and the free tier stalls a build day. The proof is the Gate 2 demo on 18 Nov.',
        '**Why Vercel Pro?** Vercel’s Hobby plan is personal and non-commercial only.',
        '**Why is Railway fine on Hobby?** Railway’s Terms (effective 20 Apr 2026) allow business use, and Hobby includes US$5 of usage a month. We budget another US$5 on top.',
        '**Is the HST recoverable?** Only if Boardwith registers for GST/HST. If it does, about C$50 of this comes back.',
        '**Why a card fee?** Four vendors bill in US dollars. A no-FX-fee card saves the C$6.92.',
      ],
    },
  },

  // ─── 4 ──────────────────────────────────────────────────────────────
  // The three outcomes, then what they decide. No orange. If it stops
  // fitting, cut band line 1 first; line 3 stays.
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
        body: 'What each of the three checks cost and how long it took.',
      },
      {
        icon: 'clock',
        head: 'The team-hours one trip takes.',
        body: 'Every hour from match to landing, hands-\u2060on and on-\u2060call kept apart.',
      },
      {
        icon: 'route',
        head: 'Which steps run on our stack.',
        body: 'Which of the six steps ran clean, and which we finished by hand.',
      },
    ],
    band: {
      lead: 'That tells us whether our C${modelKept} a trip holds.',
      lines: [
        { text: 'The checks fit: a companion who flies once still leaves C${kept} after their checks.' },
        {
          before: 'Team time is the test: at C${hourCost} an hour',
          tag: { kind: 'assumption', text: 'Illustrative' },
          after: ', about an hour of hands-\u2060on work per trip uses that up.',
        },
        {
          text: 'If it doesn’t hold, we decide before launch: raise the price, have companions pay for their own check, accept only companions who’ll take repeat trips, or cut the hands-\u2060on time.',
          strong: true,
        },
      ],
    },
    sources: ['Certn pricing (turnaround 4–72 hours). Pre-seed deck, slide 8 (C$28.22 a trip). The working is in backup A1.'],
    timing: { five: 45, twenty: 60 },
    notes: {
      five: '“By January 8th you’ll know three things: what each check really cost and how long it took, every team-hour one trip takes from match to landing, and which steps ran clean and which we finished by hand. That tells us whether our 28 dollars a trip holds. The checks fit: even a companion who flies once leaves us about 32 dollars. Team time is the real test: about an hour of hands-on work per trip uses that up. If it doesn’t hold, we’ll know before launch, and we’ll raise the price, have companions pay for their own check, take only companions who fly with us again, or cut the hands-on time.”',
      twenty: [
        '**How will you log hours honestly?** Each of us logs start and stop times for every task, with hands-on and on-call kept separate. The report includes the raw log.',
        '**Privacy with record checks?** Certn collects each companion’s consent and runs the check. Our privacy notice (v1.0, drafted) covers what we keep.',
        '**Where does C${hourCost} an hour come from?** It’s illustrative, since nobody draws pay yet. What matters is the break-even: about an hour of hands-on work per trip. The working is in A1.',
        '**Why not have companions pay now?** We might, if the numbers say so. Companions are the harder side to recruit, so we want the real cost before we shift it onto them.',
      ],
    },
  },

  // ─── 5 ──────────────────────────────────────────────────────────────
  // The C$110 (budget.cap − budget.ask) is the one orange element.
  {
    id: 'pf-ask',
    number: 5,
    title: 'The ask',
    layout: 'L1',
    theme: 'teal',
    headline: 'The ask: C${ask}',
    nextHead: 'What happens next',
    next: [
      { when: 'Wed 11 Nov', what: 'Demo-ready hand-matched pilot' },
      { when: 'Wed 18 Nov', what: 'Gate 2 demo' },
      { when: 'Late Nov to Dec', what: 'Three companions verified; first trip, Canada to India', tag: { kind: 'plan' } },
      { when: 'Fri 8 Jan', what: 'Report to the committee, with receipts', strong: true },
    ],
    body: 'Every line is a published price.',
    notAskedLabel: 'of the C${cap} we’re not asking for',
    close: 'The gates change. The face doesn’t.',
    timing: { five: 25, twenty: 60 },
    notes: {
      five: '“Demo-ready next Wednesday, Gate 2 on the 18th, our first trip from late November, and the report with receipts on January 8th. 390 dollars, every line a real quote, and we’re not asking for the other 110. Thank you.” *(Then stop talking.)*',
      twenty: [
        '**What happens to unspent money?** We report actual spend with receipts by 8 Jan. Ask the committee how they want unspent funds handled.',
        '**What if the first flight moves?** All six steps can run before anyone boards, so the 8 January report has the verifications, sign-up to match on our own stack, chat and masked calls, and the hours to the flight. The flight’s own hours follow in a one-page addendum. Open A3.',
        '**If asked about insurance:** We’ve asked three insurers for quotes. We won’t run a paid trip before cover is bound. That’s part of the trust model, and it’s why insurance isn’t in this prototype budget.',
      ],
    },
  },

  // ─── A1 ─────────────────────────────────────────────────────────────
  // The working behind slide 4. The waterfall's values come from
  // src/lib/budget.js (`money.waterfall`); only the labels live here.
  // "Left before team time" is the orange bar.
  {
    id: 'pf-margin',
    number: 'A1',
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
    timing: { five: 0, twenty: 0 },
    notes: {
      five: 'Open only if asked how the C${modelKept} a trip works out. If you do: “Our model says we keep about 28 dollars a trip. That number spreads the checks over two trips and counts no team time. Put every companion check on this one trip and it still keeps about 32 dollars at pilot prices, and about 28 once our free ID checks run out. So the checks don’t break the margin. Team time might. At 25 dollars an hour, about an hour of hands-on work per trip uses up what’s left.”',
      twenty: [
        '**Where does C${hourCost} an hour come from?** It’s illustrative, since nobody draws pay yet. What matters is the break-even: about an hour of hands-on work per trip.',
        '**Why not have companions pay now?** We might, if the numbers say so. Companions are the harder side to recruit, so we want the real cost before we shift it onto them.',
      ],
    },
  },

  // ─── A2 ─────────────────────────────────────────────────────────────
  // The published prices behind slide 3, as quoted on each page.
  {
    id: 'pf-sources',
    number: 'A2',
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

  // ─── A3 ─────────────────────────────────────────────────────────────
  // What the 8 January report still has if the first flight moves. The
  // insurance answer stays in the notes, never on the slide. No orange.
  {
    id: 'pf-timeline',
    number: 'A3',
    title: 'If the first flight moves',
    layout: 'L4',
    headline: 'If the first flight moves',
    sub: 'All six steps can run before anyone boards.',
    steps: ['Sign-up', 'ID check', 'Criminal record check', 'Deposit', 'Trip chat', 'Masked calls'],
    report: {
      head: 'The 8 January report still has:',
      items: [
        'The three verifications, each timed and costed',
        'Every step from sign-up to a confirmed match, on our own stack',
        'Trip chat and masked calls between a real companion and a family',
        'The hands-on hours up to the flight',
      ],
      foot: 'The flight’s own hours follow in a one-page addendum.',
    },
    sources: ['Boardwith pilot plan, November 2026.'],
    timing: { five: 0, twenty: 0 },
    notes: {
      five: 'Open only if asked what happens if the first flight moves.',
      twenty: [
        '**What if the first flight moves?** All six steps can run before anyone boards, so the 8 January report has the verifications, sign-up to match on our own stack, chat and masked calls, and the hours to the flight. The flight’s own hours follow in a one-page addendum.',
        '**If asked about insurance:** We’ve asked three insurers for quotes. We won’t run a paid trip before cover is bound. That’s part of the trust model, and it’s why insurance isn’t in this prototype budget.',
      ],
    },
  },
];
