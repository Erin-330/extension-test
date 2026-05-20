import { PAGES } from '../../../shared/constants/pages'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { TeamSelectButton } from '../../../features/follow/ui/TeamSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import {
  FOLLOW_SELECTION_LIMIT,
  FOLLOW_TEAM_LIMIT_ERROR_MSG,
} from '../../../features/follow/model/constants/selectionLimits'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 'team-t1',
    name: 'T1',
    slug: 'T1',
    image_url: 'https://www.figma.com/api/mcp/asset/5524f434-4825-4513-a655-b71256e04021',
    boostYN: 'Y',
  },
  {
    target_id: 'team-kt',
    name: 'KT Rolster',
    slug: 'KT',
    image_url: 'https://www.figma.com/api/mcp/asset/b74e991b-0454-43d2-847e-55829cdbf68c',
    boostYN: 'Y',
  },
  {
    target_id: 'team-geng',
    name: 'GEN.G',
    slug: 'GEN',
    image_url: 'https://www.figma.com/api/mcp/asset/1ef7dd45-a073-4a5c-bf0d-c983760dd540',
    boostYN: 'N',
  },
  {
    target_id: 'team-hle',
    name: 'Hanwha Life Esports',
    slug: 'HLE',
    image_url: 'https://www.figma.com/api/mcp/asset/15df3d1d-c718-412b-9afb-e297c1586db7',
    boostYN: 'N',
  },
  {
    target_id: 'team-dk',
    name: 'Dplus KIA',
    slug: 'DK',
    image_url: 'https://www.figma.com/api/mcp/asset/80f12f73-2d7f-44ec-af9a-d18071cda57f',
    boostYN: 'N',
  },
  {
    target_id: 'team-wbg',
    name: 'Weibo Gaming',
    slug: 'WBG',
    image_url: 'https://www.figma.com/api/mcp/asset/b10259df-47a7-41ac-99cc-c9984e836653',
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

  const baseList = list.length > 0 ? list : MOCK_TEAMS
  const displayList = getDisplayList(baseList)

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.team) {
      alert(FOLLOW_TEAM_LIMIT_ERROR_MSG)
      return
    }
    goTo(PAGES.FOLLOW_PLAYER)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
      if (isSearchLoading) return null
      if (searchList.length === 0) return <SearchResultsEmpty />
      return (
        <div className="flex flex-col gap-3">
          {searchList.map((team) => {
            const isActive = orderedTargetIds.includes(team.target_id)
            return (
              <TeamSelectButton
                key={team.target_id}
                teamName={team.name}
                annotation={team.slug}
                teamImgUrl={team.image_url}
                isActive={isActive}
                selectedCount={selectedCountMap.get(team.target_id)}
                isBoostAvailable={team.boostYN === 'Y'}
                onClick={() => markSelectedFromSearch(team)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-3">
        {displayList.map((team) => {
          const isActive = orderedTargetIds.includes(team.target_id)
          return (
            <TeamSelectButton
              key={team.target_id}
              teamName={team.name}
              annotation={team.slug}
              teamImgUrl={team.image_url}
              isActive={isActive}
              selectedCount={selectedCountMap.get(team.target_id)}
              isBoostAvailable={team.boostYN === 'Y'}
              onClick={() => toggleSelect(team)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <FollowListLayout
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      searchPanel={searchPanel}
      loadMoreProps={{ hasNextPage: Boolean(hasNextPage), fetchNextPage, isFetchingNextPage }}
      stepIndicator={
        <StepIndicator
          totalSteps={3}
          currentStep={1}
          onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
          onNext={handleNext}
        />
      }
      renderListContent={renderListContent}
      onClose={() => onNavigate(PAGES.MAIN)}
    />
  )
}
