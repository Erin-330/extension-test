export const FOLLOW_SELECTION_LIMIT = {
  league: 5,
  team: 10,
  player: 20,
} as const

export const FOLLOW_LEAGUE_LIMIT_ERROR_MSG = `You can follow up to ${FOLLOW_SELECTION_LIMIT.league} leagues.`
export const FOLLOW_TEAM_LIMIT_ERROR_MSG = `You can follow up to ${FOLLOW_SELECTION_LIMIT.team} teams.`
export const FOLLOW_PLAYER_LIMIT_ERROR_MSG = `You can follow up to ${FOLLOW_SELECTION_LIMIT.player} players.`
