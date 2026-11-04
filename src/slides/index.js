import { slides } from '../data/startupData.js';
import { fillDeep } from '../lib/budget.js';
import PfCover from './PfCover.jsx';
import PfTest from './PfTest.jsx';
import PfDollars from './PfDollars.jsx';
import PfKnow from './PfKnow.jsx';
import PfMargin from './PfMargin.jsx';
import PfTimeline from './PfTimeline.jsx';
import PfAsk from './PfAsk.jsx';
import PfSources from './PfSources.jsx';

// prototype-funding-pitch: seven core slides and one backup (A1). The Gate 1
// and 3-minute components (Cover, Problem, Solution, Opportunity, Close, the
// backups and the rest) stay in the repo, unused here, so the pitch
// branches stay mergeable (gate1-final and 3min-pitch use them).
const COMPONENTS = {
  'pf-cover': PfCover,
  'pf-test': PfTest,
  'pf-dollars': PfDollars,
  'pf-know': PfKnow,
  'pf-margin': PfMargin,
  'pf-timeline': PfTimeline,
  'pf-ask': PfAsk,
  'pf-sources': PfSources,
};

// Copy tokens such as {ask} are filled from src/lib/budget.js here, so every
// component, the notes panel and the screen-reader line get the numbers.
export const deck = slides.map((slide) => ({ slide: fillDeep(slide), Component: COMPONENTS[slide.id] }));

export const CORE_COUNT = slides.filter((s) => typeof s.number === 'number').length;

// '#/1' … '#/7', '#/a1'
export const hashFor = (index) => `#/${String(slides[index].number).toLowerCase()}`;

export function indexFromHash(hash) {
  const key = hash.replace(/^#\/?/, '').toLowerCase();
  const i = slides.findIndex((s) => String(s.number).toLowerCase() === key);
  return i === -1 ? 0 : i;
}

export const counterFor = (index) => {
  const n = slides[index].number;
  return typeof n === 'number' ? `${n} / ${CORE_COUNT}` : n;
};
