# Login Extension

React + TypeScript + Vite + Tailwind 기반 Chrome Extension (Manifest V3) 보일러플레이트입니다. 팝업에 로그인 페이지가 포함되어 있습니다.

## 요구사항

- Node.js >= 18
- npm >= 9

## 사용법

```bash
# 의존성 설치
npm install

# 개발 모드 (HMR)
npm run dev

# 프로덕션 빌드 → dist/
npm run build
```

## Chrome 확장 프로그램 로드

1. `npm run build`로 `dist/` 생성
2. 크롬 주소창에 `chrome://extensions` 입력
3. 우측 상단 "개발자 모드" 활성화
4. "압축해제된 확장 프로그램을 로드합니다" → `dist/` 폴더 선택

## 디렉터리 구조

```
.
├── manifest.config.ts       # MV3 manifest 정의
├── vite.config.ts
├── tailwind.config.js
├── src/
│   ├── popup/
│   │   ├── index.html       # 팝업 진입 HTML
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── pages/
│   │   │   └── LoginPage.tsx
│   │   └── components/
│   │       └── TextField.tsx
│   └── styles/
│       └── globals.css
└── public/                  # manifest icons 등 정적 자산
```
