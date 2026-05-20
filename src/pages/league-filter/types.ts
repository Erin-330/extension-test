export interface LeagueForLoLDto {
  league_id: string
  name: string
  slug: string
  image_url: string
  sports_type: string
  created_date: string
  updated_date: string
  boostYN?: 'Y' | 'N'
}
