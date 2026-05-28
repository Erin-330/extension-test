const html = document.documentElement
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const SPLASH_DURATION_MS = 1800

window.setTimeout(() => {
  window.location.replace('login.html')
}, SPLASH_DURATION_MS)
