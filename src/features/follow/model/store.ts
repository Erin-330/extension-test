import { create } from 'zustand'

export interface FollowLeagueItem {
  target_id: string
  name: string
  description: string
  logoUrl: string
  hasBoost?: boolean
}

export interface FollowTeamItem {
  target_id: string
  name: string
  logoUrl: string
  hasBoost?: boolean
}

export interface FollowPlayerItem {
  target_id: string
  name: string
  fullName: string
  avatarUrl: string
  teamLogoUrl: string
  hasBoost?: boolean
}

interface State {
  leagues: FollowLeagueItem[]
  teams: FollowTeamItem[]
  players: FollowPlayerItem[]
  toggleLeague: (item: FollowLeagueItem) => void
  toggleTeam: (item: FollowTeamItem) => void
  togglePlayer: (item: FollowPlayerItem) => void
  reset: () => void
}

export const FOLLOW_SELECTION_LIMIT = {
  league: 5,
  team: 10,
  player: 20,
} as const

function toggle<T extends { target_id: string }>(list: T[], item: T, limit: number): T[] {
  const exists = list.some((i) => i.target_id === item.target_id)
  if (exists) return list.filter((i) => i.target_id !== item.target_id)
  if (list.length >= limit) return list
  return [...list, item]
}

export const useFollowSelectionsStore = create<State>((set) => ({
  leagues: [],
  teams: [],
  players: [],
  toggleLeague: (item) =>
    set((s) => ({ leagues: toggle(s.leagues, item, FOLLOW_SELECTION_LIMIT.league) })),
  toggleTeam: (item) =>
    set((s) => ({ teams: toggle(s.teams, item, FOLLOW_SELECTION_LIMIT.team) })),
  togglePlayer: (item) =>
    set((s) => ({ players: toggle(s.players, item, FOLLOW_SELECTION_LIMIT.player) })),
  reset: () => set({ leagues: [], teams: [], players: [] }),
}))
