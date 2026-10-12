import { slides, pitch } from '../data/startupData.js';
import { CORE_COUNT } from '../slides/index.js';
import styles from './Timer.module.css';

export const fmt = (secs) => {
  const s = Math.max(0, Math.round(Math.abs(secs)));
  return `${secs < 0 ? '−' : ''}${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

// Cumulative "should be done by" time for each core slide.
export function targets(version) {
  let t = 0;
  return slides.map((s, i) => {
    if (i >= CORE_COUNT) return null;
    t += s.timing[version];
    return { slot: s.timing[version], by: t };
  });
}

// Counts down from the short pitch (3:00 on this branch) or 20:00, by the
// active notes tab, and turns orange-ink when the presenter is behind.
export default function Timer({ version, elapsed, running, index, onToggle, onReset, compact = false }) {
  const total = version === 'five' ? pitch.shortSeconds : pitch.longSeconds;
  const target = targets(version)[index];
  const behind = target ? elapsed > target.by : elapsed > total;
  const remaining = total - elapsed;

  return (
    <div className={`${styles.timer} ${behind ? styles.behind : ''} ${compact ? styles.compact : ''}`} role="timer" aria-live="off">
      <span className={styles.clock}>{fmt(remaining)}</span>
      {!compact && (
        <span className={styles.target}>
          {target ? (
            <>
              This slide {fmt(target.slot)} · done by {fmt(target.by)}
            </>
          ) : (
            'Backup slide'
          )}
          {behind ? <strong> · behind</strong> : null}
        </span>
      )}
      {!compact && (
        <span className={styles.buttons}>
          <button type="button" onClick={onToggle}>
            {running ? 'Pause' : elapsed > 0 ? 'Resume' : 'Start'} <kbd>T</kbd>
          </button>
          <button type="button" onClick={onReset}>
            Reset <kbd>R</kbd>
          </button>
        </span>
      )}
    </div>
  );
}
