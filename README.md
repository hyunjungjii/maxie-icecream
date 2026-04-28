# 🍦 맥씨 아이스크림

감정 기반 아이스크림 추천 앱 — Maxie's Ice Cream Shop

## 실행 방법

### 1. 의존성 설치
```bash
cd maxie-icecream
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저에서 열기
```
http://localhost:5173
```

---

## 앱 흐름

1. **홈 화면** — 오늘의 기분 선택 (행복해 / 멍해 / 속상해 / 설레 / 지쳤어)
2. **입력 화면** — 기분의 이유를 맥씨에게 이야기
3. **결과 화면** — 맥씨가 추천하는 아이스크림과 메시지
4. **기록 화면** — 저장한 기록 모아보기 (🗓️ 버튼)

## 기술 스택

- React 18 + Vite
- CSS Variables + Pretendard 폰트
- 로컬 상태만 사용 (백엔드 없음)
- 모든 캐릭터/아이스크림 SVG 인라인 렌더링 (외부 이미지 없음)

## 프로젝트 구조

```
src/
  App.jsx              # 메인 상태 관리 & 화면 전환
  data.js              # 기분별 아이스크림 데이터
  index.css            # 전체 스타일
  components/
    HomeScreen.jsx     # 기분 선택 화면
    InputScreen.jsx    # 이유 입력 화면
    ResultScreen.jsx   # 결과 화면
    HistoryScreen.jsx  # 기록 화면
    MaxieCharacter.jsx # 맥씨 캐릭터 SVG
    IceCreamBar.jsx    # 아이스크림 바 SVG
```
