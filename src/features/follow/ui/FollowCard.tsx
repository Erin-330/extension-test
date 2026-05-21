import type { FollowTargetItem } from '../model/store/followSelectionsStore'
import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'

type Props = {
  item: FollowTargetItem
  selected: boolean
  order?: number
  variant: 'league' | 'team' | 'player'
  playerDefaultImage?: string
  onToggle: () => void
}

export function FollowCard({ item, selected, order, variant, playerDefaultImage, onToggle }: Props) {
  const borderClass = selected
    ? 'border-2 border-[#209fee] border-solid overflow-hidden'
    : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`bg-white flex gap-[4px] h-[68px] items-start rounded-[8px] shrink-0 w-full text-left ${borderClass}`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-0 px-[12px]">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          {variant === 'player' ? (
            <div className="bg-[#4e4743] overflow-hidden rounded-full size-[28px] flex items-center justify-center">
              <img
                alt=""
                src={item.logo || playerDefaultImage}
                className="block size-full object-cover"
              />
            </div>
          ) : (
            <div className="relative shrink-0 size-[28px] flex items-center justify-center overflow-hidden">
              <img alt="" src={item.logo} className="block size-full object-contain" />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-[4px] items-start justify-center min-w-0 h-full">
          {item.boost && <BoostTag />}
          <p
            className={`font-['Pretendard',sans-serif] font-bold text-black w-full overflow-hidden text-ellipsis whitespace-nowrap ${variant === 'player' ? 'text-[16px] leading-[20px]' : 'text-[20px] leading-none'}`}
          >
            {item.name}
          </p>
          {item.description && (
            <p className="font-['Pretendard',sans-serif] font-normal text-[#757b90] text-[12px] leading-[1.2] w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {item.description}
            </p>
          )}
        </div>
        {variant === 'player' && item.teamLogo && (
          <div className="shrink-0 size-[20px] flex items-center justify-center overflow-hidden">
            <img alt="" src={item.teamLogo} className="block size-full object-contain" />
          </div>
        )}
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}
