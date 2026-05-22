import type { ReactNode } from 'react'
import { AppHeader } from '../../../shared/ui/AppHeader'
import { StepIndicator } from './StepIndicator'

const imgButtonShape = 'https://www.figma.com/api/mcp/asset/288729d7-0dc1-4af7-aff0-659ef8bd7b9d'
const imgSearch = 'https://www.figma.com/api/mcp/asset/8db0040b-6aaf-4cad-a271-70ff74901a50'

type Props = {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  isLast?: boolean
  onClose?: () => void
  onPrev?: () => void
  onNext?: () => void
  onDone?: () => void
  children: ReactNode
}

export function FollowListShell({
  title,
  subtitle,
  currentStep,
  isLast,
  onClose,
  onPrev,
  onNext,
  onDone,
  children,
}: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full overflow-y-auto pb-[70px] pt-[12px] px-[16px]">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] text-[24px] text-black whitespace-nowrap">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black">
              {subtitle}
            </p>
          </div>
          {children}
        </div>
        <div className="absolute flex flex-col gap-[4px] items-start p-[10px] right-0 top-0">
          <button
            type="button"
            className="flex flex-col items-start relative rounded-[28px] shrink-0 size-[24px]"
            aria-label="Search"
          >
            <div className="flex-1 relative rounded-[30px] w-full">
              <img alt="" className="absolute block inset-0 size-full" src={imgButtonShape} />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
                <img alt="" className="absolute block inset-0 size-full" src={imgSearch} />
              </div>
            </div>
          </button>
        </div>
        <StepIndicator
          currentStep={currentStep}
          onPrev={onPrev}
          onNext={onNext}
          onDone={onDone}
          isLast={isLast}
        />
      </div>
    </div>
  )
}
