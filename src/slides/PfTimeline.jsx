import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Timeline from '../components/Timeline.jsx';
import Sources from '../components/Sources.jsx';
import s from './Pf.module.css';

// Slide 6: the dates (left) and what the report still covers if the trip
// slips (right). No orange.
export default function PfTimeline({ slide, active }) {
  const { fallback } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.plan}>
        <Timeline steps={slide.steps} tone="paper" />
        <section className={s.fallback} aria-label={fallback.head}>
          <h3 className={s.head}>{fallback.head}</h3>
          <ul className={s.bullets}>
            {fallback.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
