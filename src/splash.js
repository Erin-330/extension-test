const SPLASH_DURATION_MS = 1600
const FADE_DURATION_MS = 400
const NEXT_PAGE = 'login.html'

const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
document.documentElement.dataset.theme = savedTheme ?? (prefersDark ? 'dark' : 'light')

window.setTimeout(() => {
  document.body.classList.add('fade-out')
  window.setTimeout(() => {
    window.location.replace(NEXT_PAGE)
  }, FADE_DURATION_MS)
}, SPLASH_DURATION_MS)
