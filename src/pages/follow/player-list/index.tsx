import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { PlayerSelectButton } from '../../../features/follow/ui/PlayerSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import {
  FOLLOW_PLAYER_LIMIT_ERROR_MSG,
  FOLLOW_SELECTION_LIMIT,
} from '../../../features/follow/model/constants/selectionLimits'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { submitFollowAll } from '../../../features/follow/api/followApi'
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'

type MockPlayer = FollowTargetItem & {
  full_name?: string
  team_img_url?: string
  team_name?: string
}

const TEAM_LOGO_T1 = 'https://www.figma.com/api/mcp/asset/38f6fcb1-c81e-427e-9610-058fbd19ee0f'
const TEAM_LOGO_KT = 'https://www.figma.com/api/mcp/asset/b7584157-7d21-4466-a1b7-c1ee2b9e7f76'
const TEAM_LOGO_GENG = 'https://www.figma.com/api/mcp/asset/1b1472b1-66db-490d-bcfe-fdfeece19aca'
const PLAYER_IMG = 'https://www.figma.com/api/mcp/asset/a741e6cc-9feb-413c-8067-703cda0a1393'

const MOCK_PLAYERS: MockPlayer[] = [
  {
    target_id: 'doran',
    name: 'Doran',
    slug: 'Choi Hyeon-Joon',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    full_name: 'Choi Hyeon-Joon',
    team_img_url: TEAM_LOGO_T1,
    team_name: 'T1',
  },
  {
    target_id: 'faker',
    name: 'Faker',
    slug: 'Lee Sang-Hyeok',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    full_name: 'Lee Sang-Hyeok',
    team_img_url: TEAM_LOGO_T1,
    team_name: 'T1',
  },
  {
    target_id: 'keria',
    name: 'Keria',
    slug: 'Ryu Min-Seok',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    full_name: 'Ryu Min-Seok',
    team_img_url: TEAM_LOGO_T1,
    team_name: 'T1',
  },
  {
    target_id: 'oner',
    name: 'Oner',
    slug: 'Mun Hyeon-Jun',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    full_name: 'Mun Hyeon-Jun',
    team_img_url: TEAM_LOGO_T1,
    team_name: 'T1',
  },
  {
    target_id: 'perfect',
    name: 'PerfecT',
    slug: 'Lee Seung-Min',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    full_name: 'Lee Seung-Min',
    team_img_url: TEAM_LOGO_KT,
    team_name: 'KT Rollster',
  },
  {
    target_id: 'bdd',
    name: 'Bdd',
    slug: 'Gwak Bo-Seong',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    full_name: 'Gwak Bo-Seong',
    team_img_url: TEAM_LOGO_KT,
    team_name: 'KT Rollster',
  },
  {
    target_id: 'cuzz',
    name: 'Cuzz',
    slug: 'Mun Woo-Chan',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    full_name: 'Mun Woo-Chan',
    team_img_url: TEAM_LOGO_KT,
    team_name: 'KT Rollster',
  },
  {
    target_id: 'aiming',
    name: 'Aiming',
    slug: 'Kim Ha-Ram',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    full_name: 'Kim Ha-Ram',
    team_img_url: TEAM_LOGO_KT,
    team_name: 'KT Rollster',
  },
  {
    target_id: 'ghost',
    name: 'Ghost',
    slug: 'Jang Yong-Jun',
    image_url: PLAYER_IMG,
    boostYN: 'N',
    full_name: 'Jang Yong-Jun',
    team_img_url: TEAM_LOGO_KT,
    team_name: 'KT Rollster',
  },
  {
    target_id: 'canyon',
    name: 'Canyon',
    slug: 'Kim Geon-Bu',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    full_name: 'Kim Geon-Bu',
    team_img_url: TEAM_LOGO_GENG,
    team_name: 'Gen.G',
  },
  {
    target_id: 'ruler',
    name: 'Ruler',
    slug: 'Park Jae-Hyuk',
    image_url: PLAYER_IMG,
    boostYN: 'Y',
    full_name: 'Park Jae-Hyuk',
    team_img_url: TEAM_LOGO_GENG,
    team_name: 'Gen.G',
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

  const store = useFollowSelectionsStore()

  const sourceList: MockPlayer[] = list.length > 0 ? (list as MockPlayer[]) : MOCK_PLAYERS

  const handlePrev = () => goTo(PAGES.FOLLOW_TEAM)

  const handleDone = async () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.player) {
      window.alert(FOLLOW_PLAYER_LIMIT_ERROR_MSG)
      return
    }
    try {
      await submitFollowAll({
        league: store.leagues.map((l) => ({ target_id: l.target_id })),
        team: store.teams.map((t) => ({ target_id: t.target_id })),
        player: store.players.map((p) => ({ target_id: p.target_id })),
      })
    } catch {
      // 목업: 서버 없이도 흐름 완료되도록 무시
    }
    store.reset()
    goTo(PAGES.MAIN)
  }

  const findPlayerMeta = (item: FollowTargetItem): MockPlayer => {
    const matched = MOCK_PLAYERS.find((p) => p.target_id === item.target_id)
    return matched ?? (item as MockPlayer)
  }

  const renderPlayerButton = (player: FollowTargetItem, onClick: () => void) => {
    const meta = findPlayerMeta(player)
    return (
      <PlayerSelectButton
        key={player.target_id}
        playerName={player.name}
        fullName={meta.full_name ?? player.slug}
        playerImgUrl={player.image_url}
        teamImgUrl={meta.team_img_url}
        teamName={meta.team_name}
        isActive={orderedTargetIds.includes(player.target_id)}
        selectedCount={selectedCountMap.get(player.target_id)}
        isBoostAvailable={player.boostYN === 'Y'}
        onClick={onClick}
      />
    )
  }

  return (
    <FollowListLayout
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      searchPanel={searchPanel}
      searchPlaceholder="Search players..."
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
