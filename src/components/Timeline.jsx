import { Tag } from './EvidenceTag.jsx';
import styles from './Timeline.module.css';

// A vertical line of dots, one per milestone. tone 'teal' (default) sits on
// the teal slides; 'paper' on white. A step may carry an evidence tag, and
// `strong: true` sets the whole step in bold.
export default function Timeline({ steps, tone = 'teal' }) {
  return (
    <ol className={`${styles.timeline} ${tone === 'paper' ? styles.paper : ''}`}>
      {steps.map((st) => (
        <li key={st.when} className={st.strong ? styles.strong : undefined}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.when}>{st.when}:</span> {st.what}
          {st.tag ? (
            <>
              {' '}
              <Tag tag={st.tag} />
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
