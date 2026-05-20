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
      'https://www.figma.com/api/mcp/asset/eed5c6e6-c1a6-456a-ade8-7aa03fe07846',
    boostYN: 'Y',
  },
  {
    target_id: 'kt',
    name: 'KT Rollster',
    slug: 'KT Rollster',
    image_url:
      'https://www.figma.com/api/mcp/asset/853cc8f5-9ae3-4730-b936-919a7bfe2657',
    boostYN: 'Y',
  },
  {
    target_id: 'geng',
    name: 'GEN G',
    slug: 'Gen.G',
    image_url:
      'https://www.figma.com/api/mcp/asset/32a4a9c8-412c-479f-a634-03fa305c6b17',
    boostYN: 'N',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life Esports',
    slug: 'Hanwha Life Esports',
    image_url:
      'https://www.figma.com/api/mcp/asset/51ca30e7-bfd2-4eb4-b6dd-a30df19c3a98',
    boostYN: 'N',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    slug: 'Dplus KIA',
    image_url:
      'https://www.figma.com/api/mcp/asset/acfb730f-323e-4126-858b-a7de1154172e',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-1',
    name: 'Weibo Gaming',
    slug: 'Weibo Gaming',
    image_url:
      'https://www.figma.com/api/mcp/asset/6059d3bf-c9b0-4165-8fec-ac38450c48cd',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-2',
    name: 'Weibo Gaming',
    slug: 'Weibo Gaming',
    image_url:
      'https://www.figma.com/api/mcp/asset/6059d3bf-c9b0-4165-8fec-ac38450c48cd',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-3',
    name: 'Weibo Gaming',
    slug: 'Weibo Gaming',
    image_url:
      'https://www.figma.com/api/mcp/asset/0b249a54-dd1c-4891-a4f7-930b15541f07',
    boostYN: 'N',
  },
  {
    target_id: 'wbg-4',
    name: 'Weibo Gaming',
    slug: 'Weibo Gaming',
    image_url:
      'https://www.figma.com/api/mcp/asset/0b249a54-dd1c-4891-a4f7-930b15541f07',
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
      searchPlaceholder="Search teams..."
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
