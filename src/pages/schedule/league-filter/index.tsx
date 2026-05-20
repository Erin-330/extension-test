import { AppHeader } from '../../../shared/ui/AppHeader'
import { PageScrollLayout } from '../../../shared/ui/PageScrollLayout'
import { LoadingSpinner } from '../../../shared/ui/LoadingSpinner'
import { LeagueSelectButton } from '../../../features/league-filter/ui/LeagueSelectButton'
import { useLeagueFilter } from '../../../features/league-filter/model/hooks/useLeagueFilter'

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6 text-dsText-900"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface LeagueFilterPageProps {
  onNavigate: (page: string) => void
}

export function LeagueFilterPage({ onNavigate }: LeagueFilterPageProps) {
  const { selectedLeagueId, leagues, isPending, handleSelect, handleDone, handleClose } =
    useLeagueFilter(onNavigate)

  return (
    <PageScrollLayout>
      <AppHeader
        left={
          <button type="button" onClick={handleClose} aria-label="닫기" className="p-1">
            <CloseIcon />
          </button>
        }
        center="리그 선택"
      />

      <main className="flex flex-col gap-3 overflow-y-auto p-4 pb-28">
        {isPending ? (
          <LoadingSpinner />
        ) : (
          leagues.map((league) => (
            <LeagueSelectButton
              key={league.league_id}
              leagueName={league.name}
              annotation={league.slug}
              leagueImgUrl={league.image_url}
              isActive={selectedLeagueId === league.league_id}
              isBoostAvailable={league.boostYN === 'Y'}
              onClick={() => handleSelect(league.league_id)}
            />
          ))
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <button
          type="button"
          onClick={handleDone}
          className="w-full rounded-2xl bg-scoreColor py-4 text-base font-semibold text-white transition-opacity active:opacity-80"
        >
          완료
        </button>
      </div>
    </PageScrollLayout>
  )
}
