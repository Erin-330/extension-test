const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_STORAGE_KEY = 'pie-u-wt'

const loginBtn = document.getElementById('google-login-btn')
const statusEl = document.getElementById('status-message')
const btnLabel = loginBtn.querySelector('.google-btn-label')

function setStatus(message, variant) {
  statusEl.textContent = message || ''
  statusEl.classList.toggle('is-info', variant === 'info')
}

function setLoading(isLoading) {
  loginBtn.classList.toggle('is-loading', !!isLoading)
  loginBtn.disabled = !!isLoading
  if (isLoading) {
    btnLabel.textContent = '로그인 중...'
  } else {
    btnLabel.textContent = 'Google로 계속하기'
  }
}

function showExpiredNoticeIfNeeded() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('expired') === '1') {
    setStatus('세션이 만료되었습니다. 다시 로그인해 주세요.', 'info')
  }
}

async function requestOAuthToken() {
  return new Promise((resolve) => {
    try {
      chrome.runtime.sendMessage({ type: 'auth/chromeLogin' }, (response) => {
        if (chrome.runtime.lastError) {
          resolve({
            code: 500,
            message: 'fail',
            data: { error: chrome.runtime.lastError.message || '확장 통신 오류' },
          })
          return
        }
        resolve(response)
      })
    } catch (err) {
      resolve({ code: 500, message: 'fail', data: { error: err?.message || '확장 통신 오류' } })
    }
  })
}

async function callLoginApi(googleToken) {
  const res = await fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      platformType: 'google',
      token: googleToken,
      autoLogin: true,
    }),
  })

  let body = null
  try {
    body = await res.json()
  } catch {
    body = null
  }

  if (!res.ok) {
    const message = body?.message || `로그인 실패 (HTTP ${res.status})`
    throw new Error(message)
  }
  return body
}

function pickJwt(loginResult) {
  return (
    loginResult?.data?.jwt ||
    loginResult?.jwt ||
    loginResult?.data?.token ||
    null
  )
}

function pickFollowOnboardingYn(loginResult) {
  return (
    loginResult?.data?.follow_onboarding_yn ??
    loginResult?.follow_onboarding_yn ??
    null
  )
}

async function fetchMe(jwt) {
  try {
    const res = await fetch(`${API_BASE}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

function routeAfterLogin(followOnboardingYn) {
  if (followOnboardingYn === true || followOnboardingYn === 1 || followOnboardingYn === '1') {
    window.location.href = 'home.html'
  } else {
    window.location.href = 'follow-league.html'
  }
}

async function handleGoogleLogin() {
  setStatus('', 'info')
  setLoading(true)

  const authResult = await requestOAuthToken()

  if (!authResult || authResult.message !== 'success') {
    const errorMsg = authResult?.data?.error || ''
    if (/cancel|canceled|user did not approve/i.test(errorMsg)) {
      setStatus('Google 로그인이 취소되었습니다.')
    } else {
      setStatus(errorMsg || '로그인에 실패했습니다.')
    }
    setLoading(false)
    return
  }

  const googleToken = authResult.data?.token
  if (!googleToken) {
    setStatus('OAuth 토큰을 가져오지 못했습니다.')
    setLoading(false)
    return
  }

  try {
    const loginResult = await callLoginApi(googleToken)
    const jwt = pickJwt(loginResult)
    if (!jwt) {
      throw new Error('서버 응답에 JWT가 없습니다.')
    }

    localStorage.setItem(JWT_STORAGE_KEY, jwt)

    let followOnboardingYn = pickFollowOnboardingYn(loginResult)
    if (followOnboardingYn === null) {
      const me = await fetchMe(jwt)
      followOnboardingYn = me?.follow_onboarding_yn ?? me?.data?.follow_onboarding_yn ?? false
    }

    try {
      chrome.runtime.sendMessage({ type: 'auth/loginSuccess' })
    } catch {
      /* noop */
    }

    routeAfterLogin(followOnboardingYn)
  } catch (err) {
    setStatus(err?.message || '로그인에 실패했습니다.')
    setLoading(false)
  }
}

loginBtn.addEventListener('click', handleGoogleLogin)
showExpiredNoticeIfNeeded()
