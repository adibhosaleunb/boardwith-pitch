import styles from './Waterfall.module.css';

// Slide 8: one trip as a waterfall. The family's payment is the first bar;
// each cost steps down from it; what Boardwith keeps is the last bar, in
// orange (the slide's one orange element). Insurance is a yearly policy paid
// from the raise, so it shows as a dashed marker with no height.
const W = 1000;
const H = 470;
const BASE = 360; // y of the baseline
const TOP = 70; // y of the tallest bar's top
const COL = 166;
const BAR = 112;

export default function Waterfall({ caption, steps }) {
  const total = steps[0].value;
  const k = (BASE - TOP) / total;
  let level = 0;
  const bars = steps.map((st, i) => {
    const x = i * COL + (COL - BAR) / 2;
    let from;
    let to;
    if (st.kind === 'total') {
      from = 0;
      to = st.value;
      level = st.value;
    } else if (st.kind === 'kept') {
      from = 0;
      to = st.value;
    } else {
      from = level + st.value;
      to = level;
      level = from;
    }
    return { ...st, x, from, to, y: BASE - to * k, h: Math.max(0, (to - from) * k) };
  });

  return (
    <figure className={styles.figure}>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
      <svg className={styles.svg} viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img"
        aria-label={steps.map((st) => `${st.label}: ${st.display}`).join('; ')}>
        {/* connectors from each bar's end to the next bar */}
        {bars.slice(0, -1).map((b, i) => {
          const next = bars[i + 1];
          const y = b.kind === 'total' ? b.y : BASE - b.from * k;
          if (next.kind === 'kept') return null;
          return <line key={`c${b.key}`} className={styles.connector} x1={b.x + BAR} y1={y} x2={next.x} y2={y} />;
        })}
        <line className={styles.base} x1="0" y1={BASE} x2={W} y2={BASE} />

        {bars.map((b) => (
          <g key={b.key}>
            {b.kind === 'budget' ? (
              <rect className={styles.budget} x={b.x} y={b.y - 9} width={BAR} height="18" rx="4" />
            ) : (
              <rect className={styles[b.kind]} x={b.x} y={b.y} width={BAR} height={Math.max(b.h, 3)} rx="5" />
            )}
            <text className={`${styles.value} ${b.kind === 'kept' ? styles.valueKept : ''}`} x={b.x + BAR / 2} y={(b.kind === 'budget' ? b.y - 9 : b.y) - 16} textAnchor="middle">
              {b.display}
            </text>
            <text className={styles.label} x={b.x + BAR / 2} y={BASE + 44} textAnchor="middle">
              {b.label}
            </text>
            {b.note ? (
              <text className={styles.note} x={b.x + BAR / 2} y={BASE + 78} textAnchor="middle">
                {b.note}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
    </figure>
  );
}
