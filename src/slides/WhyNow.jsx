import { Scale } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import WhyNowScene from '../components/WhyNowScene.jsx';
import typo from '../styles/type.module.css';
import split from './Split.module.css';
import s from './WhyNow.module.css';

const ICONS = { rule: Scale };

export default function WhyNow({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <div className={s.scene}>
        <WhyNowScene className={s.svg} />
      </div>
      <div className={split.column}>
        <Headline size="short">{slide.headline}</Headline>
        <p className={`${typo.sub} ${split.sub}`}>{slide.sub}</p>
        <dl className={s.facts}>
          {slide.facts.map((f) => {
            const Icon = f.icon ? ICONS[f.icon] : null;
            return (
              <div key={f.label} className={s.fact}>
                <dt className={s.mark}>
                  {Icon ? (
                    <span className={s.iconWrap} aria-hidden="true">
                      <Icon size={52} strokeWidth={2} />
                    </span>
                  ) : (
                    <span className={s.figure}>{f.value}</span>
                  )}
                </dt>
                <dd className={s.label}>{f.label}</dd>
              </div>
            );
          })}
        </dl>
        <p className={s.point}>{slide.point}</p>
        <Sources items={slide.sources} className={split.sources} />
      </div>
    </Slide>
  );
}
