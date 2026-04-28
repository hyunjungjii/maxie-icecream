import MaxieCharacter from './MaxieCharacter'
import { MOOD_IDS, MOOD_META } from '../data'

export default function HomeScreen({ t, onSelectMood, onHistory, langToggle }) {
  return (
    <div className="screen home-screen">
      <button className="home-icon-btn" onClick={onHistory} title="기록 보기">
        🗓️
      </button>
      {langToggle}

      <h1 className="home-title">
        {t.homeTitle.split('\n').map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        ))}
      </h1>
      <p className="home-subtitle">{t.homeSubtitle}</p>

      <MaxieCharacter size={130} pose="idle" />

      <div className="mood-list">
        {MOOD_IDS.map((id) => (
          <button
            key={id}
            className={`mood-btn ${MOOD_META[id].className}`}
            onClick={() => onSelectMood({ id, ...MOOD_META[id] })}
          >
            {t.moods[id]}
          </button>
        ))}
      </div>
    </div>
  )
}
