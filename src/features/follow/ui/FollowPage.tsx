import { AppHeader } from '../../../shared/ui/AppHeader'
import { type FollowTargetItem } from '../model/store/followSelectionsStore'

const imgArrow = 'https://www.figma.com/api/mcp/asset/e1e14f2f-57e6-4730-aba6-e28e582aa48b'
const imgButtonShape = 'https://www.figma.com/api/mcp/asset/888bfbd1-7501-4477-b4b2-ef542f8d4f70'
const imgSearch = 'https://www.figma.com/api/mcp/asset/dabd0db8-d7aa-4b69-8297-e6ba025debcc'
const imgPlus = 'https://www.figma.com/api/mcp/asset/b88ec82d-df1c-40e2-8611-bb09087e7b02'
const imgCheck = 'https://www.figma.com/api/mcp/asset/4f894445-6b88-4b35-b661-2ea7cb18468f'
const imgBoostLightning = 'https://www.figma.com/api/mcp/asset/9c99f9e1-efea-4502-b0e7-1b67bd5f7fbd'

type Props = {
  title: string
  subtitle: string
  items: FollowTargetItem[]
  selected: FollowTargetItem[]
  onToggle: (item: FollowTargetItem) => void
  onPrev: () => void
  onNext: () => void
  onClose: () => void
  currentStep: 0 | 1 | 2
  doneLabel?: string
}

function BoostTag() {
  return (
    <div
      className="flex gap-[2px] items-center justify-center overflow-clip px-[2px] py-px rounded-[2px] shrink-0"
      style={{
        background:
          'linear-gradient(to bottom, #c0b1ff 0%, #a28cff 4.808%, #6f4cff 100%)',
      }}
    >
      <div className="relative size-[6px] overflow-clip shrink-0">
        <img
          alt=""
          src={imgBoostLightning}
          className="absolute inset-0 size-full shrink-0"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}

function SelectNum({ index }: { index: number | null }) {
  if (index === null) {
    return (
      <div className="flex h-full items-center justify-center px-[12px] shrink-0">
        <div className="border-[#969cda] border-[0.4px] border-solid rounded-[6px] size-[32px] relative flex items-center justify-center">
          <img alt="" src={imgPlus} className="size-[20px] shrink-0" />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-clip w-[54px] shrink-0 rounded-tr-[8px] rounded-br-[8px]">
      <img alt="" src={imgCheck} className="w-[13px] h-[9px] shrink-0" />
      <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
        {index + 1}
      </p>
    </div>
  )
}

function StepIndicator({
  currentStep,
  onPrev,
  onNext,
  doneLabel,
}: {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext: () => void
  doneLabel?: string
}) {
  const dots = [0, 1, 2]
  const showPrev = currentStep > 0
  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <button
        type="button"
        onClick={onPrev}
        className={`flex-[1_0_0] h-[48px] max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] relative flex items-center justify-center transition-colors ${
          showPrev ? '' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img alt="" src={imgArrow} className="size-[16px] shrink-0 rotate-180" />
      </button>
      <div className="flex flex-[1_0_0] gap-[4px] items-center max-w-[190px] px-[5px] py-[10px]">
        {dots.map((idx) => (
          <div key={idx} className="flex-[1_0_0] flex items-center justify-center">
            {idx === currentStep ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
            ) : (
              <div className="bg-[#b2bac3] size-[8px] rounded-[4px]" />
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="flex-[1_0_0] h-[48px] max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center transition-colors"
      >
        {doneLabel ? (
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
            {doneLabel}
          </p>
        ) : (
          <img alt="" src={imgArrow} className="size-[16px] shrink-0" />
        )}
      </button>
    </div>
  )
}

function ListRow({
  item,
  selectedIndex,
  onToggle,
  variant,
}: {
  item: FollowTargetItem
  selectedIndex: number | null
  onToggle: (item: FollowTargetItem) => void
  variant: 'league' | 'team' | 'player'
}) {
  const isSelected = selectedIndex !== null
  return (
    <button
      type="button"
      onClick={() => onToggle(item)}
      className={`bg-white flex gap-[4px] h-[68px] items-center rounded-[8px] w-full shrink-0 text-left overflow-hidden ${
        isSelected ? 'border-2 border-[#209fee] border-solid' : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px px-[12px]">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          <div
            className={`relative shrink-0 size-[28px] overflow-clip ${
              variant === 'player' ? 'bg-[#4e4743] rounded-full' : ''
            }`}
          >
            {item.logoUrl ? (
              <div className={item.logoInsetClass ?? 'absolute inset-0'}>
                <img
                  alt=""
                  src={item.logoUrl}
                  className="absolute inset-0 max-w-none size-full shrink-0"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {item.boost ? <BoostTag /> : null}
          <p
            className={`font-['Pretendard',sans-serif] font-bold text-black overflow-hidden text-ellipsis whitespace-nowrap w-full ${
              variant === 'player' ? 'text-[16px] leading-[20px]' : 'text-[20px] leading-none'
            }`}
          >
            {item.name}
          </p>
          {item.subName ? (
            <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#757b90] overflow-hidden text-ellipsis whitespace-nowrap w-full leading-[1.2]">
              {item.subName}
            </p>
          ) : null}
        </div>
        {variant === 'player' && item.teamLogoUrl ? (
          <div className="relative shrink-0 size-[20px] overflow-clip">
            <div className={item.teamLogoInsetClass ?? 'absolute inset-0'}>
              <img
                alt=""
                src={item.teamLogoUrl}
                className="absolute inset-0 size-full shrink-0"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        ) : null}
      </div>
      <SelectNum index={selectedIndex} />
    </button>
  )
}

export function FollowPage({
  title,
  subtitle,
  items,
  selected,
  onToggle,
  onPrev,
  onNext,
  onClose,
  currentStep,
  doneLabel,
}: Props) {
  const selectedIds = selected.map((s) => s.target_id)
  const orderedSelected = selectedIds
    .map((id) => items.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = items.filter((i) => !selectedIds.includes(i.target_id))
  const ordered = [...orderedSelected, ...unselected]
  const variant: 'league' | 'team' | 'player' =
    currentStep === 0 ? 'league' : currentStep === 1 ? 'team' : 'player'

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-h-px rounded-[16px] w-full relative overflow-hidden">
        <div className="flex flex-col gap-[16px] h-full overflow-y-auto pb-[80px] pt-[16px] px-[16px]">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-[215px] pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black w-full">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full">
              {subtitle}
            </p>
          </div>
          {ordered.map((item) => {
            const idx = selectedIds.indexOf(item.target_id)
            return (
              <ListRow
                key={item.target_id}
                item={item}
                selectedIndex={idx === -1 ? null : idx}
                onToggle={onToggle}
                variant={variant}
              />
            )
          })}
        </div>
        <div className="absolute right-0 top-0 flex flex-col gap-[4px] items-start p-[10px]">
          <button
            type="button"
            className="size-[24px] rounded-[28px] relative flex items-center justify-center"
            aria-label="search"
          >
            <img alt="" src={imgButtonShape} className="absolute inset-0 size-full shrink-0" />
            <img alt="" src={imgSearch} className="relative size-[14px] shrink-0" />
          </button>
        </div>
        <StepIndicator
          currentStep={currentStep}
          onPrev={onPrev}
          onNext={onNext}
          doneLabel={doneLabel}
        />
      </div>
    </div>
  )
}
