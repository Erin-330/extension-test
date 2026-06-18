export type FollowType = 'league' | 'team' | 'player'

export type FollowTargetItem = {
  target_id: string
  name: string
  description: string
  logo: string
  boost?: boolean
  esportsLogo?: string
  isPlayer?: boolean
}

export const FOLLOW_SELECTION_LIMIT = {
  league: 5,
  team: 10,
  player: 20,
} as const
