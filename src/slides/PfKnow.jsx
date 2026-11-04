import { Timer, Clock, Route } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Sources from '../components/Sources.jsx';
import s from './Pf.module.css';

const ICONS = { timer: Timer, clock: Clock, route: Route };

// Slide 4: the three things the committee gets back by 8 January. No orange.
export default function PfKnow({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.cards}>
        {slide.cards.map((c) => {
          const Icon = ICONS[c.icon];
          return (
            <section key={c.head} className={s.card}>
              <span className={s.iconCircle} aria-hidden="true">
                <Icon size={40} strokeWidth={2} />
              </span>
              <h3 className={s.head}>{c.head}</h3>
              <p className={s.text}>{c.body}</p>
            </section>
          );
        })}
      </div>
      <p className={s.takeaway}>{slide.takeaway}</p>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
