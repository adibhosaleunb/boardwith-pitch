import { company } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Lockup from '../components/Lockup.jsx';
import { money, display } from '../lib/budget.js';
import s from './PfTeal.module.css';

// Slide 7: the ask, and what we're not asking for. The C$110
// (budget.cap − budget.ask) is the one orange element.
export default function PfAsk({ slide, active }) {
  return (
    <Slide slide={slide} active={active} theme="teal">
      <Headline size="ask" className={s.askHeadline}>
        {slide.headline}
      </Headline>
      <div className={s.askCols}>
        <div className={s.askBody}>
          {money.hasTopUp ? <p>{slide.topUp}</p> : null}
          <p>{slide.body}</p>
        </div>
        <section className={s.notAsked} aria-label="Not asked for">
          <p className={s.askValue}>{display.notAsked}</p>
          <p className={s.notAskedLabel}>{slide.notAskedLabel}</p>
        </section>
      </div>
      <div className={s.bottom}>
        <p className={s.close}>{slide.close}</p>
        <div className={s.footer}>
          <Lockup width={220} eager={false} />
          <p className={s.founder}>
            <strong>{company.founder.name}</strong>, {company.founder.title} · {company.email} · {company.website}
          </p>
        </div>
      </div>
    </Slide>
  );
}
