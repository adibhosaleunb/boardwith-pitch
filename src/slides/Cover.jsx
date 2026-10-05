import { company, images } from '../data/startupData.js';
import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Lockup from '../components/Lockup.jsx';
import WindowFrame from '../components/WindowFrame.jsx';
import typo from '../styles/type.module.css';
import s from './Cover.module.css';

export default function Cover({ slide, active }) {
  return (
    <Slide slide={slide} active={active} theme="teal" className={s.slide}>
      <div className={s.text}>
        <Lockup width={440} />
        <Headline as="h1" size="hero" className={s.hero}>
          {slide.headline}
        </Headline>
        {slide.sub ? <p className={`${typo.sub} ${s.sub}`}>{slide.sub}</p> : null}
        <div className={`${typo.body} ${s.contact}`}>
          <p>
            <span className={typo.name}>{company.founder.name}</span>, {company.founder.title}
          </p>
          <p>{company.email}</p>
          <p>{company.website}</p>
          <p className={`${typo.caption} ${s.confidential}`}>{company.confidentialLine}</p>
        </div>
      </div>
      <div className={s.window}>
        <WindowFrame image={images.cover} />
      </div>
    </Slide>
  );
}
