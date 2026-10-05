import { Tag } from './EvidenceTag.jsx';
import styles from './FundingAllocation.module.css';

// Use-of-funds bar on teal: white segments at stepped opacity. The ask
// number above is the slide's single orange element, so no segment is orange.
const OPACITY = [1, 0.78, 0.58, 0.4, 0.24];

export default function FundingAllocation({ label, funds }) {
  const total = funds.reduce((sum, f) => sum + f.value, 0);
  return (
    <figure className={styles.funds}>
      {label ? <figcaption className={styles.caption}>{label}</figcaption> : null}
      <div className={styles.bar} aria-hidden="true">
        {funds.map((f, i) => (
          <span key={f.label} style={{ flexGrow: f.value / total, opacity: OPACITY[i] }} />
        ))}
      </div>
      <ul className={styles.lines}>
        {funds.map((f, i) => (
          <li key={f.label}>
            <span className={styles.swatch} style={{ opacity: OPACITY[i] }} aria-hidden="true" />
            <span>
              {f.label} <strong className="num">{f.display}</strong> <Tag tag={f.tag} />
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
