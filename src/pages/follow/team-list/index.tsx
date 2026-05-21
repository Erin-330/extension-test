import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import {
  FOLLOW_SELECTION_LIMIT,
  FOLLOW_TEAM_LIMIT_ERROR_MSG,
} from '../../../features/follow/model/constants/selectionLimits'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { TeamSelectButton } from '../../../features/follow/ui/TeamSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'

interface TeamListPageProps {
  onNavigate: (page: string) => void
}

const MOCK_TEAMS: FollowTargetItem[] = [
  { target_id: 't1', name: 'T1', slug: 't1', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=T1', boostYN: 'Y' },
  { target_id: 'geng', name: 'Gen.G', slug: 'gen-g', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=GG', boostYN: 'Y' },
  { target_id: 'hle', name: 'Hanwha Life Esports', slug: 'hle', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=HL', boostYN: 'N' },
  { target_id: 'dk', name: 'DPlus KIA', slug: 'dk', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=DK', boostYN: 'N' },
  { target_id: 'kt', name: 'KT Rolster', slug: 'kt', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=KT', boostYN: 'N' },
  { target_id: 'ns', name: 'Nongshim RedForce', slug: 'ns', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=NS', boostYN: 'N' },
  { target_id: 'bro', name: 'OK저축은행 BRION', slug: 'bro', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=BR', boostYN: 'N' },
  { target_id: 'drx', name: 'DRX', slug: 'drx', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=DR', boostYN: 'N' },
]

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
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFollowListPage({ followType: 'team', searchPanel }, onNavigate)

  const displayList = list.length > 0 ? list : MOCK_TEAMS
  const sortedList = getDisplayList(displayList)

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.team) {
      alert(FOLLOW_TEAM_LIMIT_ERROR_MSG)
      return
    }
    onNavigate(PAGES.FOLLOW_PLAYER)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
      if (isSearchLoading) {
        return <p className="py-8 text-center text-[14px] text-[#757b90]">Searching...</p>
      }
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

    return (
      <div className="flex flex-col gap-2">
        {sortedList.map((team) => (
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
