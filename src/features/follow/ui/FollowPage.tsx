import type { FollowTargetItem, FollowType } from '../../../shared/types/follow'
import { FOLLOW_SELECTION_LIMIT } from '../../../shared/types/follow'
import { useFollowSelectionsStore } from '../model/store/followSelectionsStore'
import { AppHeader } from './AppHeader'
import { FollowCard } from './FollowCard'
import { ScrollHint } from './ScrollHint'
import { SearchButton } from './SearchButton'
import { StepIndicator } from './StepIndicator'

type Props = {
  title: string
  subtitle: string
  followType: FollowType
  currentStep: 0 | 1 | 2
  items: FollowTargetItem[]
  onClose: () => void
  onPrev: () => void
  onNext?: () => void
  onDone?: () => void
}

export function FollowPage({
  title,
  subtitle,
  followType,
  currentStep,
  items,
  onClose,
  onPrev,
  onNext,
  onDone,
}: Props) {
  const store = useFollowSelectionsStore()

  const selectedList =
    followType === 'league' ? store.leagues : followType === 'team' ? store.teams : store.players
  const toggle =
    followType === 'league'
      ? store.toggleLeague
      : followType === 'team'
        ? store.toggleTeam
        : store.togglePlayer

  const selectedIds = selectedList.map((s) => s.target_id)
  const selectedOrdered = selectedIds
    .map((id) => items.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = items.filter((i) => !selectedIds.includes(i.target_id))
  const displayList = [...selectedOrdered, ...unselected]

  const limit = FOLLOW_SELECTION_LIMIT[followType]

  const handleToggle = (item: FollowTargetItem) => {
    const isSelected = selectedIds.includes(item.target_id)
    if (!isSelected && selectedList.length >= limit) return
    toggle(item)
  }

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="relative flex-1 min-h-px w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        <div className="flex flex-col gap-[16px] h-full items-start pt-[12px] px-[16px] pb-[70px] overflow-y-auto">
          <div className="flex flex-col gap-[4px] h-[68px] items-start w-[215px] shrink-0">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black w-full">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full">
              {subtitle}
            </p>
          </div>
          {displayList.map((item) => {
            const order = selectedIds.indexOf(item.target_id) + 1
            return (
              <FollowCard
                key={item.target_id}
                item={item}
                selected={order > 0}
                order={order > 0 ? order : undefined}
                onToggle={() => handleToggle(item)}
              />
            )
          })}
        </div>
        <SearchButton />
        <ScrollHint />
        <StepIndicator currentStep={currentStep} onPrev={onPrev} onNext={onNext} onDone={onDone} />
      </div>
    </div>
  )
}
