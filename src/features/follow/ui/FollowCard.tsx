import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'
import type { FollowTargetItem } from '../model/store/followSelectionsStore'

interface Props {
  item: FollowTargetItem
  selected: boolean
  order?: number
  variant: 'league' | 'team' | 'player'
  onToggle: () => void
}

export function FollowCard({ item, selected, order, variant, onToggle }: Props) {
  const wrapperClass = selected
    ? 'bg-white border-2 border-[#209fee] border-solid flex gap-[4px] h-[68px] items-center overflow-clip rounded-[8px] w-full shrink-0'
    : 'bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)] flex gap-[4px] h-[68px] items-center rounded-[8px] w-full shrink-0'

  return (
    <button type="button" onClick={onToggle} className={wrapperClass}>
      <div className="flex flex-[1_0_0] gap-[12px] h-full items-center min-w-0 px-[12px]">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          <div className="size-[28px] relative shrink-0 overflow-clip">
            <img
              src={item.imageUrl}
              className={`absolute ${item.imageInset ?? 'inset-0'} block max-w-none size-full object-contain shrink-0`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-0">
          {item.boost && <BoostTag />}
          <div className="flex gap-[12px] items-center w-full">
            <p className={`flex-[1_0_0] font-['Pretendard',sans-serif] ${variant === 'player' ? 'text-[16px] leading-[20px]' : 'text-[20px] leading-none'} font-bold text-black text-left overflow-hidden text-ellipsis whitespace-nowrap min-w-0`}>
              {item.name}
            </p>
            {variant === 'player' && item.teamLogoUrl && (
              <div className="size-[20px] relative shrink-0 overflow-clip">
                <img src={item.teamLogoUrl} className="absolute inset-0 block max-w-none size-full object-contain shrink-0" alt="" />
              </div>
            )}
          </div>
          {item.subname && (
            <p className="font-['Pretendard',sans-serif] font-normal text-[#757b90] text-[12px] leading-[1.2] text-left overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {item.subname}
            </p>
          )}
        </div>
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}
