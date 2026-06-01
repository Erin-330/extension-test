const $block = document.getElementById('status-block')
const $text = document.getElementById('status-text')

function parse(input) {
  const result = {}
  if (!input) return result
  const params = new URLSearchParams(input.startsWith('#') || input.startsWith('?') ? input.slice(1) : input)
  for (const [k, v] of params) result[k] = v
  return result
}

const fromHash = parse(location.hash)
const fromSearch = parse(location.search)
const merged = { ...fromSearch, ...fromHash }

async function notifyAndClose() {
  try {
    if (merged.error) {
      $block.classList.add('error')
      $text.textContent = merged.error_description || '인증에 실패했습니다.'
      await chrome.runtime
        .sendMessage({
          type: 'auth/redirectError',
          payload: { error: merged.error, error_description: merged.error_description },
        })
        .catch(() => {})
    } else if (merged.access_token) {
      $block.classList.add('success')
      $text.textContent = '로그인이 완료되었습니다.'
      await chrome.runtime
        .sendMessage({ type: 'auth/redirectSuccess', payload: { token: merged.access_token } })
        .catch(() => {})
    } else if (merged.code) {
      $block.classList.add('success')
      $text.textContent = '로그인이 완료되었습니다.'
      await chrome.runtime
        .sendMessage({ type: 'auth/redirectSuccess', payload: { code: merged.code } })
        .catch(() => {})
    } else {
      $block.classList.add('error')
      $text.textContent = '인증 정보를 찾을 수 없습니다.'
    }
  } finally {
    setTimeout(() => window.close(), 1500)
  }
}

notifyAndClose()
