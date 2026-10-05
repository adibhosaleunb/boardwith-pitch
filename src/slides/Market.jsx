import Slide from '../components/Slide.jsx';
import Headline from '../components/Headline.jsx';
import Rich from '../components/Rich.jsx';
import Sources from '../components/Sources.jsx';
import { Tag } from '../components/EvidenceTag.jsx';
import { TravellerBadge } from '../components/People.jsx';
import s from './Market.module.css';

const TRACK = 640; // px for the largest bar

// India → Canada now (solid), India → US next (dashed). Abstract dots and
// arcs, not a map.
function Routes({ route }) {
  return (
    <svg className={s.routes} viewBox="0 0 600 210" width="600" height="210" aria-hidden="true">
      <path d="M96 176Q160 30 330 46" fill="none" stroke="var(--bw-teal-700)" strokeWidth="6" strokeLinecap="round" />
      <path d="M96 176Q320 84 520 108" fill="none" stroke="var(--bw-teal-500)" strokeWidth="5" strokeDasharray="4 14" strokeLinecap="round" />
      <g transform="translate(214 70) rotate(-18)" fill="var(--bw-teal-700)">
        <path d="M-18 0L11 -3L19 0L11 3Z" />
        <path d="M-1 -2L-10 -14L-5 -14L8 -2Z" />
        <path d="M-1 2L-10 14L-5 14L8 2Z" />
        <path d="M-15 -1L-20 -7L-17 -7L-11 -1Z" />
      </g>
      <circle cx="96" cy="176" r="14" fill="var(--bw-paper)" stroke="var(--bw-teal-900)" strokeWidth="6" />
      <circle cx="330" cy="46" r="14" fill="var(--bw-teal-700)" />
      <circle cx="520" cy="108" r="14" fill="var(--bw-paper)" stroke="var(--bw-teal-500)" strokeWidth="5" />
      <text className={s.place} x="122" y="196">{route.from}</text>
      <text className={s.place} x="354" y="40">{route.now}<tspan className={s.when} dx="10">now</tspan></text>
      <text className={s.place} x="500" y="164">{route.later}<tspan className={s.when} dx="10">next</tspan></text>
    </svg>
  );
}

// The three-year plan: three numbers, each over a small hatched projection
// bar drawn to scale against year 3 (year 1's bar is a sliver, on purpose).
const PLAN_TRACK = 220;

function Plan({ plan }) {
  const top = Math.max(...plan.years.map((y) => y.journeys));
  return (
    <section className={s.plan} aria-label={plan.title}>
      <h3 className={s.planTitle}>
        {plan.title} <Tag tag={plan.tag} />
      </h3>
      <ol className={s.planYears}>
        {plan.years.map((y) => (
          <li key={y.year} className={s.planYear}>
            <span className={s.planWhen}>{y.year}</span>
            <span className={s.planValue}>{y.display}</span>
            <span className={s.planTrack} aria-hidden="true">
              <span className={s.planBar} style={{ width: Math.max(6, Math.round((y.journeys / top) * PLAN_TRACK)) }} />
            </span>
            <span className={s.planWhere}>{y.where}</span>
            <span className={s.planRevenue}>
              <strong>{y.revenue}</strong> {plan.revenueLabel}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Market({ slide, active }) {
  const max = Math.max(...slide.ladder.map((r) => r.value));
  return (
    <Slide slide={slide} active={active}>
      <div className={s.wrap}>
        <Headline>{slide.headline}</Headline>
        <div className={s.grid}>
          <section aria-label={slide.ladderTitle}>
            <h3 className={s.colTitle}>{slide.ladderTitle}</h3>
            <ol className={s.ladder}>
              {slide.ladder.map((r, i) => (
                <li key={r.display} className={`${s.rung} ${s[`rung${i}`]}`}>
                  <span className={s.value}>{r.display}</span>
                  <span className={s.track} aria-hidden="true">
                    <span className={s.bar} style={{ width: Math.max(30, Math.round((r.value / max) * TRACK)) }} />
                  </span>
                  <span className={s.label}>
                    <Rich text={r.label} /> <Tag tag={r.tag} />
                  </span>
                </li>
              ))}
            </ol>
            {slide.plan ? <Plan plan={slide.plan} /> : null}
          </section>
          <section className={s.next} aria-label={slide.nextTitle}>
            <h3 className={s.colTitle}>{slide.nextTitle}</h3>
            <Routes route={slide.next.route} />
            <p className={s.routeText}>
              {slide.next.route.text} <Tag tag={slide.next.route.tag} />
            </p>
            <ul className={s.travellers}>
              {slide.next.travellers.map((t) => (
                <li key={t.figure}>
                  <TravellerBadge figure={t.figure} size={140} />
                  <span>{t.label}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Sources items={slide.sources} className={s.sources} />
      </div>
    </Slide>
  );
}
