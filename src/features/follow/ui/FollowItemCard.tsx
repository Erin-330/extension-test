import { type FollowTargetItem } from '../model/store/followSelectionsStore'

// SelectNum unselected vector (add-person icon)
const imgUnselectedAdd = 'https://www.figma.com/api/mcp/asset/694e2b0e-0e27-44ec-83e4-5332322a0f04'
// SelectNum selected check
const imgSelectedCheck = 'https://www.figma.com/api/mcp/asset/7ad8b89d-9884-472f-8106-c81fc3ede42e'
// Energy icon (BOOST tag)
const imgEnergyIcon = 'https://www.figma.com/api/mcp/asset/695df37c-f2c8-4445-b3a1-5c4e9f5a1e2c'

type Variant = 'league' | 'team' | 'player'

type Props = {
  item: FollowTargetItem
  variant: Variant
  selected: boolean
  selectionIndex: number | null
  onToggle: () => void
}

function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center overflow-hidden px-[2px] py-px rounded-[2px] shrink-0">
      <div className="overflow-hidden relative shrink-0 size-[6px]">
        <div className="absolute inset-[0_20.83%_0_22.92%]">
          <img alt="" className="absolute inset-0 max-w-none w-full h-full" src={imgEnergyIcon} />
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] leading-none text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}

function SelectNum({ selected, index }: { selected: boolean; index: number }) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-hidden shrink-0 w-[54px] rounded-br-[8px] rounded-tr-[8px]">
        <img src={imgSelectedCheck} alt="" className="shrink-0 w-[13px] h-[9px]" />
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
          {index + 1}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center px-[12px] shrink-0 overflow-hidden rounded-br-[8px] rounded-tr-[8px]">
      <div className="border-[#969cda] border-[0.4px] border-solid rounded-[6px] shrink-0 size-[32px] relative">
        <div className="absolute inset-[-0.4px] overflow-hidden">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img src={imgUnselectedAdd} alt="" className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FollowItemCard({ item, variant, selected, selectionIndex, onToggle }: Props) {
  const isPlayer = variant === 'player'
  const borderClass = selected
    ? 'border-2 border-[#209fee] border-solid'
    : ''
  const shadowClass = isPlayer
    ? 'drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'
    : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'

  return (
    <button
      onClick={onToggle}
      className={`bg-white flex gap-[4px] h-[68px] ${isPlayer ? 'items-center' : 'items-start'} relative rounded-[8px] shrink-0 w-full overflow-hidden ${borderClass} ${shadowClass}`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px] relative">
        {/* Logo */}
        {isPlayer ? (
          <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
            <div className="bg-[#4e4743] overflow-hidden rounded-[40px] shrink-0 size-[28px] relative">
              <img
                src={item.logoUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
            <div className="overflow-hidden relative shrink-0 size-[28px]">
              <img
                src={item.logoUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        )}

        {/* Text */}
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px text-left">
          {item.hasBoost && <BoostTag />}
          {isPlayer ? (
            <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {item.name}
            </p>
          ) : (
            <p className="font-['Pretendard',sans-serif] font-bold text-[20px] leading-none text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {item.name}
            </p>
          )}
          {item.subtitle && (
            <p className="font-['Pretendard',sans-serif] font-normal text-[#757b90] text-[12px] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {item.subtitle}
            </p>
          )}
        </div>

        {/* Player team-logo (right side) */}
        {isPlayer && item.teamLogoUrl && (
          <div className="overflow-hidden relative shrink-0 size-[20px]">
            <img
              src={item.teamLogoUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      <SelectNum selected={selected} index={selectionIndex ?? 0} />
    </button>
  )
}
