import { PAGES } from '../../../shared/constants/pages'
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
import type { FollowTargetItem } from '../../../features/follow/api/followApi'

const MOCK_LEAGUES: FollowTargetItem[] = [
  {
    target_id: 'league-lck',
    name: 'LCK',
    slug: 'League of Legends Champions Korea',
    image_url: 'https://www.figma.com/api/mcp/asset/a993f3d7-1076-4ef8-97a6-7ee4b37a162b',
    boostYN: 'Y',
  },
  {
    target_id: 'league-lpl',
    name: 'LPL',
    slug: 'League of Legends Pro League',
    image_url: 'https://www.figma.com/api/mcp/asset/abaee323-2209-45c1-a4e9-25bcca8acc20',
    boostYN: 'Y',
  },
  {
    target_id: 'league-vcs',
    name: 'VCS',
    slug: 'Vietnam Championship Series',
    image_url: 'https://www.figma.com/api/mcp/asset/00b5a71d-dc19-4566-9847-23d3b3b59198',
    boostYN: 'Y',
  },
  {
    target_id: 'league-msi',
    name: 'MSI',
    slug: 'Mid-Season Invitational',
    image_url: 'https://www.figma.com/api/mcp/asset/6a79ec3c-ad86-4fcd-a034-65e4743be913',
    boostYN: 'Y',
  },
  {
    target_id: 'league-lec',
    name: 'LEC',
    slug: 'League of Legends EMEA Championship',
    image_url: 'https://www.figma.com/api/mcp/asset/fec23b9c-8622-4ca9-945b-0861f8fba4d8',
    boostYN: 'N',
  },
  {
    target_id: 'league-cblol',
    name: 'CBLOL',
    slug: 'Circuit Brazilian League of Legends',
    image_url: 'https://www.figma.com/api/mcp/asset/9b756528-d3d5-40c0-9326-33facf4b403a',
    boostYN: 'N',
  },
  {
    target_id: 'league-lla',
    name: 'LLA',
    slug: 'League of Legends in Hispanic America',
    image_url: 'https://www.figma.com/api/mcp/asset/b082fce1-a4e1-447f-b503-2cd02ae5d67b',
    boostYN: 'N',
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

  const baseList = list.length > 0 ? list : MOCK_LEAGUES
  const displayList = getDisplayList(baseList)

  const handleNext = () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.league) {
      alert(FOLLOW_LEAGUE_LIMIT_ERROR_MSG)
      return
    }
    goTo(PAGES.FOLLOW_TEAM)
  }

  const renderListContent = () => {
    if (searchPanel.isOpen && searchPanel.query.trim().length > 0) {
      if (isSearchLoading) return null
      if (searchList.length === 0) return <SearchResultsEmpty />
      return (
        <div className="flex flex-col gap-3">
          {searchList.map((league) => {
            const isActive = orderedTargetIds.includes(league.target_id)
            return (
              <LeagueSelectButton
                key={league.target_id}
                leagueName={league.name}
                annotation={league.slug}
                leagueImgUrl={league.image_url}
                isActive={isActive}
                selectedCount={selectedCountMap.get(league.target_id)}
                isBoostAvailable={league.boostYN === 'Y'}
                onClick={() => markSelectedFromSearch(league)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-3">
        {displayList.map((league) => {
          const isActive = orderedTargetIds.includes(league.target_id)
          return (
            <LeagueSelectButton
              key={league.target_id}
              leagueName={league.name}
              annotation={league.slug}
              leagueImgUrl={league.image_url}
              isActive={isActive}
              selectedCount={selectedCountMap.get(league.target_id)}
              isBoostAvailable={league.boostYN === 'Y'}
              onClick={() => toggleSelect(league)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <FollowListLayout
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      searchPanel={searchPanel}
      loadMoreProps={{ hasNextPage: Boolean(hasNextPage), fetchNextPage, isFetchingNextPage }}
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
