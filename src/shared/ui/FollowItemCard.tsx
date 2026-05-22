import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'

interface Props {
  logoUrl?: string
  teamLogoUrl?: string
  title: string
  subtitle?: string
  boost?: boolean
  selected: boolean
  order?: number
  onClick: () => void
  variant?: 'league' | 'team' | 'player'
}

export function FollowItemCard({
  logoUrl,
  teamLogoUrl,
  title,
  subtitle,
  boost,
  selected,
  order,
  onClick,
  variant = 'league',
}: Props) {
  const isPlayer = variant === 'player'
  const baseCard = selected
    ? 'bg-white border-2 border-[#209fee] border-solid overflow-clip'
    : 'bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex gap-[4px] h-[68px] items-start relative rounded-[8px] shrink-0 w-full text-left ${baseCard}`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px]">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          {isPlayer ? (
            <div className="bg-[#4e4743] overflow-clip relative rounded-full shrink-0 size-[28px]">
              {logoUrl ? (
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  src={logoUrl}
                />
              ) : null}
            </div>
          ) : (
            <div className="relative shrink-0 size-[28px] overflow-clip">
              {logoUrl ? (
                <img alt="" className="absolute inset-0 size-full object-contain" src={logoUrl} />
              ) : null}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {boost ? <BoostTag /> : null}
          <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black truncate w-full whitespace-nowrap leading-none">
            {title}
          </p>
          {subtitle ? (
            <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#757b90] truncate w-full whitespace-nowrap leading-[1.2]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {isPlayer && teamLogoUrl ? (
          <div className="relative shrink-0 size-[20px] overflow-clip">
            <img alt="" className="absolute inset-0 size-full object-contain" src={teamLogoUrl} />
          </div>
        ) : null}
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}
