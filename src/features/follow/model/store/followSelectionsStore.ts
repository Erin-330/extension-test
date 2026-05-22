import { create } from 'zustand'

export type FollowTargetItem = {
  target_id: string
  name: string
  subtitle?: string
  logoUrl: string
  hasBoost?: boolean
  teamLogoUrl?: string
}

type State = {
  leagues: FollowTargetItem[]
  teams: FollowTargetItem[]
  players: FollowTargetItem[]
  toggleLeague: (item: FollowTargetItem) => void
  toggleTeam: (item: FollowTargetItem) => void
  togglePlayer: (item: FollowTargetItem) => void
  reset: () => void
}

const toggle = (list: FollowTargetItem[], item: FollowTargetItem, limit: number) => {
  const idx = list.findIndex((i) => i.target_id === item.target_id)
  if (idx >= 0) return list.filter((_, i) => i !== idx)
  if (list.length >= limit) return list
  return [...list, item]
}

export const FOLLOW_SELECTION_LIMIT = {
  league: 5,
  team: 10,
  player: 20,
} as const

export const useFollowSelectionsStore = create<State>((set) => ({
  leagues: [],
  teams: [],
  players: [],
  toggleLeague: (item) => set((s) => ({ leagues: toggle(s.leagues, item, FOLLOW_SELECTION_LIMIT.league) })),
  toggleTeam: (item) => set((s) => ({ teams: toggle(s.teams, item, FOLLOW_SELECTION_LIMIT.team) })),
  togglePlayer: (item) => set((s) => ({ players: toggle(s.players, item, FOLLOW_SELECTION_LIMIT.player) })),
  reset: () => set({ leagues: [], teams: [], players: [] }),
}))
