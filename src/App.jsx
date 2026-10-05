import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DeckContext } from './lib/DeckContext.js';
import { deck, CORE_COUNT, counterFor } from './slides/index.js';
import useDeckNavigation from './hooks/useDeckNavigation.js';
import useStageScale from './hooks/useStageScale.js';
import useReadingMode from './hooks/useReadingMode.js';
import Stage from './components/Stage.jsx';
import FlightPath from './components/FlightPath.jsx';
import NotesPanel from './components/NotesPanel.jsx';
import Timer from './components/Timer.jsx';
import Overview from './components/Overview.jsx';
import PlaceholderBadge from './components/PlaceholderBadge.jsx';
import styles from './App.module.css';

const PRINT = new URLSearchParams(window.location.search).has('print');
const STAGE_CTX = { mode: 'stage' };
const READING_CTX = { mode: 'reading' };
const PRINT_CTX = { mode: 'print' };

export default function App() {
  const reading = useReadingMode();
  if (PRINT) return <PrintDeck />;
  if (reading) return <ReadingDeck />;
  return <Presenter />;
}

// ── Live presentation ────────────────────────────────────────────────
function Presenter() {
  const { index, goTo, next, prev } = useDeckNavigation(deck.length);
  const areaRef = useRef(null);
  const scale = useStageScale(areaRef);
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const [version, setVersion] = useState('five');
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const fade = 200;
  const touch = useRef(null);

  useEffect(() => {
    if (!running) return undefined;
    const started = Date.now() - elapsed * 1000;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - started) / 1000)), 250);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const toggleTimer = useCallback(() => setRunning((r) => !r), []);
  const resetTimer = useCallback(() => {
    setRunning(false);
    setElapsed(0);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === 'Escape') {
        setOverview((o) => !o);
        return;
      }
      if (overview) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(CORE_COUNT - 1);
          break;
        case 'a':
        case 'A':
          goTo(CORE_COUNT);
          break;
        case 'f':
        case 'F':
          if (document.fullscreenElement) document.exitFullscreen?.();
          else document.documentElement.requestFullscreen?.().catch(() => {});
          break;
        case 'n':
        case 'N':
          setNotes((n) => !n);
          break;
        case 't':
        case 'T':
          toggleTimer();
          break;
        case 'r':
        case 'R':
          resetTimer();
          break;
        default:
          if (/^[0-9]$/.test(e.key)) goTo(e.key === '0' ? 9 : Number(e.key) - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [overview, next, prev, goTo, toggleTimer, resetTimer]);

  const onClick = (e) => {
    if (e.target.closest('button, a, input, [role="tab"]')) return;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    if (x > 2 / 3) next();
    else if (x < 1 / 3) prev();
  };

  const onTouchStart = (e) => {
    const p = e.touches[0];
    touch.current = { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const p = e.changedTouches[0];
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  };

  const current = deck[index].slide;
  const timer = { elapsed, running, onToggle: toggleTimer, onReset: resetTimer };

  return (
    <DeckContext.Provider value={STAGE_CTX}>
      <div className={styles.app}>
        <Stage
          ref={areaRef}
          scale={scale}
          fade={fade}
          onClick={onClick}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {deck.map(({ slide, Component }, i) => (
            <Component key={slide.id} slide={slide} active={i === index} />
          ))}
          <FlightPath index={index} onGo={goTo} />
        </Stage>

        {notes && <NotesPanel slide={current} index={index} version={version} onVersion={setVersion} timer={timer} />}
        {!notes && (running || elapsed > 0) && (
          <div className={styles.floatingTimer}>
            <Timer version={version} index={index} {...timer} compact />
          </div>
        )}

        <p className="sr-only" aria-live="polite">
          {counterFor(index)}: {current.headline}
        </p>

        {overview && (
          <Overview
            index={index}
            onPick={(i) => {
              goTo(i);
              setOverview(false);
            }}
            onClose={() => setOverview(false)}
          />
        )}
        <PlaceholderBadge />
      </div>
    </DeckContext.Provider>
  );
}

// ── Phones: stacked sections the reader scrolls ──────────────────────
function ReadingDeck() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const id = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (id) document.getElementById(`slide-${id}`)?.scrollIntoView();
  }, []);

  return (
    <DeckContext.Provider value={READING_CTX}>
      <div className={`${styles.reading} is-reading`}>
        <div className={styles.progress} aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
        <main>
          {deck.map(({ slide, Component }) => (
            <div key={slide.id} id={`slide-${String(slide.number).toLowerCase()}`}>
              <Component slide={slide} active />
            </div>
          ))}
        </main>
      </div>
    </DeckContext.Provider>
  );
}

// ── ?print: every slide (core and backups), one per 1920 × 1080 page ───
function PrintDeck() {
  const pages = useMemo(
    () =>
      deck.map(({ slide, Component }) => (
        <div key={slide.id} className={styles.page}>
          <Component slide={slide} active />
        </div>
      )),
    [],
  );
  return (
    <DeckContext.Provider value={PRINT_CTX}>
      <div className={styles.print}>{pages}</div>
    </DeckContext.Provider>
  );
}
