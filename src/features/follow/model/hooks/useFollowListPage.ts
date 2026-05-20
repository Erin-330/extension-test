import { useMemo, useRef } from 'react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getFollowList, searchFollowList } from '../../api/followApi'
import type { FollowTargetItem, FollowType } from '../../api/followApi'
import { useFollowSelectionsStore } from '../store/followSelectionsStore'
import type { SearchPanel } from './useSearchPanel'

interface UseFollowListPageOptions {
  followType: FollowType
  searchPanel: SearchPanel
}

export function useFollowListPage(
  { followType, searchPanel }: UseFollowListPageOptions,
  onNavigate: (page: string) => void,
) {
  const store = useFollowSelectionsStore()

  const selectedItems =
    followType === 'league' ? store.leagues
    : followType === 'team' ? store.teams
    : store.players

  const toggleSelect = (item: FollowTargetItem) => {
    if (followType === 'league') store.toggleLeague(item)
    else if (followType === 'team') store.toggleTeam(item)
    else store.togglePlayer(item)
  }

  const orderedTargetIds = selectedItems.map((i) => i.target_id)

  const selectedCountMap = useMemo(
    () => new Map(orderedTargetIds.map((id, i) => [id, i + 1])),
    [orderedTargetIds],
  )

  // Main list (infinite scroll)
  const { data, isPending: isListLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['follow', 'list', followType],
      queryFn: ({ pageParam = 1 }) => getFollowList(followType, pageParam as number, 50),
      initialPageParam: 1,
      getNextPageParam: (last, _, lastPageParam) => {
        if (last.total_pages && (lastPageParam as number) < last.total_pages) {
          return (lastPageParam as number) + 1
        }
        return undefined
      },
    })

  const list: FollowTargetItem[] = useMemo(
    () => data?.pages.flatMap((p) => p[`${followType}s` as keyof typeof p] as FollowTargetItem[] ?? []) ?? [],
    [data, followType],
  )

  // Search results
  const { data: searchData, isPending: isSearchLoading } = useQuery({
    queryKey: ['follow', 'search', followType, searchPanel.query],
    queryFn: () => searchFollowList(searchPanel.query, followType),
    enabled: searchPanel.isOpen && searchPanel.query.trim().length > 0,
    staleTime: 0,
  })

  const searchList: FollowTargetItem[] = useMemo(
    () => (searchData?.[`${followType}s` as keyof typeof searchData] as FollowTargetItem[]) ?? [],
    [searchData, followType],
  )

  // Sort: selected items float to top
  const extraSelected = useRef<FollowTargetItem[]>([])

  const markSelectedFromSearch = (item: FollowTargetItem) => {
    const inList = list.some((i) => i.target_id === item.target_id)
    if (!inList) {
      extraSelected.current = [...extraSelected.current.filter((i) => i.target_id !== item.target_id), item]
    }
    toggleSelect(item)
  }

  const getDisplayList = (items: FollowTargetItem[]) => {
    const combined = [...extraSelected.current, ...items].filter(
      (item, idx, arr) => arr.findIndex((i) => i.target_id === item.target_id) === idx,
    )
    // selected items sorted by selection order (orderedTargetIds index)
    const selected = orderedTargetIds
      .map((id) => combined.find((i) => i.target_id === id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = combined.filter((i) => !orderedTargetIds.includes(i.target_id))
    return [...selected, ...unselected]
  }

  const goTo = (page: string) => onNavigate(page)

  return {
    list,
    searchList,
    isListLoading,
    isSearchLoading,
    orderedTargetIds,
    selectedCountMap,
    toggleSelect,
    markSelectedFromSearch,
    getDisplayList,
    goTo,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}
