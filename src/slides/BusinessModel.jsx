import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Waterfall from '../components/Waterfall.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './BusinessModel.module.css';

export default function BusinessModel({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.grid}>
        <Waterfall {...slide.waterfall} />
        <div className={s.levers}>
          {slide.levers.map((l) => (
            <div key={l.value} className={s.lever}>
              <p className={typo.medNum}>{l.value}</p>
              <p className={s.leverLabel}>
                {l.label} <Tag tag={l.tag} />
              </p>
            </div>
          ))}
          <p className={s.conservative}>{slide.conservative}</p>
        </div>
      </div>
      <div className={s.foot}>
        <p className={typo.caption}>{slide.caption}</p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
