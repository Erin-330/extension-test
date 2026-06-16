const imgEnergyLightning =
  'https://www.figma.com/api/mcp/asset/1b4eb02a-374b-4960-b2da-f9488c276761'
const imgPlusIcon = 'https://www.figma.com/api/mcp/asset/9ddf83f0-6d4b-4b72-a83b-c1afa90ffdc7'
const imgCheck = 'https://www.figma.com/api/mcp/asset/ea94e1af-6eec-4ce3-a605-805368c3bcdf'

function BoostTag() {
  return (
    <div className="bg-gradient-to-b flex from-[#c0b1ff] gap-[2px] items-center justify-center overflow-clip px-[2px] py-px rounded-[2px] to-[#6f4cff] via-[#a28cff] via-[4.808%] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[6px]">
        <div
          className="absolute"
          style={{ inset: '0 20.83% 0 22.92%' }}
        >
          <div className="absolute h-full w-full" style={{ inset: '5.85% 10.2%' }}>
            <img
              src={imgEnergyLightning}
              alt=""
              className="absolute block inset-0 max-w-none size-full"
            />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold leading-normal shrink-0 text-[8px] text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}

function SelectNumUnselected() {
  return (
    <div className="flex h-[48px] items-center justify-center overflow-clip px-[12px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid relative rounded-[6px] shrink-0 size-[32px]">
        <div className="absolute inset-[-0.4px] overflow-clip">
          <div
            className="absolute"
            style={{ inset: '16.67% 12.5% 12.5% 12.5%' }}
          >
            <img
              src={imgPlusIcon}
              alt=""
              className="absolute block inset-0 max-w-none size-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SelectNumSelected({ index }: { index: number }) {
  return (
    <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-clip shrink-0 w-[54px]">
      <div className="h-[9px] relative shrink-0 w-[13px]">
        <img src={imgCheck} alt="" className="absolute block inset-0 max-w-none size-full" />
      </div>
      <p className="font-['Pretendard',sans-serif] font-light leading-[20px] shrink-0 text-[14px] text-white whitespace-nowrap">
        {index}
      </p>
    </div>
  )
}

type Props = {
  logoUrl?: string
  logoInset?: string
  name: string
  subtitle?: string
  hasBoost?: boolean
  teamLogoUrl?: string
  teamLogoInset?: string
  selected: boolean
  selectedIndex?: number
  onClick: () => void
  /** "league" | "team" | "player" — controls layout: league/team have title/sub stacked; player has 16px name + 12px sub side-by-side with team logo */
  variant: 'league' | 'team' | 'player'
}

export function FollowCard({
  logoUrl,
  logoInset,
  name,
  subtitle,
  hasBoost,
  teamLogoUrl,
  teamLogoInset,
  selected,
  selectedIndex,
  onClick,
  variant,
}: Props) {
  const cardClass = selected
    ? 'bg-white border-2 border-[#209fee] border-solid flex gap-[4px] h-[68px] items-start overflow-clip rounded-[8px] shrink-0 w-full cursor-pointer'
    : 'bg-white flex gap-[4px] h-[68px] items-start rounded-[8px] shrink-0 w-full cursor-pointer shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]'

  return (
    <div onClick={onClick} className={cardClass}>
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px]">
        {variant === 'player' ? (
          <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
            <div className="bg-[#4e4743] overflow-clip relative rounded-full shrink-0 size-[28px]">
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
            <div className="overflow-clip relative shrink-0 size-[28px]">
              {logoUrl && (
                <div className="absolute" style={{ inset: logoInset ?? '0' }}>
                  <img
                    src={logoUrl}
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {hasBoost && <BoostTag />}
          {variant === 'player' ? (
            <>
              <div className="flex gap-[12px] items-start overflow-clip shrink-0 w-full">
                <div className="flex flex-1 flex-col items-start min-w-px">
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] overflow-hidden shrink-0 text-[16px] text-black text-ellipsis w-full whitespace-nowrap">
                    {name}
                  </p>
                </div>
              </div>
              {subtitle && (
                <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] min-w-full overflow-hidden shrink-0 text-[#757b90] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
                  {subtitle}
                </p>
              )}
            </>
          ) : (
            <>
              <p className="font-['Pretendard',sans-serif] font-bold leading-normal min-w-full overflow-hidden shrink-0 text-[20px] text-black text-ellipsis w-[min-content] whitespace-nowrap">
                {name}
              </p>
              {subtitle && (
                <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] min-w-full overflow-hidden shrink-0 text-[#757b90] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
                  {subtitle}
                </p>
              )}
            </>
          )}
        </div>

        {variant === 'player' && teamLogoUrl && (
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute" style={{ inset: teamLogoInset ?? '0' }}>
              <img
                src={teamLogoUrl}
                alt=""
                className="absolute block inset-0 max-w-none size-full"
              />
            </div>
          </div>
        )}
      </div>

      {selected && selectedIndex !== undefined ? (
        <SelectNumSelected index={selectedIndex} />
      ) : (
        <SelectNumUnselected />
      )}
    </div>
  )
}
