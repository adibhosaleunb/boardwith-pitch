import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Rich from '../components/Rich.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import m from './Market.module.css';
import s from './Opportunity.module.css';

const TRACK = 560; // px for the largest bar

// Slide 4 of the 3-minute pitch: how big (the Gate 1 market ladder, left)
// and what one journey earns (the Gate 1 business model, right).
export default function Opportunity({ slide, active }) {
  const max = Math.max(...slide.ladder.map((r) => r.value));
  return (
    <Slide slide={slide} active={active}>
      <div className={m.wrap}>
        <Headline>{slide.headline}</Headline>
        <div className={s.grid}>
          <section aria-label={slide.ladderTitle}>
            <h3 className={m.colTitle}>{slide.ladderTitle}</h3>
            <ol className={m.ladder}>
              {slide.ladder.map((r, i) => (
                <li key={r.display} className={`${m.rung} ${m[`rung${i}`]} ${s.rung}`}>
                  <span className={m.value}>{r.display}</span>
                  <span className={m.track} aria-hidden="true">
                    <span className={m.bar} style={{ width: Math.max(30, Math.round((r.value / max) * TRACK)) }} />
                  </span>
                  <span className={m.label}>
                    <Rich text={r.label} /> <Tag tag={r.tag} />
                  </span>
                </li>
              ))}
            </ol>
            <p className={s.nextRoute}>
              {slide.nextRoute.text} <Tag tag={slide.nextRoute.tag} />
            </p>
          </section>
          <section className={s.money} aria-label={slide.money.title}>
            <h3 className={m.colTitle}>{slide.money.title}</h3>
            <dl className={s.rows}>
              {slide.money.rows.map((row) => (
                <div key={row.value} className={s.row}>
                  <dt className={s.value}>{row.value}</dt>
                  <dd className={s.label}>
                    {row.label} <Tag tag={row.tag} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
        <Sources items={slide.sources} className={m.sources} />
      </div>
    </Slide>
  );
}
