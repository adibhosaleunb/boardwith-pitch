import { Timer, Clock } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import StepRoute from '../components/StepRoute.jsx';
import Sources from '../components/Sources.jsx';
import typo from '../styles/type.module.css';
import s from './Pf.module.css';

const ICONS = { timer: Timer, clock: Clock };

// Slide 2: the six steps of one trip on our own stack, and the two things
// we measure around it. No orange.
export default function PfTest({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p>
      <div className={s.route}>
        <StepRoute steps={slide.steps} />
      </div>
      <div className={s.panels}>
        {slide.panels.map((p) => {
          const Icon = ICONS[p.icon];
          return (
            <section key={p.head} className={s.panel}>
              <span className={s.iconCircle} aria-hidden="true">
                <Icon size={40} strokeWidth={2} />
              </span>
              <div>
                <h3 className={s.head}>{p.head}</h3>
                <p className={s.text}>{p.body}</p>
              </div>
            </section>
          );
        })}
      </div>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
