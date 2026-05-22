import { create } from 'zustand'

export interface FollowTargetItem {
  target_id: string
  name: string
  sub?: string
  logo?: string
  boost?: boolean
  teamLogo?: string
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

const toggleIn = (list: FollowTargetItem[], item: FollowTargetItem) => {
  const exists = list.some((l) => l.target_id === item.target_id)
  return exists ? list.filter((l) => l.target_id !== item.target_id) : [...list, item]
}

export const useFollowSelectionsStore = create<FollowSelectionsState>((set) => ({
  leagues: [],
  teams: [],
  players: [],
  toggleLeague: (item) => set((s) => ({ leagues: toggleIn(s.leagues, item) })),
  toggleTeam: (item) => set((s) => ({ teams: toggleIn(s.teams, item) })),
  togglePlayer: (item) => set((s) => ({ players: toggleIn(s.players, item) })),
  reset: () => set({ leagues: [], teams: [], players: [] }),
}))

export const FOLLOW_SELECTION_LIMIT = {
  league: 5,
  team: 10,
  player: 20,
}
