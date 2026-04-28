import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import InputScreen from './components/InputScreen'
import ResultScreen from './components/ResultScreen'
import HistoryScreen from './components/HistoryScreen'
import { T } from './i18n'

// Screens: 'home' | 'input' | 'result' | 'history'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [selectedMood, setSelectedMood] = useState(null)
  const [history, setHistory] = useState([])
  const [savedToast, setSavedToast] = useState(false)
  const [lang, setLang] = useState('ko')
  const [userReason, setUserReason] = useState('')

  const t = T[lang]

  function handleSelectMood(mood) {
    setSelectedMood(mood)
    setScreen('input')
  }

  function handleSubmitReason(reason) {
    setUserReason(reason)
    setScreen('result')
  }

  function handleSave() {
    const today = new Date()
    const dateStr = t.formatDate(today.getFullYear(), today.getMonth() + 1, today.getDate())
    setHistory(prev => [...prev, {
      moodId: selectedMood.id,
      moodLabel: t.moods[selectedMood.id],
      date: dateStr,
      reason: userReason,
    }])
    setSavedToast(true)
    setTimeout(() => setSavedToast(false), 2000)
  }

  function goHome() {
    setScreen('home')
    setSelectedMood(null)
    setUserReason('')
  }

  const langToggle = (
    <button
      onClick={() => setLang(l => l === 'ko' ? 'en' : 'ko')}
      style={{
        position: 'absolute',
        top: 36,
        right: screen === 'home' ? 72 : 28,
        background: 'white',
        border: 'none',
        borderRadius: '20px',
        padding: '5px 12px',
        fontSize: '12px',
        fontWeight: '700',
        fontFamily: 'var(--font)',
        color: 'var(--text-mid)',
        cursor: 'pointer',
        boxShadow: 'var(--shadow)',
        zIndex: 10,
        letterSpacing: '0.5px',
      }}
    >
      {lang === 'ko' ? 'EN' : 'KR'}
    </button>
  )

  return (
    <div className="phone-shell">
      {screen === 'home' && (
        <HomeScreen
          t={t}
          lang={lang}
          onSelectMood={handleSelectMood}
          onHistory={() => setScreen('history')}
          langToggle={langToggle}
        />
      )}
      {screen === 'input' && selectedMood && (
        <InputScreen
          t={t}
          mood={selectedMood}
          onSubmit={handleSubmitReason}
          onBack={() => setScreen('home')}
          langToggle={langToggle}
        />
      )}
      {screen === 'result' && selectedMood && (
        <ResultScreen
          t={t}
          mood={selectedMood}
          userReason={userReason}
          onBack={goHome}
          onSave={handleSave}
          savedToast={savedToast}
          langToggle={langToggle}
        />
      )}
      {screen === 'history' && (
        <HistoryScreen
          t={t}
          history={history}
          onBack={() => setScreen('home')}
          langToggle={langToggle}
        />
      )}
    </div>
  )
}
