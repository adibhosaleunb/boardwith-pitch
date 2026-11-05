import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import BudgetTable from '../components/BudgetTable.jsx';
import Rich from '../components/Rich.jsx';
import Sources from '../components/Sources.jsx';
import { money } from '../lib/budget.js';
import s from './Pf.module.css';

// Slide 3: every line of the request (amounts from src/lib/budget.js) and
// what it takes to verify one companion. No orange fill; C$34.48 is
// orange-ink text on white. The C$385 → C$390 note shows only when
// budget.ask > budget.alreadyRequested; it appears nowhere else.
export default function PfDollars({ slide, active }) {
  const { stat } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.dollars}>
        <div>
          <BudgetTable {...slide.table} />
          <p className={s.tableCaption}>{slide.caption}</p>
        </div>
        <div className={s.stats}>
          <div className={s.stat}>
            <p className={`${s.statValue} ${s.orange}`}>{stat.value}</p>
            <p className={s.statLabel}>{stat.label}</p>
          </div>
          {money.hasTopUp ? (
            <p className={s.askedNote}>
              <Rich text={slide.askedNote} />
            </p>
          ) : null}
        </div>
      </div>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
