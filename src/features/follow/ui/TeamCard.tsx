import type { FollowTargetItem } from '../model/store/followSelectionsStore'
import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'

type Props = {
  item: FollowTargetItem
  selected: boolean
  selectedNum?: number
  onClick: () => void
}

export function TeamCard({ item, selected, selectedNum, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white flex gap-[4px] h-[68px] items-start relative rounded-[8px] shrink-0 w-full overflow-hidden transition-all ${
        selected
          ? 'border-2 border-[#209fee] border-solid'
          : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px] relative">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          <div className="overflow-hidden relative shrink-0 size-[28px]">
            <img
              src={item.asset}
              className={`absolute block max-w-none object-contain pointer-events-none size-full shrink-0 ${item.assetInset ?? ''}`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px relative">
          {item.hasBoost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold leading-none min-w-full overflow-hidden shrink-0 text-[20px] text-black text-ellipsis whitespace-nowrap text-left">
            {item.name}
          </p>
        </div>
      </div>
      <SelectNum selected={selected} selectedNum={selectedNum} />
    </button>
  )
}
