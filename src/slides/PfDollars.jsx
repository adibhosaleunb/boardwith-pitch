import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import BudgetTable from '../components/BudgetTable.jsx';
import Sources from '../components/Sources.jsx';
import s from './Pf.module.css';

// Slide 3: every line of the request (amounts from src/lib/budget.js) and
// two unit costs. No orange fill; C$34.48 is orange-ink text on white.
export default function PfDollars({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.dollars}>
        <div>
          <BudgetTable {...slide.table} />
          <p className={s.tableCaption}>{slide.caption}</p>
        </div>
        <div className={s.stats}>
          {slide.stats.map((st) => (
            <div key={st.value} className={s.stat}>
              <p className={`${s.statValue} ${s[st.tone]}`}>{st.value}</p>
              <p className={s.statLabel}>{st.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
