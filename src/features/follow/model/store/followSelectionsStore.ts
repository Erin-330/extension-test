import { create } from 'zustand'
import type { FollowTargetItem } from '../types'

interface FollowSelectionsState {
  leagues: FollowTargetItem[]
  teams: FollowTargetItem[]
  players: FollowTargetItem[]
  toggleLeague: (item: FollowTargetItem) => void
  toggleTeam: (item: FollowTargetItem) => void
  togglePlayer: (item: FollowTargetItem) => void
  reset: () => void
}

const toggle = (list: FollowTargetItem[], item: FollowTargetItem): FollowTargetItem[] => {
  const exists = list.some((i) => i.target_id === item.target_id)
  return exists ? list.filter((i) => i.target_id !== item.target_id) : [...list, item]
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
