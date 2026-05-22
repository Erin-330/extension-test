import { type ReactNode } from 'react'

// Common assets (from Figma node 178:50767)
const imgRorrUnionStroke = 'https://www.figma.com/api/mcp/asset/8a73e7ce-3c12-48a7-92a1-aa5b05b183f7'
const imgRorrExclude = 'https://www.figma.com/api/mcp/asset/872f6b3c-7dfa-42ea-81c8-36fb82ecf2ae'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/c22c9f18-6d04-4a45-851b-69797ca9a100'
const imgSearchButtonBg = 'https://www.figma.com/api/mcp/asset/ddc2964c-0d30-4b97-9731-19ef3efcb68f'
const imgSearchIcon = 'https://www.figma.com/api/mcp/asset/3550d915-a4d2-443b-87d4-0e1dbecbb833'
const imgStepArrow = 'https://www.figma.com/api/mcp/asset/c69974c3-58c0-48c2-8dc5-b1bd363b3be4'

type Props = {
  title: string
  subtitle: string
  currentStep: 0 | 1 | 2
  showPrev: boolean
  onPrev: () => void
  onNext: () => void
  onClose: () => void
  nextLabel?: string
  children: ReactNode
}

export function FollowPageLayout({
  title,
  subtitle,
  currentStep,
  showPrev,
  onPrev,
  onNext,
  onClose,
  nextLabel,
  children,
}: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-start bg-[#46383a] pb-[11px] px-[11px]">
      {/* App header (RORR + close) */}
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
        <div className="flex gap-[6px] items-center justify-center shrink-0">
          <div className="relative shrink-0 w-[22px] h-[18px] overflow-hidden">
            <img src={imgRorrUnionStroke} className="absolute inset-0 w-full h-full" alt="" />
            <img src={imgRorrExclude} className="absolute inset-0 w-full h-full" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">RORR</p>
        </div>
        <button
          onClick={onClose}
          aria-label="close"
          className="shrink-0 w-[12.414px] h-[12.414px] relative"
        >
          <img src={imgCloseX} className="absolute inset-0 w-full h-full" alt="" />
        </button>
      </div>

      {/* UI panel */}
      <div className="bg-[#f0f2f5] flex-1 min-h-0 min-w-[288px] relative rounded-[16px] w-full overflow-hidden">
        {/* Scrollable content */}
        <div className="absolute inset-0 overflow-y-auto pb-[78px] pt-[12px] px-[16px]">
          <div className="flex flex-col gap-[16px] items-start w-full">
            {/* Title + subtitle (with right padding for search button) */}
            <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
              <p className="font-['Pretendard',sans-serif] font-semibold text-black text-[24px] leading-[1.5] whitespace-nowrap">
                {title}
              </p>
              <p className="font-['Pretendard',sans-serif] font-light text-black text-[14px] leading-[20px]">
                {subtitle}
              </p>
            </div>
            {children}
          </div>
        </div>

        {/* Search button (top right) */}
        <div className="absolute right-0 top-0 p-[10px]">
          <button aria-label="search" className="relative w-[24px] h-[24px] rounded-[30px] shrink-0">
            <img src={imgSearchButtonBg} className="absolute inset-0 w-full h-full" alt="" />
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
                <img src={imgSearchIcon} className="absolute inset-0 w-full h-full" alt="" />
              </div>
            </div>
          </button>
        </div>

        {/* StepIndicator (bottom) */}
        <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
          <button
            onClick={onPrev}
            aria-label="prev"
            disabled={!showPrev}
            className={`flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] ${showPrev ? '' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] overflow-hidden">
              <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%] -scale-x-100">
                <img src={imgStepArrow} className="absolute inset-0 w-full h-full" alt="" />
              </div>
            </div>
          </button>
          <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-1 items-center justify-center min-w-px">
                {i === currentStep ? (
                  <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
                ) : (
                  <div className="bg-[#b2bac3] shrink-0 size-[8px] rounded-[4px]" />
                )}
              </div>
            ))}
          </div>
          <button
            onClick={onNext}
            aria-label={nextLabel ?? 'next'}
            className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]"
          >
            {nextLabel ? (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px] whitespace-nowrap">
                {nextLabel}
              </span>
            ) : (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] overflow-hidden">
                <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
                  <img src={imgStepArrow} className="absolute inset-0 w-full h-full" alt="" />
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
