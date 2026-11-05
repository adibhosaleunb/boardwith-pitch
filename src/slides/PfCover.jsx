import { company } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Lockup from '../components/Lockup.jsx';
import { display } from '../lib/budget.js';
import typo from '../styles/type.module.css';
import s from './PfTeal.module.css';

// Slide 1: the test in one line, and the ask up front. The C$390
// (budget.ask) is the one orange element. The C$385 → C$390 note lives
// on slide 3 only.
export default function PfCover({ slide, active }) {
  const { askCard } = slide;
  return (
    <Slide slide={slide} active={active} theme="teal">
      <div className={s.coverText}>
        <Lockup width={440} />
        <Headline as="h1" size="hero" className={s.hero}>
          {slide.headline}
        </Headline>
        <p className={`${typo.sub} ${s.coverSub}`}>{slide.sub}</p>
      </div>
      <section className={s.askCard} aria-label="The ask">
        <p className={s.askValue}>{display.ask}</p>
        <p className={s.askLabel}>{askCard.label}</p>
      </section>
      <p className={`${s.founder} ${s.coverFounder}`}>
        <strong>{company.founder.name}</strong>, {company.founder.title} · {company.email} · {company.website}
      </p>
    </Slide>
  );
}
