import { ShieldCheck } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import TrustBadge from '../components/TrustBadges.jsx';
import s from './Trust.module.css';

export default function Trust({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <div className={s.wrap}>
        <Headline>{slide.headline}</Headline>
        <ul className={s.blocks}>
          {slide.blocks.map((b) => (
            <li key={b.title} className={s.block}>
              <span className={s.badge}>
                <TrustBadge icon={b.icon} />
              </span>
              <h3 className={s.title}>{b.title}</h3>
              <p className={s.text}>{b.text}</p>
            </li>
          ))}
        </ul>
        <p className={s.foot}>
          <ShieldCheck className={s.footIcon} size={36} strokeWidth={2} aria-hidden="true" />
          <span>{slide.foot}</span>
        </p>
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
