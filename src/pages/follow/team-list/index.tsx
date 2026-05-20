import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { TeamSelectButton } from '../../../features/follow/ui/TeamSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import {
  FOLLOW_SELECTION_LIMIT,
  FOLLOW_TEAM_LIMIT_ERROR_MSG,
} from '../../../features/follow/model/constants/selectionLimits'
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 't1',
    name: 'T1',
    slug: 'T1',
    image_url:
      'https://www.figma.com/api/mcp/asset/2f2649aa-8efa-4e85-8360-8fe93d0620dc',
    boostYN: 'Y',
  },
  {
    target_id: 'kt',
    name: 'KT Rollster',
    slug: 'KT',
    image_url:
      'https://www.figma.com/api/mcp/asset/eb68af8f-351c-4faa-b1da-ef909449daaf',
    boostYN: 'Y',
  },
  {
    target_id: 'geng',
    name: 'GEN G',
    slug: 'GEN',
    image_url:
      'https://www.figma.com/api/mcp/asset/da4a3efc-7408-45c7-8196-43b7230a8060',
    boostYN: 'N',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life Esports',
    slug: 'HLE',
    image_url:
      'https://www.figma.com/api/mcp/asset/cd75f1c9-ae09-4096-acab-216148f2c46c',
    boostYN: 'N',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    slug: 'DK',
    image_url:
      'https://www.figma.com/api/mcp/asset/55119534-e159-4082-9176-31e604b3832b',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-1',
    name: 'Weibo Gaming',
    slug: 'WBG',
    image_url:
      'https://www.figma.com/api/mcp/asset/44f547d3-7e81-4c15-b3b6-27e9a6846146',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-2',
    name: 'Weibo Gaming',
    slug: 'WBG',
    image_url:
      'https://www.figma.com/api/mcp/asset/44f547d3-7e81-4c15-b3b6-27e9a6846146',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-3',
    name: 'Weibo Gaming',
    slug: 'WBG',
    image_url:
      'https://www.figma.com/api/mcp/asset/8a99f36c-1151-4c50-91de-2e09ecc06903',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-4',
    name: 'Weibo Gaming',
    slug: 'WBG',
    image_url:
      'https://www.figma.com/api/mcp/asset/8a99f36c-1151-4c50-91de-2e09ecc06903',
    boostYN: 'Y',
  },
]

interface TeamListPageProps {
  onNavigate: (page: string) => void
}

export function TeamListPage({ onNavigate }: TeamListPageProps) {
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
  } = useFollowListPage({ followType: 'team', searchPanel }, onNavigate)

  const sourceList = list.length > 0 ? list : MOCK_TEAMS

  const handlePrev = () => goTo(PAGES.FOLLOW_LEAGUE)

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.team) {
      window.alert(FOLLOW_TEAM_LIMIT_ERROR_MSG)
      return
    }
    goTo(PAGES.FOLLOW_PLAYER)
  }

  const renderTeamButton = (team: FollowTargetItem, onClick: () => void) => (
    <TeamSelectButton
      key={team.target_id}
      teamName={team.name}
      annotation={team.slug}
      teamImgUrl={team.image_url}
      isActive={orderedTargetIds.includes(team.target_id)}
      selectedCount={selectedCountMap.get(team.target_id)}
      isBoostAvailable={team.boostYN === 'Y'}
      onClick={onClick}
    />
  )

  return (
    <FollowListLayout
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
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
          currentStep={1}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      }
      renderListContent={() => {
        if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
          if (isSearchLoading) return null
          if (searchList.length === 0) return <SearchResultsEmpty />
          return searchList.map((team) =>
            renderTeamButton(team, () => markSelectedFromSearch(team)),
          )
        }
        return getDisplayList(sourceList).map((team) =>
          renderTeamButton(team, () => toggleSelect(team)),
        )
      }}
    />
  )
}
