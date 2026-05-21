import { create } from 'zustand'

export type FollowTargetItem = {
  target_id: string
  name: string
  subName?: string
  logoUrl?: string
  logoInsetClass?: string
  teamLogoUrl?: string
  teamLogoInsetClass?: string
  boost?: boolean
  shape?: 'circle' | 'square'
}

type FollowState = {
  leagues: FollowTargetItem[]
  teams: FollowTargetItem[]
  players: FollowTargetItem[]
  toggleLeague: (item: FollowTargetItem) => void
  toggleTeam: (item: FollowTargetItem) => void
  togglePlayer: (item: FollowTargetItem) => void
  reset: () => void
}

const toggleItem = (list: FollowTargetItem[], item: FollowTargetItem) => {
  const exists = list.find((x) => x.target_id === item.target_id)
  if (exists) return list.filter((x) => x.target_id !== item.target_id)
  return [...list, item]
}

export const useFollowSelectionsStore = create<FollowState>((set) => ({
  leagues: [],
  teams: [],
  players: [],
  toggleLeague: (item) => set((s) => ({ leagues: toggleItem(s.leagues, item) })),
  toggleTeam: (item) => set((s) => ({ teams: toggleItem(s.teams, item) })),
  togglePlayer: (item) => set((s) => ({ players: toggleItem(s.players, item) })),
  reset: () => set({ leagues: [], teams: [], players: [] }),
}))
