export interface LeagueSelectButtonProps {
  leagueName: string
  annotation: string
  leagueImgUrl: string
  isActive: boolean
  isBoostAvailable: boolean
  selectedCount?: number
  onClick: () => void
}
