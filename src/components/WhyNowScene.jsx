import { Mother, Suitcase } from './People.jsx';

// Slide 3, full bleed on the right half (960 × 1080): an airport assistance
// desk with its wheelchair sign, a new fee tag hanging from it, three
// wheelchairs parked for the people who need them, and the visiting mother
// beside her suitcase, who can walk but shouldn't fly alone, wondering where
// that leaves her. The fee tag is the slide's one orange element.
function Wheelchair({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {/* back wheel */}
      <circle cx="40" cy="96" r="44" fill="none" stroke="#7d878a" strokeWidth="7" />
      <circle cx="40" cy="96" r="30" fill="none" stroke="#b5bcbf" strokeWidth="3" />
      <circle cx="40" cy="96" r="6" fill="#7d878a" />
      {/* frame */}
      <path d="M8 6L18 70H86L100 120" fill="none" stroke="#6b7477" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 2H16" stroke="#6b7477" strokeWidth="7" strokeLinecap="round" />
      {/* seat and back */}
      <rect x="20" y="58" width="68" height="14" rx="5" fill="var(--bw-teal-500)" />
      <path d="M12 16L20 64" stroke="var(--bw-teal-700)" strokeWidth="13" strokeLinecap="round" />
      {/* footrest and front wheel */}
      <path d="M86 70L98 110H116" fill="none" stroke="#6b7477" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="94" cy="128" r="12" fill="none" stroke="#7d878a" strokeWidth="6" />
    </g>
  );
}

// ISO-style wheelchair pictogram for the sign.
function Pictogram({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="var(--bw-paper)">
      <circle cx="38" cy="14" r="11" />
      <path d="M30 30h14l4 34h26l12 30-10 4-10-24H38z" />
      <path d="M26 46a30 30 0 1 0 38 40l-6-8a20 20 0 1 1-26-28z" />
    </g>
  );
}

export default function WhyNowScene({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 960 1080" width="960" height="1080" role="img"
      aria-label="Illustration: an airport assistance desk with a wheelchair sign and a new fee tag, three wheelchairs parked in front, and an older woman with her suitcase standing to one side, wondering where that leaves her.">
      <defs>
        <linearGradient id="wnWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9eded" />
          <stop offset="1" stopColor="#dfe4e5" />
        </linearGradient>
        <linearGradient id="wnFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6e9ea" />
          <stop offset="1" stopColor="#f3f4f4" />
        </linearGradient>
        <radialGradient id="wnPool" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f6dfae" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f6dfae" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ceiling with light strips */}
      <rect width="960" height="1080" fill="url(#wnWall)" />
      <rect width="960" height="96" fill="#d3d8da" />
      <g fill="#eef0f1" opacity="0.9">
        <rect x="60" y="22" width="840" height="10" rx="5" />
        <rect x="120" y="50" width="720" height="8" rx="4" />
      </g>

      {/* glass wall: sky and a parked aircraft, all greyed */}
      <rect x="0" y="120" width="960" height="300" fill="#e3e8ea" />
      <g fill="#cfd5d8">
        <path d="M520 352h300l40-22h40l-30 30h-20l-34 10H560l-40-6z" />
        <path d="M640 352l60-44h24l-30 44z" />
      </g>
      <g stroke="#c2c9cc" strokeWidth="5">
        {[0, 160, 320, 480, 640, 800, 960].map((x) => (
          <line key={x} x1={x} y1="120" x2={x} y2="420" />
        ))}
        <line x1="0" y1="270" x2="960" y2="270" />
      </g>
      <rect x="0" y="416" width="960" height="14" fill="#cbd1d3" />

      {/* floor */}
      <rect x="0" y="700" width="960" height="380" fill="url(#wnFloor)" />
      <g stroke="#d6dbdd" strokeWidth="2" fill="none">
        <path d="M480 700L-200 1080M480 700L160 1080M480 700L480 1080M480 700L800 1080M480 700L1160 1080" />
        <path d="M0 780H960M0 880H960M0 1000H960" opacity="0.7" />
      </g>

      {/* the assistance desk */}
      <rect x="90" y="560" width="470" height="150" rx="10" fill="var(--bw-teal-700)" />
      <rect x="90" y="560" width="470" height="22" rx="8" fill="var(--bw-teal-900)" opacity="0.35" />
      <rect x="120" y="606" width="410" height="8" rx="4" fill="var(--bw-teal-500)" opacity="0.6" />

      {/* the sign, hanging over the desk */}
      <g stroke="#9aa3a6" strokeWidth="4">
        <line x1="190" y1="96" x2="190" y2="250" />
        <line x1="460" y1="96" x2="460" y2="250" />
      </g>
      <rect x="140" y="246" width="370" height="150" rx="14" fill="var(--bw-teal-700)" />
      <Pictogram x={172} y={268} />
      <g fill="var(--bw-teal-100)">
        <rect x="288" y="290" width="186" height="16" rx="8" />
        <rect x="288" y="322" width="140" height="12" rx="6" opacity="0.8" />
        <rect x="288" y="348" width="164" height="12" rx="6" opacity="0.8" />
      </g>

      {/* the new fee tag: the slide's one orange element */}
      <g transform="translate(400 396) rotate(7)">
        <line x1="20" y1="0" x2="20" y2="26" stroke="#9aa3a6" strokeWidth="3" />
        <path d="M-40 26H80L96 54L80 82H-40Q-50 82 -50 72V36Q-50 26 -40 26Z" fill="var(--bw-orange-400)" />
        <circle cx="-30" cy="54" r="6" fill="#f4efe6" />
        <text x="22" y="66" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="34" fill="var(--bw-teal-900)">Fee</text>
      </g>

      {/* wheelchairs, parked for the people who need them */}
      <ellipse cx="320" cy="842" rx="270" ry="20" fill="#7d878a" opacity="0.12" />
      <Wheelchair x={84} y={700} s={1.02} />
      <Wheelchair x={242} y={706} s={1.02} />
      <Wheelchair x={400} y={712} s={1.02} />

      {/* a warm pool of light where she stands */}
      <ellipse cx="760" cy="932" rx="210" ry="60" fill="url(#wnPool)" />

      {/* the mother and her suitcase, looking at the sign */}
      <g transform="translate(580 500) scale(2.35) translate(-26 -48)">
        <ellipse cx="78" cy="221" rx="54" ry="6" fill="#7d878a" opacity="0.18" />
        <Suitcase x={30} y={170} />
        <Mother />
      </g>

      {/* her question */}
      <g transform="translate(560 470)">
        <circle cx="68" cy="78" r="9" fill="var(--bw-paper)" />
        <circle cx="50" cy="104" r="6" fill="var(--bw-paper)" />
        <rect x="56" y="-14" width="96" height="78" rx="34" fill="var(--bw-paper)" />
        <text x="104" y="45" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="56" fill="var(--bw-grey-600)">?</text>
      </g>
    </svg>
  );
}
