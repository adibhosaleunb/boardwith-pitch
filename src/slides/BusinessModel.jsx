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
      {slide.sub ? <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p> : null}
      <div className={s.grid}>
        <div>
          <Waterfall {...slide.waterfall} />
          {slide.under ? <p className={s.under}>{slide.under}</p> : null}
        </div>
        <div className={`${s.levers} ${slide.leversTitle ? s.titled : ''}`}>
          {slide.leversTitle ? <h3 className={s.leversTitle}>{slide.leversTitle}</h3> : null}
          {slide.levers.map((l) => (
            <div key={l.value} className={s.lever}>
              <p className={typo.medNum}>{l.value}</p>
              <p className={s.leverLabel}>
                {l.label} <Tag tag={l.tag} />
              </p>
            </div>
          ))}
          {slide.conservative ? <p className={s.conservative}>{slide.conservative}</p> : null}
        </div>
      </div>
      <div className={s.foot}>
        {slide.caption ? <p className={typo.caption}>{slide.caption}</p> : null}
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
