import { create } from 'zustand'

export type FollowTargetItem = {
  target_id: string
  name: string
  description?: string
  logoUrl?: string
  teamLogoUrl?: string
  boost?: boolean
}

type FollowSelectionsState = {
  leagues: FollowTargetItem[]
  teams: FollowTargetItem[]
  players: FollowTargetItem[]
  toggleLeague: (item: FollowTargetItem) => void
  toggleTeam: (item: FollowTargetItem) => void
  togglePlayer: (item: FollowTargetItem) => void
  reset: () => void
}

const toggle = (arr: FollowTargetItem[], item: FollowTargetItem) => {
  const idx = arr.findIndex((i) => i.target_id === item.target_id)
  if (idx >= 0) return arr.filter((_, i) => i !== idx)
  return [...arr, item]
}

export const useFollowSelectionsStore = create<FollowSelectionsState>((set) => ({
  leagues: [],
  teams: [],
  players: [],
  toggleLeague: (item) => set((s) => ({ leagues: toggle(s.leagues, item) })),
  toggleTeam: (item) => set((s) => ({ teams: toggle(s.teams, item) })),
  togglePlayer: (item) => set((s) => ({ players: toggle(s.players, item) })),
  reset: () => set({ leagues: [], teams: [], players: [] }),
}))
