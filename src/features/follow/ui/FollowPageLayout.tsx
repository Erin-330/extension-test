import type { ReactNode } from 'react'
import type { FollowTargetItem } from '../model/store/followSelectionsStore'

const RORR_LOGO_STROKE = 'https://www.figma.com/api/mcp/asset/799d9127-58ba-4f2e-8a47-f6e64e5bc921'
const RORR_LOGO_EXCLUDE = 'https://www.figma.com/api/mcp/asset/8efdc098-ff0c-4143-9241-029b46bc6c8e'
const HEADER_CLOSE_X = 'https://www.figma.com/api/mcp/asset/b6db0dff-a18f-4026-a194-0103c99af91c'
const SEARCH_BUTTON_BG = 'https://www.figma.com/api/mcp/asset/7c30a937-58ad-42e5-86e9-7bded5ba5bb3'
const SEARCH_ICON = 'https://www.figma.com/api/mcp/asset/549d7554-ef92-468a-9d78-bd61a9d68ff9'
const NAVI_ARROW = 'https://www.figma.com/api/mcp/asset/799d9127-58ba-4f2e-8a47-f6e64e5bc921'
const LIGHTNING_ICON = 'https://www.figma.com/api/mcp/asset/472ecc99-e7a6-42db-9fa5-3c72525e0d3b'
const PLUS_ICON = 'https://www.figma.com/api/mcp/asset/b991526f-5464-4993-b304-d1aa673d89d0'
const CHECK_ICON = 'https://www.figma.com/api/mcp/asset/c9421515-76f2-4d2f-a61f-d1d0208ccf24'

interface FollowPageLayoutProps {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  items: FollowTargetItem[]
  selected: FollowTargetItem[]
  onToggle: (item: FollowTargetItem) => void
  onPrev: () => void
  onClose: () => void
  onNext: () => void
  nextLabel?: string
  showTeamLogo?: boolean
  showPlayerAvatar?: boolean
  showSubName?: boolean
}

export function BoostTag() {
  return (
    <div className="inline-flex bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] to-[#6f4cff] gap-[2px] items-center justify-center px-[2px] py-px rounded-[2px]">
      <div className="relative size-[6px] overflow-hidden">
        <img src={LIGHTNING_ICON} alt="" className="absolute inset-[5.85%_22.92%_5.85%_20.83%]" />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white leading-none whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}

function AppHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
      <div className="flex gap-[6px] items-center">
        <div className="relative h-[18px] w-[22px] overflow-hidden">
          <img src={RORR_LOGO_STROKE} alt="" className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]" />
          <img src={RORR_LOGO_EXCLUDE} alt="" className="absolute inset-[2.93%_22.01%_2.81%_22.06%]" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          RORR
        </p>
      </div>
      <button onClick={onClose} className="relative size-[12.414px] cursor-pointer">
        <img src={HEADER_CLOSE_X} alt="close" className="block size-full" />
      </button>
    </div>
  )
}

function SearchButton() {
  return (
    <div className="absolute right-0 top-0 p-[10px]">
      <button className="relative size-[24px] rounded-[30px]">
        <img src={SEARCH_BUTTON_BG} alt="" className="absolute inset-0 size-full" />
        <div className="absolute inset-[8.33%] overflow-hidden">
          <img src={SEARCH_ICON} alt="" className="absolute inset-[14.58%_15.4%_15.4%_14.58%]" />
        </div>
      </button>
    </div>
  )
}

function StepDot({ active }: { active: boolean }) {
  return (
    <div className="flex flex-1 items-center justify-center min-w-px">
      {active ? (
        <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
      ) : (
        <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
      )}
    </div>
  )
}

function StepNavButton({
  onClick,
  variant,
  label,
  hidden,
}: {
  onClick: () => void
  variant: 'prev' | 'next' | 'done'
  label?: string
  hidden?: boolean
}) {
  if (hidden) {
    return <div className="flex-1 h-[48px] max-w-[96px] min-w-[80px]" />
  }
  return (
    <button
      onClick={onClick}
      className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] transition-colors shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer"
    >
      {variant === 'done' ? (
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
          {label ?? 'Done'}
        </p>
      ) : (
        <div className={`size-[36px] overflow-hidden relative ${variant === 'prev' ? '-scale-x-100' : ''}`}>
          <img src={NAVI_ARROW} alt="" className="absolute inset-[30.21%_22.66%_30.21%_23.96%]" />
        </div>
      )}
    </button>
  )
}

function StepIndicator({
  currentStep,
  onPrev,
  onNext,
  nextLabel,
}: {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext: () => void
  nextLabel?: string
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <StepNavButton onClick={onPrev} variant="prev" hidden={currentStep === 0} />
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] px-[5px] py-[10px]">
        <StepDot active={currentStep === 0} />
        <StepDot active={currentStep === 1} />
        <StepDot active={currentStep === 2} />
      </div>
      <StepNavButton onClick={onNext} variant={currentStep === 2 ? 'done' : 'next'} label={nextLabel} />
    </div>
  )
}

function SelectedNumBadge({ index }: { index: number }) {
  return (
    <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center w-[54px] overflow-hidden">
      <div className="relative h-[9px] w-[13px]">
        <img src={CHECK_ICON} alt="" className="absolute inset-0 size-full" />
      </div>
      <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
        {index}
      </p>
    </div>
  )
}

function UnselectedAddButton() {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden px-[12px] rounded-tr-[8px] rounded-br-[8px]">
      <div className="border border-[#969cda] rounded-[6px] size-[32px] flex items-center justify-center">
        <img src={PLUS_ICON} alt="" className="size-[24px]" />
      </div>
    </div>
  )
}

interface FollowCardProps {
  item: FollowTargetItem
  selectedIndex: number
  onClick: () => void
  showTeamLogo?: boolean
  showPlayerAvatar?: boolean
  showSubName?: boolean
  size: 'large' | 'small'
}

const PLAYER_AVATAR_BG = 'https://www.figma.com/api/mcp/asset/b28c1bae-fd3c-4b9a-82f2-fd7ef130493b'

function FollowCard({
  item,
  selectedIndex,
  onClick,
  showTeamLogo,
  showPlayerAvatar,
  showSubName,
  size,
}: FollowCardProps) {
  const isSelected = selectedIndex > 0
  return (
    <button
      onClick={onClick}
      className={`flex gap-[4px] h-[68px] items-center relative rounded-[8px] shrink-0 w-full text-left overflow-hidden bg-white ${
        isSelected ? 'border-2 border-[#209fee]' : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px]">
        {showPlayerAvatar ? (
          <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
            <div className="bg-[#4e4743] rounded-full size-[28px] overflow-hidden">
              <img src={PLAYER_AVATAR_BG} alt="" className="size-full object-cover" />
            </div>
          </div>
        ) : (
          <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
            <div className="relative shrink-0 size-[28px] overflow-hidden">
              {item.logoUrl ? (
                <img src={item.logoUrl} alt="" className="size-full object-contain" />
              ) : null}
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {item.boost ? <BoostTag /> : null}
          <p
            className={`font-['Pretendard',sans-serif] font-bold ${
              size === 'large' ? 'text-[20px]' : 'text-[16px]'
            } text-black leading-none w-full overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            {item.name}
          </p>
          {showSubName && item.subName ? (
            <p className="font-['Pretendard',sans-serif] font-normal text-[#757b90] text-[12px] leading-[1.2] w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {item.subName}
            </p>
          ) : null}
        </div>
        {showTeamLogo && item.teamLogoUrl ? (
          <div className="relative shrink-0 size-[20px] overflow-hidden">
            <img src={item.teamLogoUrl} alt="" className="size-full object-contain" />
          </div>
        ) : null}
      </div>
      {isSelected ? <SelectedNumBadge index={selectedIndex} /> : <UnselectedAddButton />}
    </button>
  )
}

export function FollowPageLayout({
  title,
  subtitle,
  currentStep,
  items,
  selected,
  onToggle,
  onPrev,
  onClose,
  onNext,
  nextLabel,
  showTeamLogo,
  showPlayerAvatar,
  showSubName,
}: FollowPageLayoutProps & { children?: ReactNode }) {
  const orderedIds = selected.map((s) => s.target_id)
  const selectedItems = orderedIds
    .map((id) => items.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = items.filter((i) => !orderedIds.includes(i.target_id))
  const displayList = [...selectedItems, ...unselected]
  const size: 'large' | 'small' = showPlayerAvatar ? 'small' : 'large'

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex flex-1 min-h-px overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-1 flex-col gap-[16px] min-w-px overflow-y-auto pb-[80px] pt-[12px] px-[16px]">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-[215px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] text-black leading-[1.5] w-full">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] w-full">
              {subtitle}
            </p>
          </div>
          {displayList.map((item) => {
            const index = orderedIds.indexOf(item.target_id)
            return (
              <FollowCard
                key={item.target_id}
                item={item}
                selectedIndex={index >= 0 ? index + 1 : 0}
                onClick={() => onToggle(item)}
                showTeamLogo={showTeamLogo}
                showPlayerAvatar={showPlayerAvatar}
                showSubName={showSubName}
                size={size}
              />
            )
          })}
        </div>
        <SearchButton />
        <StepIndicator
          currentStep={currentStep}
          onPrev={onPrev}
          onNext={onNext}
          nextLabel={nextLabel}
        />
      </div>
    </div>
  )
}
