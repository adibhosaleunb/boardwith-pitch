import { MotherAlone } from './People.jsx';
import styles from './JourneyGap.module.css';

// Slide 2: one trip, Delhi → Toronto → Fredericton. Airline help is a short
// solid teal stretch at each airport; everything between (the flights and the
// Toronto layover) is a grey dashed line marked "alone", with the mother
// standing on her own in the layover. Grey is alone; teal is help.
const W = 1680;
const H = 400;
const Y = 222; // the route

// x positions along the route
const X = {
  del: 70,
  delGate: 230,
  yyzIn: 590,
  yyzOut: 660,
  layover: [770, 900, 1030],
  yyzGate: 1110,
  yyzBoard: 1180,
  yfcIn: 1460,
  yfc: 1610,
};

function Arc({ from, to }) {
  const mid = (from + to) / 2;
  const peak = 96;
  return (
    <g>
      <path className={styles.alone} d={`M${from} ${Y} Q${mid} ${peak - 40} ${to} ${Y}`} />
      <g transform={`translate(${mid} ${(Y + peak - 40) / 2 + 2}) rotate(0)`} className={styles.plane}>
        <path d="M-22 0L14 -3.5L24 0L14 3.5Z" />
        <path d="M-2 -2.5L-12 -17L-6 -17L9 -2.5Z" />
        <path d="M-2 2.5L-12 17L-6 17L9 2.5Z" />
        <path d="M-19 -1L-25 -9L-21 -9L-14 -1Z" />
      </g>
    </g>
  );
}

function Help({ from, to }) {
  return <line className={styles.help} x1={from} y1={Y} x2={to} y2={Y} />;
}

function Node({ x, code, city, anchor = 'middle' }) {
  return (
    <g>
      <circle className={styles.node} cx={x} cy={Y} r="15" />
      <text className={styles.code} x={x} y={Y + 72} textAnchor={anchor}>
        {code}
        <tspan className={styles.city} dx="12">
          {city}
        </tspan>
      </text>
    </g>
  );
}

export default function JourneyGap({ journey }) {
  const [del, yyz, yfc] = journey.stops;
  const flight1Mid = (X.delGate + X.yyzIn) / 2;
  const flight2Mid = (X.yyzBoard + X.yfcIn) / 2;
  const layoverMid = (X.yyzOut + X.yyzGate) / 2;
  return (
    <figure className={styles.figure}>
      <svg className={styles.svg} viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img"
        aria-label={`${del.city} to ${yyz.city} to ${yfc.city}. Airline help at each airport only; alone on both flights and through the Toronto layover: ${yyz.layover.join(', ')}.`}>
        {/* the Toronto layover: a quiet grey band behind the route */}
        <rect className={styles.band} x={X.yyzOut - 10} y={Y - 168} width={X.yyzGate - X.yyzOut + 20} height={238} rx="22" />

        {/* alone: the flights and the layover */}
        <Arc from={X.delGate} to={X.yyzIn} />
        <Arc from={X.yyzBoard} to={X.yfcIn} />
        <line className={styles.alone} x1={X.yyzOut} y1={Y} x2={X.yyzGate} y2={Y} />

        {/* airline help: one airport at a time */}
        <Help from={X.del} to={X.delGate} />
        <Help from={X.yyzIn} to={X.yyzOut} />
        <Help from={X.yyzGate} to={X.yyzBoard} />
        <Help from={X.yfcIn} to={X.yfc} />

        {/* the three things she does alone in Toronto */}
        {yyz.layover.map((step, i) => (
          <g key={step}>
            <circle className={styles.tick} cx={X.layover[i]} cy={Y} r="7" />
            <text className={styles.step} x={X.layover[i]} y={Y + 44} textAnchor="middle">
              {step}
            </text>
          </g>
        ))}

        {/* she stands alone between the first two steps */}
        <MotherAlone x={X.layover[0] + 30} y={Y - 150} height={144} arm="phone" />

        {/* labels above the gaps */}
        <text className={styles.alonelabel} x={flight1Mid} y="38" textAnchor="middle">{journey.flight}</text>
        <text className={styles.alonelabel} x={flight2Mid} y="38" textAnchor="middle">{journey.flight}</text>
        <text className={styles.alonelabel} x={layoverMid} y="38" textAnchor="middle">{journey.layover}</text>

        {/* airports */}
        <Node x={X.del} code={del.code} city={del.city} anchor="start" />
        <circle className={styles.node} cx={X.yyzIn} cy={Y} r="12" />
        <circle className={styles.node} cx={X.yyzBoard} cy={Y} r="12" />
        <text className={styles.code} x={layoverMid} y={Y + 118} textAnchor="middle">
          {yyz.code}
          <tspan className={styles.city} dx="12">{yyz.city}</tspan>
        </text>
        <Node x={X.yfc} code={yfc.code} city={yfc.city} anchor="end" />

        {/* key */}
        <g transform={`translate(0 ${H - 26})`}>
          <line className={styles.help} x1="4" y1="0" x2="64" y2="0" />
          <text className={styles.key} x="80" y="9">{journey.help} {journey.helpNote}</text>
          <line className={styles.alone} x1="430" y1="0" x2="490" y2="0" />
          <text className={styles.key} x="506" y="9">Alone</text>
        </g>
      </svg>
    </figure>
  );
}
