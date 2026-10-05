// Slide 6: four small illustrated badges in the deck's palette (teal for
// trust, the companion's blue jacket, the mother's mustard and red). One
// badge per trust promise; each is a 160 × 160 drawing on a mist circle.

const BLUE = '#3e76b3';
const MUSTARD = '#e0a33e';
const RED = '#c75046';
const SKIN = '#b07b46';
const SKIN_OLD = '#a8704a';

function Ground({ children, label }) {
  return (
    <svg viewBox="0 0 160 160" width="150" height="150" role="img" aria-label={label}>
      <circle cx="80" cy="80" r="78" fill="var(--bw-mist)" />
      {children}
    </svg>
  );
}

function Head({ x, y, r = 11, skin = SKIN, hair = '#2b1f18', white = false }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={skin} />
      <path
        d={`M${x - r} ${y - 1}Q${x - r} ${y - r - 3} ${x} ${y - r - 3}Q${x + r} ${y - r - 3} ${x + r} ${y - 2}Q${x + r * 0.5} ${y - r * 0.55} ${x} ${y - r * 0.6}Q${x - r * 0.5} ${y - r * 0.55} ${x - r} ${y - 1}Z`}
        fill={white ? '#ece8df' : hair}
      />
    </g>
  );
}

// Two ID cards, the companion's and the traveller's, under one shield.
function Checks() {
  return (
    <Ground label="Two ID cards, one for the companion and one for the traveller, under a shield with a check mark">
      <g transform="rotate(-8 64 84)">
        <rect x="26" y="58" width="76" height="52" rx="7" fill="var(--bw-paper)" stroke="var(--bw-teal-500)" strokeWidth="2.5" />
        <rect x="32" y="64" width="22" height="26" rx="4" fill="#dbe9f6" />
        <Head x={43} y={77} r={7} />
        <rect x="38" y="84" width="10" height="6" rx="2" fill={BLUE} />
        <rect x="60" y="68" width="34" height="5" rx="2.5" fill="var(--bw-grey-300)" />
        <rect x="60" y="78" width="26" height="4" rx="2" fill="var(--bw-grey-300)" />
        <rect x="32" y="96" width="62" height="4" rx="2" fill="var(--bw-grey-300)" />
      </g>
      <g transform="rotate(7 92 94)">
        <rect x="56" y="72" width="76" height="52" rx="7" fill="var(--bw-paper)" stroke="var(--bw-teal-500)" strokeWidth="2.5" />
        <rect x="62" y="78" width="22" height="26" rx="4" fill="#fbeed5" />
        <Head x={73} y={91} r={7} skin={SKIN_OLD} white />
        <rect x="68" y="98" width="10" height="6" rx="2" fill={MUSTARD} />
        <rect x="90" y="82" width="34" height="5" rx="2.5" fill="var(--bw-grey-300)" />
        <rect x="90" y="92" width="26" height="4" rx="2" fill="var(--bw-grey-300)" />
        <rect x="62" y="110" width="62" height="4" rx="2" fill="var(--bw-grey-300)" />
      </g>
      <g transform="translate(104 22)">
        <path d="M22 0L42 8V24C42 38 33 47 22 52C11 47 2 38 2 24V8Z" fill="var(--bw-teal-700)" />
        <path d="M13 26L20 33L32 19" fill="none" stroke="var(--bw-paper)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Ground>
  );
}

// The family's payment, locked until the plane lands.
function Hold() {
  return (
    <Ground label="A payment card locked with a padlock until a plane lands">
      <path d="M40 108Q60 132 106 128" fill="none" stroke="var(--bw-teal-500)" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" />
      <path d="M96 138H140" stroke="var(--bw-grey-300)" strokeWidth="3" strokeLinecap="round" />
      <g transform="translate(122 128) rotate(8)" fill="var(--bw-teal-700)">
        <path d="M-16 0L10 -2.6L17 0L10 2.6Z" />
        <path d="M-1 -1.8L-9 -12L-4.5 -12L7 -1.8Z" />
        <path d="M-1 1.8L-9 12L-4.5 12L7 1.8Z" />
        <path d="M-14 -0.8L-18 -6.6L-15 -6.6L-10 -0.8Z" />
      </g>
      <rect x="22" y="38" width="86" height="56" rx="9" fill={BLUE} />
      <rect x="22" y="50" width="86" height="11" fill="#2f5f93" />
      <rect x="32" y="72" width="26" height="6" rx="3" fill="#bcd3ec" />
      <rect x="32" y="82" width="16" height="5" rx="2.5" fill="#bcd3ec" />
      <g transform="translate(88 50)">
        <path d="M10 18V11a12 12 0 0 1 24 0v7" fill="none" stroke="var(--bw-teal-900)" strokeWidth="6" strokeLinecap="round" />
        <rect x="2" y="16" width="40" height="32" rx="7" fill={MUSTARD} />
        <circle cx="22" cy="30" r="4.5" fill="var(--bw-teal-900)" />
        <rect x="20" y="31" width="4" height="9" rx="2" fill="var(--bw-teal-900)" />
      </g>
    </Ground>
  );
}

// One companion steps out, another steps in: circular arrows between them.
function Rematch() {
  return (
    <Ground label="Two companions with circular arrows between them: if one cancels, we rematch">
      <g fill="none" stroke="var(--bw-teal-700)" strokeWidth="5" strokeLinecap="round">
        <path d="M44 52A44 44 0 0 1 116 52" />
        <path d="M116 108A44 44 0 0 1 44 108" />
      </g>
      <path d="M118 38L120 56L103 54Z" fill="var(--bw-teal-700)" />
      <path d="M42 122L40 104L57 106Z" fill="var(--bw-teal-700)" />
      {/* the companion who can't make it, faded */}
      <g opacity="0.45">
        <path d="M30 106Q32 88 46 86Q60 88 62 106Z" fill="#8f989b" />
        <Head x={46} y={74} r={10} skin="#b9a28a" hair="#6f6a66" />
      </g>
      {/* the new match */}
      <path d="M98 106Q100 88 114 86Q128 88 130 106Z" fill={BLUE} />
      <rect x="110" y="88" width="8" height="18" fill={MUSTARD} />
      <Head x={114} y={74} r={10} />
    </Ground>
  );
}

// Language, mobility and nerves: what families list and companions offer.
function Needs() {
  return (
    <Ground label="Speech bubbles in Hindi and English, a walking stick and a heart: language, mobility and nerves">
      <g>
        <rect x="22" y="34" width="62" height="46" rx="14" fill="var(--bw-paper)" stroke="var(--bw-teal-500)" strokeWidth="2.5" />
        <path d="M38 80L34 94L50 80Z" fill="var(--bw-paper)" stroke="var(--bw-teal-500)" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M37 79H51" stroke="var(--bw-paper)" strokeWidth="4" />
        <text x="53" y="67" textAnchor="middle" fontFamily="var(--font-text)" fontSize="30" fontWeight="600" fill="var(--bw-teal-900)" lang="hi">अ</text>
      </g>
      <g>
        <rect x="78" y="56" width="58" height="42" rx="13" fill="var(--bw-teal-700)" />
        <path d="M118 98L124 110L108 98Z" fill="var(--bw-teal-700)" />
        <text x="107" y="87" textAnchor="middle" fontFamily="var(--font-display)" fontSize="28" fontWeight="700" fill="var(--bw-paper)">A</text>
      </g>
      <path d="M48 104L40 138" stroke="#7c4c24" strokeWidth="6" strokeLinecap="round" />
      <path d="M48 104Q56 98 62 104" fill="none" stroke="#7c4c24" strokeWidth="6" strokeLinecap="round" />
      <path d="M96 124c-6-10 4-18 11-10c7-8 17 0 11 10l-11 12z" fill={RED} />
    </Ground>
  );
}

const BADGES = { checks: Checks, hold: Hold, rematch: Rematch, needs: Needs };

export default function TrustBadge({ icon }) {
  const Badge = BADGES[icon];
  return <Badge />;
}
