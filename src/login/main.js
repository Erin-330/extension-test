const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com'
const JWT_KEY = 'pie-u-wt'

const $btn = document.getElementById('google-login')
const $status = document.getElementById('login-status')

function setStatus(message, kind) {
  $status.textContent = message ?? ''
  $status.classList.toggle('info', kind === 'info')
}

const params = new URLSearchParams(location.search)
if (params.get('expired') === '1') {
  setStatus('세션이 만료되었습니다. 다시 로그인해 주세요.', 'info')
}

$btn.addEventListener('click', handleGoogleLogin)

async function handleGoogleLogin() {
  $btn.disabled = true
  setStatus('로그인 중...', 'info')

  try {
    const authResult = await chrome.runtime.sendMessage({ type: 'auth/chromeLogin' })

    if (!authResult || authResult.message === 'fail') {
      const err = authResult?.data?.error || 'Google 로그인이 취소되었습니다.'
      setStatus(err)
      $btn.disabled = false
      return
    }

    const token = authResult.data.token
    const response = await fetch(`${API_BASE}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platformType: 'google', token }),
    })

    const result = await response.json()
    if (result.resultCode !== '0000') {
      setStatus(result.resultMsg || '로그인에 실패했습니다.')
      $btn.disabled = false
      return
    }

    const jwt = result.data.jwt
    localStorage.setItem(JWT_KEY, jwt)
    if (chrome?.storage?.local) {
      await chrome.storage.local.set({
        [JWT_KEY]: jwt,
        'rorr/user': {
          id: result.data.id,
          email: result.data.email,
          name: result.data.name,
          picture: result.data.picture,
          givenName: result.data.given_name,
          plan: 'Free',
          joinedAt: new Date().toISOString(),
        },
      })
    }

    chrome.runtime.sendMessage({ type: 'auth/loginSuccess' }).catch(() => {})

    location.href = './main.html'
  } catch (err) {
    setStatus(err?.message || '로그인 중 오류가 발생했습니다.')
    $btn.disabled = false
  }
}
