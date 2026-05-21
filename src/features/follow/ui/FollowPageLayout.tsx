import { type ReactNode } from 'react'
import { AppHeader } from './AppHeader'
import { StepIndicator } from './StepIndicator'
import { FOLLOW_ASSETS } from './FollowAssets'

interface Props {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  onClose: () => void
  onPrev?: () => void
  onNext: () => void
  nextLabel?: string
  children: ReactNode
}

export function FollowPageLayout({ title, subtitle, currentStep, onClose, onPrev, onNext, nextLabel, children }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start min-h-0 min-w-[288px] overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-0 overflow-y-auto pb-[70px] pt-[16px] px-[16px]">
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
        <div className="absolute right-0 top-0 flex flex-col gap-[4px] items-start p-[10px]">
          <button type="button" className="size-[24px] relative rounded-[30px] shrink-0">
            <img src={FOLLOW_ASSETS.searchBg} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
                <img src={FOLLOW_ASSETS.searchIcon} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
              </div>
            </div>
          </button>
        </div>
        <StepIndicator currentStep={currentStep} onPrev={onPrev} onNext={onNext} nextLabel={nextLabel} />
      </div>
    </div>
  )
}
