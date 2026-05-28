const SPLASH_SHOWN_KEY = 'splash-shown'
const SPLASH_MIN_DURATION_MS = 2000
const FADE_OUT_MS = 1000
const NEXT_PAGE = 'login.html'

if (sessionStorage.getItem(SPLASH_SHOWN_KEY)) {
  window.location.replace(NEXT_PAGE)
} else {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.add('is-leaving')
      setTimeout(() => {
        sessionStorage.setItem(SPLASH_SHOWN_KEY, '1')
        window.location.replace(NEXT_PAGE)
      }, FADE_OUT_MS)
    }, SPLASH_MIN_DURATION_MS)
  })
}
