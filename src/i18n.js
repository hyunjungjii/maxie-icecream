// All UI strings in one place.
// Access via: T[lang].key

export const T = {
  ko: {
    // Home
    homeTitle: '맥씨 아이스크림 가게에\n온 걸 환영해!',
    homeSubtitle: '오늘은 어떤 기분이야?',

    // Moods
    moods: {
      happy:   '행복해',
      blank:   '멍해',
      sad:     '속상해',
      excited: '설레',
      tired:   '지쳤어',
    },

    // Input
    inputQuestion: '왜 그런 기분이야?',
    inputPlaceholder: '맥씨에게 이야기해줘...',
    inputSubmit: '아이스크림 받기',

    // Result
    resultSignature: '- 맥씨',
    resultSave: '🗓️ 기록 저장하기',
    resultHome: '🏠 처음으로',
    savedToast: '저장되었어! 🍦',

    // History
    historyTitle: '맥씨와의 기록 🍦',
    historyEmpty: '아직 저장된 기록이 없어요.',

    // Recommendations
    recommendations: {
      happy: {
        name: '햇살 바닐라',
        message: '오늘의 행복한 기분, 따뜻한 바닐라로\n더 달콤하게 만들어줄게!',
        tagline: '퇴근하고 싶어서~~!',
      },
      blank: {
        name: '구름 민트초코',
        message: '멍한 날엔 시원한 민트초코 한 입.\n잠깐 멈춰도 괜찮아.',
        tagline: '그냥 멍하게 있어도 돼.',
      },
      sad: {
        name: '딸기 블러쉬',
        message: '속상한 마음, 달콤한 딸기로\n조금은 녹여볼게.',
        tagline: '맛있는 거 먹으면 좀 나아질 거야.',
      },
      excited: {
        name: '레인보우 소다',
        message: '두근두근 설레는 마음에\n화려한 레인보우 소다 어때?',
        tagline: '오늘 뭔가 좋은 일이 있을 것 같아!',
      },
      tired: {
        name: '말차 라테',
        message: '지쳤을 땐 진한 말차 한 잔.\n맥씨가 옆에 있을게.',
        tagline: '오늘 정말 수고했어.',
      },
    },

    // Date format
    formatDate: (y, m, d) => `${y}년 ${m}월 ${d}일`,
  },

  en: {
    // Home
    homeTitle: "Welcome to Maxie's\nIce Cream Shop!",
    homeSubtitle: 'How are you feeling today?',

    // Moods
    moods: {
      happy:   'Happy',
      blank:   'Spaced out',
      sad:     'Sad',
      excited: 'Excited',
      tired:   'Tired',
    },

    // Input
    inputQuestion: 'Why do you feel that way?',
    inputPlaceholder: 'Tell Maxie what happened today...',
    inputSubmit: 'Get my ice cream',

    // Result
    resultSignature: '- Maxie',
    resultSave: '🗓️ Save Entry',
    resultHome: '🏠 Back to Home',
    savedToast: 'Saved! 🍦',

    // History
    historyTitle: "Memories with Maxie 🍦",
    historyEmpty: 'No entries saved yet.',

    // Recommendations
    recommendations: {
      happy: {
        name: 'Sunshine Vanilla',
        message: "Today's happiness deserves something warm.\nLet's make it even sweeter!",
        tagline: "You're glowing today!",
      },
      blank: {
        name: 'Cloud Mint Choco',
        message: "When your mind wanders, a cool mint choco\nhelps you breathe again.",
        tagline: "It's okay to drift a little.",
      },
      sad: {
        name: 'Strawberry Blush',
        message: "Feeling down? Sweet strawberry\nmight just melt the blues away.",
        tagline: 'Good food makes things a little better.',
      },
      excited: {
        name: 'Rainbow Soda',
        message: "That fluttery feeling inside —\ncelebrate it with a rainbow soda!",
        tagline: 'Something good is coming your way!',
      },
      tired: {
        name: 'Matcha Latte',
        message: "When you're worn out, a rich matcha\nwill keep you company.",
        tagline: "You worked hard today. Really.",
      },
    },

    // Date format
    formatDate: (y, m, d) => {
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      return `${months[m - 1]} ${d}, ${y}`
    },
  },
}
