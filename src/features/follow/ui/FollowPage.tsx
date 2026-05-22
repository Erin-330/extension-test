import type { FollowTargetItem } from '../model/store/followSelectionsStore'

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/90a19832-78c8-461f-b118-c7a130eedff5',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/9874d959-ec91-4b65-9faa-8b80148a5b10',
  closeUnion: 'https://www.figma.com/api/mcp/asset/037ba53c-db9d-458b-bd7b-8b33c6c3aa2f',
  searchShape: 'https://www.figma.com/api/mcp/asset/9ea3e5d6-7cd4-4e84-99c8-69b648612274',
  searchIcon: 'https://www.figma.com/api/mcp/asset/417a250c-fcda-4015-b580-b5023f20a492',
  arrowNext: 'https://www.figma.com/api/mcp/asset/7bad0764-f2d8-45f0-a01f-622881f225dc',
  userPlus: 'https://www.figma.com/api/mcp/asset/1eceb666-af49-489b-9edc-5665d74d24b3',
  check: 'https://www.figma.com/api/mcp/asset/640cf024-467d-4e42-86d7-c4039555dea5',
  boostBolt: 'https://www.figma.com/api/mcp/asset/ace68171-966e-43bf-8afb-11dabf5f9c51',
}

type Props = {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  items: FollowTargetItem[]
  selected: FollowTargetItem[]
  onToggle: (item: FollowTargetItem) => void
  onPrev: () => void
  onNext?: () => void
  onDone?: () => void
  onClose: () => void
}

function HeaderBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full">
      <div className="flex gap-[6px] items-center">
        <div className="h-[18px] relative w-[22px]">
          <img src={ASSETS.rorrLogoStroke} className="shrink-0 w-[22px] h-[18px]" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button
        onClick={onClose}
        className="shrink-0 w-[12.414px] h-[12.414px]"
        aria-label="Close"
      >
        <img src={ASSETS.closeUnion} className="shrink-0 w-[12.414px] h-[12.414px]" />
      </button>
    </div>
  )
}

function SelectNum({ index, selected }: { index: number; selected: boolean }) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-clip w-[54px] shrink-0 rounded-tr-[8px] rounded-br-[8px]">
        <img src={ASSETS.check} className="shrink-0 w-[13px] h-[9px]" />
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          {index}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center px-[12px] shrink-0">
      <div className="relative w-[32px] h-[32px] rounded-[6px] border-[0.4px] border-solid border-[#969cda] flex items-center justify-center">
        <img src={ASSETS.userPlus} className="shrink-0 w-[24px] h-[24px]" />
      </div>
    </div>
  )
}

function BoostTag() {
  return (
    <div className="flex items-center justify-center gap-[2px] overflow-clip px-[2px] py-[1px] rounded-[2px] shrink-0 bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] to-[#6f4cff]">
      <img src={ASSETS.boostBolt} className="shrink-0 w-[6px] h-[6px]" />
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}

function ItemCard({
  item,
  selectedIndex,
  onToggle,
  variant,
}: {
  item: FollowTargetItem
  selectedIndex: number
  onToggle: (item: FollowTargetItem) => void
  variant: 'league' | 'team' | 'player'
}) {
  const isSelected = selectedIndex > 0
  return (
    <button
      type="button"
      onClick={() => onToggle(item)}
      className={`bg-white flex gap-[4px] h-[68px] items-center w-full shrink-0 rounded-[8px] overflow-hidden text-left ${
        isSelected ? 'border-2 border-[#209fee] border-solid' : 'shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-0 px-[12px]">
        <div className="flex items-center justify-center p-[2px] rounded-[6px] shrink-0">
          {variant === 'player' ? (
            <div className="bg-[#4e4743] overflow-hidden rounded-full shrink-0 w-[28px] h-[28px] flex items-center justify-center">
              {item.logoUrl && (
                <img src={item.logoUrl} className="shrink-0 w-[28px] h-[28px] object-cover" />
              )}
            </div>
          ) : (
            <div className="shrink-0 w-[28px] h-[28px] overflow-hidden flex items-center justify-center">
              {item.logoUrl && (
                <img src={item.logoUrl} className="shrink-0 w-[28px] h-[28px] object-contain" />
              )}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-0">
          {item.boost && <BoostTag />}
          <p
            className={`font-['Pretendard',sans-serif] font-bold text-black w-full overflow-hidden text-ellipsis whitespace-nowrap ${
              variant === 'player' ? 'text-[16px] leading-[20px]' : 'text-[20px] leading-none'
            }`}
          >
            {item.name}
          </p>
          {item.subtitle && (
            <p className="font-['Pretendard',sans-serif] font-normal text-[#757b90] text-[12px] leading-[1.2] w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {item.subtitle}
            </p>
          )}
        </div>
        {variant === 'player' && item.teamLogoUrl && (
          <img
            src={item.teamLogoUrl}
            className="shrink-0 w-[20px] h-[20px] object-contain"
          />
        )}
      </div>
      <SelectNum index={selectedIndex} selected={isSelected} />
    </button>
  )
}

function StepIndicator({
  currentStep,
  onPrev,
  onNext,
  onDone,
}: {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext?: () => void
  onDone?: () => void
}) {
  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <button
        type="button"
        onClick={onPrev}
        className={`flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center ${
          currentStep === 0 ? 'opacity-0 pointer-events-none' : ''
        }`}
        aria-label="Prev"
      >
        <img
          src={ASSETS.arrowNext}
          className="shrink-0 w-[16px] h-[16px] rotate-180"
        />
      </button>
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-0 px-[5px] py-[10px]">
        {[0, 1, 2].map((step) => {
          const active = step === currentStep
          return (
            <div key={step} className="flex flex-1 items-center justify-center min-w-0">
              {active ? (
                <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
              ) : (
                <div className="bg-[#b2bac3] rounded-[4px] w-[8px] h-[8px]" />
              )}
            </div>
          )
        })}
      </div>
      {onDone ? (
        <button
          type="button"
          onClick={onDone}
          className="flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]"
        >
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
            Done
          </p>
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center"
          aria-label="Next"
        >
          <img
            src={ASSETS.arrowNext}
            className="shrink-0 w-[16px] h-[16px]"
          />
        </button>
      )}
    </div>
  )
}

export function FollowPage({
  title,
  subtitle,
  currentStep,
  items,
  selected,
  onToggle,
  onPrev,
  onNext,
  onDone,
  onClose,
}: Props) {
  const variant: 'league' | 'team' | 'player' =
    currentStep === 0 ? 'league' : currentStep === 1 ? 'team' : 'player'

  const orderedTargetIds = selected.map((s) => s.target_id)
  const selectedItems = orderedTargetIds
    .map((id) => items.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselectedItems = items.filter((i) => !orderedTargetIds.includes(i.target_id))
  const ordered = [...selectedItems, ...unselectedItems]

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <HeaderBar onClose={onClose} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-0 min-w-[288px] overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-start min-w-0 overflow-y-auto pb-[80px] pt-[12px] px-[16px]">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black whitespace-nowrap">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              {subtitle}
            </p>
          </div>
          {ordered.map((item) => {
            const idx = orderedTargetIds.indexOf(item.target_id)
            const selectedIndex = idx >= 0 ? idx + 1 : 0
            return (
              <ItemCard
                key={item.target_id}
                item={item}
                selectedIndex={selectedIndex}
                onToggle={onToggle}
                variant={variant}
              />
            )
          })}
        </div>
        <div className="absolute right-0 top-0 flex flex-col gap-[4px] items-start p-[10px]">
          <button
            type="button"
            className="relative shrink-0 w-[24px] h-[24px] rounded-[28px] flex items-center justify-center"
            aria-label="Search"
          >
            <img src={ASSETS.searchShape} className="absolute inset-0 shrink-0 w-[24px] h-[24px]" />
            <img src={ASSETS.searchIcon} className="relative shrink-0 w-[14px] h-[14px]" />
          </button>
        </div>
        <StepIndicator
          currentStep={currentStep}
          onPrev={onPrev}
          onNext={onNext}
          onDone={onDone}
        />
      </div>
    </div>
  )
}
