import { useState } from 'react'
import MaxieCharacter from './MaxieCharacter'

export default function InputScreen({ t, mood, onSubmit, onBack, langToggle }) {
  const [reason, setReason] = useState('')

  return (
    <div className="screen input-screen">
      <button className="back-btn" onClick={onBack}>←</button>
      {langToggle}

      <div className="mood-badge" style={{ marginTop: '48px' }}>
        {t.moods[mood.id]}
      </div>

      <MaxieCharacter size={130} pose="idle" />

      <p className="input-question">{t.inputQuestion}</p>

      <textarea
        className="reason-textarea"
        placeholder={t.inputPlaceholder}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        maxLength={200}
      />

      <button
        className="submit-btn"
        onClick={() => onSubmit(reason)}
      >
        {t.inputSubmit}
      </button>
    </div>
  )
}
