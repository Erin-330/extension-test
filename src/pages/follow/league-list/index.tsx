import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { LeagueSelectButton } from '../../../features/follow/ui/LeagueSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import {
  FOLLOW_LEAGUE_LIMIT_ERROR_MSG,
  FOLLOW_SELECTION_LIMIT,
} from '../../../features/follow/model/constants/selectionLimits'
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../features/follow/api/followApi'

const MOCK_LEAGUES: FollowTargetItem[] = [
  {
    target_id: 'lck',
    name: 'LCK',
    slug: 'lck',
    image_url: 'https://placehold.co/28x28/4f80ff/ffffff?text=LCK',
    boostYN: 'Y',
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    slug: 'lpl',
    image_url: 'https://placehold.co/28x28/e74c3c/ffffff?text=LPL',
    boostYN: 'Y',
  },
  {
    target_id: 'lec',
    name: 'LEC',
    slug: 'lec',
    image_url: 'https://placehold.co/28x28/2ecc71/ffffff?text=LEC',
    boostYN: 'N',
  },
  {
    target_id: 'lcs',
    name: 'LCS',
    slug: 'lcs',
    image_url: 'https://placehold.co/28x28/f1c40f/ffffff?text=LCS',
    boostYN: 'N',
  },
  {
    target_id: 'msi',
    name: 'MSI',
    slug: 'msi',
    image_url: 'https://placehold.co/28x28/9b59b6/ffffff?text=MSI',
    boostYN: 'Y',
  },
  {
    target_id: 'worlds',
    name: 'Worlds',
    slug: 'worlds',
    image_url: 'https://placehold.co/28x28/1abc9c/ffffff?text=WC',
    boostYN: 'Y',
  },
]

interface LeagueListPageProps {
  onNavigate: (page: string) => void
}

export function LeagueListPage({ onNavigate }: LeagueListPageProps) {
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
  } = useFollowListPage({ followType: 'league', searchPanel }, onNavigate)

  const baseList = list.length > 0 || isListLoading ? list : MOCK_LEAGUES

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.league) {
      window.alert(FOLLOW_LEAGUE_LIMIT_ERROR_MSG)
      return
    }
    goTo(PAGES.FOLLOW_TEAM)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
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

    const displayList = getDisplayList(baseList)
    return (
      <div className="flex flex-col gap-2">
        {displayList.map((league) => (
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
