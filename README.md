# rorr

React 18 + TypeScript + Vite + Tailwind CSS 기반의 프론트엔드 프로젝트입니다. 재사용 가능한 `Button` 컴포넌트와 이를 보여주는 데모 페이지를 포함하고 있습니다.

## 기술 스택

- **React** 18.3
- **TypeScript** 5.6 (strict 모드)
- **Vite** 5.4 (개발 서버 / 번들러)
- **Tailwind CSS** 3.4 (PostCSS + Autoprefixer)

## 요구 사항

- Node.js 18 이상 권장
- npm (저장소에 `package-lock.json` 포함)

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Vite, 기본 포트 5173)
npm run dev

# 프로덕션 빌드 (타입 체크 후 Vite 빌드)
npm run build

# 빌드 결과 미리보기
npm run preview

# 타입 체크만 수행 (산출물 생성 X)
npm run type-check
```

## 프로젝트 구조

```
.
├── index.html              # Vite 엔트리 HTML (#root 마운트)
├── vite.config.ts          # Vite + @vitejs/plugin-react 설정
├── tailwind.config.ts      # Tailwind 콘텐츠 경로 설정
├── postcss.config.js       # tailwindcss + autoprefixer
├── tsconfig.json           # TypeScript strict 설정
└── src
    ├── main.tsx            # React 진입점 (StrictMode + createRoot)
    ├── App.tsx             # Button 데모 페이지
    ├── index.css           # Tailwind 베이스 디렉티브
    └── components
        └── Button
            ├── Button.tsx        # 구현체
            ├── Button.types.ts   # 타입 정의
            └── index.ts          # 공개 export
```

## Button 컴포넌트

`src/components/Button`에 구현되어 있으며, 다음과 같이 사용합니다.

```tsx
import { Button } from './components/Button'

<Button variant="primary" size="md" onClick={() => console.log('clicked')}>
  Click me
</Button>
```

### Props

`ButtonProps`는 표준 `ButtonHTMLAttributes<HTMLButtonElement>`를 확장합니다.

| Prop | 타입 | 기본값 | 설명 |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | 시각적 스타일 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 버튼 크기 |
| `loading` | `boolean` | `false` | 스피너 표시 + 클릭 차단 |
| `disabled` | `boolean` | `false` | 비활성화 |
| `aria-label` | `string` | - | 접근성 라벨 |
| `children` | `ReactNode` | - | 버튼 내용 |
| `onClick`, 기타 표준 button 속성 | - | - | 그대로 전달 |

### 동작 특징

- `loading` 또는 `disabled`가 `true`이면 `disabled`/`aria-disabled`가 설정되고 `onClick`이 호출되지 않습니다.
- `loading` 상태에서는 `aria-busy="true"`와 함께 SVG 스피너가 함께 렌더링됩니다.
- 포커스 시 `focus-visible:ring-*` 유틸리티로 링이 표시되며, 변형(variant)별로 링 색상이 다릅니다.
- 추가 `className`을 전달하면 기본 스타일 뒤에 병합됩니다.

### 데모 페이지

`src/App.tsx`는 variant, size, state(disabled/loading)별로 Button을 렌더링하는 데모입니다. 개발 서버 실행 후 브라우저에서 확인할 수 있습니다.

## 스타일링

- 전역 스타일은 `src/index.css`에서 Tailwind의 `@tailwind base/components/utilities` 디렉티브만 포함합니다.
- Tailwind는 `./index.html`과 `./src/**/*.{ts,tsx}`를 스캔합니다 (`tailwind.config.ts`).
- `index.html`에는 데모 페이지의 배경/타이포 관련 인라인 스타일이 포함되어 있습니다.
