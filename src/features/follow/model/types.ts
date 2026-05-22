export interface FollowTargetItem {
  target_id: string
  name: string
  description: string
  logoUrl: string
  boost?: boolean
  fullName?: string
  teamLogoUrl?: string
}

export const FOLLOW_SELECTION_LIMIT = {
  league: 5,
  team: 10,
  player: 20,
} as const
