export const PAGES = {
  MAIN: 'main',
  FOLLOW_LEAGUE: 'follow_league',
  FOLLOW_TEAM: 'follow_team',
  FOLLOW_PLAYER: 'follow_player',
  PROFILE: 'profile',
  RANK: 'rank',
  PURCHASE_LIST: 'purchase_list',
} as const

export type Page = (typeof PAGES)[keyof typeof PAGES]
