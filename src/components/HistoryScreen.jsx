import { RECOMMENDATION_COLORS } from '../data'

export default function HistoryScreen({ t, history, onBack, langToggle }) {
  return (
    <div className="screen history-screen">
      <button className="back-btn" onClick={onBack}>←</button>
      {langToggle}
      <h2 className="history-title">{t.historyTitle}</h2>

      {history.length === 0 ? (
        <p className="history-empty">{t.historyEmpty}</p>
      ) : (
        <div className="history-list">
          {[...history].reverse().map((entry, i) => {
            const rec = t.recommendations[entry.moodId]
            return (
              <div className="history-card" key={i}>
                <div className="history-card-top">
                  <span className="history-icecream-name">{rec.name}</span>
                  <span className="history-date">{entry.date}</span>
                </div>
                <div className="history-mood-badge">{entry.moodLabel}</div>
                {entry.reason && (
                  <p className="history-msg">"{entry.reason}"</p>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
