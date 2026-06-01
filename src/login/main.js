import { JWT_KEY, setUser } from '../shared/session.js'

const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com'

const $btn = document.getElementById('google-login')
const $status = document.getElementById('login-status')

function showStatus(message, isError = false) {
  if (!$status) return
  $status.textContent = message ?? ''
  $status.classList.toggle('error', Boolean(isError))
}

const params = new URLSearchParams(location.search)
if (params.get('expired') === '1') {
  showStatus('세션이 만료되었습니다. 다시 로그인해 주세요.', true)
}

async function handleGoogleLogin() {
  $btn.disabled = true
  showStatus('로그인 중...')

  let authResult
  try {
    authResult = await chrome.runtime.sendMessage({ type: 'auth/chromeLogin' })
  } catch (err) {
    showStatus(err?.message ?? 'OAuth 토큰 요청 실패', true)
    $btn.disabled = false
    return
  }

  if (!authResult || authResult.message !== 'success') {
    showStatus(authResult?.data?.error ?? 'Google 로그인이 취소되었습니다.', true)
    $btn.disabled = false
    return
  }

  const token = authResult.data?.token
  try {
    const res = await fetch(`${API_BASE}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platformType: 'google', token }),
    })
    const result = await res.json()

    if (result.resultCode !== '0000') {
      showStatus(result.resultMsg ?? '로그인에 실패했습니다.', true)
      $btn.disabled = false
      return
    }

    const jwt = result.data?.jwt
    localStorage.setItem(JWT_KEY, jwt)
    setUser({
      id: result.data?.id,
      email: result.data?.email,
      name: result.data?.name,
      picture: result.data?.picture,
      joinedAt: new Date().toISOString(),
      plan: 'free',
    })

    chrome.runtime.sendMessage({ type: 'auth/loginSuccess' }).catch(() => {})
    window.location.href = 'main.html'
  } catch (err) {
    showStatus(err?.message ?? '네트워크 오류', true)
    $btn.disabled = false
  }
}

$btn.addEventListener('click', handleGoogleLogin)
