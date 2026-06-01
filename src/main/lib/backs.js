import { getStored, setStored } from './session.js'

const KEYS = {
  league: 'rorr/backedLeagues',
  team: 'rorr/backedTeams',
  player: 'rorr/backedPlayers',
}

export async function countBacked(kind) {
  const list = await getStored(KEYS[kind])
  return Array.isArray(list) ? list.length : 0
}

export async function getAllCounts() {
  const [league, team, player] = await Promise.all([
    countBacked('league'),
    countBacked('team'),
    countBacked('player'),
  ])
  return { league, team, player }
}

export async function getList(kind) {
  const list = await getStored(KEYS[kind])
  return Array.isArray(list) ? list : []
}

export async function setList(kind, list) {
  await setStored(KEYS[kind], list)
}

export async function getNotifications() {
  const stored = await getStored('rorr/notifications')
  return {
    push: stored?.push ?? true,
    emailDigest: stored?.emailDigest ?? false,
  }
}

export async function setNotifications(next) {
  await setStored('rorr/notifications', next)
}
