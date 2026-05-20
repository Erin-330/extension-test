import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { PlayerSelectButton } from '../../../features/follow/ui/PlayerSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import {
  FOLLOW_PLAYER_LIMIT_ERROR_MSG,
  FOLLOW_SELECTION_LIMIT,
} from '../../../features/follow/model/constants/selectionLimits'
import { submitFollowAll } from '../../../features/follow/api/followApi'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'
import { PAGES } from '../../../shared/constants/pages'

const T1_LOGO =
  'https://www.figma.com/api/mcp/asset/017b0d72-03b2-4a74-94e0-0ed668387c51'
const KT_LOGO =
  'https://www.figma.com/api/mcp/asset/02587256-0891-4bbd-9b7e-e299287d5a61'
const GENG_LOGO =
  'https://www.figma.com/api/mcp/asset/9d57e632-9fde-4ca4-ab69-905e1b9a4cd8'
const PLAYER_IMG =
  'https://www.figma.com/api/mcp/asset/08be516f-db74-45d4-a040-d7e718d448d0'

const MOCK_PLAYERS: FollowTargetItem[] = [
  {
    target_id: 'doran',
    name: 'Doran',
    slug: 'Choi Hyeon-joon',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    team_name: 'T1',
    team_image_url: T1_LOGO,
  },
  {
    target_id: 'faker',
    name: 'Faker',
    slug: 'Lee Sang-hyeok',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    team_name: 'T1',
    team_image_url: T1_LOGO,
  },
  {
    target_id: 'keria',
    name: 'Keria',
    slug: 'Ryu Min-seok',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    team_name: 'T1',
    team_image_url: T1_LOGO,
  },
  {
    target_id: 'oner',
    name: 'Oner',
    slug: 'Mun Hyeon-jun',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    team_name: 'T1',
    team_image_url: T1_LOGO,
  },
  {
    target_id: 'perfect',
    name: 'PerfecT',
    slug: 'Lee Seung-min',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    team_name: 'KT Rollster',
    team_image_url: KT_LOGO,
  },
  {
    target_id: 'bdd',
    name: 'Bdd',
    slug: 'Gwak Bo-seong',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    team_name: 'KT Rollster',
    team_image_url: KT_LOGO,
  },
  {
    target_id: 'cuzz',
    name: 'Cuzz',
    slug: 'Mun U-chan',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    team_name: 'KT Rollster',
    team_image_url: KT_LOGO,
  },
  {
    target_id: 'aiming',
    name: 'Aiming',
    slug: 'Kim Ha-ram',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    team_name: 'KT Rollster',
    team_image_url: KT_LOGO,
  },
  {
    target_id: 'ghost',
    name: 'Ghost',
    slug: 'Jang Yong-jun',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    team_name: 'KT Rollster',
    team_image_url: KT_LOGO,
  },
  {
    target_id: 'canyon',
    name: 'Canyon',
    slug: 'Kim Geon-bu',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    team_name: 'GEN G',
    team_image_url: GENG_LOGO,
  },
  {
    target_id: 'raiad',
    name: 'Raiad',
    slug: 'Player',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    team_name: 'GEN G',
    team_image_url: GENG_LOGO,
  },
]

interface PlayerListPageProps {
  onNavigate: (page: string) => void
}

export function PlayerListPage({ onNavigate }: PlayerListPageProps) {
  const searchPanel = useSearchPanel()
  const selectionsStore = useFollowSelectionsStore()
  const {
    list,
    searchList,
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
  } = useFollowListPage({ followType: 'player', searchPanel }, onNavigate)

  const sourceList = list.length > 0 ? list : MOCK_PLAYERS

  const handlePrev = () => goTo(PAGES.FOLLOW_TEAM)

  const handleDone = async () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.player) {
      window.alert(FOLLOW_PLAYER_LIMIT_ERROR_MSG)
      return
    }
    try {
      await submitFollowAll({
        league: selectionsStore.leagues.map((l) => ({ target_id: l.target_id })),
        team: selectionsStore.teams.map((t) => ({ target_id: t.target_id })),
        player: selectionsStore.players.map((p) => ({ target_id: p.target_id })),
      })
    } catch {
      // 목 환경: 요청 실패해도 진행
    }
    selectionsStore.reset()
    goTo(PAGES.MAIN)
  }

  const renderPlayerButton = (player: FollowTargetItem, onClick: () => void) => (
    <PlayerSelectButton
      key={player.target_id}
      playerName={player.name}
      teamName={player.team_name}
      teamImgUrl={player.team_image_url}
      playerImgUrl={player.image_url}
      isActive={orderedTargetIds.includes(player.target_id)}
      selectedCount={selectedCountMap.get(player.target_id)}
      isBoostAvailable={player.boostYN === 'Y'}
      onClick={onClick}
    />
  )

  return (
    <FollowListLayout
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      searchPanel={searchPanel}
      onClose={handlePrev}
      loadMoreProps={{
        hasNextPage: !!hasNextPage,
        fetchNextPage: () => {
          fetchNextPage()
        },
        isFetchingNextPage,
      }}
      stepIndicator={
        <StepIndicator
          totalSteps={3}
          currentStep={2}
          onPrev={handlePrev}
          onDone={handleDone}
          doneLabel="Done"
        />
      }
      renderListContent={() => {
        if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
          if (isSearchLoading) return null
          if (searchList.length === 0) return <SearchResultsEmpty />
          return searchList.map((player) =>
            renderPlayerButton(player, () => markSelectedFromSearch(player)),
          )
        }
        return getDisplayList(sourceList).map((player) =>
          renderPlayerButton(player, () => toggleSelect(player)),
        )
      }}
    />
  )
}
