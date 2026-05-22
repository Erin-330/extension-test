export const PAGES = {
  MAIN: 'MAIN',
  MY_PICKS: 'MY_PICKS',
} as const

export type Page = (typeof PAGES)[keyof typeof PAGES]
