import { ShieldCheck } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import typo from '../styles/type.module.css';
import s from './Backup.module.css';

export default function BackupSafety({ slide, active }) {
  const { checks, notServed, backup, incident, open } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <div className={`${s.cols} ${s.two} ${s.safety}`}>
        <div className={s.stack}>
          <section>
            <h3 className={s.colTitle}>
              <ShieldCheck size={36} strokeWidth={2} className={s.icon} aria-hidden="true" /> {checks.title}
            </h3>
            <p className={typo.body}>
              {checks.items.join(' · ')}. {checks.after}
            </p>
          </section>
          <section>
            <h3 className={s.colTitle}>{notServed.title}</h3>
            <p className={typo.body}>{notServed.text}</p>
          </section>
          <section>
            <h3 className={s.colTitle}>{backup.title}</h3>
            <p className={typo.body}>{backup.text}</p>
          </section>
          <section>
            <h3 className={s.colTitle}>{open.title}</h3>
            <p className={typo.body}>{open.text}</p>
          </section>
        </div>
        <div className={s.stack}>
          <section>
            <h3 className={s.colTitle}>
              {incident.title} <Tag tag={incident.tag} />
            </h3>
            <ul className={s.items}>
              {incident.items.map(([what, then]) => (
                <li key={what} className={typo.body}>
                  <span className={typo.name}>{what}</span> → {then}
                </li>
              ))}
              <li className={typo.body}>{incident.last}</li>
            </ul>
          </section>
        </div>
      </div>
    </Slide>
  );
}
