import SafeImage from '../components/SafeImage.jsx';
import s from './ProofPanel.module.css';

// Slide 3's right half when real screenshots of the pilot are supplied
// (`slide.proof.items[].src`). Three captioned screenshots, stacked, on mist.
export const proofReady = (proof) => Boolean(proof?.items?.length) && proof.items.every((i) => i.src);

export default function ProofPanel({ proof }) {
  return (
    <section className={s.panel} aria-label={proof.title}>
      <h3 className={s.title}>{proof.title}</h3>
      <ul className={s.items}>
        {proof.items.map((item) => (
          <li key={item.caption} className={s.item}>
            <div className={s.frame}>
              <SafeImage src={item.src} alt={item.alt} className={s.img} />
            </div>
            <p className={s.caption}>{item.caption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
