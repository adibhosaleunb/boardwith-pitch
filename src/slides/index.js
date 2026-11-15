import { slides } from '../data/startupData.js';
import Cover from './Cover.jsx';
import Problem from './Problem.jsx';
import Solution from './Solution.jsx';
import BusinessModel from './BusinessModel.jsx';
import Close from './Close.jsx';

// final-pitch: five core slides and no backups (five minutes, no Q&A).
// Slide 4 reuses the Gate 1 business model layout for one trip's money.
// The other Gate 1 and 3-minute components (why now, how it works, trust,
// market, opportunity, team, the ask, the backups) stay in the repo, unused
// here, so the branches merge cleanly.
const COMPONENTS = {
  cover: Cover,
  problem: Problem,
  solution: Solution,
  'trip-money': BusinessModel,
  close: Close,
};

export const deck = slides.map((slide) => ({ slide, Component: COMPONENTS[slide.id] }));

export const CORE_COUNT = slides.filter((s) => typeof s.number === 'number').length;

// '#/1' … '#/5'
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
