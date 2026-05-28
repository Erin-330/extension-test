# streak-status-fire.riv 데이터 바인딩

## Rive 파일 정보

| 항목 | 값 |
|------|-----|
| CDN URL | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-status-fire.riv` |
| 아트보드 | `StreakFire` |
| State Machine | `State Machine 1` |

## 렌더링 설정

- `autoplay: true` — 마운트 즉시 재생
- `autoBind: true` — 뷰모델 인스턴스 자동 연결 (데이터 바인딩 필수 옵션)
- `assetLoader` — Pretendard 폰트를 런타임에 주입 (아래 폰트 섹션 참고)

## 데이터 바인딩 구조

`autoBind: true`를 사용하면 `rive.viewModelInstance`를 통해 뷰모델에 접근한다.  
`useViewModelInstanceNumber(path, viewModelInstance)` 훅으로 숫자 값을 주입한다.

| 뷰모델 경로 | 타입 | 데이터 출처 | 설명 |
|------------|------|------------|------|
| `currentStreak` | number | `monthly_streak.current_win_streak` | 현재 연승 수 |
| `longestStreak` | number | `monthly_streak.longest_win_streak` | 최장 연승 수 |

### 바인딩 타이밍

- `rive` 인스턴스가 준비된 이후(의존성: `rive`, `currentStreak`, `longestStreak`)에 값을 주입한다.
- `rive`가 `null`이면 주입하지 않는다.
- 값이 없을 경우 기본값 `0`으로 주입한다.

### 주의사항

- `longestStreak` prop이 전달되어도 현재 구현에서는 `currentStreak` 값으로 두 필드 모두 바인딩한다.  
  → 뷰모델에서 최장 연승과 현재 연승을 별도로 표시하는 경우 각각 다른 값을 넣도록 수정 가능.
- 컴포넌트 언마운트 시 반드시 `rive.cleanup()`을 호출해 메모리를 해제한다.

## 데이터 출처 API

```
GET /quiz/calendar?year=YYYY&month=MM&today=YYYY-MM-DD
```

응답에서 `monthly_streak` 객체를 사용:

| 필드 | 타입 | 설명 |
|------|------|------|
| `current_win_streak` | number | 현재 연승 수 → `currentStreak` 바인딩 |
| `longest_win_streak` | number | 최장 연승 수 → `longestStreak` 바인딩 |

## 폰트 로딩

Rive 내부에서 Pretendard 계열 폰트를 사용한다.  
`assetLoader` 콜백에서 `asset.isFont && asset.name`이 Pretendard 관련 이름(`Pretendard Variable`, `PretendardVariable`, `Pretendard`)을 포함하면 로컬 `.ttf` 파일을 동적으로 주입한다.

- 폰트 파일: `public/fonts/PretendardVariable-{hash}.ttf`
- 주입 유틸: `riveAssetFont(asset, fontUrl)` — asset에 `setFont()`를 호출하는 공통 유틸

## 사이즈 기본값

| prop | 기본값 | 단위 |
|------|--------|------|
| `width` | `18.75` | `rem` |
| `height` | `18.75` | `rem` |

사이즈는 컨테이너 div의 인라인 스타일로 적용되고, `RiveComponent`는 `w-full h-full`로 채운다.

## Props 인터페이스

| prop | 타입 | 필수 | 설명 |
|------|------|------|------|
| `currentStreak` | `number` | 아니오 | 현재 연승 수 (없으면 0) |
| `longestStreak` | `number` | 아니오 | 최장 연승 수 (없으면 0) |
| `width` | `number` | 아니오 | 컴포넌트 너비(rem) |
| `height` | `number` | 아니오 | 컴포넌트 높이(rem) |

## 사용 위치

streak history 페이지 최상단에 배치된다.  
→ `13-streak-history.md` 참고

## 패키지

```bash
yarn add @rive-app/react-canvas
```
