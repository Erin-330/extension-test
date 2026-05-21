import { create } from 'zustand'

export type FollowTargetItem = {
  target_id: string
  name: string
  fullName?: string
  logoUrl?: string
  hasBoost?: boolean
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

const toggle = (list: FollowTargetItem[], item: FollowTargetItem) => {
  const exists = list.find((i) => i.target_id === item.target_id)
  return exists ? list.filter((i) => i.target_id !== item.target_id) : [...list, item]
}

export const useFollowSelectionsStore = create<State>()((set) => ({
  leagues: [],
  teams: [],
  players: [],
  toggleLeague: (item) => set((s) => ({ leagues: toggle(s.leagues, item) })),
  toggleTeam: (item) => set((s) => ({ teams: toggle(s.teams, item) })),
  togglePlayer: (item) => set((s) => ({ players: toggle(s.players, item) })),
  reset: () => set({ leagues: [], teams: [], players: [] }),
}))
