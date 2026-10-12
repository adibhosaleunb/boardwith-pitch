import { company, slides } from '../data/startupData.js';
import { useDeck } from '../lib/DeckContext.js';
import styles from './Slide.module.css';

const CORE_TOTAL = slides.filter((s) => typeof s.number === 'number').length;

// Section wrapper: canvas geometry, a11y labelling and the crossfade.
export default function Slide({ slide, total = CORE_TOTAL, active = true, theme, className = '', children }) {
  const { mode } = useDeck();
  const isBackup = typeof slide.number !== 'number';
  const label = isBackup ? `${slide.number}: ${slide.title}` : `${slide.number} of ${total}: ${slide.title}`;
  const hidden = mode === 'stage' && !active;

  return (
    <section
      className={[
        styles.slide,
        styles[mode],
        active ? styles.active : '',
        theme === 'teal' ? `${styles.teal} theme-teal` : '',
        className,
      ].join(' ')}
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={hidden || mode === 'thumb' ? true : undefined}
      inert={hidden || mode === 'thumb' ? true : undefined}
      data-slide={slide.id}
    >
      {children}
      {mode === 'print' && (
        <p className={styles.printLine} data-print-line="">
          {company.printLine}
        </p>
      )}
    </section>
  );
}
