export const PAGES = {
  MAIN: 'main',
  FOLLOW_LEAGUE: 'follow-league',
  PROFILE: 'profile',
  PURCHASE_LIST: 'purchase-list',
} as const

export type Page = (typeof PAGES)[keyof typeof PAGES]
