import { useEffect, useRef } from 'react';
import { DeckContext } from '../lib/DeckContext.js';
import { deck } from '../slides/index.js';
import styles from './Overview.module.css';

const THUMB_W = 300;
const SCALE = THUMB_W / 1920;
const THUMB_CTX = { mode: 'thumb' };

// Thumbnail grid of every slide, core and backups (Esc).
export default function Overview({ index, onPick, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.querySelector('[aria-current="true"]')?.focus();
  }, []);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="All slides" ref={ref}>
      <div className={styles.head}>
        <p>All slides</p>
        <button type="button" onClick={onClose}>
          Close <kbd>Esc</kbd>
        </button>
      </div>
      <ol className={styles.grid}>
        {deck.map(({ slide, Component }, i) => (
          <li key={slide.id}>
            <button
              type="button"
              className={styles.thumb}
              aria-current={i === index ? 'true' : undefined}
              aria-label={`Go to slide ${slide.number}: ${slide.title}`}
              onClick={() => onPick(i)}
            >
              <span className={styles.frame} style={{ width: THUMB_W, height: (THUMB_W * 9) / 16 }}>
                <span className={styles.canvas} style={{ transform: `scale(${SCALE})` }}>
                  <DeckContext.Provider value={THUMB_CTX}>
                    <Component slide={slide} active />
                  </DeckContext.Provider>
                </span>
              </span>
              <span className={styles.label}>
                <strong>{slide.number}</strong> {slide.title}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
