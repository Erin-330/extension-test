import { isLoggedIn } from '../shared/session.js'

const $accountBtn = document.getElementById('my-account-btn')
const $signedOut = document.getElementById('signed-out-cta')

function applyAuthState() {
  const logged = isLoggedIn()
  $accountBtn.hidden = !logged
  $signedOut.hidden = logged
}

applyAuthState()

$accountBtn.addEventListener('click', () => {
  window.location.href = 'me.html#/me'
})

function handleHashRoute() {
  if (location.hash === '#/me') {
    if (!isLoggedIn()) {
      window.location.href = 'login.html'
      return
    }
    window.location.href = 'me.html#/me'
  }
}

handleHashRoute()
window.addEventListener('hashchange', handleHashRoute)
window.addEventListener('storage', applyAuthState)
