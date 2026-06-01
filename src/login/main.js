'use strict'

const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_KEY = 'pie-u-wt'

const btn = document.getElementById('google-login-btn')
const labelEl = btn.querySelector('.google-btn-label')
const msgEl = document.getElementById('login-message')

function setMessage(text, variant) {
  msgEl.textContent = text || ''
  if (variant) {
    msgEl.dataset.variant = variant
  } else {
    delete msgEl.dataset.variant
  }
}

function setLoading(isLoading) {
  if (isLoading) {
    btn.dataset.loading = 'true'
    btn.disabled = true
    labelEl.textContent = '로그인 중...'
    setMessage('로그인 중...', 'loading')
  } else {
    btn.dataset.loading = 'false'
    btn.disabled = false
    labelEl.textContent = 'Google로 계속하기'
  }
}

function checkExpiredQuery() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('expired') === '1') {
    setMessage('세션이 만료되었습니다. 다시 로그인해 주세요.', 'error')
  }
}

async function requestGoogleToken() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: 'auth/chromeLogin' }, (response) => {
      if (chrome.runtime.lastError) {
        resolve({ code: 500, message: 'fail', data: { error: chrome.runtime.lastError.message } })
        return
      }
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

async function routeAfterLogin(jwt) {
  try {
    const res = await fetch(`${API_BASE}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    if (res.ok) {
      const me = await res.json()
      const followOnboardingYn = me?.follow_onboarding_yn ?? me?.data?.follow_onboarding_yn
      if (followOnboardingYn === true || followOnboardingYn === 1 || followOnboardingYn === 'Y') {
        window.location.href = 'home.html'
        return
      }
    }
  } catch (e) {
    /* fall through */
  }
  window.location.href = 'follow-league.html'
}

async function handleGoogleLogin() {
  setMessage('')
  setLoading(true)

  try {
    const authResult = await requestGoogleToken()

    if (!authResult || authResult.message === 'fail') {
      const errMsg = authResult?.data?.error || ''
      if (errMsg.toLowerCase().includes('canceled') || errMsg.toLowerCase().includes('user_cancel')) {
        setMessage('Google 로그인이 취소되었습니다.', 'error')
      } else {
        setMessage(errMsg || '로그인에 실패했습니다.', 'error')
      }
      setLoading(false)
      return
    }

    const googleToken = authResult.data?.token
    if (!googleToken) {
      setMessage('OAuth 토큰을 받을 수 없습니다.', 'error')
      setLoading(false)
      return
    }

    const loginResult = await loginToBackend(googleToken)

    if (loginResult?.resultCode !== '0000') {
      setMessage(loginResult?.resultMessage || '로그인에 실패했습니다.', 'error')
      setLoading(false)
      return
    }

    const jwt = loginResult.data?.jwt
    if (!jwt) {
      setMessage('JWT가 응답에 없습니다.', 'error')
      setLoading(false)
      return
    }

    localStorage.setItem(JWT_KEY, jwt)

    chrome.runtime.sendMessage({ type: 'auth/loginSuccess' }, () => {
      if (chrome.runtime.lastError) {
        /* ignore */
      }
    })

    await routeAfterLogin(jwt)
  } catch (err) {
    setMessage(err?.message || '로그인 중 오류가 발생했습니다.', 'error')
    setLoading(false)
  }
}

btn.addEventListener('click', handleGoogleLogin)

checkExpiredQuery()
