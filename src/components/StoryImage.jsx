import { useEffect, useRef, useState } from 'react';
import SafeImage from './SafeImage.jsx';
import { useDeck } from '../lib/DeckContext.js';
import styles from './StoryImage.module.css';

// The solution's warm airport scene, full bleed on the right half (template
// L2). On the live stage it enters black and white and fills with colour each
// time the slide is shown; in reading mode it does that once, when half the
// picture is in view. Print, thumbnails and reduced motion show full colour.
export default function StoryImage({ image, active = true }) {
  const { mode } = useDeck();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (mode !== 'reading') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.5) return;
        setInView(true);
        io.disconnect();
      },
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [mode]);

  let warm = '';
  if (mode === 'stage') warm = `${styles.warm} ${active ? styles.revealing : styles.waiting}`;
  if (mode === 'reading') warm = `${styles.warm} ${inView ? styles.revealing : styles.waiting}`;

  return (
    <div ref={ref} className={styles.inline}>
      <SafeImage
        src={image.src}
        alt={image.alt}
        eager
        className={`${styles.img} ${styles.on} ${warm}`}
        style={{ objectPosition: image.position }}
      />
    </div>
  );
}
