import type { ReactNode } from 'react'
import { AppHeader } from '../../../shared/ui/AppHeader'
import { StepIndicator } from './StepIndicator'

const SEARCH_BTN_BG = 'https://www.figma.com/api/mcp/asset/68a2ca8c-39d2-44c9-9c47-79e404add718'
const SEARCH_ICON = 'https://www.figma.com/api/mcp/asset/ba51ddd9-9812-4869-992e-fb5bc0960ac4'

interface FollowPageLayoutProps {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  nextLabel?: 'next' | 'done'
  children: ReactNode
}

export function FollowPageLayout({
  title,
  subtitle,
  currentStep,
  onClose,
  onPrev,
  onNext,
  nextLabel,
  children,
}: FollowPageLayoutProps) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px min-w-[288px] overflow-clip relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-start min-w-px overflow-y-auto pb-[80px] pt-[16px] px-[16px]">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] shrink-0 text-[24px] text-black w-full whitespace-nowrap">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light leading-[20px] shrink-0 text-[14px] text-black w-full">
              {subtitle}
            </p>
          </div>
          {children}
        </div>
        <div className="absolute flex flex-col gap-[4px] items-start p-[10px] right-0 top-0">
          <div className="flex gap-[10px] items-center shrink-0 w-full">
            <button className="relative rounded-[28px] size-[24px] shrink-0" aria-label="search">
              <img alt="" className="absolute block inset-0 max-w-none size-full rounded-[30px]" src={SEARCH_BTN_BG} />
              <div className="absolute inset-[8.33%] overflow-clip">
                <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={SEARCH_ICON} />
                </div>
              </div>
            </button>
          </div>
        </div>
        <StepIndicator currentStep={currentStep} onPrev={onPrev} onNext={onNext} nextLabel={nextLabel} />
      </div>
    </div>
  )
}
