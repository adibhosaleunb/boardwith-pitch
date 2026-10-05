import { Building2 } from 'lucide-react';
import { team } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import TeamMember from '../components/TeamMember.jsx';
import Sources from '../components/Sources.jsx';
import s from './Team.module.css';

export default function Team({ slide, active }) {
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <ul className={s.traction}>
        {slide.traction.map((t) => (
          <li key={t.label}>
            {t.value ? <p className={s.tValue}>{t.value}</p> : <p className={s.tName}>{t.name}</p>}
            <p className={s.tLabel}>{t.label}</p>
          </li>
        ))}
      </ul>
      <div className={s.people}>
        {team.map((p) => (
          <TeamMember key={p.name} person={p} row />
        ))}
      </div>
      <div className={s.bottom}>
        <p className={s.partnersLine}>
          <Building2 className={s.partnerIcon} size={32} strokeWidth={2} aria-hidden="true" />
          <span>{slide.partners}</span>
        </p>
        <Sources items={slide.sources} />
      </div>
    </Slide>
  );
}
