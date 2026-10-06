// All deck copy lives here. Copy is final (brief, section 0): headlines,
// numbers and quotes are word for word. Slide components only lay it out.
//
// Order (5 October 2026): the Gate 1 dry-run panel's rebuilt five-minute
// pitch. Story, problem, why now, solution, how it works, trust and safety,
// market, business model, traction and team, ask. Competition, go-to-market
// and the three-year chart moved to the backups.
//
// Inline markup understood by <Rich>:
//   **bold**   *italic*   [FOUNDER INPUT: …]  (renders as a visible placeholder)

export const company = {
  name: 'Boardwith',
  oneLiner: 'Fly alone, with peace of mind.',
  founder: { name: 'Aditya Bhosale', title: 'Founder & CEO' },
  stage: 'Pre-seed',
  confidential: true,
  confidentialLine: 'Pre-seed. Confidential.',
  printLine: 'Boardwith. Pre-seed. Confidential.',
  email: 'adityabhosale@boardwith.com',
  website: 'boardwith.com',
};

// Slide 9. Photos: public/images/team-*.webp, used as supplied (brief, 12.4).
// Full bios are in the slide's 20-minute notes.
export const team = [
  {
    name: 'Aditya Bhosale',
    role: 'Founder & CEO',
    initials: 'AB',
    photo: '/images/team-aditya.webp',
    lines: ['Identity verification at Copart, 2021–2025', 'MCS at UNB; 6+ years in production software'],
  },
  {
    name: 'Adarsh Shaw',
    role: 'CTO',
    initials: 'AS',
    photo: '/images/team-adarsh.webp',
    lines: ['Software architect at Tavant', 'Built the AI engine behind NutriLens'],
  },
  {
    name: 'Shivani Shinde',
    role: 'HR & Operations',
    initials: 'SS',
    photo: '/images/team-shivani.webp',
    lines: ['MBA in HR and Finance', 'Runs companion recruitment and support'],
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
    headline: 'Fly alone, with peace of mind.',
    sub: 'Checked travel companions on the same flights, for anyone who shouldn’t fly alone. Starting between Canada and India.',
    timing: { five: 30, twenty: 90 },
    notes: {
      five: '“Hi, I’m Aditya Bhosale, founder of Boardwith. When I came to Canada to study, it was my first flight alone. Then my mother flew home to India alone for the first time. I watched her through the glass at Fredericton airport, trying to get onto the Wi-Fi, and I couldn’t reach her. In Dubai, a stranger walked her to her connection. She got lucky.”',
      twenty: [
        'Said, not shown: the illustration is the founder’s mother at Fredericton airport, alone with her phone, under signs that point in every direction.',
        'Introduce yourself and the co-founders by name. One line on the company: a registered New Brunswick corporation at Energia Ventures, Fredericton.',
        'The founder’s own first flight to Canada as a student, alone: what was hardest. [FOUNDER INPUT: one detail from your own first arrival]',
        'Tell the mother story in full: four flights, three connections, Fredericton–Toronto–Dubai–Delhi–Indore; the stranger in Dubai.',
        'Tell them the shape: story and problem first, then how it works, the money, the team and the ask.',
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
      { value: '25–30 min', label: 'Meena J., 67, was alone after Toronto immigration, despite a wheelchair booking.' },
      { value: '59%', label: 'of 401 people surveyed found trustworthy help hard to find.' },
    ],
    sources: [
      'Interviews, September 2026 (6 conversations, in person and by phone).',
      'Survey of 401 respondents, April–May 2026.',
    ],
    timing: { five: 30, twenty: 150 },
    notes: {
      five: '“Airline help is free, but it stops at each gate. No one stays with them on the flight or through the layover. Shashikant’s mother missed her Toronto connection; he couldn’t reach her for 45 minutes. Meena, 67, was alone after Toronto immigration, despite a wheelchair booking. It isn’t age: it’s being alone and new to flying. In our survey, 59% found trustworthy help hard to find.”',
      twenty: [
        'Said, not shown: the route drawn is the beachhead’s typical trip, Delhi to Toronto to Fredericton. The learning from interviews: need follows being alone, new to flying and short on English, not age.',
        'What families already spend: wheelchair assistance booked for parents who can walk (four or five families the founder knows); C$282.50 for one airport’s escort at Toronto; a second ticket plus time off; Shashikant delayed his mother’s next visit three months; Nikhil paid C$70 more for a longer connection.',
        'Where it breaks: three interviewees found Toronto or Montreal hardest (immigration, re-checking bags, a domestic connection), not the Gulf hub. A couple, 64 and 60, managed fine: “I am 64, not 84.”',
        'Today’s options, for the competitive picture: airline help (free, one airport at a time); a family member flying along (a second ticket); matching sites like MatchMyFlight (cheap, but they check only phone, email and ticket); community groups (free, unchecked, prone to scams). Open **A5**.',
        'Beyond parents: Nikhil, a first-time student, said he needed about an hour of help at his Montreal connection.',
        'Survey context: 401 responses, April–May 2026, via LinkedIn, UNB groups, community groups and in person.',
      ],
    },
  },

  // ─── 3 ──────────────────────────────────────────────────────────────
  {
    id: 'why-now',
    number: 3,
    title: 'Why now',
    layout: 'L2',
    headline: 'The free workaround is closing.',
    sub: 'Families book wheelchair help for parents who can walk, just to get them escorted. Airlines are pushing back.',
    facts: [
      {
        value: '30%+',
        label: 'of passengers on India–US flights ask for a wheelchair, against a 2–5% norm.',
      },
      {
        icon: 'rule',
        label: 'India’s aviation regulator now lets airlines charge for wheelchair help when a passenger has no disability or reduced mobility.',
      },
    ],
    point: 'Our travellers can walk. They just shouldn’t fly alone.',
    sources: [
      'Onmanorama, 21 September 2026; Gulf News, 18 November 2025; DGCA revised CAR, via Devdiscourse, 31 October 2025.',
    ],
    timing: { five: 20, twenty: 90 },
    notes: {
      five: '“Why now? Families book free wheelchair help for parents who can walk, just to get an escort. On India–US flights, over 30% of passengers ask for one. India now lets airlines charge for it. Our travellers can walk. They just shouldn’t fly alone.”',
      twenty: [
        'Said, not shown: on India–US flights, wheelchair requests run above 30% of passengers, against an international norm of 2–5% (Onmanorama, September 2026). Ground handlers charge airlines about US$30–50 a request.',
        'The rule: India’s DGCA revised its Civil Aviation Requirement (announced 31 October 2025) so airlines may charge an assistance fee to passengers other than persons with disability and reduced mobility who opt for wheelchair services. People who need a wheelchair still get it free, as they should.',
        'What it means for us: the families who used a wheelchair booking as a free escort now face a fee, and still get only one airport at a time. Meena had a wheelchair booking and was still alone for almost half an hour in Toronto.',
        'In the US, airlines can’t question a wheelchair request (Air Carrier Access Act), so the pressure shows up as fees and policy changes elsewhere, not refusals. Never present this as a criticism of people who use wheelchairs.',
        'Demand keeps growing: India posted the largest increase in visitors to Canada of any country in Q4 2025, and Canada plans to admit 15,000 parents and grandparents a year, 2026–2028. Open **A2**.',
      ],
    },
  },

  // ─── 4 ──────────────────────────────────────────────────────────────
  {
    id: 'solution',
    number: 4,
    title: 'The solution',
    layout: 'L2',
    headline: 'A checked companion on the same flights, matched before departure.',
    sub: 'A companion, not a caregiver.',
    lines: [
      { icon: 'plane', text: 'One person across airports', detail: 'Instead of a handover at every gate' },
      { icon: 'shield', text: 'Checked before the match', detail: 'ID, criminal record and police clearance' },
      { icon: 'companion', text: 'Known before departure', detail: 'Matched on route, language and needs' },
    ],
    // What families try today, in the panel's words (dry-run feedback, 5 October).
    instead: {
      title: 'What families try today',
      items: [
        { name: 'Airline help', gap: 'free, but one airport at a time' },
        { name: 'Family flies along', gap: 'a second ticket and time off' },
        { name: 'Matching sites', gap: 'cheap, but no background check' },
        { name: 'Community groups', gap: 'unchecked, and prone to scams' },
      ],
    },
    sources: [
      'Interviews, September 2026. MatchMyFlight and TravelSakha websites, September 2026.',
    ],
    timing: { five: 30, twenty: 120 },
    notes: {
      five: '“That’s why we built Boardwith: one checked companion on the same flights, matched before departure. Not airline help one gate at a time, not a second ticket, not an unchecked stranger: one person across airports. The family meets them before the trip. And it’s a companion, not a caregiver. Meena told us, ‘I would not want somebody treating me like a patient.’”',
      twenty: [
        'Said, not shown: Meena’s “I would not want somebody treating me like a patient.” The list at the bottom is what families try today; the full map is backup **A5** (airport escorts from C$282.50, MatchMyFlight at US$25–75, a kind stranger).',
        'Give each alternative its due if asked: airline help is free and families trust it; MatchMyFlight has a head start with our exact customers; community groups are free. Never say we have no competition.',
        'Language: “English only would not help me much when I am nervous.” Meena would prefer a woman who speaks Marathi or Hindi. Preferences narrow the pool, so we offer them as preferences, and the pilot measures how often we meet them.',
        'Value in the buyer’s units: hours out of contact removed, a visit not delayed, no second ticket.',
        'Who it’s for: anyone 18 or over who shouldn’t fly alone. We start with parents visiting from India, then first-time international students. Later: travellers with a language barrier on any route, and travellers with low vision.',
      ],
    },
  },

  // ─── 5 ──────────────────────────────────────────────────────────────
  {
    id: 'product',
    number: 5,
    title: 'How it works',
    layout: 'L3',
    headline: 'Book, verify both sides, match on route and needs, meet before you fly.',
    sub: 'Whole routes rarely match, but all 5 interview routes passed through Toronto or Montreal, so we match those legs.',
    stepsTag: 'Concept screens',
    stepsNote: 'The pilot runs on a sign-up form, matching by hand and Stripe payment links.',
    steps: [
      { title: 'Book the trip', detail: 'Flights, language, needs' },
      { title: 'Verify both sides', detail: 'Companion and traveller' },
      { title: 'Match on needs', detail: 'Route, language, mobility' },
      { title: 'Meet before flying', detail: 'A call before the trip' },
      { title: 'Family updates', detail: 'Planned' },
    ],
    sources: [
      'Stripe Identity (C$2.00 per ID-and-selfie check), Certn (C$24.99–29.99), Consulate General of India, Toronto (police clearance fees).',
      'Status: in talks with Stripe Identity, Jumio and Certn.',
    ],
    timing: { five: 30, twenty: 150 },
    notes: {
      five: '“The family books the ticket, then tells us the flights, the traveller’s language and any needs. We verify both sides: companions pass three checks, travellers verify their ID. Then we match on route and needs. Whole routes rarely overlap, but every route we heard passed through Toronto or Montreal, so we match those legs. They meet before departure, and the family gets updates.”',
      twenty: [
        'What each step means: (1) after booking, the family enters flight numbers, dates, the traveller’s language and needs; (2) companions: ID and selfie, criminal record and Indian police clearance, about C$73 each; travellers: an ID and selfie check, C$2; (3) the whole route if possible, otherwise the legs through the Canadian arrival airport, with language, mobility and nerves considered; (4) a call before departure; (5) trip updates for the family are planned, not designed.',
        'The screens are concepts; the pilot runs on a sign-up form, matching by hand and Stripe payment links. The app takes four to six months, the length of the planned Mitacs internship.',
        'Why it’s hard to copy: a checked supply of companions on a specific corridor, route data from every sign-up, and a trust record per companion that grows with each trip (planned). Be honest that early on the moat is execution and density, not technology.',
      ],
    },
  },

  // ─── 6 ──────────────────────────────────────────────────────────────
  {
    id: 'trust',
    number: 6,
    title: 'Trust and safety',
    layout: 'L3',
    headline: 'Checked people, held payments, and a plan for when trips go wrong.',
    blocks: [
      {
        icon: 'checks',
        title: 'Both sides checked',
        text: 'Companions: ID, criminal record, police clearance. Travellers: ID. We pay.',
      },
      {
        icon: 'hold',
        title: 'Payment held until arrival',
        text: 'Families pay up front; companions are paid after arrival. Nobody pays off the platform.',
      },
      {
        icon: 'rematch',
        title: 'If plans change',
        text: 'Companion cancels: we rematch or refund. Delays: the companion stays, same pay.',
      },
      {
        icon: 'needs',
        title: 'Matched on needs',
        text: 'Language, mobility, nerves: families list needs, companions list what they can help with.',
      },
    ],
    foot: 'No paid trip before insurance and signed terms. Ratings after every trip and a travel history on each companion (planned).',
    sources: ['Boardwith trip terms, draft, 5 October 2026 (see backup A7). Check costs: Stripe Identity, Certn, Consulate of India.'],
    timing: { five: 30, twenty: 150 },
    notes: {
      five: '“Trust is the product. We verify both sides before any match, and we pay for the checks. Families pay up front, and we hold the money until they arrive, so nobody goes around us. If a companion cancels, we rematch or refund. If a flight is delayed, the companion stays and the pay doesn’t change. And we match on needs: language, mobility, nerves.”',
      twenty: [
        'Said, not shown: no paid trip runs before insurance and signed terms. Companions aren’t caregivers: no medical or personal care, and we don’t serve travellers who need it, or anyone under 18.',
        'Cancellations: companion cancels or doesn’t show → we rematch; if we can’t, full refund. Family cancels → full refund before a match; after a match, the companion’s payout is kept.',
        'Disruptions: missed connection or an overnight delay → the companion stays with the traveller; payout is fixed per journey, written into the companion agreement; the founder helps the family and the airline rebook.',
        'Needs: families list needs at booking (language, mobility, first flight, nerves); companions list what they can help with; we match on both. A traveller who needs a wheelchair still books it with the airline; the companion stays alongside.',
        'Proof the companion helped: ratings from both sides after every trip, and a travel history on each companion’s profile (planned).',
        'Why nobody goes around us: payment is up front and released after arrival, so a family that pays a companion directly loses the checks, the hold and the rematch. Open **A7**.',
      ],
    },
  },

  // ─── 7 ──────────────────────────────────────────────────────────────
  {
    id: 'market',
    number: 7,
    title: 'Market',
    layout: 'L3',
    headline: 'About 183,000 first-time solo journeys a year, on our first route alone.',
    ladderTitle: 'India to Canada, one-way journeys a year',
    ladder: [
      { value: 878000, display: '878,000', label: 'all visitors from India', tag: { kind: 'evidence', qualifier: 'Statistics Canada' } },
      { value: 182605, display: '183,000', label: 'parents and students flying alone for the first time: **C$41–59M** a year at our price', tag: { kind: 'estimate' } },
      { value: 106000, display: '106,000', label: 'if 58% would use it, as survey respondents who arrange travel said', tag: { kind: 'estimate' } },
    ],
    // The three-year plan (backup A3 has the detail). Revenue = journeys × C$75 kept.
    plan: {
      title: 'Our plan, one-way journeys a year',
      tag: { kind: 'projection' },
      years: [
        { year: 'Year 1', journeys: 372, display: '372', where: 'Atlantic Canada', revenue: 'C$27,900' },
        { year: 'Year 2', journeys: 2772, display: '2,772', where: 'Eastern Canada', revenue: 'C$207,900' },
        { year: 'Year 3', journeys: 20160, display: '20,160', where: 'All of Canada', revenue: 'C$1.51M' },
      ],
      revenueLabel: 'revenue',
    },
    nextTitle: 'Then more routes and more travellers',
    next: {
      route: { from: 'India', now: 'Canada', later: 'US', text: 'India–US: about 412,000 more a year by the same method', tag: { kind: 'estimate' } },
      travellers: [
        { figure: 'parent', label: 'Parents visiting' },
        { figure: 'student', label: 'First-time students' },
        { figure: 'language', label: 'A language barrier' },
      ],
    },
    sources: [
      'Statistics Canada, 2024 tourism (439,000 trips × 2). Parents: 34% aged 55+ × about 30% alone, first time (estimate, being re-sized). Students: 94,605 study permits, 2025 (IRCC). Survey: 58% of the 98 respondents who arrange travel for others said they’d use it. India–US: 2.06 million Indian visitors in 2025 × 2 × 10% (NTTO).',
    ],
    timing: { five: 35, twenty: 120 },
    notes: {
      five: '“How big is this? 878,000 journeys a year from India to Canada. About 183,000 are parents and students flying alone for the first time: 41 to 59 million dollars a year at our price. 58% of people who arrange travel for others said they’d use it. We plan 372 journeys in year one, 2,772 in year two, about 20,000 in year three. And that’s one route: India to the US is more than twice as big.”',
      twenty: [
        'Said, not shown: the 183,000 is about 88,000 parents (34% aged 55+ × about 30% alone, first time; the 55+ filter is being re-sized) plus about 95,000 first-time students (94,605 study permits in 2025). The 106,000 is 183,000 × 58%, a stated intention, not a paid one.',
        'The plan by year: Atlantic Canada, then Eastern Canada, then all of Canada; 31, 231 and 1,680 journeys a month (parents 21 / 171 / 1,280, students 10 / 60 / 400). Revenue is C$75 kept per journey. Say “illustrative, not a forecast”; the detail is backup **A3**.',
        'Year 3 is 11% of the serviceable journeys (year 1 is 0.2%, year 2 1.5%): 17.5% of parent journeys and about 5% of student journeys. Adding India–US later brings the share needed to about 3.4%.',
        'Cross-check: IRCC issued about 52,900 super visas to parents and grandparents (all countries) in 2025, about 106,000 journeys if each made one round trip.',
        'Headwind, said out loud: study permits for Indian students halved, 188,715 (2024) → 94,605 (2025). That’s why parents lead and students are second.',
        'More travellers on any route: travellers with a language barrier. Unaccompanied minors stay out of scope. Open **A2**.',
      ],
    },
  },

  // ─── 8 ──────────────────────────────────────────────────────────────
  {
    id: 'business-model',
    number: 8,
    title: 'Business model',
    layout: 'L4',
    headline: 'One trip: the family pays C$275, and we keep about C$28.',
    sub: 'One price for every traveller, set by the legs the companion covers: C$225 direct, C$275 with one connection, C$325 with two or more.',
    waterfall: {
      caption: 'Delhi → Toronto → Fredericton, one connection',
      steps: [
        { key: 'pays', label: 'Family pays', value: 275, display: 'C$275', kind: 'total' },
        { key: 'companion', label: 'Companion', value: -200, display: '−C$200', kind: 'companion', note: 'their pay' },
        { key: 'checks', label: 'Checks', value: -38.5, display: '−C$38.50', kind: 'cost', note: 'both sides' },
        { key: 'card', label: 'Card fees', value: -8.28, display: '−C$8.28', kind: 'cost' },
        { key: 'insurance', label: 'Insurance', value: 0, display: 'In budget', kind: 'budget', note: 'yearly policy' },
        { key: 'kept', label: 'We keep', value: 28.22, display: '≈ C$28', kind: 'kept' },
      ],
    },
    levers: [
      { value: '≈ C$46', label: 'a trip when companions fly 4 times a year, not 2', tag: { kind: 'assumption' } },
      { value: 'C$1.51M', label: 'revenue in year 3: 20,160 journeys × C$75 kept', tag: { kind: 'projection' } },
    ],
    conservative: 'Conservative on purpose: companions fly twice a year, and one buyer offered C$400 for someone he trusts.',
    caption: 'Checks: a companion’s C$73 spread over 2 trips, plus C$2 for the traveller’s ID. Insurance is a yearly policy in the C$10,000 insurance and legal budget. Support time isn’t counted yet.',
    sources: ['Stripe pricing; Stripe Identity, Certn, Consulate of India. Prices untested. Insurance: use of funds (estimate until quoted).'],
    timing: { five: 30, twenty: 120 },
    notes: {
      five: '“One trip: Delhi to Toronto to Fredericton. The family pays 275 dollars, and the companion earns 200. Checks on both sides cost about 38, card fees 8, and insurance is a yearly policy in our budget. We keep about 28. That’s conservative: when companions fly four times a year, it’s about 46. In year three, that’s 1.5 million dollars of revenue.”',
      twenty: [
        'Said, not shown: the checks are about C$73 per companion (ID and selfie, criminal record, Indian police clearance), spread over two trips a year, plus C$2 to check the traveller’s ID; card fees are 2.9% + C$0.30. Per tier, we keep about C$30 (direct), C$28 (one connection) and C$27 (two or more).',
        'Insurance: a year of liability insurance sits in the C$10,000 insurance and legal line of the raise, so it isn’t taken from each trip. Once quoted, if the insurer prices per trip, it comes out of what we keep.',
        'Why per journey, not a subscription: a parent visits perhaps once a year, and a student’s first arrival happens once (assumption). Each parent visit is two one-way journeys.',
        'Why one price for everyone: the companion does the same job whoever travels. Why price by legs: the companion stays for all of them.',
        'Price signals: buyers offered C$150–400; Shashikant said C$700–800 is too much and he’d trust an offer under C$100 less. Nikhil offered C$150, below our floor, so the pilot tests what students’ families pay. These are stated, not paid.',
        'The path to a bigger number: companions who fly more often (C$45–48 a trip at four trips a year), more routes (India–US), paid add-ons such as family updates. The three-year model is backup **A3**; the tables are **A4**.',
      ],
    },
  },

  // ─── 9 ──────────────────────────────────────────────────────────────
  {
    id: 'team',
    number: 9,
    title: 'Traction and team',
    layout: 'L4',
    headline: 'Early pull, and a team built for trust.',
    traction: [
      { value: '1', label: 'companion signed up' },
      { value: '401', label: 'surveyed, plus 6 interviews and 50+ airport conversations' },
      { value: '454', label: 'Indian students at UNB: our families and future companions' },
      { name: 'Community partners', label: 'The Fredericton Association of India is helping us reach families' },
    ],
    partners: 'Working with Energia Ventures, the JHSC Ventures Shadow Institute and Dr. Kenneth Kent (UNB), supervisor on our submitted Mitacs application.',
    sources: [
      'Survey, April–May 2026. Interviews, September 2026. UNB Fall 2025 enrolment summary. Team members’ professional histories. Mitacs application, submitted.',
    ],
    timing: { five: 25, twenty: 90 },
    notes: {
      five: '“We already have pull. Our first companion has signed up, the Fredericton Association of India is helping us reach families, and UNB’s 454 Indian students are our families and future companions. At Copart, I worked on identity verification, which is our first trust check. Adarsh, our CTO, is a software architect at Tavant. Shivani runs companion recruitment and support.”',
      twenty: [
        'Said, not shown: the 401 survey responses came through LinkedIn, UNB groups, community groups and in person; 77% chose verified identity as the top reason to trust a co-passenger.',
        'Next channel: formalize recruitment through UNB’s international student groups and the Graduate Students’ Association before the December break. Students who fly home every year are our companion pool.',
        'Scars: the founder booked and paid for his mother’s trip and searched Facebook and WhatsApp groups for someone on her route, and found no one.',
        'Aditya Bhosale: Senior Software Engineer at Copart India Technology Centre (2021–2025), working on identity verification for user registration; cloud security auditing for AWS and Azure at Skyhigh Security; Master of Computer Science student at UNB.',
        'Adarsh Shaw, CTO: BTech; software architect and lead engineer at Tavant; previously designed production data pipelines at Infosys; Google Cloud certified. Built the core AI engine behind NutriLens (Google Agentic AI Hackathon 2025).',
        'Shivani Shinde, HR & Operations: MBA in HR and Finance; former manager at a restaurant chain, leading frontline teams and customer service. Leads companion recruitment, onboarding and background checks, plus traveller and companion support.',
        'The gap: insurance and legal counsel, both budgeted. Go-to-market detail is backup **A6**.',
      ],
    },
  },

  // ─── 10 ─────────────────────────────────────────────────────────────
  {
    id: 'ask',
    number: 10,
    title: 'The ask',
    layout: 'L1',
    theme: 'teal',
    headline: 'C$75,000 gets us to 10 safe pilot trips, then 31 journeys a month.',
    next: {
      title: 'What it gets us to',
      steps: [
        { when: 'December', what: 'first trips, from Fredericton' },
        { when: 'Month six', what: '10 trips done: match rate, price, margin, safety' },
        { when: 'Month twelve', what: '31 journeys a month in Atlantic Canada' },
      ],
      today: 'Today: 0 paid trips, 1 companion, 401 surveyed.',
    },
    ask: {
      title: 'The ask',
      value: 'C$75,000',
      instrument: 'Pre-seed SAFE (post-money), C$1.5M cap, 20% discount, C$10,000 minimum',
      fundsLabel: 'What it pays for',
      funds: [
        { label: 'Insurance and legal', value: 10000, display: 'C$10,000' },
        { label: 'Verification and companion support', value: 20000, display: 'C$20,000' },
        { label: 'App and infrastructure', value: 25000, display: 'C$25,000' },
        { label: 'Marketing and outreach', value: 12500, display: 'C$12,500' },
        { label: 'Mitacs contribution', value: 7500, display: 'C$7,500' },
      ],
    },
    close: 'Boardwith with someone you matched right, so you can travel light.',
    sources: ['Use of funds proposed 30 September 2026 for twelve months: the pilot, then a first year in Atlantic Canada. Mitacs Accelerate program terms.'],
    timing: { five: 20, twenty: 120 },
    notes: {
      five: '“We’re raising 75,000 dollars on a SAFE. It pays for insurance and legal, verification, the app and outreach. It gets us to ten safe pilot trips by month six, then 31 journeys a month in Atlantic Canada. Boardwith with someone you matched right, so you can travel light. Thank you.”',
      twenty: [
        'Said, not shown: the Mitacs contribution (C$7,500) unlocks a C$15,000 internship award if approved; the founder is the intern, so it funds him full-time on Boardwith. At the cap, C$75,000 is 5% of the company. If only C$30,000 is raised, the 10-trip pilot still runs.',
        'Insurance and legal, C$10,000: a year of liability insurance, and legal review of the terms, the companion agreement and the privacy policy.',
        'Verification and companion support, C$20,000: checks and refunds (C$5,000: the pilot’s checks on 20 companions and 10 travellers, a refund buffer and checks ahead of year-1 revenue), plus part-time companion operations and the trip support line (C$15,000).',
        'App and infrastructure, C$25,000: matching, checks, payments and payouts in one flow, so the pilot moves off forms and hand-matching; family updates next.',
        'Marketing and outreach, C$12,500: the Atlantic Canada launch through community associations, UNB and other campuses, and the Moncton introduction.',
        'Month six reports four things: match rate, the price families accept, what we keep per trip, and whether every trip was safe. No paid trip runs before insurance and signed terms.',
        'Terms: pre-seed SAFE (post-money), C$1.5M valuation cap, 20% discount, C$10,000 minimum cheque (up to seven investors).',
        'End on the close line, then stop talking.',
      ],
    },
  },

  // ─── A1 ─────────────────────────────────────────────────────────────
  {
    id: 'evidence',
    number: 'A1',
    title: 'Six conversations',
    layout: 'L4',
    headline: 'Six conversations changed who we serve.',
    columns: [
      {
        title: 'Confirmed',
        items: [
          'The adult child in Canada is the buyer.',
          'No one person is responsible at the connection, even with airline help.',
          'Families already pay for workarounds (a visit delayed three months; C$70 for a longer connection).',
          'Trust, not hours, sets the price (offers of C$150–400).',
        ],
      },
      {
        title: 'We were wrong',
        items: [
          'Age defines the customer (“I am 64, not 84.” Sunil D.)',
          'The Gulf hub is the hardest point (three found Toronto or Montreal hardest)',
          'Companions help strangers out of goodwill (Neel asks about C$250)',
          'Students will pay for a full journey (Nikhil T. offered C$150 and needed “maybe one hour of help in Montreal”)',
        ],
      },
      {
        title: 'What changed',
        items: [
          'Need follows being alone and new to flying, so we serve anyone 18 or over who shouldn’t fly alone.',
          'Beachhead: first-time solo parents with limited English; first-time students are the second segment, at the same full-journey prices.',
          'Excluded: couples and confident travellers, travellers needing medical care, and anyone under 18.',
          'Matching now considers language and needs; the role is a companion, not a caregiver.',
        ],
      },
    ],
    caption: 'Five of six conversations came through the founder’s network. Next: interviews through the Fredericton Association of India and the GSA, and more students.',
    sources: ['Customer Discovery Evidence Report, 28 September 2026.'],
    notes: {
      five: 'Read the “we were wrong” column aloud. It shows the team learns.',
      twenty: ['Read the “we were wrong” column aloud. It shows the team learns.'],
    },
  },

  // ─── A2 ─────────────────────────────────────────────────────────────
  {
    id: 'market-detail',
    number: 'A2',
    title: 'Market sizing and why now',
    layout: 'L4',
    headline: 'About 183,000 first-time solo journeys a year; we start with the 88,000 by parents.',
    // level: the rung's name; sub: its second line (the three serviceable rungs).
    ladder: [
      { level: 'Total', who: 'All trips to Canada by residents of India (439,000 in 2024 × 2)', journeys: '878,000', value: 'Ceiling, not a forecast', tag: { kind: 'evidence', qualifier: 'Statistics Canada' } },
      { level: 'Serviceable', sub: 'beachhead', who: 'Parents flying alone for the first time (34% aged 55+ × about 30% alone, first time)', journeys: 'about 88,000', value: 'C$20–29 million', tag: { kind: 'estimate' } },
      { level: 'Serviceable', sub: 'second segment', who: 'First-time international students from India (94,605 study permits in 2025, one first journey each)', journeys: 'about 95,000', value: 'C$21–31 million', tag: { kind: 'estimate' } },
      { level: 'Serviceable', sub: 'total', who: 'Adults flying alone for the first time, India to Canada (about 106,000 if 58% use it)', journeys: 'about 183,000', value: 'C$41–59 million', tag: { kind: 'estimate' } },
      {
        level: 'Obtainable',
        who: 'Parents of UNB Fredericton’s 454 Indian students (one family in five a year), plus UNB’s new Indian students',
        journeys: ['about 180', '+ about 125'],
        value: ['C$40,500–58,500', '+ C$28,100–40,600'],
        tag: { kind: 'estimate' },
        note: 'The 125 assumes a quarter of undergraduates and half of graduates are new each year.',
        noteTag: { kind: 'assumption' },
      },
    ],
    ladderHead: ['Level', 'Who', 'One-way journeys a year', 'Value at C$225–325'],
    resize: 'The parents’ figure still uses the 55+ filter; need follows being alone, new to flying and short on English, so we are re-sizing. Next route: India–US, about 412,000 a year.',
    crossCheck: 'IRCC issued about 52,900 super visas to parents and grandparents (all countries) in 2025, about 106,000 journeys if each made one round trip.',
    crossCheckTag: { kind: 'evidence', qualifier: 'IRCC; calculation' },
    whyNow: 'Since October 2025 India lets airlines charge for wheelchair help travellers don’t medically need (30%+ ask on India–US flights). Trips from India rose by 16,000 in Q4 2025, the largest increase of any country. Canada plans 15,000 parent and grandparent PRs a year, 2026–2028.',
    headwind: 'Study permits for Indian students halved, 188,715 (2024) → 94,605 (2025). That’s why parents lead and students are the second segment.',
    sources: [
      'Statistics Canada (2024 tourism; Q4 2025 Visitor Travel Survey); Destination Canada; IRCC (23 March 2026; study permits via The Tribune); UNB Fall 2025 enrolment; NTTO; Onmanorama; DGCA via Devdiscourse.',
    ],
    notes: {
      five: 'Say “ceiling” for the total, “estimate” for the serviceable market, and name the re-size.',
      twenty: ['Say “ceiling” for the total, “estimate” for the serviceable market, and name the re-size.'],
    },
  },

  // ─── A3 ─────────────────────────────────────────────────────────────
  {
    id: 'projections',
    number: 'A3',
    title: 'Three-year scenario',
    layout: 'L3',
    headline: 'From Atlantic Canada to all of Canada: C$1.51M revenue in year 3.',
    sub: 'An illustrative scenario, not a forecast. Every number here is an assumption the pilot will test.',
    subTag: { kind: 'projection' },
    chartTitle: 'One-way journeys a year',
    // Each bar stacks parents (base) and students (top); revenue = journeys × C$75.
    segmentLabels: { parents: 'Parents', students: 'Students' },
    years: [
      { year: 'Year 1', parents: 252, students: 120, display: '372', where: 'Atlantic Canada', pace: '31 a month', revenue: 'C$27,900 revenue' },
      { year: 'Year 2', parents: 2052, students: 720, display: '2,772', where: 'Eastern Canada', pace: '231 a month', revenue: 'C$207,900 revenue' },
      { year: 'Year 3', parents: 15360, students: 4800, display: '20,160', where: 'All of Canada', pace: '1,680 a month', revenue: 'C$1,512,000 revenue' },
    ],
    decideTitle: 'Three numbers decide it',
    decide: [
      { icon: 'pay', title: 'Do families pay C$225–325, for parents and for students?', today: 'Today: 0 paid' },
      { icon: 'match', title: 'Do routes match?', today: 'Today: 1 full-route overlap in 5 interview routes' },
      { icon: 'repeat', title: 'How often do companions fly?', today: ['2 trips a year: ≈ C$28 a journey', '4 trips a year: ≈ C$45–48'] },
    ],
    chartNote: 'Revenue = C$75 kept per journey, the same for parents and students. Salaries and support aren’t modelled yet.',
    sources: [
      'Market estimate from Week 2 (about 88,000 parent journeys), plus about 95,000 first-time student journeys (IRCC study permits, 2025). Journeys and revenue: Boardwith revenue model, 30 September 2026, with students added 1 October 2026 (assumption).',
    ],
    notes: {
      five: 'Say “illustrative” out loud. Year 3 is 17.5% of parent journeys and about 5% of student journeys, 11% overall.',
      twenty: [
        'Year 1 is 21 parent and 10 student journeys a month; year 2, 171 and 60; year 3, 1,280 and 400. Companions needed by year: 186, 1,386 and 10,080.',
        'Why it isn’t only Toronto and Montreal: matching is by flight, not by city. A family in Calgary or Surrey books the same way as one in Fredericton, and their travellers fly in through Toronto, Vancouver, Montreal or Calgary.',
        'Say the share before they do: 11% of the ~183,000 serviceable journeys; adding the India–US corridor later brings it to about 3.4%.',
        'Say the student risk before they do: students are counted at full price, but Nikhil offered C$150. Parents bring three-quarters of year-3 revenue.',
        'Not modelled: team salaries, support and later years’ insurance. At about C$28 a journey, year 3 contributes about C$564,000; at four trips a year per companion (about C$46), about C$927,000.',
        'Pilot trips lose money on purpose (about −C$83 each, because 20 companions are checked for 10 trips).',
      ],
    },
  },

  // ─── A4 ─────────────────────────────────────────────────────────────
  {
    id: 'economics',
    number: 'A4',
    title: 'Unit economics',
    layout: 'L4',
    headline: 'Each journey earns about C$28 today; companions flying more often lift it to C$45–48.',
    table1: {
      title: 'Contribution per journey, by trips per companion a year, the same for every traveller',
      tag: { kind: 'assumption' },
      head: ['Route', 'Price', 'Companion', 'Card fees', '2 trips/yr', '3 trips/yr', '4 trips/yr'],
      rows: [
        ['Direct', 'C$225', 'C$150', 'C$6.83', '≈ C$30', '≈ C$42', '≈ C$48'],
        ['One connection', 'C$275', 'C$200', 'C$8.28', '≈ C$28', '≈ C$40', '≈ C$46'],
        ['Two or more', 'C$325', 'C$250', 'C$9.73', '≈ C$27', '≈ C$39', '≈ C$45'],
      ],
      note: 'Checks: about C$73 per companion over their trips in a year, plus C$2 per traveller. Insurance is in the C$10,000 insurance and legal budget; support time not included.',
    },
    table2: {
      title: 'The illustrative three-year scenario',
      tag: { kind: 'projection' },
      head: ['', 'Year 1', 'Year 2', 'Year 3'],
      rows: [
        ['Where families live', 'Atlantic Canada', 'Eastern Canada', 'All of Canada'],
        ['Parent journeys (21 / 171 / 1,280 a month)', '252', '2,052', '15,360'],
        ['Student journeys (10 / 60 / 400 a month)', '120', '720', '4,800'],
        ['One-way journeys, total', '372', '2,772', '20,160'],
        ['Share of ~183,000 serviceable', '0.2%', '1.5%', '11% (parents 17.5%, students about 5%)'],
        ['Companions needed (2 trips each)', '186', '1,386', '10,080'],
        ['Family bookings (average C$300)', 'C$111,600', 'C$831,600', 'C$6,048,000'],
        ['Boardwith revenue (C$75 each)', 'C$27,900', 'C$207,900', 'C$1,512,000'],
        ['Contribution (≈ C$28 each)', 'C$10,416', 'C$77,616', 'C$564,480'],
        ['Contribution at 4 trips per companion (≈ C$46; 5,040 companions)', '', '', '≈ C$927,400'],
      ],
      note: 'Year 3 parent journeys by where families live: Ontario 60%, British Columbia 18%, the Prairies 15%, Quebec 5%, Atlantic Canada 2% (guided by the 2021 Census South Asian population by province). Student journeys follow where students enrol. Matching is by flight, so travellers anywhere in Canada fly in through Toronto, Vancouver, Montreal or Calgary.',
    },
    pilot: 'Pilot trips lose money on purpose: checking 20 companions for 10 trips is about C$146 per trip, plus C$2 for the traveller, so each is roughly −C$83. What matters is contribution at steady state.',
    bigger: 'More trips per companion; students as a second segment, who later become companions; paid add-ons such as family updates; more corridors.',
    notes: {
      five: 'Point to the 4-trips column. That’s the lever.',
      twenty: ['Point to the 4-trips column. That’s the lever.'],
    },
  },

  // ─── A5 ─────────────────────────────────────────────────────────────
  {
    id: 'competition',
    number: 'A5',
    title: 'Competitive analysis',
    layout: 'L3',
    headline: 'Today, trusted help for the whole trip costs a second ticket.',
    sub: 'Help is either checked for one airport, or unchecked for the whole route.',
    axes: {
      x: { from: 'One airport', to: 'The whole trip' },
      y: { from: 'Unchecked', to: 'Checked' },
    },
    // x, y in 0–1 (x: one airport → whole trip; y: unchecked → checked).
    // Heights leave room for each two-line label.
    options: [
      { name: 'Airline assistance, free', text: 'Handed over airport by airport', x: 0.05, y: 0.94 },
      { name: 'Airport escort, from C$282.50', text: 'One airport only', x: 0.05, y: 0.68 },
      { name: 'Family flies along', text: 'A second ticket plus time off', x: 0.95, y: 0.94, align: 'right' },
      { name: 'MatchMyFlight, US$25–75', text: 'Checks phone, email and ticket', x: 0.95, y: 0.44, align: 'right' },
      { name: 'Community groups, free', text: 'Unchecked; prone to scams', x: 0.95, y: 0.2, align: 'right' },
      { name: 'A kind stranger', text: 'Luck', x: 0.05, y: 0.2 },
    ],
    boardwith: { name: 'Boardwith, C$225–325', text: 'Checked, the whole trip. Not yet proven.', x: 0.95, y: 0.69 },
    sources: [
      'Company websites reviewed September 2026: MatchMyFlight, TravelSakha, ALLWAYS, Marhaba.',
      'Interviews, September 2026.',
    ],
    notes: {
      five: 'Name every option and its strength; we’re checked and continuous, and we’re not proven yet.',
      twenty: [
        'Meet-and-assist is ALLWAYS at Toronto and Marhaba at Dubai (US$55.75–92.92); the groups are TravelSakha, Facebook and WhatsApp. Shashikant, on airline assistance: “No one person knew her whole journey.”',
        'Give each competitor its due. MatchMyFlight has a head start with our exact customers, and already sells a US$14.99 add-on with checkpoint guidance and family updates. Airline assistance is free and families trust it. Meet-and-assist staff are trained and have airport access.',
        'Never say we have no competition. The real incumbent is a kind stranger and luck.',
      ],
    },
  },

  // ─── A6 ─────────────────────────────────────────────────────────────
  {
    id: 'go-to-market',
    number: 'A6',
    title: 'Go-to-market plan',
    layout: 'L3',
    headline: 'One community supplies both sides: people flying in for the first time, and students flying home.',
    sub: 'First trips in the December 2026 break, from Fredericton.',
    loop: {
      families: { title: 'Travellers', text: 'First, parents visiting UNB’s 454 Indian students and Fredericton’s Indian community; next, first-time students' },
      students: { title: 'Students flying home', text: 'The December break brings our first companions' },
      match: { title: 'Boardwith match', text: 'Checked, same flights' },
      arrows: {
        families: 'Parents visit again; families refer families',
        students: 'Students who flew in become companions on later trips home',
      },
      channels: [
        'Fredericton Association of India',
        'UNB Graduate Students’ Association',
        'the groups behind 401 survey responses',
        'referrals',
        'Fredericton airport',
      ],
      // Untested: shown after the main list with an Assumption tag.
      studentChannels: {
        label: 'For students:',
        text: 'UNB pre-departure sessions and travel agents in India',
        tag: { kind: 'assumption' },
      },
    },
    metrics: [
      { value: '1', label: 'companion signed up' },
      { name: 'Fredericton Association of India', label: 'offered to help onboard our first families' },
      { value: 'C$50–100', label: 'outreach per pilot trip, no paid ads', tag: { kind: 'assumption' } },
    ],
    sources: [
      'UNB Fall 2025 enrolment summary. Survey, April–May 2026. Founder’s conversations, September 2026.',
    ],
    notes: {
      five: 'One community gives us both sides; deposits at list price tell us who really pays; no ad spend.',
      twenty: [
        'A sign-up form records route, dates, airline and language, then families pay a refundable deposit at list price through a Stripe payment link. The C$50–100 is C$500–1,000 of the marketing and outreach line ÷ 10 trips, excluding founder time.',
        'Channels, in order: the Association, the GSA, the groups behind the 401 survey responses, referrals from interviews (including an introduction in Moncton), Fredericton airport. For students: UNB pre-departure sessions and travel agents in India (untested).',
        'Supply: Neel, a student, has escorted a family friend’s mother unpaid and would escort a stranger for about C$250 with checks paid by Boardwith. We’ll poll GSA students flying home in December for route, price and willingness to do checks.',
        'Airports and airlines: a channel, not a competitor. Airline assistance covers one airport at a time; airports could point families to us. Untested.',
      ],
    },
  },

  // ─── A7 ─────────────────────────────────────────────────────────────
  {
    id: 'safety',
    number: 'A7',
    title: 'Trust, safety and trip terms',
    layout: 'L4',
    headline: 'No paid trip runs before insurance and signed terms.',
    checks: {
      title: 'Checks before any match',
      items: ['Companions: ID and selfie, criminal record, Indian police clearance', 'Travellers: ID and selfie'],
      after: 'Boardwith pays for them.',
    },
    notServed: {
      title: 'Who we don’t serve yet',
      text: 'Travellers who need medical or personal care, and anyone under 18 travelling alone.',
    },
    backup: {
      title: 'Money and backup',
      text: 'Families pay up front; companions are paid after arrival. Every pilot traveller also books free airline assistance.',
    },
    incident: {
      title: 'Trip terms',
      tag: { kind: 'assumption', qualifier: 'draft, untested' },
      items: [
        ['Companion cancels', 'we rematch, or refund in full'],
        ['Family cancels', 'full refund before a match; after it, the companion is paid'],
        ['Long or overnight delay', 'the companion stays; pay is fixed per journey'],
        ['Missed connection', 'the companion stays; we help rebook'],
        ['Illness', 'the companion alerts staff; the founder calls the family'],
        ['After every trip', 'ratings both ways; a travel history (planned)'],
      ],
      last: 'The founder monitors every live trip',
    },
    open: {
      title: 'Still open',
      text: 'Insurance quote; legal review of the terms, companion agreement and privacy policy (budgeted).',
    },
    notes: {
      five: 'Lead with the rule: no paid trip before insurance and signed terms.',
      twenty: ['Lead with the rule: no paid trip before insurance and signed terms.'],
    },
  },
];
