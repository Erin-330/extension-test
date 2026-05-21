import type { ReactNode } from 'react'
import { AppHeader } from './AppHeader'
import { HeaderTitle } from './HeaderTitle'
import { StepIndicator } from './StepIndicator'

type Props = {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  isLast?: boolean
  children: ReactNode
}

export function FollowPageShell({
  title,
  subtitle,
  currentStep,
  onClose,
  onPrev,
  onNext,
  isLast,
  children,
}: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="relative bg-[#f0f2f5] flex-1 min-h-0 overflow-hidden rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full overflow-y-auto pb-[80px] pt-[16px] px-[16px]">
          <HeaderTitle title={title} subtitle={subtitle} />
          {children}
        </div>
        <StepIndicator
          currentStep={currentStep}
          onPrev={onPrev}
          onNext={onNext}
          isLast={isLast}
        />
      </div>
    </div>
  )
}
