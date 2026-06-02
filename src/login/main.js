const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_KEY = 'pie-u-wt'

const btn = document.getElementById('google-login-btn')
const btnLabel = btn.querySelector('.btn-label')
const statusEl = document.getElementById('status-message')

const DEFAULT_LABEL = 'Google로 계속하기'
const LOADING_LABEL = '로그인 중...'

function setStatus(text, variant) {
  statusEl.textContent = text || ''
  if (variant) {
    statusEl.dataset.variant = variant
  } else {
    delete statusEl.dataset.variant
  }
}

function setLoading(isLoading) {
  btn.disabled = isLoading
  btnLabel.textContent = isLoading ? LOADING_LABEL : DEFAULT_LABEL
}

function checkExpiredParam() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('expired') === '1') {
    setStatus('세션이 만료되었습니다. 다시 로그인해 주세요.', 'error')
  }
}

async function requestGoogleToken() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: 'auth/chromeLogin' }, (response) => {
      resolve(response)
    })
  })
}

async function loginToBackend(googleToken) {
  const res = await fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      platformType: 'google',
      token: googleToken,
      autoLogin: true,
    }),
  })

  if (!res.ok) {
    throw new Error(`서버 오류 (${res.status})`)
  }
  return res.json()
}

function routeAfterLogin() {
  window.location.href = 'profile.html'
}

async function handleGoogleLogin() {
  setStatus('')
  setLoading(true)

  try {
    const authResult = await requestGoogleToken()

    if (!authResult || authResult.message === 'fail') {
      const err = authResult?.data?.error || ''
      if (/cancel|user did not approve|did_not_grant|user_cancelled/i.test(err)) {
        setStatus('Google 로그인이 취소되었습니다.', 'error')
      } else {
        setStatus(err || 'Google 로그인에 실패했습니다.', 'error')
      }
      setLoading(false)
      return
    }

    const googleToken = authResult.data?.token
    if (!googleToken) {
      setStatus('OAuth 토큰을 받지 못했습니다.', 'error')
      setLoading(false)
      return
    }

    const result = await loginToBackend(googleToken)

    if (result?.resultCode !== '0000') {
      setStatus(result?.resultMessage || '로그인에 실패했습니다.', 'error')
      setLoading(false)
      return
    }

    const jwt = result?.data?.jwt
    if (!jwt) {
      setStatus('JWT를 받지 못했습니다.', 'error')
      setLoading(false)
      return
    }

    localStorage.setItem(JWT_KEY, jwt)
    chrome.runtime.sendMessage({ type: 'auth/loginSuccess' }).catch(() => {})

    routeAfterLogin()
  } catch (e) {
    setStatus(e?.message || '알 수 없는 오류가 발생했습니다.', 'error')
    setLoading(false)
  }
}

btn.addEventListener('click', handleGoogleLogin)
checkExpiredParam()
