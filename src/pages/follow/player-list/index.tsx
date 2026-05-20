import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { PlayerSelectButton } from '../../../features/follow/ui/PlayerSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import {
  FOLLOW_PLAYER_LIMIT_ERROR_MSG,
  FOLLOW_SELECTION_LIMIT,
} from '../../../features/follow/model/constants/selectionLimits'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { submitFollowAll } from '../../../features/follow/api/followApi'
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'

const MOCK_PLAYERS: FollowTargetItem[] = [
  {
    target_id: 'faker',
    name: 'Faker',
    slug: 'faker',
    image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=F',
    team_name: 'T1',
    team_image_url: 'https://placehold.co/20x20/e60012/ffffff?text=T1',
  },
  {
    target_id: 'zeus',
    name: 'Zeus',
    slug: 'zeus',
    image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=Z',
    team_name: 'T1',
    team_image_url: 'https://placehold.co/20x20/e60012/ffffff?text=T1',
  },
  {
    target_id: 'chovy',
    name: 'Chovy',
    slug: 'chovy',
    image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=C',
    team_name: 'Gen.G',
    team_image_url: 'https://placehold.co/20x20/aa8c30/ffffff?text=GEN',
  },
  {
    target_id: 'canyon',
    name: 'Canyon',
    slug: 'canyon',
    image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=Cn',
    team_name: 'Gen.G',
    team_image_url: 'https://placehold.co/20x20/aa8c30/ffffff?text=GEN',
  },
  {
    target_id: 'showmaker',
    name: 'ShowMaker',
    slug: 'showmaker',
    image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=SM',
    team_name: 'Dplus KIA',
    team_image_url: 'https://placehold.co/20x20/0066b3/ffffff?text=DK',
  },
  {
    target_id: 'viper',
    name: 'Viper',
    slug: 'viper',
    image_url: 'https://placehold.co/28x28/4e4743/ffffff?text=V',
    team_name: 'Hanwha Life',
    team_image_url: 'https://placehold.co/20x20/ff6f1c/ffffff?text=HLE',
  },
]

interface PlayerListPageProps {
  onNavigate: (page: string) => void
}

export function PlayerListPage({ onNavigate }: PlayerListPageProps) {
  const searchPanel = useSearchPanel()
  const {
    list,
    searchList,
    isListLoading,
    orderedTargetIds,
    selectedCountMap,
    toggleSelect,
    markSelectedFromSearch,
    getDisplayList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFollowListPage({ followType: 'player', searchPanel }, onNavigate)

  const { leagues, teams, players, reset } = useFollowSelectionsStore()

  const baseList = list.length > 0 || isListLoading ? list : MOCK_PLAYERS

  const handleDone = async () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.player) {
      window.alert(FOLLOW_PLAYER_LIMIT_ERROR_MSG)
      return
    }
    try {
      await submitFollowAll({
        league: leagues.map((l) => ({ target_id: l.target_id })),
        team: teams.map((t) => ({ target_id: t.target_id })),
        player: players.map((p) => ({ target_id: p.target_id })),
      })
    } catch {
      /* network may not be available — proceed to main */
    }
    reset()
    onNavigate(PAGES.MAIN)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
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

    const displayList = getDisplayList(baseList)
    return (
      <div className="flex flex-col gap-2">
        {displayList.map((player) => (
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
