import { create } from 'zustand'

export interface FollowTargetItem {
  target_id: string
  name: string
  description?: string
  imageUrl: string
  hasBoost?: boolean
  insetClass?: string
}

interface FollowSelectionsState {
  leagues: FollowTargetItem[]
  teams: FollowTargetItem[]
  players: FollowTargetItem[]
  toggleLeague: (item: FollowTargetItem) => void
  toggleTeam: (item: FollowTargetItem) => void
  togglePlayer: (item: FollowTargetItem) => void
  reset: () => void
}

const toggle = (list: FollowTargetItem[], item: FollowTargetItem) => {
  const exists = list.find((i) => i.target_id === item.target_id)
  if (exists) return list.filter((i) => i.target_id !== item.target_id)
  return [...list, item]
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

export const FOLLOW_SELECTION_LIMIT = { league: 5, team: 10, player: 20 } as const
