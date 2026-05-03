import React, { useState, useRef } from 'react';
import { itinerary } from './data';
import './App.css';

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      setStarted(true);
    }
  };

  return (
    <div className="music-player" title={playing ? 'Pause music' : 'Play devotional music'}>
      <audio ref={audioRef} src="assets/music/bgm.mp3" loop preload="none" />
      <button className="music-btn" onClick={toggle}>
        {!started ? (
          <><span className="music-icon">🎵</span><span className="music-label">Play Music</span></>
        ) : playing ? (
          <><span className="music-icon">⏸</span><span className="music-label">Pause</span></>
        ) : (
          <><span className="music-icon">▶️</span><span className="music-label">Play</span></>
        )}
      </button>
      {playing && (
        <span className="music-bars">
          <span /><span /><span /><span />
        </span>
      )}
    </div>
  );
}

function Header() {
  const today = new Date();
  const tripStart = new Date('2026-05-05');
  const tripEnd = new Date('2026-05-08');
  const daysLeft = Math.ceil((tripStart - today) / (1000 * 60 * 60 * 24));

  return (
    <header className="header">
      <div className="header-ornament top" aria-hidden="true">
        <span>✦</span><span className="line" /><span>🕉</span><span className="line" /><span>✦</span>
      </div>
      <p className="header-sub">Family Pilgrimage</p>
      <h1 className="header-title">Tirupati</h1>
      <p className="header-dates">05 May — 08 May 2026</p>
      {daysLeft > 0 && daysLeft <= 60 ? (
        <div className="countdown-pill">{daysLeft} days to go</div>
      ) : today >= tripStart && today <= tripEnd ? (
        <div className="countdown-pill active">Trip is happening now!</div>
      ) : null}
      <div className="header-ornament bottom" aria-hidden="true">
        <span>✦</span><span className="line" /><span>✦</span>
      </div>
    </header>
  );
}

function EventTimeline({ events }) {
  return (
    <div className="timeline">
      {events.map((ev, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot">{ev.icon}</div>
          <div className="timeline-content">
            <span className="timeline-time">{ev.time}</span>
            <p className="timeline-label">{ev.label}</p>
            <p className="timeline-detail">
              {ev.detail}
              {ev.mapLink && (
                <a href={ev.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">
                  📍 View Map
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PlanSection({ plan }) {
  if (!plan || !plan.length) return null;
  return (
    <div className="plan-section">
      <p className="doc-heading">🧭 Detailed Plan</p>
      <ul className="plan-list">
        {plan.map((item, i) => (
          <li key={i}>
            <span className="plan-dot">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DarshanTable({ rows, title }) {
  if (!rows || !rows.length) return null;
  return (
    <div className="darshan-table-wrap">
      <p className="doc-heading">{title}</p>
      <table className="darshan-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Report Time</th>
            <th>Report At</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'even' : 'odd'}>
              <td>{i + 1}</td>
              <td>{r.name}</td>
              <td><span className="time-badge">{r.time}</span></td>
              <td>{r.report}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PassengerTable({ rows }) {
  if (!rows || !rows.length) return null;
  return (
    <div className="darshan-table-wrap">
      <p className="doc-heading">🚆 Train Passenger Details</p>
      <table className="darshan-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Seat</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p, i) => (
            <tr key={i} className={i % 2 === 0 ? 'even' : 'odd'}>
              <td>{i + 1}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.seat}</td>
              <td>
                <span className={p.status === "CNF" ? "status-green" : "status-red"}>
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocumentList({ documents }) {
  if (!documents.length) return null;
  return (
    <div className="doc-section">
      <p className="doc-heading">Documents & Tickets</p>
      <div className="doc-grid">
        {documents.map((doc, i) => (
          <a
            key={i}
            href={doc.path}
            target="_blank"
            rel="noopener noreferrer"
            className="doc-card"
            onClick={e => e.stopPropagation()}
          >
            <span className="doc-icon">{doc.icon}</span>
            <span className="doc-label">{doc.label}</span>
            <span className="doc-arrow">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function DayCard({ day, isActive, onClick }) {
  return (
    <div
      className={`day-card ${isActive ? 'active' : ''}`}
      style={{ '--accent': day.accentColor, '--day-color': day.color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <div className="day-card-header">
        <div className="day-badge">
          <span className="day-icon">{day.icon}</span>
          <span className="day-label">{day.day}</span>
        </div>
        <span className="day-date">{day.date}</span>
      </div>
      <h2 className="day-title">{day.title}</h2>
      <p className="day-summary">{day.summary}</p>

      <div className={`day-expand ${isActive ? 'open' : ''}`}>
        <EventTimeline events={day.events} />
        <PlanSection plan={day.plan} />
        <DarshanTable rows={day.darshantable} title="Darshan Timings — 06 May 2026" />
        <DarshanTable rows={day.kalyanamtable} title="Kalyanotsavam Timings — 07 May 2026" />
        <PassengerTable rows={day.passengertable} />
        <DocumentList documents={day.documents} />
      </div>

      <button className="toggle-btn">
        {isActive ? 'Hide details ▲' : 'View details ▼'}
      </button>
    </div>
  );
}

function ImportantNotes() {
  return (
    <div className="important-notes">
      <h2>⚠️ Important Notes</h2>
      <ul>
        <li>Original Aadhaar Card with Xerox Copy Also</li>
        <li>2 Pearl pet Empty Bottle per Family - To fill and drink Water</li>
        <li>2/3 Bed sheets per Family</li>
        <li>For All Darshan Dress Code Male - White Pancha/White Shirt/Kurtha</li>
        <li>For All Darshan Dress Code Female - Pattu Saree/Chudidhar with Dupatta</li>
        <li>Face Wet wipes / Phone chargers with Recharge / Sunglasses and Cap to Avoid Sunlight/Heat</li>
        <li>Thick Carry Bags for Carrying Laddus/Shopping Materials Like Bangles/Torans Etc</li>
        <li>Pls do Not forget your Medicines and take it on time</li>
      </ul>
    </div>
  );
}

export default function App() {
  const [activeDay, setActiveDay] = useState(null);
  const toggle = (id) => setActiveDay(prev => prev === id ? null : id);

  return (
    <div className="app">
      <MusicPlayer />
      <Header />
      <main className="main">
        <div className="days-container">
          {itinerary.map(day => (
            <DayCard
              key={day.id}
              day={day}
              isActive={activeDay === day.id}
              onClick={() => toggle(day.id)}
            />
          ))}
        </div>
        <ImportantNotes />
        <footer className="footer">
          <span>🙏</span> Om Namo Venkatesaya <span>🙏</span>
        </footer>
      </main>
    </div>
  );
}