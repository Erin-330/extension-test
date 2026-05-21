import type { FollowTargetItem } from '../../../shared/types/follow'
import { BoostTag } from './BoostTag'
import { SelectNumBadge } from './SelectNumBadge'

type Props = {
  item: FollowTargetItem
  selected: boolean
  order?: number
  onToggle: () => void
}

export function FollowCard({ item, selected, order, onToggle }: Props) {
  const baseClass = selected
    ? 'bg-white border-2 border-[#209fee] border-solid rounded-[8px] overflow-clip'
    : 'bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)] rounded-[8px]'

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex h-[68px] items-center gap-[4px] w-full text-left ${baseClass}`}
    >
      <div className="flex flex-1 min-w-px h-full items-center gap-[12px] px-[12px]">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          {item.isPlayer ? (
            <div className="bg-[#4e4743] overflow-clip rounded-[40px] size-[28px]" />
          ) : (
            <div className="size-[28px] overflow-clip flex items-center justify-center">
              <img alt="" src={item.logo} className="block size-full object-contain" />
            </div>
          )}
        </div>
        <div className="flex flex-1 min-w-px h-full flex-col gap-[4px] items-start justify-center">
          {item.boost && <BoostTag />}
          <p
            className={`font-['Pretendard',sans-serif] font-bold ${
              item.isPlayer ? 'text-[16px] leading-[20px]' : 'text-[20px] leading-none'
            } text-black overflow-hidden text-ellipsis whitespace-nowrap w-full`}
          >
            {item.name}
          </p>
          {item.description && (
            <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#757b90] overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {item.description}
            </p>
          )}
        </div>
        {item.esportsLogo && (
          <div className="relative size-[20px] overflow-clip shrink-0">
            <img alt="" src={item.esportsLogo} className="block size-full object-contain" />
          </div>
        )}
      </div>
      <SelectNumBadge selected={selected} order={order} />
    </button>
  )
}
