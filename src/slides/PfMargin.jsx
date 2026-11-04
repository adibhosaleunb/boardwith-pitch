import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Waterfall from '../components/Waterfall.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import Sources from '../components/Sources.jsx';
import { money } from '../lib/budget.js';
import s from './Pf.module.css';

// Slide 5: one trip with every companion check on it (values from
// src/lib/budget.js), and what decides the margin. The "Left before team
// time" bar is the one orange element.
export default function PfMargin({ slide, active }) {
  const { waterfall, line } = slide;
  const steps = money.waterfall.map((st) => ({ ...st, label: waterfall.labels[st.key] }));
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.margin}>
        <div>
          <Waterfall caption={waterfall.caption} steps={steps} />
          <p className={s.footnote}>{slide.footnote}</p>
        </div>
        <div className={s.side}>
          <p className={s.point}>
            {slide.point.split(/(?<=\.) /).map((sentence) => (
              <span key={sentence}>{sentence} </span>
            ))}
          </p>
          <p className={s.text}>
            {line.before} <Tag tag={line.tag} />
            {line.after}
          </p>
          <h3 className={s.optionsHead}>{slide.optionsHead}</h3>
          <ul className={s.bullets}>
            {slide.options.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
