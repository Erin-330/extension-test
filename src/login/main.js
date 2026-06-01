'use strict'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_MIN_LENGTH = 8

const form = document.getElementById('login-form')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')
const formError = document.getElementById('form-error')
const submitBtn = document.getElementById('submit-btn')

function showFieldError(input, errorEl, message) {
  input.classList.add('invalid')
  errorEl.textContent = message
  errorEl.classList.add('visible')
}

function clearFieldError(input, errorEl) {
  input.classList.remove('invalid')
  errorEl.textContent = ''
  errorEl.classList.remove('visible')
}

function showFormError(message) {
  formError.textContent = message
  formError.classList.add('visible')
}

function clearFormError() {
  formError.textContent = ''
  formError.classList.remove('visible')
}

function validateEmail(value) {
  const trimmed = value.trim()
  if (trimmed.length === 0) return '이메일을 입력해 주세요.'
  if (!EMAIL_REGEX.test(trimmed)) return '올바른 이메일 형식이 아닙니다.'
  return null
}

function validatePassword(value) {
  if (value.length === 0) return '비밀번호를 입력해 주세요.'
  if (value.length < PASSWORD_MIN_LENGTH) return `비밀번호는 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`
  return null
}

emailInput.addEventListener('blur', () => {
  const message = validateEmail(emailInput.value)
  if (message) {
    showFieldError(emailInput, emailError, message)
  } else {
    clearFieldError(emailInput, emailError)
  }
})

emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('invalid')) {
    const message = validateEmail(emailInput.value)
    if (!message) clearFieldError(emailInput, emailError)
  }
})

passwordInput.addEventListener('blur', () => {
  const message = validatePassword(passwordInput.value)
  if (message) {
    showFieldError(passwordInput, passwordError, message)
  } else {
    clearFieldError(passwordInput, passwordError)
  }
})

passwordInput.addEventListener('input', () => {
  if (passwordInput.classList.contains('invalid')) {
    const message = validatePassword(passwordInput.value)
    if (!message) clearFieldError(passwordInput, passwordError)
  }
})

async function handleLogin(email, password) {
  // 실제 API 연동 자리. 명세서의 POST /users/login 응답 형식을 따른다.
  // 서버가 아직 없는 경우를 위해 데모용으로 1초 후 실패 응답을 반환한다.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        resultCode: 'INVALID_CREDENTIALS',
        resultMsg: '이메일 또는 비밀번호가 일치하지 않습니다.',
        data: null,
      })
    }, 800)
  })
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  clearFormError()

  const email = emailInput.value
  const password = passwordInput.value

  const emailMsg = validateEmail(email)
  const passwordMsg = validatePassword(password)

  if (emailMsg) showFieldError(emailInput, emailError, emailMsg)
  else clearFieldError(emailInput, emailError)

  if (passwordMsg) showFieldError(passwordInput, passwordError, passwordMsg)
  else clearFieldError(passwordInput, passwordError)

  if (emailMsg || passwordMsg) {
    if (emailMsg) emailInput.focus()
    else passwordInput.focus()
    return
  }

  submitBtn.disabled = true
  const originalLabel = submitBtn.textContent
  submitBtn.textContent = '로그인 중...'

  try {
    const result = await handleLogin(email.trim(), password)
    if (result.resultCode !== '0000') {
      showFormError(result.resultMsg || '로그인에 실패했습니다.')
      return
    }
    const jwt = result.data?.jwt
    if (!jwt) {
      showFormError('서버 응답이 올바르지 않습니다.')
      return
    }
    localStorage.setItem('pie-u-wt', jwt)
    // 로그인 후 라우팅 자리: 다음 페이지로 이동
  } catch (err) {
    showFormError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.')
  } finally {
    submitBtn.disabled = false
    submitBtn.textContent = originalLabel
  }
})

// 세션 만료 진입 시 안내
const params = new URLSearchParams(window.location.search)
if (params.get('expired') === '1') {
  showFormError('세션이 만료되었습니다. 다시 로그인해 주세요.')
}
