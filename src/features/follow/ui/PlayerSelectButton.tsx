interface PlayerSelectButtonProps {
  playerName: string
  fullName?: string
  playerImgUrl: string
  teamImgUrl?: string
  teamName?: string
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
  if (isActive && count != null) {
    return (
      <div className="flex h-full w-[54px] shrink-0 items-center justify-center gap-[4px] overflow-clip bg-[#209fee]">
        <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
          <path d="M1 4L5 8L12 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[14px] font-light leading-5 text-white">{count}</span>
      </div>
    )
  }
  return (
    <div className="flex h-full shrink-0 items-center justify-center overflow-clip rounded-br-[8px] rounded-tr-[8px] px-[12px]">
      <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] border-[0.4px] border-[#969cda]">
        <svg className="h-5 w-5 text-[#969cda]" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 21c0-4 3.134-7 7-7s7 3 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 12v6M16 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

export function PlayerSelectButton({
  playerName,
  fullName,
  playerImgUrl,
  teamImgUrl,
  teamName,
  isActive,
  selectedCount,
  isBoostAvailable,
  onClick,
}: PlayerSelectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex h-[68px] w-full shrink-0 items-center gap-[4px] rounded-[8px] bg-white text-left overflow-clip',
        isActive ? 'border-2 border-[#209fee]' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={isActive ? undefined : { boxShadow: '0px 1px 2px rgba(0,0,0,0.1)' }}
    >
      <div className="flex h-full flex-1 items-center gap-3 overflow-hidden px-3">
        {/* Player avatar (circular) */}
        <div className="flex shrink-0 items-center justify-center p-[2px]">
          <div className="h-7 w-7 overflow-hidden rounded-full bg-[#4e4743]">
            <img
              src={playerImgUrl}
              alt={playerName}
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src = `https://placehold.co/28x28/4e4743/ffffff?text=${playerName.slice(0, 1)}`
              }}
            />
          </div>
        </div>

        {/* Text block */}
        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-[4px]">
          {isBoostAvailable && <BoostBadge />}
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-bold leading-5 text-black">
            {playerName}
          </p>
          {fullName && (
            <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-normal leading-[1.2] text-[#757b90]">
              {fullName}
            </p>
          )}
        </div>

        {/* Team logo */}
        {teamImgUrl && (
          <div className="h-5 w-5 shrink-0 overflow-hidden">
            <img
              src={teamImgUrl}
              alt={teamName ?? ''}
              className="h-full w-full object-contain"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src = `https://placehold.co/20x20/e2e8f0/969cda?text=${(teamName ?? '').slice(0, 1)}`
              }}
            />
          </div>
        )}
      </div>

      <SelectNum count={selectedCount} isActive={isActive} />
    </button>
  )
}
