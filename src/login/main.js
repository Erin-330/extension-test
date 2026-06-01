const LOGIN_API_URL =
  'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com/users/login'
const JWT_STORAGE_KEY = 'pie-u-wt'

const buttonEl = document.getElementById('google-login-btn')
const messageEl = document.getElementById('login-message')

function setMessage(text, tone) {
  if (!messageEl) return
  messageEl.textContent = text || ''
  messageEl.classList.remove('is-error', 'is-info')
  if (tone === 'error') messageEl.classList.add('is-error')
  else if (tone === 'info') messageEl.classList.add('is-info')
}

function setLoading(isLoading) {
  if (!buttonEl) return
  buttonEl.disabled = isLoading
  buttonEl.classList.toggle('is-loading', isLoading)
  const label = buttonEl.querySelector('.google-login-btn__label')
  if (label) {
    label.textContent = isLoading ? '로그인 중...' : 'Google로 계속하기'
  }
}

function decodeJwtPayload(jwt) {
  try {
    const payload = jwt.split('.')[1]
    if (!payload) return null
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/')
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4)
    const decoded = atob(padded)
    const json = decodeURIComponent(
      decoded
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    )
    return JSON.parse(json)
  } catch (err) {
    console.warn('[RORR] JWT payload decode 실패', err)
    return null
  }
}

function routeAfterLogin(jwt) {
  const payload = decodeJwtPayload(jwt)
  const followOnboardingDone = payload?.follow_onboarding_yn === true
  const nextPage = followOnboardingDone ? 'home.html' : 'follow-league.html'
  window.location.href = nextPage
}

async function requestGoogleOAuthToken() {
  return await chrome.runtime.sendMessage({ type: 'auth/chromeLogin' })
}

async function exchangeTokenForJwt(googleToken) {
  const response = await fetch(LOGIN_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ platformType: 'google', token: googleToken }),
  })

  if (!response.ok) {
    throw new Error(`로그인 요청에 실패했습니다. (HTTP ${response.status})`)
  }

  return await response.json()
}

async function handleGoogleLogin() {
  setLoading(true)
  setMessage('')

  let authResult
  try {
    authResult = await requestGoogleOAuthToken()
  } catch (err) {
    console.error('[RORR] background 통신 실패', err)
    setLoading(false)
    setMessage('Google 로그인을 시작할 수 없습니다.', 'error')
    return
  }

  if (!authResult || authResult.message === 'fail') {
    setLoading(false)
    const error = authResult?.data?.error || ''
    if (error.toLowerCase().includes('canceled') || error.toLowerCase().includes('cancel')) {
      setMessage('Google 로그인이 취소되었습니다.', 'error')
    } else {
      setMessage(error || 'Google 로그인이 취소되었습니다.', 'error')
    }
    return
  }

  const googleToken = authResult.data?.token
  if (!googleToken) {
    setLoading(false)
    setMessage('OAuth 토큰을 가져오지 못했습니다.', 'error')
    return
  }

  let loginResult
  try {
    loginResult = await exchangeTokenForJwt(googleToken)
  } catch (err) {
    console.error('[RORR] 로그인 API 호출 실패', err)
    setLoading(false)
    setMessage(err?.message || '로그인 중 오류가 발생했습니다.', 'error')
    return
  }

  if (loginResult?.resultCode !== '0000') {
    setLoading(false)
    setMessage(loginResult?.resultMsg || '로그인에 실패했습니다.', 'error')
    return
  }

  const jwt = loginResult?.data?.jwt
  if (!jwt) {
    setLoading(false)
    setMessage('인증 정보를 받지 못했습니다.', 'error')
    return
  }

  localStorage.setItem(JWT_STORAGE_KEY, jwt)

  chrome.runtime.sendMessage({ type: 'auth/loginSuccess' }).catch(() => {})

  routeAfterLogin(jwt)
}

function initExpiredNotice() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('expired') === '1') {
    setMessage('세션이 만료되었습니다. 다시 로그인해 주세요.', 'info')
  }
}

function init() {
  if (!buttonEl) return
  buttonEl.addEventListener('click', handleGoogleLogin)
  initExpiredNotice()

  chrome.runtime?.sendMessage?.({ type: 'sidePanel/opened' }).catch(() => {})
  chrome.runtime?.sendMessage?.({ type: 'sidePanel/ready' }).catch(() => {})
}

document.addEventListener('DOMContentLoaded', init)
