import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import {
  FOLLOW_SELECTION_LIMIT,
  FOLLOW_LEAGUE_LIMIT_ERROR_MSG,
} from '../../../features/follow/model/constants/selectionLimits'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { LeagueSelectButton } from '../../../features/follow/ui/LeagueSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'

interface LeagueListPageProps {
  onNavigate: (page: string) => void
}

const MOCK_LEAGUES: FollowTargetItem[] = [
  { target_id: 'lck', name: 'LCK', slug: 'lck', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=LK', boostYN: 'Y' },
  { target_id: 'lpl', name: 'LPL', slug: 'lpl', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=LP', boostYN: 'Y' },
  { target_id: 'lec', name: 'LEC', slug: 'lec', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=LE', boostYN: 'N' },
  { target_id: 'lcs', name: 'LCS', slug: 'lcs', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=LS', boostYN: 'N' },
  { target_id: 'pcs', name: 'PCS', slug: 'pcs', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=PC', boostYN: 'N' },
  { target_id: 'vcs', name: 'VCS', slug: 'vcs', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=VC', boostYN: 'N' },
  { target_id: 'cblol', name: 'CBLOL', slug: 'cblol', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=CB', boostYN: 'N' },
  { target_id: 'ljl', name: 'LJL', slug: 'ljl', image_url: 'https://placehold.co/28x28/e2e8f0/969cda?text=LJ', boostYN: 'N' },
]

export function LeagueListPage({ onNavigate }: LeagueListPageProps) {
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
  } = useFollowListPage({ followType: 'league', searchPanel }, onNavigate)

  const displayList = list.length > 0 ? list : MOCK_LEAGUES
  const sortedList = getDisplayList(displayList)

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.league) {
      alert(FOLLOW_LEAGUE_LIMIT_ERROR_MSG)
      return
    }
    onNavigate(PAGES.FOLLOW_TEAM)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
      if (isSearchLoading) {
        return <p className="py-8 text-center text-[14px] text-[#757b90]">Searching...</p>
      }
      if (searchList.length === 0) return <SearchResultsEmpty />
      return (
        <div className="flex flex-col gap-2">
          {searchList.map((league) => (
            <LeagueSelectButton
              key={league.target_id}
              leagueName={league.name}
              annotation={league.slug}
              leagueImgUrl={league.image_url}
              isActive={orderedTargetIds.includes(league.target_id)}
              selectedCount={selectedCountMap.get(league.target_id)}
              isBoostAvailable={league.boostYN === 'Y'}
              onClick={() => markSelectedFromSearch(league)}
            />
          ))}
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-2">
        {sortedList.map((league) => (
          <LeagueSelectButton
            key={league.target_id}
            leagueName={league.name}
            annotation={league.slug}
            leagueImgUrl={league.image_url}
            isActive={orderedTargetIds.includes(league.target_id)}
            selectedCount={selectedCountMap.get(league.target_id)}
            isBoostAvailable={league.boostYN === 'Y'}
            onClick={() => toggleSelect(league)}
          />
        ))}
      </div>
    )
  }

  return (
    <FollowListLayout
      title="Back Your League"
      subtitle="Follow your favorite leagues"
      searchPanel={searchPanel}
      loadMoreProps={{ hasNextPage: !!hasNextPage, fetchNextPage, isFetchingNextPage }}
      stepIndicator={
        <StepIndicator
          totalSteps={3}
          currentStep={0}
          onPrev={() => onNavigate(PAGES.MAIN)}
          onNext={handleNext}
        />
      }
      renderListContent={renderListContent}
      onClose={() => onNavigate(PAGES.MAIN)}
    />
  )
}
