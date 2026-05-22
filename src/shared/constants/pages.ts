export const PAGES = {
  MAIN: 'main',
  FOLLOW_LEAGUE: 'follow-league',
  FOLLOW_TEAM: 'follow-team',
  FOLLOW_PLAYER: 'follow-player',
  PROFILE: 'profile',
  RANK: 'rank',
  PURCHASE_LIST: 'purchase-list',
} as const

export type Page = (typeof PAGES)[keyof typeof PAGES]
