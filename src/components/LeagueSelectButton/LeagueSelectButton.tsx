import type { LeagueSelectButtonProps } from './LeagueSelectButton.types'

export function LeagueSelectButton({
  leagueName,
  annotation,
  leagueImgUrl,
  isActive,
  isBoostAvailable,
  selectedCount,
  onClick,
}: LeagueSelectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={[
        'w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors text-left',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isActive
          ? 'bg-blue-50 border-blue-500'
          : 'bg-white border-gray-200 hover:bg-gray-50',
      ].join(' ')}
    >
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
        {leagueImgUrl ? (
          <img
            src={leagueImgUrl}
            alt={`${leagueName} 로고`}
            className="w-full h-full object-cover"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
        ) : (
          <span className="text-xs text-gray-400">{annotation.slice(0, 3)}</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-gray-900 truncate">
            {leagueName}
          </span>
          {isBoostAvailable && (
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 shrink-0">
              BOOST
            </span>
          )}
        </div>
        <div className="text-xs text-gray-500 truncate">{annotation}</div>
      </div>

      {typeof selectedCount === 'number' && selectedCount > 0 && (
        <span className="text-xs font-medium text-blue-600 shrink-0">
          {selectedCount}
        </span>
      )}

      <span
        aria-hidden="true"
        className={[
          'w-5 h-5 rounded-full border flex items-center justify-center shrink-0',
          isActive ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white',
        ].join(' ')}
      >
        {isActive && (
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="w-3 h-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 8.5l3 3 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  )
}
