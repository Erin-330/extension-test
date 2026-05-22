const ARROW_ICON = 'https://www.figma.com/api/mcp/asset/e5a3461a-30af-4727-924f-e5f50096ba0f'

interface StepIndicatorProps {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext: () => void
  nextLabel?: 'next' | 'done'
}

export function StepIndicator({ currentStep, onPrev, onNext, nextLabel = 'next' }: StepIndicatorProps) {
  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 flex gap-[10px] items-center justify-center left-0 px-[16px] py-[8px] right-0">
      <button
        onClick={onPrev}
        className={`flex-1 max-w-[96px] min-w-[80px] h-[48px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] relative ${
          currentStep === 0 ? 'opacity-0 pointer-events-none' : ''
        }`}
        aria-label="prev"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip size-[36px] rotate-180">
          <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={ARROW_ICON} />
          </div>
        </div>
      </button>
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-1 items-center justify-center min-w-px">
            {i === currentStep ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] shrink-0 w-full" />
            ) : (
              <div className="bg-[#b2bac3] rounded-[4px] shrink-0 size-[8px]" />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={onNext}
        className="flex-1 max-w-[96px] min-w-[80px] h-[48px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] relative flex items-center justify-center"
        aria-label={nextLabel === 'done' ? 'done' : 'next'}
      >
        {nextLabel === 'done' ? (
          <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white">Done</p>
        ) : (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip size-[36px]">
            <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ARROW_ICON} />
            </div>
          </div>
        )}
      </button>
    </div>
  )
}
