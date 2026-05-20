import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { PAGES } from '../../../shared/constants/pages'
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
import {
  submitFollowAll,
  type FollowTargetItem,
} from '../../../features/follow/api/followApi'

const PLAYER_PORTRAIT = 'https://www.figma.com/api/mcp/asset/6b9b2838-bbb9-4092-aa44-e015c2c7a7dc'
const T1_LOGO = 'https://www.figma.com/api/mcp/asset/cbd9705d-6c5c-4ee8-892b-d0957f9fe268'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/998e67b3-53ac-4e58-9354-6885fb1fa17e'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/78add0bb-b6e6-4b38-a6b9-18b51062c53a'

const MOCK_PLAYERS: FollowTargetItem[] = [
  {
    target_id: 'player-doran',
    name: 'Doran',
    slug: 'Choi Hyeon-joon',
    image_url: PLAYER_PORTRAIT,
    team_name: 'T1',
    team_image_url: T1_LOGO,
    boostYN: 'Y',
  },
  {
    target_id: 'player-faker',
    name: 'Faker',
    slug: 'Lee Sang-hyeok',
    image_url: PLAYER_PORTRAIT,
    team_name: 'T1',
    team_image_url: T1_LOGO,
    boostYN: 'Y',
  },
  {
    target_id: 'player-keria',
    name: 'Keria',
    slug: 'Ryu Min-seok',
    image_url: PLAYER_PORTRAIT,
    team_name: 'T1',
    team_image_url: T1_LOGO,
    boostYN: 'Y',
  },
  {
    target_id: 'player-oner',
    name: 'Oner',
    slug: 'Mun Hyeon-jun',
    image_url: PLAYER_PORTRAIT,
    team_name: 'T1',
    team_image_url: T1_LOGO,
    boostYN: 'Y',
  },
  {
    target_id: 'player-perfect',
    name: 'PerfecT',
    slug: 'Lee Seung-min',
    image_url: PLAYER_PORTRAIT,
    team_name: 'KT Rolster',
    team_image_url: KT_LOGO,
    boostYN: 'N',
  },
  {
    target_id: 'player-bdd',
    name: 'Bdd',
    slug: 'Gwak Bo-seong',
    image_url: PLAYER_PORTRAIT,
    team_name: 'KT Rolster',
    team_image_url: KT_LOGO,
    boostYN: 'N',
  },
  {
    target_id: 'player-cuzz',
    name: 'Cuzz',
    slug: 'Mun U-chan',
    image_url: PLAYER_PORTRAIT,
    team_name: 'KT Rolster',
    team_image_url: KT_LOGO,
    boostYN: 'N',
  },
  {
    target_id: 'player-aiming',
    name: 'Aiming',
    slug: 'Kim Ha-ram',
    image_url: PLAYER_PORTRAIT,
    team_name: 'KT Rolster',
    team_image_url: KT_LOGO,
    boostYN: 'N',
  },
  {
    target_id: 'player-ghost',
    name: 'Ghost',
    slug: 'Jang Yong-jun',
    image_url: PLAYER_PORTRAIT,
    team_name: 'KT Rolster',
    team_image_url: KT_LOGO,
    boostYN: 'N',
  },
  {
    target_id: 'player-canyon',
    name: 'Canyon',
    slug: 'Kim Geon-bu',
    image_url: PLAYER_PORTRAIT,
    team_name: 'GEN.G',
    team_image_url: GENG_LOGO,
    boostYN: 'Y',
  },
]

interface PlayerListPageProps {
  onNavigate: (page: string) => void
}

export function PlayerListPage({ onNavigate }: PlayerListPageProps) {
  const searchPanel = useSearchPanel()
  const resetSelections = useFollowSelectionsStore((s) => s.reset)
  const selectedLeagues = useFollowSelectionsStore((s) => s.leagues)
  const selectedTeams = useFollowSelectionsStore((s) => s.teams)
  const selectedPlayers = useFollowSelectionsStore((s) => s.players)

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

  const baseList = list.length > 0 ? list : MOCK_PLAYERS
  const displayList = getDisplayList(baseList)

  const handleDone = async () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.player) {
      alert(FOLLOW_PLAYER_LIMIT_ERROR_MSG)
      return
    }
    try {
      await submitFollowAll({
        league: selectedLeagues.map((l) => ({ target_id: l.target_id })),
        team: selectedTeams.map((t) => ({ target_id: t.target_id })),
        player: selectedPlayers.map((p) => ({ target_id: p.target_id })),
      })
    } catch {
      // Mock data flow — ignore network errors in this prototype
    }
    resetSelections()
    onNavigate(PAGES.MAIN)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
      if (isSearchLoading) return null
      if (searchList.length === 0) return <SearchResultsEmpty />
      return (
        <div className="flex flex-col gap-3">
          {searchList.map((player) => {
            const isActive = orderedTargetIds.includes(player.target_id)
            return (
              <PlayerSelectButton
                key={player.target_id}
                playerName={player.name}
                teamName={player.team_name}
                teamImgUrl={player.team_image_url}
                playerImgUrl={player.image_url}
                isActive={isActive}
                selectedCount={selectedCountMap.get(player.target_id)}
                isBoostAvailable={player.boostYN === 'Y'}
                onClick={() => markSelectedFromSearch(player)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-3">
        {displayList.map((player) => {
          const isActive = orderedTargetIds.includes(player.target_id)
          return (
            <PlayerSelectButton
              key={player.target_id}
              playerName={player.name}
              teamName={player.team_name}
              teamImgUrl={player.team_image_url}
              playerImgUrl={player.image_url}
              isActive={isActive}
              selectedCount={selectedCountMap.get(player.target_id)}
              isBoostAvailable={player.boostYN === 'Y'}
              onClick={() => toggleSelect(player)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <FollowListLayout
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      searchPanel={searchPanel}
      loadMoreProps={{ hasNextPage: Boolean(hasNextPage), fetchNextPage, isFetchingNextPage }}
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
