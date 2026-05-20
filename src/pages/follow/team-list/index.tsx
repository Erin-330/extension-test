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
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 't1',
    name: 'T1',
    slug: 't1',
    image_url: 'https://placehold.co/28x28/e60012/ffffff?text=T1',
    boostYN: 'Y',
  },
  {
    target_id: 'geng',
    name: 'Gen.G',
    slug: 'geng',
    image_url: 'https://placehold.co/28x28/aa8c30/ffffff?text=GEN',
    boostYN: 'Y',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life',
    slug: 'hle',
    image_url: 'https://placehold.co/28x28/ff6f1c/ffffff?text=HLE',
    boostYN: 'N',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    slug: 'dk',
    image_url: 'https://placehold.co/28x28/0066b3/ffffff?text=DK',
    boostYN: 'N',
  },
  {
    target_id: 'kt',
    name: 'KT Rolster',
    slug: 'kt',
    image_url: 'https://placehold.co/28x28/cc0000/ffffff?text=KT',
    boostYN: 'Y',
  },
  {
    target_id: 'br',
    name: 'BNK FearX',
    slug: 'br',
    image_url: 'https://placehold.co/28x28/000000/ffffff?text=BFX',
    boostYN: 'N',
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
    isListLoading,
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

  const baseList = list.length > 0 || isListLoading ? list : MOCK_TEAMS

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.team) {
      window.alert(FOLLOW_TEAM_LIMIT_ERROR_MSG)
      return
    }
    goTo(PAGES.FOLLOW_PLAYER)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
      if (searchList.length === 0) return <SearchResultsEmpty />
      return (
        <div className="flex flex-col gap-2">
          {searchList.map((team) => (
            <TeamSelectButton
              key={team.target_id}
              teamName={team.name}
              annotation={team.slug}
              teamImgUrl={team.image_url}
              isActive={orderedTargetIds.includes(team.target_id)}
              selectedCount={selectedCountMap.get(team.target_id)}
              isBoostAvailable={team.boostYN === 'Y'}
              onClick={() => markSelectedFromSearch(team)}
            />
          ))}
        </div>
      )
    }

    const displayList = getDisplayList(baseList)
    return (
      <div className="flex flex-col gap-2">
        {displayList.map((team) => (
          <TeamSelectButton
            key={team.target_id}
            teamName={team.name}
            annotation={team.slug}
            teamImgUrl={team.image_url}
            isActive={orderedTargetIds.includes(team.target_id)}
            selectedCount={selectedCountMap.get(team.target_id)}
            isBoostAvailable={team.boostYN === 'Y'}
            onClick={() => toggleSelect(team)}
          />
        ))}
      </div>
    )
  }

  return (
    <FollowListLayout
      title="Back Your Team"
      subtitle="Select teams to follow"
      searchPanel={searchPanel}
      loadMoreProps={{ hasNextPage: !!hasNextPage, fetchNextPage, isFetchingNextPage }}
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
