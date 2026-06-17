import { FOLLOW_ASSETS } from './assets'
import type { FollowTargetItem } from '../model/store/followSelectionsStore'
import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'

type Props = {
  item: FollowTargetItem
  selected: boolean
  selectedNum?: number
  onClick: () => void
}

export function PlayerCard({ item, selected, selectedNum, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white flex gap-[4px] h-[68px] items-center relative rounded-[8px] shrink-0 w-full overflow-hidden transition-all ${
        selected
          ? 'border-2 border-[#209fee] border-solid'
          : 'drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px] relative">
        <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
          <div className="bg-[#4e4743] overflow-hidden relative rounded-[40px] shrink-0 size-[28px]">
            <div className="absolute inset-[3.75%_0_-3.75%_0] overflow-hidden">
              <div className="absolute blur-[0.75px] inset-[0_-4.17%_-20.83%_-4.17%]">
                <img
                  src={FOLLOW_ASSETS.playerAvatar}
                  className="absolute max-w-none object-cover pointer-events-none size-full shrink-0 inset-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px relative">
          {item.hasBoost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] overflow-hidden shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap w-full text-left">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] min-w-full overflow-hidden shrink-0 text-[#757b90] text-[12px] text-ellipsis whitespace-nowrap text-left">
            {item.description}
          </p>
        </div>
        {item.teamLogo && (
          <div className="overflow-hidden relative shrink-0 size-[20px]">
            <img
              src={item.teamLogo}
              className={`absolute block max-w-none object-contain pointer-events-none size-full shrink-0 ${item.teamLogoInset ?? ''}`}
              alt=""
            />
          </div>
        )}
      </div>
      <SelectNum selected={selected} selectedNum={selectedNum} />
    </button>
  )
}
