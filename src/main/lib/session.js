export const JWT_KEY = 'pie-u-wt'

export async function getStored(key) {
  if (chrome?.storage?.local?.get) {
    return new Promise((resolve) => {
      chrome.storage.local.get(key, (out) => resolve(out?.[key]))
    })
  }
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : undefined
  } catch {
    return undefined
  }
}

export async function setStored(key, value) {
  if (chrome?.storage?.local?.set) {
    await new Promise((resolve) => chrome.storage.local.set({ [key]: value }, resolve))
    return
  }
  localStorage.setItem(key, JSON.stringify(value))
}

export async function removeStored(keys) {
  const arr = Array.isArray(keys) ? keys : [keys]
  if (chrome?.storage?.local?.remove) {
    await new Promise((resolve) => chrome.storage.local.remove(arr, resolve))
    return
  }
  arr.forEach((k) => localStorage.removeItem(k))
}

export async function getJwt() {
  const fromStorage = await getStored(JWT_KEY)
  if (fromStorage) return fromStorage
  return localStorage.getItem(JWT_KEY) || null
}

export async function isLoggedIn() {
  return Boolean(await getJwt())
}

export async function getCurrentUser() {
  if (!(await isLoggedIn())) return null
  const user = await getStored('rorr/user')
  if (user) return user
  return {
    name: 'RORR User',
    email: '',
    picture: '',
    plan: 'Free',
    joinedAt: new Date().toISOString(),
  }
}

export async function signOut() {
  await removeStored([JWT_KEY, 'rorr/user'])
  try {
    localStorage.removeItem(JWT_KEY)
  } catch {}
}
