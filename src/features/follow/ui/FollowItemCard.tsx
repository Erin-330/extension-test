import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'
import type { FollowTargetItem } from '../model/store/followSelectionsStore'

interface FollowItemCardProps {
  item: FollowTargetItem
  selected: boolean
  order?: number
  onClick: () => void
}

export function FollowItemCard({ item, selected, order, onClick }: FollowItemCardProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)] flex gap-[4px] h-[68px] items-start rounded-[8px] shrink-0 w-full overflow-clip ${
        selected ? 'border-2 border-[#209fee] border-solid' : ''
      }`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px]">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          <div className="overflow-clip relative shrink-0 size-[28px]">
            <div className={`absolute ${item.insetClass ?? 'inset-0'}`}>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={item.imageUrl}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] items-start justify-center min-w-px text-left">
          {item.hasBoost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold leading-[normal] not-italic shrink-0 text-[20px] text-black text-ellipsis overflow-hidden max-w-full whitespace-nowrap">
            {item.name}
          </p>
          {item.description && (
            <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] not-italic shrink-0 text-[#757b90] text-[12px] text-ellipsis overflow-hidden max-w-full whitespace-nowrap">
              {item.description}
            </p>
          )}
        </div>
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}
