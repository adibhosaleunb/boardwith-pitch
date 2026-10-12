import { team, company } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Lockup from '../components/Lockup.jsx';
import Sources from '../components/Sources.jsx';
import a from './Ask.module.css';
import s from './Close.module.css';

// Slide 5 of the 3-minute pitch: where we are and who we are (left), the
// ask and what this room can give (right). C$75,000 is the one orange element.
export default function Close({ slide, active }) {
  const { where, ask } = slide;
  return (
    <Slide slide={slide} active={active} theme="teal">
      <Headline size="ask" className={a.headline}>
        {slide.headline}
      </Headline>
      <div className={`${a.cols} ${s.cols}`}>
        <section className={a.col} aria-label={where.title}>
          <h3 className={a.colTitle}>{where.title}</h3>
          <dl className={s.numbers}>
            {where.numbers.map((n) => (
              <div key={n.label}>
                <dt className={s.figure}>{n.value}</dt>
                <dd className={s.figLabel}>{n.label}</dd>
              </div>
            ))}
          </dl>
          <p className={s.partner}>{where.partner}</p>
          <h3 className={`${a.colTitle} ${s.teamTitle}`}>{slide.teamTitle}</h3>
          <ul className={s.team}>
            {team.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong>, {p.role}: {p.short}
              </li>
            ))}
          </ul>
        </section>
        <section className={a.col} aria-label={ask.title}>
          <h3 className={a.colTitle}>{ask.title}</h3>
          <p className={a.askValue}>{ask.value}</p>
          <p className={a.instrument}>{ask.instrument}</p>
          <h3 className={`${a.colTitle} ${s.roomTitle}`}>{ask.roomTitle}</h3>
          <ul className={s.room}>
            {ask.room.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className={a.bottom}>
        <p className={a.close}>{slide.close}</p>
        <div className={a.footer}>
          <Lockup width={220} eager={false} />
          <span>{company.email}</span>
          <span>{company.website}</span>
          <Sources items={slide.sources} className={a.sources} />
        </div>
      </div>
    </Slide>
  );
}
