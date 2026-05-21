import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'

type Props = {
  name: string
  description?: string
  logoUrl?: string
  logoInsetClass?: string
  boost?: boolean
  selected: boolean
  order?: number
  variant: 'league' | 'team' | 'player'
  teamLogoUrl?: string
  teamLogoInsetClass?: string
  onClick: () => void
}

export function FollowCard({
  name,
  description,
  logoUrl,
  logoInsetClass,
  boost,
  selected,
  order,
  variant,
  teamLogoUrl,
  teamLogoInsetClass,
  onClick,
}: Props) {
  const borderClass = selected ? 'border-2 border-[#209fee] border-solid' : ''
  const shadowClass = selected ? '' : 'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white flex h-[68px] items-start text-left overflow-hidden relative rounded-[8px] shrink-0 w-full ${borderClass} ${shadowClass}`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-0 px-[12px]">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          {variant === 'player' ? (
            <div className="bg-[#4e4743] overflow-clip relative rounded-full size-[28px] shrink-0" />
          ) : (
            <div className="relative size-[28px] shrink-0 overflow-clip">
              {logoUrl && (
                <div className={`absolute ${logoInsetClass ?? 'inset-0'}`}>
                  <img alt="" src={logoUrl} className="absolute inset-0 size-full object-contain" />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-[4px] items-start justify-center min-w-0">
          {boost && <BoostTag />}
          {variant === 'player' ? (
            <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {name}
            </p>
          ) : (
            <p className="font-['Pretendard',sans-serif] font-bold text-[20px] leading-none text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {name}
            </p>
          )}
          {description && (
            <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#757b90] overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {description}
            </p>
          )}
        </div>
        {variant === 'player' && teamLogoUrl && (
          <div className="relative size-[20px] shrink-0 overflow-clip">
            <div className={`absolute ${teamLogoInsetClass ?? 'inset-0'}`}>
              <img alt="" src={teamLogoUrl} className="absolute inset-0 size-full object-contain" />
            </div>
          </div>
        )}
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}
