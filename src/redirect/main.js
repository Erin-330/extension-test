'use strict'

const iconEl = document.getElementById('status-icon')
const msgEl = document.getElementById('status-message')

function parseParams() {
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''))
  const searchParams = new URLSearchParams(window.location.search)

  const access_token = hashParams.get('access_token') || searchParams.get('access_token')
  const code = searchParams.get('code') || hashParams.get('code')
  const error = hashParams.get('error') || searchParams.get('error')
  const error_description =
    hashParams.get('error_description') || searchParams.get('error_description')

  return { access_token, code, error, error_description }
}

function setState(state, message) {
  iconEl.dataset.state = state
  msgEl.textContent = message
}

function sendToBackground(type, payload) {
  return new Promise((resolve) => {
    try {
      chrome.runtime.sendMessage({ type, ...payload }, () => {
        if (chrome.runtime.lastError) {
          /* ignore */
        }
        resolve()
      })
    } catch (e) {
      resolve()
    }
  })
}

async function run() {
  const { access_token, code, error, error_description } = parseParams()

  if (error) {
    setState('error', error_description || '인증에 실패했습니다.')
    await sendToBackground('auth/redirectError', { error, error_description })
  } else if (access_token) {
    setState('success', '로그인이 완료되었습니다.')
    await sendToBackground('auth/redirectSuccess', { token: access_token })
  } else if (code) {
    setState('success', '로그인이 완료되었습니다.')
    await sendToBackground('auth/redirectSuccess', { code })
  } else {
    setState('error', '인증 정보가 없습니다.')
    await sendToBackground('auth/redirectError', {
      error: 'no_params',
      error_description: '인증 정보가 없습니다.',
    })
  }

  setTimeout(() => {
    window.close()
  }, 1500)
}

run()
