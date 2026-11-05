import { Timer, Clock, Route } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import Sources from '../components/Sources.jsx';
import s from './Pf.module.css';

const ICONS = { timer: Timer, clock: Clock, route: Route };

// Slide 4: the three things the committee gets back by 8 January (cards),
// then what they decide (one band). No orange. The working is backup A1.
export default function PfKnow({ slide, active }) {
  const { band } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={s.cards}>
        {slide.cards.map((c) => {
          const Icon = ICONS[c.icon];
          return (
            <section key={c.head} className={`${s.card} ${s.cardShort}`}>
              <span className={s.iconCircle} aria-hidden="true">
                <Icon size={40} strokeWidth={2} />
              </span>
              <div>
                <h3 className={s.head}>{c.head}</h3>
                <p className={s.text}>{c.body}</p>
              </div>
            </section>
          );
        })}
      </div>
      <section className={s.band} aria-label={band.lead}>
        <p className={s.bandLead}>{band.lead}</p>
        <ul className={s.bandLines}>
          {band.lines.map((l) => (
            <li key={l.text ?? l.before} className={l.strong ? s.bandStrong : undefined}>
              {l.text ?? (
                <>
                  {l.before} <Tag tag={l.tag} />
                  {l.after}
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
      <div className={s.foot}>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
