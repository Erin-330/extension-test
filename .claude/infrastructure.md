# 프로젝트 인프라 스펙

> 이 파일의 코드를 그대로 복사해 생성할 것. 임의로 변경하지 말 것.
> 프로젝트를 처음 구성할 때 아래 파일들을 **모두** 생성해야 빌드가 동작한다.

---

## 생성할 파일 목록

| 파일 | 설명 |
|------|------|
| `package.json` | 의존성 정의 |
| `vite.config.js` | Vite 빌드 설정 |
| `public/manifest.json` | Chrome Extension Manifest V3 |
| `public/background.js` | 사이드 패널 오픈 처리 |
| `src/tokens.css` | Design System.md 기반 CSS 변수 전체 |
| `.github/workflows/build.yml` | GitHub Actions CI/CD |
| `.gitignore` | git 제외 파일 |

---

## package.json

```json
{
  "name": "rorr-extension",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@rive-app/canvas": "^2.37.8"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

---

## vite.config.js

```js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        splash:  resolve(__dirname, 'splash.html'),
        login:   resolve(__dirname, 'login.html'),
        profile: resolve(__dirname, 'profile.html'),
        follow:  resolve(__dirname, 'follow.html'),
        rank:    resolve(__dirname, 'rank.html'),
      },
    },
  },
})
```

---

## public/manifest.json

```json
{
  "manifest_version": 3,
  "name": "RORR",
  "version": "1.0.0",
  "description": "스포츠를 더 즐겁게, 함께",
  "permissions": ["sidePanel"],
  "host_permissions": [
    "https://erin-bucket-team.s3.amazonaws.com/*",
    "https://erin-bucket-team.s3.us-east-1.amazonaws.com/*"
  ],
  "content_security_policy": {
    "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
  },
  "action": {
    "default_title": "RORR"
  },
  "side_panel": {
    "default_path": "splash.html"
  },
  "background": {
    "service_worker": "background.js"
  }
}
```

---

## public/background.js

```js
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id })
})
```

---

## .github/workflows/build.yml

```yaml
name: Build and Package Chrome Extension

on:
  push:
    branches:
      - develop

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Package extension as zip
        run: |
          cd dist
          zip -r ../rorr-extension.zip .

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: rorr-extension
          path: rorr-extension.zip
          retention-days: 30
```

> **주의**: GitHub Actions 버전은 반드시 위 그대로 사용할 것.
> `checkout@v5`, `setup-node@v6`, `upload-artifact@v6` 등 존재하지 않는 버전 사용 금지.
> `npm ci` 대신 `npm install` 사용 — `package-lock.json` 없이도 동작하도록.

---

## .gitignore

```
node_modules/
dist/
```

---

## src/tokens.css

Design System.md의 **9.1 CSS custom properties** 섹션 코드를 그대로 사용할 것.

추가로 파일 최상단에 Pretendard 폰트 import를 포함할 것:

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css');
```

이후 Design System.md의 `:root { … }` 블록과 `[data-theme="dark"] { … }` 블록을 그대로 붙여넣을 것.

---

## 페이지별 HTML 공통 규칙

모든 `[page].html`은 다음 두 줄을 반드시 포함할 것:

```html
<link rel="stylesheet" href="./src/tokens.css" />
…
<script type="module" src="./src/[page].js"></script>
```

페이지별 스펙은 CLAUDE.md의 Spec Files 읽기 규칙을 따를 것.
