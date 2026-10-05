// Flat vector people, drawn in the same palette as the airport illustrations:
// the visiting mother in her mustard coat and red shawl, and the young
// companion in the blue jacket. The figures are groups, so the same mother
// appears in the go-to-market loop (A6), on the problem slide's route and in
// the market slide's row of travellers.
const C = {
  skinOld: '#a8704a',
  skin: '#b07b46',
  skinWarm: '#9c6a44',
  hairWhite: '#ece8df',
  hairGrey: '#b9b4ab',
  hairDark: '#2b1f18',
  coat: '#e0a33e',
  shawl: '#c75046',
  trousersOld: '#9a4a45',
  shoe: '#4a3b33',
  kurta: 'var(--bw-teal-500)',
  kurtaShade: 'var(--bw-teal-700)',
  trousers: '#2f3e56',
  jacket: '#3e76b3',
  jacketShade: '#2f5f93',
  shirt: '#e6ab39',
  jeans: '#34476b',
  sneaker: '#f3efe6',
  suitcase: '#9d6332',
  suitcaseDark: '#7c4c24',
  roller: '#c75046',
  rollerDark: '#a03d34',
  cardigan: '#7b5aa6',
  cardiganShade: '#634689',
  ink: '#2b2622',
};

function Face({ cx, cy, glasses = false, shades = false }) {
  return (
    <g>
      {shades ? (
        <g>
          <rect x={cx - 12} y={cy - 4.5} width="10.5" height="8" rx="3" fill={C.ink} />
          <rect x={cx + 1.5} y={cy - 4.5} width="10.5" height="8" rx="3" fill={C.ink} />
          <path d={`M${cx - 1.5} ${cy - 1} h3`} stroke={C.ink} strokeWidth="1.6" />
        </g>
      ) : glasses ? (
        <g fill="none" stroke={C.ink} strokeWidth="1.6">
          <circle cx={cx - 6} cy={cy} r="4.6" />
          <circle cx={cx + 6} cy={cy} r="4.6" />
          <path d={`M${cx - 1.4} ${cy} h2.8`} />
        </g>
      ) : (
        <g fill={C.ink}>
          <circle cx={cx - 5.5} cy={cy} r="1.7" />
          <circle cx={cx + 5.5} cy={cy} r="1.7" />
        </g>
      )}
      <path d={`M${cx - 4.5} ${cy + 8} Q${cx} ${cy + 12} ${cx + 4.5} ${cy + 8}`} fill="none" stroke={C.ink} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

// ── Groups (coordinates in the 240 × 240 figure space) ───────────────

export function Suitcase({ x = 30, y = 170 }) {
  return (
    <g transform={`translate(${x - 30} ${y - 170})`}>
      <rect x="30" y="170" width="30" height="46" rx="5" fill={C.suitcase} />
      <path d="M38 170v-7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7" fill="none" stroke={C.suitcaseDark} strokeWidth="3" />
      <path d="M38 176v34M52 176v34" stroke={C.suitcaseDark} strokeWidth="2.4" />
    </g>
  );
}

// The visiting mother: white hair, glasses, mustard coat, red shawl.
// `arm`: 'down' (hand by her side) or 'phone' (holding her phone up).
export function Mother({ arm = 'down' }) {
  return (
    <g>
      <rect x="77" y="176" width="9" height="40" rx="3" fill={C.trousersOld} />
      <rect x="92" y="176" width="9" height="40" rx="3" fill={C.trousersOld} />
      <ellipse cx="81" cy="217" rx="8" ry="4" fill={C.shoe} />
      <ellipse cx="97" cy="217" rx="8" ry="4" fill={C.shoe} />
      <path d="M68 112Q70 100 89 98Q108 100 110 112L115 184Q89 191 63 184Z" fill={C.coat} />
      <path d="M70 106Q64 146 67 182L76 182Q75 142 83 104Z" fill={C.shawl} />
      <path d="M76 100Q89 111 103 100L101 95Q89 104 78 95Z" fill={C.shawl} />
      <path d="M72 116L66 150L73 152L80 120Z" fill={C.coat} />
      <circle cx="69" cy="153" r="5" fill={C.skinOld} />
      {arm === 'phone' ? (
        <g>
          <path d="M104 112L112 138L100 146L95 140L104 134L99 116Z" fill={C.coat} />
          <rect x="91" y="124" width="12" height="20" rx="2.5" fill="#2e3236" transform="rotate(-8 97 134)" />
          <circle cx="98" cy="142" r="5" fill={C.skinOld} />
        </g>
      ) : (
        <g>
          <path d="M106 116L112 150L105 152L99 120Z" fill={C.coat} />
          <circle cx="109" cy="153" r="5" fill={C.skinOld} />
        </g>
      )}
      <rect x="84" y="86" width="10" height="12" fill={C.skinOld} />
      <circle cx="89" cy="76" r="17" fill={C.skinOld} />
      <path d="M72 76Q71 57 89 57Q107 57 106 74Q100 64 89 64Q78 64 72 76Z" fill={C.hairWhite} />
      <circle cx="75" cy="63" r="7.5" fill={C.hairWhite} />
      <Face cx={89} cy={78} glasses />
    </g>
  );
}

function Daughter() {
  return (
    <g>
      <rect x="138" y="154" width="11" height="60" rx="4" fill={C.trousers} />
      <rect x="153" y="154" width="11" height="60" rx="4" fill={C.trousers} />
      <ellipse cx="143" cy="216" rx="9" ry="4" fill={C.ink} />
      <ellipse cx="159" cy="216" rx="9" ry="4" fill={C.ink} />
      <path d="M130 42Q151 34 170 44L174 94Q168 100 162 94L160 62Q151 56 142 62L140 94Q134 100 127 94Z" fill={C.hairDark} />
      <path d="M131 94Q133 83 151 81Q169 83 171 94L176 162Q151 169 126 162Z" fill={C.kurta} />
      <path d="M151 81Q169 83 171 94L176 162Q163 166 151 166Z" fill={C.kurtaShade} opacity="0.25" />
      {/* arm around her mother */}
      <path d="M136 96Q120 98 105 106L108 115Q122 108 139 108Z" fill={C.kurta} />
      <circle cx="104" cy="111" r="5.5" fill={C.skin} />
      <path d="M167 98L174 142L167 144L161 102Z" fill={C.kurta} />
      <circle cx="171" cy="146" r="5.5" fill={C.skin} />
      <rect x="146" y="72" width="10" height="12" fill={C.skin} />
      <circle cx="151" cy="62" r="17" fill={C.skin} />
      <path d="M134 60Q137 42 151 42Q166 42 168 60Q159 50 147 52Q139 54 134 60Z" fill={C.hairDark} />
      <Face cx={151} cy={64} />
    </g>
  );
}

// A student: backpack, roller case, and (optionally) a wave.
export function Student({ wave = true }) {
  return (
    <g>
      {/* roller case */}
      <path d="M71 158V140M83 158V140M69 140H85" fill="none" stroke="#8a8f91" strokeWidth="3" strokeLinecap="round" />
      <rect x="60" y="158" width="34" height="54" rx="6" fill={C.roller} />
      <path d="M68 166v38M86 166v38" stroke={C.rollerDark} strokeWidth="2.4" />
      <circle cx="67" cy="215" r="3.5" fill={C.ink} />
      <circle cx="87" cy="215" r="3.5" fill={C.ink} />

      {/* backpack behind */}
      <rect x="136" y="96" width="20" height="52" rx="7" fill={C.shirt} />

      <rect x="106" y="150" width="12" height="62" rx="4" fill={C.jeans} />
      <rect x="122" y="150" width="12" height="62" rx="4" fill={C.jeans} />
      <ellipse cx="110" cy="215" rx="10" ry="4.5" fill={C.sneaker} stroke="#d8d0c2" strokeWidth="1" />
      <ellipse cx="130" cy="215" rx="10" ry="4.5" fill={C.sneaker} stroke="#d8d0c2" strokeWidth="1" />
      <path d="M98 98Q100 86 120 84Q140 86 142 98L146 158Q120 164 94 158Z" fill={C.jacket} />
      <path d="M114 87L126 87L124 152L116 152Z" fill={C.shirt} />
      <path d="M101 94L106 94L108 144L103 144Z" fill={C.shirt} />
      {/* arm to the case handle */}
      <path d="M102 100L82 138L89 142L109 106Z" fill={C.jacketShade} />
      <circle cx="84" cy="141" r="5.5" fill={C.skin} />
      {wave ? (
        <g>
          <path d="M137 98L158 60L166 64L145 104Z" fill={C.jacket} />
          <circle cx="163" cy="57" r="6" fill={C.skin} />
        </g>
      ) : (
        <g>
          <path d="M138 100L146 146L139 148L132 104Z" fill={C.jacketShade} />
          <circle cx="143" cy="150" r="5.5" fill={C.skin} />
        </g>
      )}
      <rect x="115" y="72" width="10" height="13" fill={C.skin} />
      <circle cx="120" cy="62" r="17" fill={C.skin} />
      <path d="M103 60Q102 42 120 42Q138 42 137 58Q130 50 120 51Q110 51 103 60Z" fill={C.hairDark} />
      <Face cx={120} cy={64} />
    </g>
  );
}

// A traveller facing a language barrier: an older man in a purple cardigan,
// a speech bubble with a Devanagari letter and a question mark.
function LanguageTraveller() {
  return (
    <g>
      <rect x="102" y="152" width="12" height="62" rx="4" fill="#5b4a3e" />
      <rect x="118" y="152" width="12" height="62" rx="4" fill="#5b4a3e" />
      <ellipse cx="106" cy="216" rx="9.5" ry="4.2" fill={C.ink} />
      <ellipse cx="126" cy="216" rx="9.5" ry="4.2" fill={C.ink} />
      <path d="M94 100Q96 88 116 86Q136 88 138 100L142 160Q116 166 90 160Z" fill={C.cardigan} />
      <path d="M110 89L116 110L122 89Z" fill="#efe6d2" />
      <path d="M116 110V158" stroke={C.cardiganShade} strokeWidth="2.2" />
      <path d="M98 102L90 146L97 148L104 106Z" fill={C.cardiganShade} />
      <circle cx="93" cy="150" r="5.5" fill={C.skinWarm} />
      <path d="M134 102L142 146L135 148L128 106Z" fill={C.cardiganShade} />
      <circle cx="139" cy="150" r="5.5" fill={C.skinWarm} />
      <rect x="111" y="74" width="10" height="13" fill={C.skinWarm} />
      <circle cx="116" cy="64" r="17" fill={C.skinWarm} />
      <path d="M99 62Q99 46 116 45Q133 46 133 60Q126 53 116 53Q106 53 99 62Z" fill={C.hairGrey} />
      <Face cx={116} cy={66} glasses />
      {/* speech bubble */}
      <g transform="translate(142 8)">
        <path d="M6 0H70Q80 0 80 10V38Q80 48 70 48H24L12 60L14 48H6Q-4 48 -4 38V10Q-4 0 6 0Z" fill="var(--bw-paper)" stroke="var(--bw-teal-500)" strokeWidth="2.5" />
        <text x="22" y="34" fontFamily="var(--font-text)" fontSize="26" fontWeight="600" fill="var(--bw-teal-900)" textAnchor="middle" lang="hi">अ</text>
        <text x="54" y="34" fontFamily="var(--font-display)" fontSize="28" fontWeight="700" fill="var(--bw-orange-ink)" textAnchor="middle">?</text>
      </g>
    </g>
  );
}

// A traveller with low vision: dark glasses and a white cane with a red tip.
function VisionTraveller() {
  return (
    <g>
      <rect x="102" y="152" width="12" height="62" rx="4" fill="#3c4a57" />
      <rect x="118" y="152" width="12" height="62" rx="4" fill="#3c4a57" />
      <ellipse cx="106" cy="216" rx="9.5" ry="4.2" fill={C.ink} />
      <ellipse cx="126" cy="216" rx="9.5" ry="4.2" fill={C.ink} />
      <path d="M94 100Q96 88 116 86Q136 88 138 100L142 160Q116 166 90 160Z" fill="#6f9f8a" />
      <path d="M116 88V160" stroke="#58856f" strokeWidth="2.2" />
      <path d="M98 102L90 146L97 148L104 106Z" fill="#58856f" />
      <circle cx="93" cy="150" r="5.5" fill={C.skin} />
      {/* white cane */}
      <path d="M140 136L170 214" stroke="#f4f1ea" strokeWidth="4" strokeLinecap="round" />
      <path d="M140 136L170 214" stroke="#cfc8bb" strokeWidth="1" strokeLinecap="round" />
      <path d="M164 198L170 214" stroke="#c75046" strokeWidth="4.4" strokeLinecap="round" />
      <path d="M134 102L141 140L134 142L128 106Z" fill="#58856f" />
      <circle cx="139" cy="138" r="5.5" fill={C.skin} />
      <rect x="111" y="74" width="10" height="13" fill={C.skin} />
      <circle cx="116" cy="64" r="17" fill={C.skin} />
      <path d="M98 66Q96 44 116 44Q136 44 134 64Q128 52 116 52Q104 52 98 66Z" fill={C.hairDark} />
      <Face cx={116} cy={64} shades />
    </g>
  );
}

// ── Composed figures ─────────────────────────────────────────────────

// A visiting mother with her adult daughter, and the mother's suitcase (A6).
export function FamilyFigure({ size = 240, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 240 240" aria-hidden="true">
      <circle cx="120" cy="124" r="108" fill="var(--bw-teal-100)" />
      <ellipse cx="118" cy="222" rx="86" ry="7" fill="var(--bw-teal-900)" opacity="0.08" />
      <Suitcase />
      <Mother />
      <Daughter />
    </svg>
  );
}

// A student flying home: backpack, roller case and a wave (A6).
export function StudentFigure({ size = 240, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 240 240" aria-hidden="true">
      <circle cx="120" cy="124" r="108" fill="var(--bw-peach)" />
      <ellipse cx="116" cy="222" rx="80" ry="7" fill="var(--bw-teal-900)" opacity="0.08" />
      {/* a plane on its way home */}
      <g transform="translate(196 48) rotate(-30)" fill="var(--bw-orange-ink)">
        <path d="M-14 0L10 -2.4L16 0L10 2.4Z" />
        <path d="M-1 -1.6L-8 -11L-4 -11L6 -1.6Z" />
        <path d="M-1 1.6L-8 11L-4 11L6 1.6Z" />
        <path d="M-12 -0.8L-16 -6L-13.5 -6L-9 -0.8Z" />
      </g>
      <Student />
    </svg>
  );
}

// The mother alone, standing with her suitcase: used on the problem slide's
// route, where she stands in the Toronto layover. Drawn in its own box so it
// can be placed and scaled inside other SVGs.
export function MotherAlone({ x = 0, y = 0, height = 120, arm = 'down' }) {
  const s = height / 176;
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-26 -48)`}>
      <ellipse cx="78" cy="221" rx="48" ry="5" fill="var(--bw-teal-900)" opacity="0.1" />
      <Suitcase x={30} y={170} />
      <Mother arm={arm} />
    </g>
  );
}

// One traveller per circle, for the market slide's "more travellers" row.
const TRAVELLERS = {
  parent: { bg: 'var(--bw-teal-100)', draw: () => <><Suitcase x={30} y={170} /><g transform="translate(18 0)"><Mother /></g></> },
  student: { bg: 'var(--bw-peach)', draw: () => <Student wave={false} /> },
  language: { bg: 'var(--bw-mist)', draw: () => <LanguageTraveller /> },
  vision: { bg: '#eef0f1', draw: () => <VisionTraveller /> },
};

export function TravellerBadge({ figure, size = 150, className = '' }) {
  const t = TRAVELLERS[figure];
  return (
    <svg className={className} width={size} height={size} viewBox="20 0 220 240" aria-hidden="true">
      <circle cx="122" cy="132" r="100" fill={t.bg} />
      <ellipse cx="120" cy="222" rx="64" ry="6" fill="var(--bw-teal-900)" opacity="0.08" />
      {t.draw()}
    </svg>
  );
}
