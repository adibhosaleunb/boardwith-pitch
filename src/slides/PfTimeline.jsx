import { CircleCheck } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Pf.module.css';

// Backup A3: if the first flight moves, the six steps still run before
// anyone boards (left) and what the 8 January report still has (right).
// Insurance stays in the notes, off the slide. No orange.
export default function PfTimeline({ slide, active }) {
  const { report } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.plan}>
        <ul className={s.checks}>
          {slide.steps.map((st) => (
            <li key={st}>
              <CircleCheck className={s.check} size={40} strokeWidth={2} aria-hidden="true" />
              {st}
            </li>
          ))}
        </ul>
        <section className={s.report} aria-label={report.head}>
          <h3 className={s.head}>{report.head}</h3>
          <ul className={s.bullets}>
            {report.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <p className={s.reportFoot}>{report.foot}</p>
        </section>
      </div>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
