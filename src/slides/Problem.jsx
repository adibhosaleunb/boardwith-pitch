import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import JourneyGap from '../components/JourneyGap.jsx';
import s from './Problem.module.css';

// Split a value like "25–30 min" into the figure and its unit.
const parts = (v) => {
  const m = v.match(/^(.*?)(\s*(?:min|%))$/);
  return m ? [m[1], m[2].trim()] : [v, ''];
};

export default function Problem({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <div className={s.wrap}>
        <Headline>{slide.headline}</Headline>
        <div className={s.diagram}>
          <JourneyGap journey={slide.journey} />
        </div>
        <dl className={s.numbers}>
          {slide.numbers.map((n) => {
            const [fig, unit] = parts(n.value);
            return (
              <div key={n.value} className={s.number}>
                <dt className={s.figure}>
                  {fig}
                  {unit ? <span className={unit === '%' ? s.pct : s.unit}>{unit === '%' ? '%' : ` ${unit}`}</span> : null}
                </dt>
                <dd className={s.label}>{n.label}</dd>
              </div>
            );
          })}
        </dl>
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
