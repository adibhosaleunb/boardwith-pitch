import { money, num } from '../lib/budget.js';
import styles from './BudgetTable.module.css';

// Prototype-funding slide 3: line, what it buys, and the amount. Every
// amount comes from src/lib/budget.js by row id; the copy from the slide.
export default function BudgetTable({ head, rows }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {head.map((h, i) => (
            <th key={h} scope="col" className={i === head.length - 1 ? styles.amount : ''}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => {
          const buys = r.id === 'request' && !money.asksForRequest && r.buysOtherAsk ? r.buysOtherAsk : r.buys;
          return (
            <tr key={r.id} className={r.strong ? styles.strong : ''}>
              <th scope="row">{r.line}</th>
              <td>{buys}</td>
              <td className={`num ${styles.amount}`}>{num(money.amounts[r.id], 2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
