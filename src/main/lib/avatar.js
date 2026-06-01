export function buildAvatar(user, className) {
  const initial = (user?.name ?? user?.email ?? '?').trim().charAt(0).toUpperCase() || '?'
  if (user?.picture) {
    const img = document.createElement('img')
    img.src = user.picture
    img.alt = user?.name || user?.email || ''
    img.className = className
    img.addEventListener('error', () => {
      const fallback = document.createElement('span')
      fallback.className = className
      fallback.textContent = initial
      img.replaceWith(fallback)
    })
    return img
  }
  const span = document.createElement('span')
  span.className = className
  span.textContent = initial
  return span
}
