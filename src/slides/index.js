import { slides } from '../data/startupData.js';
import Cover from './Cover.jsx';
import Problem from './Problem.jsx';
import Solution from './Solution.jsx';
import Opportunity from './Opportunity.jsx';
import Close from './Close.jsx';
import GoToMarket from './GoToMarket.jsx';
import Competition from './Competition.jsx';
import Projections from './Projections.jsx';
import BackupEvidence from './BackupEvidence.jsx';
import BackupMarket from './BackupMarket.jsx';
import BackupEconomics from './BackupEconomics.jsx';
import BackupSafety from './BackupSafety.jsx';

// 3min-pitch: five core slides. The Gate 1 components for why now, how it
// works, trust, market, business model, team and the ask stay in the repo
// (gate1-final uses them) but aren't in this deck.
const COMPONENTS = {
  cover: Cover,
  problem: Problem,
  solution: Solution,
  opportunity: Opportunity,
  close: Close,
  'go-to-market': GoToMarket,
  competition: Competition,
  projections: Projections,
  evidence: BackupEvidence,
  'market-detail': BackupMarket,
  economics: BackupEconomics,
  safety: BackupSafety,
};

export const deck = slides.map((slide) => ({ slide, Component: COMPONENTS[slide.id] }));

export const CORE_COUNT = slides.filter((s) => typeof s.number === 'number').length;

// '#/1' … '#/10', '#/a1' … '#/a7'
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
