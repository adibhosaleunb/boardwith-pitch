import { Check, ShieldCheck, Languages, UserRound, Lock, Video, HeartHandshake } from 'lucide-react';
import EvidenceTag from './EvidenceTag.jsx';
import styles from './PhoneScreen.module.css';

// Concept screens for slide 5 (brief, 12.6). Sample data only: no real
// airlines, people, ratings or logos.

function Chips() {
  return (
    <div className={styles.chips}>
      <span className={styles.chip} lang="hi">हिंदी <span lang="en">Hindi</span></span>
      <span className={styles.chip} lang="mr">मराठी <span lang="en">Marathi</span></span>
    </div>
  );
}

function Avatar() {
  return (
    <span className={styles.avatar} aria-hidden="true">
      <UserRound size={34} strokeWidth={2} />
    </span>
  );
}

function AddFlights() {
  return (
    <>
      <p className={styles.h}>Your mother’s trip</p>
      <div className={styles.flight}>DEL → YYZ, 14 Dec</div>
      <div className={styles.flight}>YYZ → YFC, 14 Dec</div>
      <p className={styles.label}>
        <Languages size={14} strokeWidth={2} aria-hidden="true" /> Language
      </p>
      <Chips />
      <p className={styles.label}>
        <HeartHandshake size={14} strokeWidth={2} aria-hidden="true" /> Needs
      </p>
      <div className={styles.chips}>
        <span className={styles.chip}>First flight alone</span>
        <span className={styles.chip}>Some English</span>
      </div>
      <span className={styles.button}>Find a companion</span>
    </>
  );
}

function Tick({ children }) {
  return (
    <li>
      <span className={styles.tick} aria-hidden="true">
        <Check size={13} strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

function Checked() {
  return (
    <>
      <div className={styles.side}>
        <Avatar />
        <p className={styles.h}>Companion</p>
      </div>
      <ul className={styles.checks}>
        <Tick>ID and selfie: verified</Tick>
        <Tick>Criminal record: clear</Tick>
        <Tick>Police clearance: received</Tick>
      </ul>
      <div className={styles.side}>
        <Avatar />
        <p className={styles.h}>Traveller</p>
      </div>
      <ul className={styles.checks}>
        <Tick>ID and selfie: verified</Tick>
      </ul>
    </>
  );
}

function Matched() {
  return (
    <>
      <div className={styles.route} aria-label="Route DEL to YYZ to YFC, both legs matched">
        <span className={styles.stop}>DEL</span>
        <span className={styles.leg} />
        <span className={styles.stop}>YYZ</span>
        <span className={styles.leg} />
        <span className={styles.stop}>YFC</span>
      </div>
      <p className={styles.h}>Same flights, both legs</p>
      <Chips />
      <p className={styles.line}>
        <ShieldCheck size={14} strokeWidth={2} aria-hidden="true" /> All checks complete
      </p>
      <p className={styles.line}>
        <Lock size={14} strokeWidth={2} aria-hidden="true" /> Payment held until arrival
      </p>
      <div className={styles.buttons}>
        <span className={styles.ghost}>Say hello</span>
        <span className={styles.button}>Confirm match</span>
      </div>
    </>
  );
}

function Meet() {
  return (
    <>
      <div className={styles.pair} aria-hidden="true">
        <span className={styles.avatar}>
          <UserRound size={30} strokeWidth={2} />
        </span>
        <span className={`${styles.avatar} ${styles.avatarWarm}`}>
          <UserRound size={30} strokeWidth={2} />
        </span>
      </div>
      <p className={styles.h}>Meet your companion</p>
      <p className={styles.line}>
        <Video size={14} strokeWidth={2} aria-hidden="true" /> Video call, 12 Dec, 7 pm
      </p>
      <p className={styles.line}>Family joins too</p>
      <span className={styles.button}>Join the call</span>
    </>
  );
}

function Together() {
  const events = [
    ['06:10', 'Departed Delhi'],
    ['12:05', 'Landed in Toronto'],
    ['13:20', 'Through immigration'],
    ['14:15', 'At the gate for Fredericton'],
  ];
  return (
    <>
      <div className={styles.planned}>
        <EvidenceTag kind="projection" text="Planned" className={styles.smallTag} />
      </div>
      <p className={styles.h}>Today’s trip</p>
      <ol className={styles.timeline}>
        {events.map(([t, e]) => (
          <li key={e}>
            <span className={styles.time}>{t}</span>
            <span>{e}</span>
          </li>
        ))}
      </ol>
    </>
  );
}

const SCREENS = [AddFlights, Checked, Matched, Meet, Together];

export default function PhoneScreen({ index }) {
  const Screen = SCREENS[index];
  return (
    <div className={styles.phone} aria-hidden="true" data-phone="">
      <div className={styles.content}>
        <Screen />
      </div>
      <p className={styles.sample}>Sample data</p>
    </div>
  );
}
