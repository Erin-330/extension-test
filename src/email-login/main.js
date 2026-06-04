const JWT_KEY = 'pie-u-wt'

const form = document.getElementById('login-form')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const btn = document.getElementById('login-btn')
const btnLabel = btn.querySelector('.btn-label')
const statusEl = document.getElementById('status-message')

const DEFAULT_LABEL = '로그인'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
  btnLabel.textContent = isLoading ? '' : DEFAULT_LABEL
}

function markInvalid(input, invalid) {
  if (invalid) {
    input.setAttribute('aria-invalid', 'true')
  } else {
    input.removeAttribute('aria-invalid')
  }
}

function validate() {
  const email = emailInput.value.trim()
  const password = passwordInput.value

  if (!email) {
    markInvalid(emailInput, true)
    setStatus('이메일을 입력해 주세요.', 'error')
    emailInput.focus()
    return null
  }
  if (!EMAIL_RE.test(email)) {
    markInvalid(emailInput, true)
    setStatus('올바른 이메일 형식이 아닙니다.', 'error')
    emailInput.focus()
    return null
  }
  markInvalid(emailInput, false)

  if (!password) {
    markInvalid(passwordInput, true)
    setStatus('비밀번호를 입력해 주세요.', 'error')
    passwordInput.focus()
    return null
  }
  markInvalid(passwordInput, false)

  return { email, password }
}

async function handleSubmit(event) {
  event.preventDefault()
  setStatus('')

  const credentials = validate()
  if (!credentials) return

  setLoading(true)
  try {
    // 이메일/비밀번호 로그인 API 연동 지점.
    // 백엔드 엔드포인트 확정 시 fetch 호출을 추가하고,
    // 성공 응답의 JWT를 localStorage('pie-u-wt')에 저장한 뒤 다음 페이지로 이동한다.
    // 예: localStorage.setItem(JWT_KEY, result.data.jwt)
    void JWT_KEY
    void credentials
    setStatus('로그인 API 연동 대기 중입니다.', 'error')
  } catch (e) {
    setStatus(e?.message || '알 수 없는 오류가 발생했습니다.', 'error')
  } finally {
    setLoading(false)
  }
}

function clearStatusOnInput() {
  if (statusEl.textContent) setStatus('')
}

form.addEventListener('submit', handleSubmit)
emailInput.addEventListener('input', clearStatusOnInput)
passwordInput.addEventListener('input', clearStatusOnInput)
