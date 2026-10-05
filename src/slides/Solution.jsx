import { Plane, ShieldCheck, HeartHandshake } from 'lucide-react';
import { images } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import StoryImage from '../components/StoryImage.jsx';
import typo from '../styles/type.module.css';
import s from './Split.module.css';

const ICONS = { plane: Plane, shield: ShieldCheck, companion: HeartHandshake };

export default function Solution({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <StoryImage image={images.solution} active={active} />
      <div className={s.column}>
        <Headline size="l2">{slide.headline}</Headline>
        <p className={`${typo.sub} ${s.sub} ${s.subStrong}`}>{slide.sub}</p>
        <ul className={s.iconLines}>
          {slide.lines.map(({ icon, text, detail }) => {
            const Icon = ICONS[icon];
            return (
              <li key={text}>
                <Icon className={s.icon} size={40} strokeWidth={2} aria-hidden="true" />
                <div>
                  <p className={s.lineTitle}>{text}</p>
                  {detail ? <p className={s.lineDetail}>{detail}</p> : null}
                </div>
              </li>
            );
          })}
        </ul>
        {slide.instead ? <p className={s.instead}>{slide.instead}</p> : null}
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
