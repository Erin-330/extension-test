import { useFollowListPage } from '../../../features/follow/model/hooks/useFollowListPage'
import { useSearchPanel } from '../../../features/follow/model/hooks/useSearchPanel'
import { FollowListLayout } from '../../../features/follow/ui/FollowListLayout'
import { LeagueSelectButton } from '../../../features/follow/ui/LeagueSelectButton'
import { SearchResultsEmpty } from '../../../features/follow/ui/SearchResultsEmpty'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
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
    slug: 'League of Legends Champions Korea',
    image_url:
      'https://www.figma.com/api/mcp/asset/417373a5-c726-4c24-9f94-e20ce1058eba',
    boostYN: 'Y',
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    slug: 'League of Legends Pro League',
    image_url:
      'https://www.figma.com/api/mcp/asset/3eeac055-f1de-4d1d-bd10-22fd84a6870e',
    boostYN: 'Y',
  },
  {
    target_id: 'vcs',
    name: 'VCS',
    slug: 'Vietnam Championship Series',
    image_url:
      'https://www.figma.com/api/mcp/asset/df95869c-a530-4af9-aa5a-8319aee175fd',
    boostYN: 'Y',
  },
  {
    target_id: 'msi',
    name: 'MSI',
    slug: 'Mid-Season Invitational',
    image_url:
      'https://www.figma.com/api/mcp/asset/4307f6e3-73f6-4d20-aa60-a5aa21f24aaf',
    boostYN: 'Y',
  },
  {
    target_id: 'lec',
    name: 'LEC',
    slug: 'League of Legends EMEA Championship',
    image_url:
      'https://www.figma.com/api/mcp/asset/70342b0b-b6f9-46e2-99c6-322110f16e3c',
    boostYN: 'N',
  },
  {
    target_id: 'cblol',
    name: 'CBLOL',
    slug: 'Circuit Brazilian League of Legends',
    image_url:
      'https://www.figma.com/api/mcp/asset/4b1ee457-631b-4b97-91b0-9420d0f6bc14',
    boostYN: 'N',
  },
  {
    target_id: 'lla-1',
    name: 'LLA',
    slug: 'League of Legends in Hispanic America',
    image_url:
      'https://www.figma.com/api/mcp/asset/ec6226fe-08d8-41e1-8169-e4e98d770169',
    boostYN: 'N',
  },
  {
    target_id: 'lla-2',
    name: 'LLA',
    slug: 'League of Legends in Hispanic America',
    image_url:
      'https://www.figma.com/api/mcp/asset/ec6226fe-08d8-41e1-8169-e4e98d770169',
    boostYN: 'N',
  },
  {
    target_id: 'lla-3',
    name: 'LLA',
    slug: 'League of Legends in Hispanic America',
    image_url:
      'https://www.figma.com/api/mcp/asset/ec6226fe-08d8-41e1-8169-e4e98d770169',
    boostYN: 'N',
  },
  {
    target_id: 'lla-4',
    name: 'LLA',
    slug: 'League of Legends in Hispanic America',
    image_url:
      'https://www.figma.com/api/mcp/asset/ec6226fe-08d8-41e1-8169-e4e98d770169',
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
  } = useFollowListPage({ followType: 'league', searchPanel }, onNavigate)

  const sourceList = list.length > 0 ? list : MOCK_LEAGUES

  const handlePrev = () => goTo(PAGES.MAIN)

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.league) {
      window.alert(FOLLOW_LEAGUE_LIMIT_ERROR_MSG)
      return
    }
    goTo(PAGES.FOLLOW_TEAM)
  }

  const renderLeagueButton = (league: FollowTargetItem, onClick: () => void) => (
    <LeagueSelectButton
      key={league.target_id}
      leagueName={league.name}
      annotation={league.slug}
      leagueImgUrl={league.image_url}
      isActive={orderedTargetIds.includes(league.target_id)}
      selectedCount={selectedCountMap.get(league.target_id)}
      isBoostAvailable={league.boostYN === 'Y'}
      onClick={onClick}
    />
  )

  return (
    <FollowListLayout
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
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
          currentStep={0}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      }
      renderListContent={() => {
        if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
          if (isSearchLoading) return null
          if (searchList.length === 0) return <SearchResultsEmpty />
          return searchList.map((league) =>
            renderLeagueButton(league, () => markSelectedFromSearch(league)),
          )
        }
        return getDisplayList(sourceList).map((league) =>
          renderLeagueButton(league, () => toggleSelect(league)),
        )
      }}
    />
  )
}
