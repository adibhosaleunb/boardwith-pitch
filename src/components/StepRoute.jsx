import { UserPlus, IdCard, ShieldCheck, CreditCard, MessagesSquare, Phone } from 'lucide-react';
import styles from './StepRoute.module.css';

const ICONS = { signup: UserPlus, id: IdCard, record: ShieldCheck, deposit: CreditCard, chat: MessagesSquare, calls: Phone };

// Prototype-funding slide 2: the trip's steps as stops on a dashed route,
// each with the tool that runs it.
export default function StepRoute({ steps }) {
  return (
    <ol className={styles.route} style={{ '--n': steps.length }}>
      {steps.map((st, i) => {
        const Icon = ICONS[st.icon];
        return (
          <li key={st.name} className={styles.step}>
            <span className={styles.stop} aria-hidden="true">
              <Icon size={44} strokeWidth={2} />
            </span>
            <span className={styles.name}>
              <span className="sr-only">{i + 1}. </span>
              {st.name}
            </span>
            <span className={styles.tool}>{st.tool}</span>
          </li>
        );
      })}
    </ol>
  );
}
