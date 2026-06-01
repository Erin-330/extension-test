const JWT_STORAGE_KEY = 'pie-u-wt'
const LOGIN_ENDPOINT = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com/users/login'

const els = {
  button: document.getElementById('google-login'),
  status: document.getElementById('status-message'),
  spinner: document.querySelector('.spinner'),
  label: document.querySelector('.google-label'),
}

function setStatus(text, variant) {
  if (!els.status) return
  if (!text) {
    els.status.hidden = true
    els.status.textContent = ''
    els.status.classList.remove('info')
    return
  }
  els.status.hidden = false
  els.status.textContent = text
  els.status.classList.toggle('info', variant === 'info')
}

function setLoading(isLoading) {
  if (!els.button) return
  els.button.disabled = isLoading
  els.button.dataset.loading = isLoading ? 'true' : 'false'
  if (els.spinner) els.spinner.hidden = !isLoading
  if (els.label) els.label.textContent = isLoading ? '로그인 중...' : 'Google로 계속하기'
}

function parseJwtPayload(jwt) {
  try {
    const payload = jwt.split('.')[1]
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/')
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4)
    const decoded = atob(padded)
    return JSON.parse(decodeURIComponent(escape(decoded)))
  } catch {
    return {}
  }
}

function routeAfterLogin(jwt) {
  const payload = parseJwtPayload(jwt)
  const onboarded = payload?.follow_onboarding_yn === true
  const nextPage = onboarded ? 'home.html' : 'follow-league.html'
  window.location.href = nextPage
}

async function requestGoogleOAuthToken() {
  if (!chrome?.runtime?.sendMessage) {
    throw new Error('Chrome Extension 환경이 아닙니다.')
  }
  const result = await chrome.runtime.sendMessage({ type: 'auth/chromeLogin' })
  if (!result || result.message !== 'success') {
    const reason = result?.data?.error || result?.message || '알 수 없는 오류가 발생했습니다.'
    throw new Error(reason)
  }
  const token = result.data?.token
  if (!token) {
    throw new Error('Google OAuth 토큰을 받지 못했습니다.')
  }
  return token
}

async function postLogin(token) {
  const response = await fetch(LOGIN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ platformType: 'google', token }),
  })

  if (!response.ok) {
    throw new Error(`로그인 서버 오류 (${response.status})`)
  }

  const result = await response.json()
  if (result?.resultCode !== '0000') {
    throw new Error(result?.resultMsg || '로그인에 실패했습니다.')
  }

  const jwt = result?.data?.jwt
  if (!jwt) {
    throw new Error('JWT 발급에 실패했습니다.')
  }
  return jwt
}

async function handleGoogleLogin() {
  setStatus(null)
  setLoading(true)

  try {
    const oauthToken = await requestGoogleOAuthToken()
    const jwt = await postLogin(oauthToken)
    localStorage.setItem(JWT_STORAGE_KEY, jwt)

    try {
      await chrome.runtime.sendMessage({ type: 'auth/loginSuccess' })
    } catch {
      /* background에 알리지 못해도 라우팅은 진행 */
    }

    routeAfterLogin(jwt)
  } catch (err) {
    const message =
      err?.message === 'The user did not approve access.'
        ? 'Google 로그인이 취소되었습니다.'
        : err?.message || '로그인 중 오류가 발생했습니다.'
    setStatus(message)
    setLoading(false)
  }
}

function applyEntryParams() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('expired') === '1') {
    setStatus('세션이 만료되었습니다. 다시 로그인해 주세요.', 'info')
  }
}

function notifySidePanelReady() {
  if (!chrome?.runtime?.sendMessage) return
  chrome.runtime
    .sendMessage({ type: 'sidePanel/opened' })
    .catch(() => {})
  chrome.runtime
    .sendMessage({ type: 'sidePanel/ready' })
    .catch(() => {})
}

function init() {
  if (els.button) {
    els.button.addEventListener('click', handleGoogleLogin)
  }
  applyEntryParams()
  notifySidePanelReady()

  const existingJwt = localStorage.getItem(JWT_STORAGE_KEY)
  if (existingJwt) {
    routeAfterLogin(existingJwt)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
