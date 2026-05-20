export type LeagueForLoLDto = {
  league_id: string
  name: string
  slug: string
  image_url: string
  sports_type: string
  created_date: string
  updated_date: string
  boostYN?: 'Y' | 'N'
}

export async function getLeaguesForLoL(): Promise<LeagueForLoLDto[]> {
  const response = await fetch('/api/schedules/getLeaguesForLoL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })
  if (!response.ok) throw new Error('Failed to fetch leagues')
  const data = await response.json()
  return Array.isArray(data) ? data : data.data ?? []
}
