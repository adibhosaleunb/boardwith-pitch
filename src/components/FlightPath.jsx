import { Plane } from 'lucide-react';
import { slides } from '../data/startupData.js';
import { CORE_COUNT, counterFor } from '../slides/index.js';
import styles from './FlightPath.module.css';

const Y = 1030;

// Geometry: full width on most slides; under the text column on L2 slides.
function geometry(compact) {
  return compact
    ? { start: 120, step: 56, gap: 52, bstep: 30, counterX: 950 }
    : { start: 120, step: 140, gap: 84, bstep: 34, counterX: 1800 };
}

// Flight-path progress along the bottom: ten dots for the core slides,
// a hollow one per backup, a small orange plane at the current slide.
export default function FlightPath({ index, onGo }) {
  const current = slides[index];
  const compact = current.layout === 'L2';
  const onTeal = current.theme === 'teal';
  const g = geometry(compact);

  const xs = slides.map((_, i) =>
    i < CORE_COUNT ? g.start + i * g.step : g.start + (CORE_COUNT - 1) * g.step + g.gap + (i - CORE_COUNT) * g.bstep,
  );
  const lastCore = xs[CORE_COUNT - 1];
  const travelledTo = Math.min(xs[index], lastCore);

  return (
    <nav className={`${styles.path} ${onTeal ? styles.teal : ''}`} aria-label="Slides">
      <svg className={styles.svg} width="1920" height="64" viewBox={`0 ${Y - 32} 1920 64`} aria-hidden="true">
        <line className={styles.rest} x1={g.start} y1={Y} x2={lastCore} y2={Y} />
        <line className={styles.travelled} x1={g.start} y1={Y} x2={travelledTo} y2={Y} />
      </svg>
      <ol className={styles.dots}>
        {slides.map((s, i) => {
          const backup = i >= CORE_COUNT;
          const isCurrent = i === index;
          const done = !backup && i < index;
          return (
            <li key={s.id} style={{ left: xs[i] }}>
              <button
                type="button"
                className={[styles.dot, backup ? styles.hollow : '', done ? styles.done : '', isCurrent ? styles.current : ''].join(' ')}
                aria-label={`Go to slide ${s.number}: ${s.title}`}
                aria-current={isCurrent ? 'step' : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  onGo(i);
                }}
              >
                {isCurrent ? <Plane className={styles.plane} size={30} strokeWidth={2} aria-hidden="true" /> : <span />}
              </button>
            </li>
          );
        })}
      </ol>
      <p className={styles.counter} style={{ right: 1920 - g.counterX }} aria-hidden="true">
        {counterFor(index)}
      </p>
    </nav>
  );
}
