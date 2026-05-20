export type FollowType = 'league' | 'team' | 'player'

export type FollowTargetItem = {
  target_id: string
  name: string
  slug: string
  image_url: string
  boostYN?: 'Y' | 'N'
}

export type FollowListResponse = {
  leagues?: FollowTargetItem[]
  teams?: FollowTargetItem[]
  players?: FollowTargetItem[]
  total?: number
  page?: number
  limit?: number
  total_pages?: number
}

export type SubmitFollowPayload = {
  league: { target_id: string }[]
  team: { target_id: string }[]
  player: { target_id: string }[]
}

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}

export async function getFollowList(
  followType: FollowType,
  page = 1,
  limit = 50,
): Promise<FollowListResponse> {
  return request(`/api/follow/list?follow_type=${followType}&page=${page}&limit=${limit}`)
}

export async function searchFollowList(
  query: string,
  searchType: FollowType,
): Promise<FollowListResponse> {
  return request(`/api/search?q=${encodeURIComponent(query)}&searchType=${searchType}`)
}

export async function submitFollowAll(payload: SubmitFollowPayload): Promise<void> {
  return request('/api/follow', { method: 'PUT', body: JSON.stringify(payload) })
}
