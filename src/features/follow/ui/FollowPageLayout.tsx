import type { ReactNode } from 'react'
import { AppHeader } from './AppHeader'
import { StepIndicator } from './StepIndicator'
import { FOLLOW_ASSETS } from './assets'

type Props = {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  doneLabel?: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  children: ReactNode
}

export function FollowPageLayout({ title, subtitle, currentStep, doneLabel, onClose, onPrev, onNext, children }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start min-h-px min-w-[288px] overflow-clip relative rounded-[16px] w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px overflow-y-auto pb-[80px] pt-[12px] px-[16px] relative">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black whitespace-nowrap">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full">
              {subtitle}
            </p>
          </div>
          {children}
        </div>
        <div className="absolute flex flex-col gap-[4px] items-start p-[10px] right-0 top-0">
          <div className="relative shrink-0 w-[24px] h-[24px] rounded-[30px]">
            <img src={FOLLOW_ASSETS.searchHeaderShape} alt="" className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
                <img alt="" src={FOLLOW_ASSETS.searchIconUnion} className="absolute inset-0 max-w-none w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <StepIndicator currentStep={currentStep} onPrev={onPrev} onNext={onNext} doneLabel={doneLabel} />
      </div>
    </div>
  )
}
