import { pitch } from '../data/startupData.js';
import Rich from './Rich.jsx';
import Timer from './Timer.jsx';
import styles from './NotesPanel.module.css';

// Drawer under the stage (outside the scaled canvas) with the short live
// script and the longer talking points.
export default function NotesPanel({ slide, index, version, onVersion, timer }) {
  const notes = slide.notes ?? { five: '', twenty: [] };
  return (
    <aside className={styles.panel} aria-label="Speaker notes">
      <header className={styles.head}>
        <div className={styles.tabs} role="tablist" aria-label="Notes version">
          {[
            ['five', pitch.shortLabel],
            ['twenty', pitch.longLabel],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={version === key}
              className={version === key ? styles.on : ''}
              onClick={() => onVersion(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className={styles.where}>
          Slide {slide.number}: {slide.title}
        </p>
        <Timer version={version} index={index} {...timer} />
      </header>
      <div className={styles.body} role="tabpanel">
        {version === 'five' ? (
          <p className={styles.script}>
            <Rich text={notes.five} />
          </p>
        ) : (
          <ul className={styles.points}>
            {notes.twenty.map((pt) => (
              <li key={pt}>
                <Rich text={pt} />
              </li>
            ))}
          </ul>
        )}
        {slide.sources?.length ? (
          <p className={styles.sources}>
            <strong>Sources:</strong> {slide.sources.join(' ')}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
