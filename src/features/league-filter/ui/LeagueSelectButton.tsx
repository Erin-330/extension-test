interface LeagueSelectButtonProps {
  leagueName: string
  annotation: string
  leagueImgUrl: string
  isActive: boolean
  isBoostAvailable: boolean
  selectedCount?: number
  onClick: () => void
}

export function LeagueSelectButton({
  leagueName,
  annotation,
  leagueImgUrl,
  isActive,
  isBoostAvailable,
  onClick,
}: LeagueSelectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex w-full items-center gap-3 rounded-xl border-2 bg-white px-4 py-3 text-left transition-all',
        isActive
          ? 'border-scoreColor shadow-md shadow-scoreColor/20'
          : 'border-transparent hover:border-gray-200',
      ].join(' ')}
    >
      <div className="relative h-12 w-12 shrink-0">
        <img
          src={leagueImgUrl}
          alt={leagueName}
          className="h-full w-full rounded-full object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              `https://placehold.co/48x48/e2e8f0/94a3b8?text=${annotation}`
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm font-semibold text-dsText-900">{leagueName}</span>
        <span className="text-xs text-dsText-50">{annotation}</span>
      </div>

      <div className="flex items-center gap-2">
        {isBoostAvailable && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
            Boost
          </span>
        )}
        <div
          className={[
            'flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors',
            isActive ? 'border-scoreColor bg-scoreColor' : 'border-gray-300',
          ].join(' ')}
        >
          {isActive && (
            <svg
              className="h-3 w-3 text-white"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6L5 9L10 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  )
}
