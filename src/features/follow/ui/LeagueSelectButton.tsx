interface LeagueSelectButtonProps {
  leagueName: string
  annotation: string
  leagueImgUrl: string
  isActive: boolean
  selectedCount?: number
  isBoostAvailable: boolean
  onClick: () => void
}

function BoostBadge() {
  return (
    <div
      className="flex shrink-0 items-center gap-[2px] rounded-[2px] px-[2px] py-px"
      style={{
        background: 'linear-gradient(180deg, #c0b1ff 4.808%, #a28cff 50%, #6f4cff 100%)',
      }}
    >
      <svg className="h-[6px] w-[6px] shrink-0" viewBox="0 0 10 14" fill="white">
        <path d="M6 0L0 8h4l-1 6L10 5H6L6 0z" />
      </svg>
      <span className="text-[8px] font-bold leading-none text-white">BOOST</span>
    </div>
  )
}

function SelectNum({ count, isActive }: { count?: number; isActive: boolean }) {
  return (
    <div className="flex h-full shrink-0 items-center justify-center overflow-clip rounded-br-[8px] rounded-tr-[8px] px-3">
      {isActive && count != null ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#969cda] text-[13px] font-bold text-white">
          {count}
        </div>
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-[6px] border-[0.4px] border-[#969cda]">
          <svg
            className="h-5 w-5 text-[#969cda]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M2 21c0-4 3.134-7 7-7s7 3 7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 12v6M16 15h6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export function LeagueSelectButton({
  leagueName,
  annotation,
  leagueImgUrl,
  isActive,
  selectedCount,
  isBoostAvailable,
  onClick,
}: LeagueSelectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[68px] w-full shrink-0 items-start gap-1 rounded-[8px] bg-white text-left"
      style={{ boxShadow: '0px 2px 2px rgba(0,0,0,0.08)' }}
    >
      {/* Info section */}
      <div className="flex h-full flex-1 items-center gap-3 overflow-hidden px-3">
        {/* Logo */}
        <div className="flex shrink-0 items-center rounded-[6px] p-[2px]">
          <div className="relative h-7 w-7 overflow-hidden">
            <img
              src={leagueImgUrl}
              alt={leagueName}
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `https://placehold.co/28x28/e2e8f0/969cda?text=${leagueName.slice(0, 2)}`
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-[4px]">
          {isBoostAvailable && <BoostBadge />}
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[20px] font-bold leading-none text-black">
            {leagueName}
          </p>
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-normal leading-[1.2] text-[#757b90]">
            {annotation}
          </p>
        </div>
      </div>

      {/* Select button */}
      <SelectNum count={selectedCount} isActive={isActive} />
    </button>
  )
}
