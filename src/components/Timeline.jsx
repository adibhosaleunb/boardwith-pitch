import styles from './Timeline.module.css';

// A vertical line of dots, one per milestone.
export default function Timeline({ steps }) {
  return (
    <ol className={styles.timeline}>
      {steps.map((st) => (
        <li key={st.when}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.when}>{st.when}:</span> {st.what}
        </li>
      ))}
    </ol>
  );
}
