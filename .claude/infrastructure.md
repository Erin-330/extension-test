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

> 새 페이지를 추가할 때마다 `input`에 항목을 추가하고, `public/manifest.json`의 `side_panel.default_path`도 함께 업데이트한다.

```js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // 페이지 추가 시 여기에 항목 추가
        // [페이지명]: resolve(__dirname, '[페이지명].html'),
      },
    },
  },
})
```

---

## public/manifest.json

> `key` 필드는 익스텐션 ID를 고정한다. Google Cloud Console의 oauth2 client_id에 등록된 ID와 일치해야 `chrome.identity.getAuthToken()`이 동작한다. 절대 변경하지 말 것.
> 새 API 서버가 추가되면 `host_permissions`에 도메인을 추가한다.

```json
{
  "manifest_version": 3,
  "name": "RORR",
  "version": "1.0.0",
  "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlJcVL5AJz8x8PTboD2mqMgKVzN44Fk4f31LUgL0KEksQ6WjYLexND7OJBHPnajQ2oz31INREkpUAMq5w9JgxLGp7DH9cQLrX4A8WflS7zxRDUEAuqIjA234iU8D4b+7xG3G18vSrNem5COybIckz/IjlNzWDnYzdvo5xj8UHcUicRzgUqNfGDwrKo+4l+46qTStE1xJuSvIdToEIavVetagk0CE54iQh7ygWPPUwBTtYyMQqL2GsAcrk8wxdY6NH/Q08vZSb8Av2XdUPx6xL6c3qX6wmSdQgpOoSpm2ks3uC4bi70H9sUDrY3d4artItkN1o6CKhnB0165jzaTRgGwIDAQAB",
  "description": "스포츠를 더 즐겁게, 함께",
  "permissions": ["sidePanel", "storage", "tabs", "identity"],
  "oauth2": {
    "client_id": "536646396894-cua1t88l7vb58lnr95np1smk0fairs69.apps.googleusercontent.com",
    "scopes": [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ]
  },
  "host_permissions": [
    "https://erin-bucket-team.s3.amazonaws.com/*",
    "https://erin-bucket-team.s3.us-east-1.amazonaws.com/*",
    "http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com/*"
  ],
  "content_security_policy": {
    "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
  },
  "action": {
    "default_title": "RORR"
  },
  "side_panel": {
    "default_path": "login.html"
  },
  "background": {
    "service_worker": "background.js"
  }
}
```

---

## public/background.js

> `storage`, `tabs` permission이 manifest에 있어야 동작한다.
> auth 모듈(`src/background/auth.ts`)이 있는 경우 webpack/babel로 번들링하여 사용할 것.
> 이 파일은 auth 모듈 없이 동작하는 standalone 버전이다.

```js
'use strict'

// 사이드 패널 열림 상태 추적 (tabId별로)
const sidePanelState = new Map()
// 닫혀 있다가 열릴 때 전달할 pending slide-on 메시지 (sidePanel/ready 수신 시 전송)
let pendingSlideOnMessage = null

chrome.action.onClicked.addListener(async function (tab) {
  const isOpen = sidePanelState.get(tab.id) || false
  if (isOpen) {
    chrome.runtime.sendMessage({ type: 'sidePanel/close' })
    sidePanelState.set(tab.id, false)
  } else {
    chrome.sidePanel.open({ tabId: tab.id })
    sidePanelState.set(tab.id, true)
  }
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request?.type === 'sidePanel/consumedSlideOnMessage') {
    const navRequestId = request?.navRequestId
    if (navRequestId && pendingSlideOnMessage?.navRequestId === navRequestId) {
      pendingSlideOnMessage = null
    }
    chrome.storage.local.remove('sidePanel/pendingSlideOnMessage', () => {})
    sendResponse(true)
    return true
  }

  if (request.type === 'sidePanel/opened') {
    if (sender.tab?.id) {
      sidePanelState.set(sender.tab.id, true)
    }
    sendResponse(true)
    return true
  }

  if (request.type === 'sidePanel/closed') {
    if (sender.tab?.id) {
      sidePanelState.set(sender.tab.id, false)
    }
    sendResponse(true)
    return true
  }

  if (request.type === 'sidePanel/ready') {
    if (pendingSlideOnMessage) {
      chrome.runtime
        .sendMessage({ type: 'sidePanel/pendingSlideOnMessage', payload: pendingSlideOnMessage })
        .catch(() => {})
      pendingSlideOnMessage = null
      sendResponse(true)
      return true
    }
  }

  if (request.type === 'charge/complete') {
    console.log('[RORR] 충전 완료', request.data ?? {})
    chrome.runtime.sendMessage({ type: 'charge/complete', data: request.data }).catch(() => {})
    sendResponse(true)
    return true
  }

  if (request.type === 'charge/closeTab') {
    if (sender.tab?.id) {
      chrome.tabs.remove(sender.tab.id)
    }
    sendResponse(true)
    return true
  }

  if (request.type === 'auth/loginSuccess') {
    chrome.tabs.query({}, (tabs) => {
      tabs
        .filter(
          (tab) => tab.id != null && tab.url && (tab.url.includes('twitch.tv') || tab.url.includes('youtube.com')),
        )
        .forEach((tab) => chrome.tabs.reload(tab.id))
    })
    sendResponse(true)
    return true
  }

  if (request.type === 'auth/chromeLogin') {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError || !token) {
        sendResponse({
          code: 401,
          message: 'fail',
          data: { error: chrome.runtime.lastError?.message || 'OAuth 토큰 발급 실패' },
        })
      } else {
        sendResponse({ code: 200, message: 'success', data: { token } })
      }
    })
    return true
  }

  if (request.type) {
    if (request.type.split('/')[0] === 'auth') {
      sendResponse({ code: 501, message: 'auth module not bundled', data: {} })
      return true
    }

    if (request.type.split('/')[0] === 'page') {
      if (request.type === 'page/action/slideon') {
        const tabId = sender.tab?.id
        const navRequestId = `${Date.now()}-${Math.random().toString(16).slice(2)}`
        const requestWithId = { ...request, navRequestId }
        if (tabId) {
          if (requestWithId.data) {
            chrome.tabs.sendMessage(tabId, {
              type: 'slide/action/on',
              page: requestWithId.page,
              data: requestWithId.data,
            })
          } else {
            chrome.tabs.sendMessage(tabId, { type: 'slide/action/on', page: requestWithId.page })
          }
        }
        chrome.storage.local.set({ 'sidePanel/pendingSlideOnMessage': requestWithId }, () => {
          if (tabId) {
            pendingSlideOnMessage = requestWithId
            chrome.sidePanel.open({ tabId })
          }
        })
        chrome.runtime.sendMessage(requestWithId).catch(() => {})
        sendResponse(true)
      }
      return true
    }
  }

  if (request.action === 'open-side-panel') {
    chrome.sidePanel.open({ tabId: sender.tab?.id })
    sendResponse(true)
    return true
  }

  if (request.type === 'open-slide-panel') {
    const getTabId = async () => {
      if (sender.tab?.id) {
        return sender.tab.id
      }
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
      return tabs[0]?.id
    }

    getTabId().then((tabId) => {
      if (tabId) {
        chrome.tabs.sendMessage(tabId, { type: 'slide/action/on', page: request.page, data: request.data })
      }
    })

    sendResponse(true)
    return true
  }

  if (request.action === 'moveToChatPageWithState') {
    if (request.data) {
      chrome.tabs.sendMessage(sender.tab?.id, { type: 'state', page: request.page, data: request.data })
    } else {
      chrome.tabs.sendMessage(sender.tab?.id, { type: 'state', page: request.page })
    }
    sendResponse(true)
    return true
  }
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
