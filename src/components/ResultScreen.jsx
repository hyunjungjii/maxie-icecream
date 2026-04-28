import MaxieCharacter from './MaxieCharacter'
import IceCreamBar from './IceCreamBar'
import { RECOMMENDATION_COLORS } from '../data'

export default function ResultScreen({ t, mood, userReason, onBack, onSave, savedToast, langToggle }) {
  const rec = t.recommendations[mood.id]
  const scoopColor = RECOMMENDATION_COLORS[mood.id]
  const today = new Date()
  const dateStr = t.formatDate(today.getFullYear(), today.getMonth() + 1, today.getDate())

  return (
    <div className="screen result-screen">
      <button className="back-btn" onClick={onBack}>←</button>
      {langToggle}

      <p className="result-date">{dateStr}</p>
      <h2 className="result-icecream-name">{rec.name}</h2>
      <div className="result-mood-badge">{t.moods[mood.id]}</div>

      <div className="result-visual">
        <MaxieCharacter size={120} pose="present" />
        <IceCreamBar color={scoopColor} />
      </div>

      <div className="result-message-card">
        <p className="result-message">
          {`"${rec.message}"`}
        </p>
        <p className="result-signature">{t.resultSignature}</p>
      </div>

      {userReason ? (
        <p className="result-tagline">"{userReason}"</p>
      ) : null}

      <div className="result-actions">
        <button className="action-btn primary" onClick={onSave}>
          {t.resultSave}
        </button>
        <button className="action-btn secondary" onClick={onBack}>
          {t.resultHome}
        </button>
      </div>

      {savedToast && (
        <div style={{
          position: 'fixed',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#2d2d2d',
          color: 'white',
          padding: '10px 24px',
          borderRadius: '50px',
          fontSize: '13px',
          fontFamily: 'var(--font)',
          zIndex: 999,
          animation: 'fadeIn 0.3s ease',
          whiteSpace: 'nowrap',
        }}>
          {t.savedToast}
        </div>
      )}
    </div>
  )
}
