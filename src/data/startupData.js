// All deck copy lives here. Copy is final (brief, section 0): headlines,
// numbers and quotes are word for word. Slide components only lay it out.
//
// Branch final-pitch (15 November 2026; numbers updated 19 November): the Summer Institute final pitch,
// Friday 20 November 2026. Five minutes, five slides, no Q&A, so the script
// answers the objections itself. Cut from 3min-pitch.
// 1 story, 2 problem (why now folded in), 3 solution (trust and the
// alternatives folded in), 4 one trip's money, 5 where we are, team and ask.
// No backups in this deck: there is no Q&A to open them in.
// `notes.five` and `timing.five` hold the live script, 5:00 here
// (`pitch.shortSeconds`); `twenty` holds delivery notes and the answers to
// have ready for the judges afterwards.
//
// Inline markup understood by <Rich>:
//   **bold**   *italic*   [FOUNDER INPUT: …]  (renders as a visible placeholder)

export const company = {
  name: 'Boardwith',
  oneLiner: 'The gates change. The face doesn’t.',
  founder: { name: 'Aditya Bhosale', title: 'Founder & CEO' },
  stage: 'Pre-seed',
  confidential: true,
  confidentialLine: 'Pre-seed. Confidential.',
  printLine: 'Boardwith. Pre-seed. Confidential.',
  email: 'aditya.bhosale@boardwith.com',
  website: 'boardwith.com',
};

// The live pitch: the notes tab label and the timer's countdown.
export const pitch = { shortLabel: '5 min', shortSeconds: 300, longLabel: 'Notes', longSeconds: 300 };

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

export const slides = [
  // ─── 1 ──────────────────────────────────────────────────────────────
  {
    id: 'cover',
    number: 1,
    title: 'Your story',
    layout: 'L1',
    theme: 'teal',
    headline: 'The gates change. The face doesn’t.',
    sub: 'Checked travel companions on the same flights, for anyone who shouldn’t fly alone. Starting between Canada and India.',
    timing: { five: 52, twenty: 52 },
    notes: {
      five: '“Four flights. Three connections. My mother’s first time flying alone: Fredericton, Toronto, Dubai, Delhi, and home to Indore. I couldn’t go with her. Work, classes, and the cost of a second ticket. I searched Facebook and WhatsApp groups for someone on her route. Nobody. At Fredericton airport, I watched her through the glass, struggling to get onto the Wi-Fi, and I couldn’t reach her. In Dubai, she made her connection only because a stranger walked her to the right terminal and got her online. She got lucky. Every parent flying alone is counting on that same luck. I’m Aditya Bhosale, founder of Boardwith. We replace that luck with a background-checked companion on the same flights.”',
      twenty: [
        'Open cold with the story, before your name. Slow down on “Nobody.” and “She got lucky.”',
        'There is no Q&A. Anything a judge might ask has to be said in the five minutes, so don’t trim slides 3 to 5 to make room for more story.',
        'Hard stop at 5:00. The script runs about 4:45 at a normal pace; rehearse to 4:40.',
      ],
    },
  },

  // ─── 2 ──────────────────────────────────────────────────────────────
  {
    id: 'problem',
    number: 2,
    title: 'The problem',
    layout: 'L3',
    headline: 'Airline help stops at each gate. No one stays with them on the flight or through the layover.',
    journey: {
      stops: [
        { code: 'DEL', city: 'Delhi' },
        { code: 'YYZ', city: 'Toronto', layover: ['Immigration', 'Bags', 'New gate'] },
        { code: 'YFC', city: 'Fredericton' },
      ],
      help: 'Airline help',
      helpNote: 'to the gate',
      flight: 'Alone on the flight',
      layover: 'Alone through the layover',
    },
    numbers: [
      { value: '45 min', label: 'Shashikant P. couldn’t reach his mother after she missed her Toronto connection.' },
      { value: '59%', label: 'of 401 people surveyed found trustworthy help hard to find.' },
      { value: '30%+', label: 'of India–US passengers ask for a wheelchair. India now lets airlines charge those who don’t need one.' },
    ],
    sources: [
      'Interviews, September 2026 (6 conversations, in person and by phone).',
      'Survey of 401 respondents, April–May 2026.',
      'Onmanorama, 21 September 2026; Gulf News, 18 November 2025; DGCA revised CAR, via Devdiscourse, 31 October 2025.',
    ],
    timing: { five: 46, twenty: 46 },
    notes: {
      five: '“It isn’t just my mother. Airline help stops at each gate. No one stays with them on the flight or through the layover. Shashikant’s mother missed her Toronto connection, and he couldn’t reach her for 45 minutes. Meena, who is 67, had booked a wheelchair, and was still left alone for almost half an hour after Toronto immigration. In our survey of 401 people, 59% found trustworthy help hard to find. So families book wheelchairs for parents who can walk: on India–US flights, more than 30% of passengers ask for one. That workaround is closing. India now lets airlines charge for it.”',
      twenty: [
        'Said, not shown: Meena J., 67, was alone for 25–30 minutes after Toronto immigration, despite a wheelchair booking.',
        'Never present the wheelchair point as a criticism of people who use one. People who need a wheelchair still get it free, as they should.',
        'If asked afterwards who the customer is: need follows being alone, new to flying and short on English, not age. Two of our six interviewees would not buy.',
      ],
    },
  },

  // ─── 3 ──────────────────────────────────────────────────────────────
  {
    id: 'solution',
    number: 3,
    title: 'The solution',
    layout: 'L2',
    headline: 'A checked companion on the same flights, matched before departure.',
    lines: [
      { icon: 'plane', text: 'One person, the whole way', detail: 'Same flights, through every layover' },
      { icon: 'shield', text: 'Both sides checked', detail: 'Companion: ID and criminal record. Traveller: ID.' },
      { icon: 'hold', text: 'Payment held until arrival', detail: 'Rematch or refund if a companion cancels' },
      { icon: 'support', text: 'On call for every trip', detail: 'Missed check-ins escalated; airline help stays booked' },
    ],
    // Screenshots of the live pilot. When all three `src` values are set
    // (files in public/images/), they replace the illustration on the right.
    proof: {
      title: 'The pilot, live',
      items: [
        { src: '', alt: 'The family sign-up form at boardwith.com', caption: 'Family sign-up at boardwith.com' },
        { src: '', alt: 'The screening page showing the Toronto to Ahmedabad match, names masked', caption: 'Screening page: our first match, names masked' },
        { src: '', alt: 'A completed Stripe Identity ID and selfie check', caption: 'ID + selfie check, live (Stripe Identity)' },
      ],
    },
    instead: {
      title: 'What families try today',
      items: [
        { name: 'Airline help', gap: 'one airport at a time' },
        { name: 'Family flies along', gap: 'a second ticket and time off' },
        { name: 'Matching sites', gap: 'no background check' },
      ],
    },
    sources: ['Interviews, Sept 2026. Stripe Identity; Certn. Terms v1.1 (draft).'],
    timing: { five: 60, twenty: 60 },
    notes: {
      five: '“Boardwith gives that traveller one companion, on the same flights, for the whole trip. A companion, not a caregiver. The family books the ticket and tells us the flights. We match a companion already booked on them, often a student flying home. Before any match, the companion passes an ID check and a criminal record check, and we check the traveller’s ID too. The family pays up front, and we hold the money until the traveller lands. If a companion cancels, we rematch or refund. Airline help is free, so why would a family pay? Because it hands their parent over airport by airport. Flying along costs a second ticket. Matching sites and community groups check no one. Boardwith is the only one that is checked, stays the whole way, and doesn’t cost a second ticket.”',
      twenty: [
        'This slide answers the first objection (“airline help is free”) out loud. Don’t skip the question; ask it yourself and answer it.',
        'Changed since October: the Indian police clearance check is gone (13 November). The required checks are the ID check and the criminal record check. Don’t say “police clearance” from habit.',
        'Not built yet, so not claimed here: in-app trip chat, masked calls and booking-reference (PNR) trip verification. The pilot matches by hand.',
        'Shown, not said: on call for every trip (8-hour rota), missed check-ins escalated, airline assistance stays booked (Terms v1.1, draft). “A companion, not a caregiver” is now said only, not on screen.',
        'The right half shows the illustration until all three screenshots are set in `proof.items`; then it shows the live pilot instead.',
        'If asked afterwards about competitors: MatchMyFlight has a head start with our exact customers and checks phone, email and ticket only. Never say we have no competition.',
      ],
    },
  },

  // ─── 4 ──────────────────────────────────────────────────────────────
  // One trip's money first, then what makes it bigger. The market is two of
  // the three numbers on the right, not a slide of its own.
  {
    id: 'trip-money',
    number: 4,
    title: 'One trip’s money',
    layout: 'L4',
    headline: 'We keep C$75 a trip: about C$27 after card fees and checks.',
    sub: 'One trip, Delhi to Toronto to Fredericton, with every check charged to this one trip.',
    waterfall: {
      steps: [
        { key: 'pays', label: 'Family pays', value: 275, display: 'C$275', kind: 'total' },
        { key: 'companion', label: 'Companion', value: -200, display: '−C$200', kind: 'companion' },
        { key: 'card', label: 'Card fee', value: -8.28, display: '−C$8.28', kind: 'cost' },
        { key: 'record', label: 'Record check', value: -34.48, display: '−C$34.48', kind: 'cost' },
        { key: 'id', label: 'ID checks', value: -4.86, display: '−C$4.86', kind: 'cost' },
        { key: 'kept', label: 'We keep', value: 27.38, display: '≈ C$27', kind: 'kept' },
      ],
    },
    leversTitle: 'What makes it bigger',
    levers: [
      { value: '≈ C$55', label: 'a trip, if a companion flies 4 times a year', tag: { kind: 'assumption' } },
      { value: '183,000', label: 'first-time solo journeys a year, India to Canada', tag: { kind: 'estimate' } },
      { value: '412,000', label: 'more a year on India–US, our next route', tag: { kind: 'estimate' } },
    ],
    under: 'Not in the C$27 yet: insurance (quotes requested) and our own time on each trip. Our first trip measures that time; we report on 8 January.',
    sources: [
      'Stripe card fee 2.9% + C$0.30. Certn record check C$24.99 + OneID C$4.99, and two Stripe Identity checks at US$1.50 each (C$1.41 per US$), all with 15% HST. Market: Statistics Canada 2024, IRCC 2025, NTTO 2025.',
    ],
    timing: { five: 55, twenty: 55 },
    notes: {
      five: '“Here is the money on one trip: Delhi to Toronto to Fredericton. The family pays 275 dollars. The companion earns 200. The card fee is about 8 dollars, the companion’s criminal record check about 34, and the two ID checks about 5. We keep about 27 dollars. That is the floor: it charges every check to a companion’s very first trip. When a companion flies with us four times a year, we keep about 55. And the route is big. Parents and students flying alone for the first time make about 183,000 journeys a year between India and Canada. Two costs are not in that 27 yet: insurance, and our own time on each trip. We are pricing both now, before we scale.”',
      twenty: [
        'This slide answers the second objection (“C$28 a trip is thin”), which a judge raised on 7 October. Say the floor, then the lever, then the volume, in that order.',
        'The honest gap, said out loud: at an illustrative C$25 an hour, about an hour of hands-on work per trip uses up the C$27. The first trip logs every team-hour so we know before launch.',
        'If it doesn’t hold, the options are: raise the price, have companions pay for their own check, accept only companions who will take repeat trips, or cut the hands-on time.',
        'Said, not shown: 183,000 is about 88,000 parents plus about 95,000 first-time students. Every price signal is stated, not paid: buyers offered C$150–400.',
        'The working: C$275 − C$200 − C$8.28 − C$34.48 − C$4.86 = C$27.38 (ID checks at US$1.50 each, at 1.41, plus HST). The ≈ C$55: one record check and one ID check per companion a year (C$36.91) spread over four trips, plus the traveller’s ID check each trip, leaves C$55.07.',
      ],
    },
  },

  // ─── 5 ──────────────────────────────────────────────────────────────
  // Where we are, the team and the ask on one teal slide. C$75,000 is the
  // one orange element.
  {
    id: 'close',
    number: 5,
    title: 'Where we are, team and ask',
    layout: 'L1',
    theme: 'teal',
    headline: 'C$75,000 gets us to 10 pilot trips, then 31 journeys a month.',
    where: {
      title: 'Where we are',
      numbers: [
        { value: '6', label: 'families signed up' },
        { value: '10', label: 'companions signed up' },
        { value: '1', label: 'route matched' },
      ],
      partner: 'Most families asked said yes to the full fare; deposits open after our legal review. Listed on the Association of Indo-Canadians (AIC) Fredericton website. C$390 of JHSC prototype funding pays for our first trip.',
    },
    teamTitle: 'Team',
    ask: {
      title: 'The ask',
      value: 'C$75,000',
      instrument: 'Pre-seed SAFE, C$1.5M cap',
      roomTitle: 'What it pays for',
      room: ['Insurance and legal, so paid trips can run', 'Checks and support for 10 pilot trips by month six', 'The app, and 31 journeys a month by month twelve'],
    },
    backing: 'Incubated at Energia Ventures. Mitacs application submitted with Dr. Kenneth Kent (UNB).',
    close: 'With Boardwith, you can match right, so you travel light.',
    sources: [
      'Pilot sign-ups and family calls, 19 November 2026. Association of Indo-Canadians (AIC) Fredericton website listing, November 2026. JHSC Accelerator Prototype Funding, awarded November 2026. Use of funds and milestones proposed 30 September 2026 for twelve months.',
    ],
    timing: { five: 78, twenty: 78 },
    notes: {
      five: '“Here is where we are. Our pilot page went live on October 27th. Six families and ten companions have signed up, and we have matched our first route. The Association of Indo-Canadians in Fredericton lists us on its website. Families who heard the full fare mostly said yes, but no one has paid: deposits open once a New Brunswick lawyer reviews our terms, and no paid trip runs until insurance is in place. This month, the J Herbert Smith Centre awarded us prototype funding to run that first trip end to end, and on January 8th we report what one trip really costs. I worked on identity verification at Copart. Adarsh, our CTO, is a software architect at Tavant. Shivani runs companion operations. We are raising 75,000 dollars on a SAFE. It pays for insurance and legal, for checks and support on our first ten pilot trips, and for the app, to reach 31 journeys a month in Atlantic Canada. My mother got lucky. The next parent shouldn’t need luck. With Boardwith, you can match right, so you travel light. Thank you.”',
      twenty: [
        'Update the three numbers on Thursday night if sign-ups have moved: `where.numbers` in `src/data/startupData.js`, and the same sentence in this script.',
        'Don’t round up. “Signed up” is not “onboarded”, and “route matched” is not “trip booked”. If a deposit arrives before Friday, say so; it is the strongest line you would have.',
        'Said, not shown: 401 people surveyed and six interviews; all six families spoken with. Shown, not said: Energia Ventures and the Mitacs application (submitted, not approved; never say approved).',
        'Use of funds over twelve months: insurance and legal C$10,000; verification and companion support C$20,000; app and infrastructure C$25,000; marketing and outreach C$12,500; the Mitacs contribution C$7,500. SAFE: post-money, C$1.5M cap, 20% discount, C$10,000 minimum.',
        'End on the closing line, say thank you, then stop talking.',
      ],
    },
  },
];
