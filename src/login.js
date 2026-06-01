const THEME_KEY = 'theme'
const JWT_KEY = 'pie-u-wt'
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')
}
initTheme()

const $btn = document.getElementById('google-btn')
const $label = document.getElementById('btn-label')
const $msg = document.getElementById('message')

function showMessage(text, type = 'error') {
  $msg.textContent = text
  $msg.dataset.type = type
  $msg.hidden = false
}

function hideMessage() {
  $msg.hidden = true
}

function setLoading(on) {
  $btn.disabled = on
  $label.textContent = on ? '로그인 중...' : 'Google로 계속하기'
}

// URLSearchParams 기반 진입 이유 메시지
const reason = new URLSearchParams(location.search).get('reason')
if (reason === 'session_expired') {
  showMessage('세션이 만료되었습니다. 다시 로그인해 주세요.', 'info')
} else if (reason === 'auth_required') {
  showMessage('이 기능을 사용하려면 로그인이 필요합니다.', 'info')
}

async function apiLogin(token) {
  const res = await fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      loginType: 'OAuth',
      platformType: 'google',
      token,
    }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

async function apiGetMyFollow(jwt) {
  const res = await fetch(`${API_BASE}/follow/my`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

const IS_EXTENSION = typeof chrome !== 'undefined' && !!chrome.runtime?.sendMessage

async function handleLogin() {
  hideMessage()
  setLoading(true)

  try {
    if (IS_EXTENSION) {
      // 크롬 익스텐션 플로우
      const { token } = await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'auth/chromeLogin' }, response => {
          if (chrome.runtime.lastError) return reject(new Error(chrome.runtime.lastError.message))
          if (!response?.token) return reject(new Error('no token'))
          resolve(response)
        })
      })

      const loginRes = await apiLogin(token)
      if (loginRes.resultCode !== '0000') throw new Error(loginRes.resultMsg ?? 'login failed')

      const { jwt, follow_onboarding_yn } = loginRes.data
      localStorage.setItem(JWT_KEY, jwt)

      try {
        const follows = await apiGetMyFollow(jwt)
        const teamIds = follows.filter(f => f.type === 'team').map(f => f.targetId)
        localStorage.setItem('followTeamTargetIds', JSON.stringify(teamIds))
      } catch {}

      chrome.runtime.sendMessage({ type: 'auth/loginSuccess' })
      window.location.assign(follow_onboarding_yn ? 'profile.html' : 'follow.html')
    } else {
      // 웹 플로우 — Google OAuth 리다이렉트
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
      const redirectUri = `${location.origin}/auth-verification`
      window.location.replace(
        `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile`
      )
    }
  } catch {
    showMessage('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.')
    setLoading(false)
  }
}

$btn.addEventListener('click', handleLogin)
