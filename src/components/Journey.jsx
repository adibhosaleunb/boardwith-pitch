import PhoneScreen from './PhoneScreen.jsx';
import EvidenceTag from './EvidenceTag.jsx';
import styles from './Journey.module.css';

// Five steps joined by a route line; the numbers belong here because this
// is a real sequence. A step whose detail is "Planned" shows it as a tag.
export default function Journey({ steps }) {
  return (
    <ol className={styles.journey}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step}>
          <div className={styles.rail}>
            <span className={styles.num} aria-hidden="true">
              {i + 1}
            </span>
          </div>
          <PhoneScreen index={i} />
          <div>
            <p className={styles.title}>
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </p>
            {step.detail === 'Planned' ? (
              <p className={styles.detail}>
                <EvidenceTag kind="projection" text="Planned" />
              </p>
            ) : step.detail ? (
              <p className={styles.detail}>{step.detail}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
