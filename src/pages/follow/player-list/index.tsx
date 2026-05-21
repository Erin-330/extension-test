import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import {
  FOLLOW_SELECTION_LIMIT,
  FOLLOW_PLAYER_LIMIT_ERROR_MSG,
} from '../../../features/follow/model/constants/selectionLimits'
import { submitFollowAll } from '../../../features/follow/api/followApi'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { PlayerSelectButton } from '../../../features/follow/ui/PlayerSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'

interface PlayerListPageProps {
  onNavigate: (page: string) => void
}

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'faker', name: 'Faker', slug: 'faker', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=F', team_name: 'T1', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=T1' },
  { target_id: 'zeus', name: 'Zeus', slug: 'zeus', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=Z', team_name: 'T1', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=T1' },
  { target_id: 'oner', name: 'Oner', slug: 'oner', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=O', team_name: 'T1', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=T1' },
  { target_id: 'gumayusi', name: 'Gumayusi', slug: 'gumayusi', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=G', team_name: 'T1', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=T1' },
  { target_id: 'keria', name: 'Keria', slug: 'keria', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=K', team_name: 'T1', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=T1' },
  { target_id: 'chovy', name: 'Chovy', slug: 'chovy', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=C', team_name: 'Gen.G', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=GG' },
  { target_id: 'peyz', name: 'Peyz', slug: 'peyz', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=P', team_name: 'Gen.G', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=GG' },
  { target_id: 'canyon', name: 'Canyon', slug: 'canyon', image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=Cy', team_name: 'Gen.G', team_image_url: 'https://placehold.co/20x20/e2e8f0/969cda?text=GG' },
]

export function PlayerListPage({ onNavigate }: PlayerListPageProps) {
  const searchPanel = useSearchPanel()
  const store = useFollowSelectionsStore()
  const {
    list,
    searchList,
    isSearchLoading,
    orderedTargetIds,
    selectedCountMap,
    toggleSelect,
    markSelectedFromSearch,
    getDisplayList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFollowListPage({ followType: 'player', searchPanel }, onNavigate)

  const displayList = list.length > 0 ? list : MOCK_PLAYERS
  const sortedList = getDisplayList(displayList)

  const handleDone = async () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.player) {
      alert(FOLLOW_PLAYER_LIMIT_ERROR_MSG)
      return
    }
    try {
      await submitFollowAll({
        league: store.leagues.map((l) => ({ target_id: l.target_id })),
        team: store.teams.map((t) => ({ target_id: t.target_id })),
        player: store.players.map((p) => ({ target_id: p.target_id })),
      })
    } catch {
      // API not connected — proceed anyway so the flow completes
    }
    store.reset()
    onNavigate(PAGES.MAIN)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
      if (isSearchLoading) {
        return <p className="py-8 text-center text-[14px] text-[#757b90]">Searching...</p>
      }
      if (searchList.length === 0) return <SearchResultsEmpty />
      return (
        <div className="flex flex-col gap-2">
          {searchList.map((player) => (
            <PlayerSelectButton
              key={player.target_id}
              playerName={player.name}
              teamName={player.team_name}
              teamImgUrl={player.team_image_url}
              playerImgUrl={player.image_url}
              isActive={orderedTargetIds.includes(player.target_id)}
              selectedCount={selectedCountMap.get(player.target_id)}
              onClick={() => markSelectedFromSearch(player)}
            />
          ))}
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-2">
        {sortedList.map((player) => (
          <PlayerSelectButton
            key={player.target_id}
            playerName={player.name}
            teamName={player.team_name}
            teamImgUrl={player.team_image_url}
            playerImgUrl={player.image_url}
            isActive={orderedTargetIds.includes(player.target_id)}
            selectedCount={selectedCountMap.get(player.target_id)}
            onClick={() => toggleSelect(player)}
          />
        ))}
      </div>
    )
  }

  return (
    <FollowListLayout
      title="Follow Players"
      subtitle="Select players to follow"
      searchPanel={searchPanel}
      loadMoreProps={{ hasNextPage: !!hasNextPage, fetchNextPage, isFetchingNextPage }}
      stepIndicator={
        <StepIndicator
          totalSteps={3}
          currentStep={2}
          onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
          onDone={handleDone}
          doneLabel="Done"
        />
      }
      renderListContent={renderListContent}
      onClose={() => onNavigate(PAGES.MAIN)}
    />
  )
}
