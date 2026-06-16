import type { ReactNode } from 'react'
import { AppHeader } from '../../../shared/ui/AppHeader'

const imgSearch = 'https://www.figma.com/api/mcp/asset/ac2636ba-b910-40b6-bf14-61abb88509ca'
const imgSearchBg = 'https://www.figma.com/api/mcp/asset/ac844bfb-78e3-41a2-bd04-809d00d683df'
const imgArrowStroke = 'https://www.figma.com/api/mcp/asset/73349a16-329a-45be-98e8-dc60660dcb4d'

type Props = {
  title: string
  subtitle: string
  children: ReactNode
  currentStep: number
  showPrev: boolean
  onPrev?: () => void
  onNext?: () => void
  isDone?: boolean
  onClose: () => void
}

export function FollowPageLayout({
  title,
  subtitle,
  children,
  currentStep,
  showPrev,
  onPrev,
  onNext,
  isDone,
  onClose,
}: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={onClose} />
      <div className="bg-[#f0f2f5] flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-start overflow-y-auto pb-[80px] pt-[16px] px-[16px]">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] text-[24px] text-black whitespace-nowrap w-full">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black w-full">
              {subtitle}
            </p>
          </div>
          {children}
        </div>

        <div className="absolute right-0 top-0 flex flex-col gap-[4px] items-start p-[10px]">
          <button className="relative rounded-[28px] shrink-0 size-[24px]" aria-label="search">
            <img src={imgSearchBg} alt="" className="absolute block inset-0 max-w-none size-full rounded-[30px]" />
            <span className="absolute overflow-clip" style={{ inset: '8.33%' }}>
              <span
                className="absolute block"
                style={{ inset: '14.58% 15.4% 15.4% 14.58%' }}
              >
                <img src={imgSearch} alt="" className="absolute block inset-0 max-w-none size-full" />
              </span>
            </span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px] backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)]">
          <button
            onClick={onPrev}
            disabled={!showPrev}
            className={`flex-1 h-[48px] max-w-[96px] min-w-[80px] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center bg-[#969cda] hover:bg-[#afb5ea] ${
              showPrev ? '' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="previous"
          >
            <span className="-scale-x-100 overflow-clip relative block size-[36px]">
              <span
                className="absolute block"
                style={{ inset: '30.21% 22.66% 30.21% 23.96%' }}
              >
                <img
                  src={imgArrowStroke}
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </span>
            </span>
          </button>

          <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-1 items-center justify-center min-w-px">
                {i === currentStep ? (
                  <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
                ) : (
                  <div className="bg-[#b2bac3] size-[8px] rounded-[4px]" />
                )}
              </div>
            ))}
          </div>

          {isDone ? (
            <button
              onClick={onNext}
              className="flex-1 h-[48px] max-w-[96px] min-w-[80px] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] bg-[#969cda] hover:bg-[#afb5ea] flex items-center justify-center"
            >
              <span className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white">
                Done
              </span>
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex-1 h-[48px] max-w-[96px] min-w-[80px] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] bg-[#969cda] hover:bg-[#afb5ea] flex items-center justify-center"
              aria-label="next"
            >
              <span className="overflow-clip relative block size-[36px]">
                <span
                  className="absolute block"
                  style={{ inset: '30.21% 22.66% 30.21% 23.96%' }}
                >
                  <img
                    src={imgArrowStroke}
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                  />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
