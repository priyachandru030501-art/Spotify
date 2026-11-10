import { useState } from 'react'

const drinks = [
  { name: 'Midnight Drive', emoji: '🌃', from: '#1ed760', to: '#0b3d20', origin: 'Nova Lane', grade: 'Midnight Drive (2025)', serve: 'Synthwave', notes: 'Synthwave / Chill', price: '', time: '3:12' },
  { name: 'Golden Hour', emoji: '🌅', from: '#ffb347', to: '#7a2e12', origin: 'Sunny Roads', grade: 'Golden Hour (EP)', serve: 'Indie Pop', notes: 'Indie Pop / Warm', price: '', time: '2:58' },
  { name: 'Neon Skyline', emoji: '🎧', from: '#7f5af0', to: '#1b1040', origin: 'Pixel Hearts', grade: 'Neon Skyline (LP)', serve: 'Electronic', notes: 'Electronic / Dance', price: '', time: '3:45' },
]

const specs = [
  ['File Format', 'OGG / FLAC'],
  ['Bitrate', '320 kbps'],
  ['Sample Rate', '44.1 kHz'],
  ['File Size', '7.4 MB'],
  ['Key / Tempo', 'A Minor / 118 BPM'],
]

export default function App() {
  const [idx, setIdx] = useState(0)
  const d = drinks[idx]
  const next = () => setIdx((i) => (i + 1) % drinks.length)

  return (
    <main className="page">
      <h1 className="brand">Spotify</h1>

      <section className="stage">
        {/* LEFT : media card */}
        <div className="flip" onMouseLeave={next}>
          <div className="flip-inner">
            <div className="face front glass">
              <div className="cover" style={{ background: `linear-gradient(145deg, ${d.from}, ${d.to})` }}>
                <span>{d.emoji}</span>
                <small>{d.name}</small>
              </div>
              <h3>Track Media</h3>
              <p className="hint">Hover to reveal info</p>
            </div>
            <div className="face back glass">
              <h4>Track Media</h4>
              <p className="sub">TRACK METADATA</p>
              <ul>
                <li><b>Title</b><i>{d.name}</i></li>
                <li><b>Artist</b><i>{d.origin}</i></li>
                <li><b>Album</b><i>{d.grade}</i></li>
                <li><b>Genre</b><i>{d.notes}</i></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CENTER : folder with fanning cards */}
        <div className="folder">
          <div className="folder-back" />
          {drinks.map((m, i) => (
            <div key={m.name} className={`mini mini-${i}`}>
              <span className="dot" style={{ background: m.from }} />
              <strong>{m.name}</strong>
              <em>{m.time}</em>
              <div className="ctrl"><i /><i /><i /></div>
            </div>
          ))}
          <div className="folder-front">
            <span className="ring" />
            <b>Spotify</b>
          </div>
        </div>

        {/* RIGHT : specs card */}
        <div className="flip">
          <div className="flip-inner">
            <div className="face front glass center">
              <div className="note">♪</div>
              <div className="dots">·····</div>
              <h3>Audio Profile</h3>
              <p className="hint">Hover to reveal specs</p>
            </div>
            <div className="face back glass">
              <h4>Audio Profile</h4>
              <p className="sub">SPECIFICATIONS</p>
              <ul>
                {specs.map(([k, v]) => (
                  <li key={k}><b>{k}</b><i>{v}</i></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}