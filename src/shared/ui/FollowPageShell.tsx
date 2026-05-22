import type { ReactNode } from 'react'
import { AppHeader } from './AppHeader'
import { SearchButton } from './SearchButton'
import { StepIndicator } from './StepIndicator'

interface Props {
  title: string
  subtitle: string
  currentStep: number
  onClose: () => void
  onPrev: () => void
  onNext?: () => void
  onDone?: () => void
  children: ReactNode
}

export function FollowPageShell({
  title,
  subtitle,
  currentStep,
  onClose,
  onPrev,
  onNext,
  onDone,
  children,
}: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-start min-w-px overflow-y-auto pb-[70px] pt-[16px] px-[16px] relative">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] text-black leading-[1.5] w-full whitespace-nowrap">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] w-full">
              {subtitle}
            </p>
          </div>
          {children}
        </div>
        <SearchButton />
        <StepIndicator
          currentStep={currentStep}
          totalSteps={3}
          onPrev={onPrev}
          onNext={onNext}
          onDone={onDone}
        />
      </div>
    </div>
  )
}
