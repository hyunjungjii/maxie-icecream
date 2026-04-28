// Mood IDs and styling — labels come from i18n.js
export const MOOD_IDS = ['happy', 'blank', 'sad', 'excited', 'tired']

export const MOOD_META = {
  happy:   { className: 'happy',   emoji: '😊' },
  blank:   { className: 'blank',   emoji: '😶' },
  sad:     { className: 'sad',     emoji: '😢' },
  excited: { className: 'excited', emoji: '🤩' },
  tired:   { className: 'tired',   emoji: '😮‍💨' },
}

// Only non-text data lives here; names/messages/taglines come from i18n.js
export const RECOMMENDATION_COLORS = {
  happy:   '#f5e6c8',
  blank:   '#a8d8c8',
  sad:     '#f4a8b0',
  excited: '#c8b4f0',
  tired:   '#a8c8a0',
}
