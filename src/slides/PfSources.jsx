import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import s from './Pf.module.css';

// Backup A2: the published price behind every line on slide 3. No orange.
export default function PfSources({ slide, active }) {
  const { table } = slide;
  return (
    <Slide slide={slide} active={active}>
      <Headline>{slide.headline}</Headline>
      <table className={s.sourcesTable}>
        <thead>
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(([vendor, price, page]) => (
            <tr key={vendor}>
              <th scope="row">{vendor}</th>
              <td>{price}</td>
              <td>{page}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={s.a1Caption}>{slide.caption}</p>
    </Slide>
  );
}
