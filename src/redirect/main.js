const $icon = document.getElementById('status-icon')
const $msg = document.getElementById('status-message')

function parseParams() {
  const search = new URLSearchParams(location.search)
  const hash = new URLSearchParams(location.hash.replace(/^#/, ''))
  const pick = (key) => search.get(key) ?? hash.get(key)
  return {
    token: pick('access_token'),
    code: pick('code'),
    error: pick('error'),
    error_description: pick('error_description'),
  }
}

function setStatus(kind, message) {
  $icon.classList.remove('spinner', 'success', 'error')
  if (kind === 'success') {
    $icon.classList.add('success')
    $icon.textContent = '✓'
  } else if (kind === 'error') {
    $icon.classList.add('error')
    $icon.textContent = '✕'
  } else {
    $icon.classList.add('spinner')
    $icon.textContent = ''
  }
  $msg.textContent = message
}

const params = parseParams()

if (params.error) {
  setStatus('error', params.error_description ?? '인증에 실패했습니다.')
  chrome.runtime
    .sendMessage({ type: 'auth/redirectError', data: { error: params.error, error_description: params.error_description } })
    .catch(() => {})
} else if (params.token || params.code) {
  setStatus('success', '로그인이 완료되었습니다.')
  const payload = params.token ? { token: params.token } : { code: params.code }
  chrome.runtime.sendMessage({ type: 'auth/redirectSuccess', data: payload }).catch(() => {})
} else {
  setStatus('error', '인증 정보가 없습니다.')
}

setTimeout(() => window.close(), 1500)
