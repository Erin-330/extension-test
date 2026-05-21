import type { ReactNode } from 'react'

const ASSET_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/9c452fb1-6f7b-4e6f-ae48-cfdce84902e1'
const ASSET_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/a92b3550-91bd-432b-a6ae-b068c3cabc8d'
const ASSET_HEADER_CLOSE_UNION = 'https://www.figma.com/api/mcp/asset/d5d4160a-d94f-49ad-a8bb-043e45c0d8f6'
const ASSET_SEARCH_BG = 'https://www.figma.com/api/mcp/asset/df07de8a-b775-4787-9ad8-a8a4bc280f7f'
const ASSET_SEARCH_ICON = 'https://www.figma.com/api/mcp/asset/cc44ca2c-9c0a-4b82-aac0-b8145b092e11'
const ASSET_STEP_ARROW = 'https://www.figma.com/api/mcp/asset/e9c8f137-1fd4-4679-a569-248044eb9680'

type Props = {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  onPrev?: () => void
  onClose: () => void
  onNext: () => void
  nextLabel?: string
  children: ReactNode
}

export function FollowPageLayout({
  title,
  subtitle,
  currentStep,
  onPrev,
  onClose,
  onNext,
  nextLabel,
  children,
}: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full shrink-0">
        <div className="flex gap-[6px] items-center justify-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] relative w-[22px] overflow-clip">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" src={ASSET_RORR_UNION_STROKE} className="absolute inset-0 size-full" />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" src={ASSET_RORR_EXCLUDE} className="absolute inset-0 size-full" />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <button
          onClick={onClose}
          className="size-[12.414px] relative shrink-0"
          aria-label="close"
        >
          <img alt="" src={ASSET_HEADER_CLOSE_UNION} className="absolute inset-0 size-full" />
        </button>
      </div>

      <div className="bg-[#f0f2f5] flex flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-start min-w-px overflow-y-auto pb-[80px] pt-[16px] px-[16px] relative">
          <div className="flex flex-col gap-[4px] h-[68px] items-start shrink-0 w-[215px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black w-full">
              {title}
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full">
              {subtitle}
            </p>
          </div>
          {children}
        </div>

        <div className="absolute right-0 top-0 flex flex-col gap-[4px] p-[10px]">
          <button
            className="relative size-[24px] rounded-[30px] shrink-0"
            aria-label="search"
          >
            <img alt="" src={ASSET_SEARCH_BG} className="absolute inset-0 size-full" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
                <img alt="" src={ASSET_SEARCH_ICON} className="absolute inset-0 size-full" />
              </div>
            </div>
          </button>
        </div>

        <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 flex gap-[10px] items-center justify-center left-0 px-[16px] py-[8px] right-0">
          <button
            onClick={onPrev}
            className={`flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] bg-[#969cda] hover:bg-[#afb5ea] ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
            aria-label="prev"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] overflow-clip rotate-180">
              <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
                <img alt="" src={ASSET_STEP_ARROW} className="absolute inset-0 size-full" />
              </div>
            </div>
          </button>

          <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`flex flex-1 items-center justify-center min-w-px ${idx === currentStep ? 'flex-col' : ''}`}
              >
                {idx === currentStep ? (
                  <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
                ) : (
                  <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={onNext}
            className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] bg-[#969cda] hover:bg-[#afb5ea]"
            aria-label="next"
          >
            {nextLabel ? (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
                {nextLabel}
              </span>
            ) : (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] overflow-clip">
                <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
                  <img alt="" src={ASSET_STEP_ARROW} className="absolute inset-0 size-full" />
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
