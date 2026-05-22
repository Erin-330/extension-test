const imgArrow = 'https://www.figma.com/api/mcp/asset/6a2cb678-55bf-4263-8d90-1b80c76051a8'

interface Props {
  currentStep: number
  totalSteps: number
  onPrev: () => void
  onNext?: () => void
  onDone?: () => void
}

const ACTIVE_DOT = 'bg-[#2d39b4]'
const INACTIVE_DOT = 'bg-[#b2bac3]'

export function StepIndicator({ currentStep, totalSteps, onPrev, onNext, onDone }: Props) {
  const isFirst = currentStep === 0
  const showDone = !!onDone

  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        className={`flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] ${isFirst ? 'opacity-0 pointer-events-none' : ''}`}
        aria-label="previous"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip size-[36px]">
          <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%] rotate-180">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgArrow} />
          </div>
        </div>
      </button>

      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const isActive = i === currentStep
          return (
            <div key={i} className="flex flex-1 items-center justify-center min-w-px">
              {isActive ? (
                <div className={`${ACTIVE_DOT} h-[8px] rounded-[4px] w-full shrink-0`} />
              ) : (
                <div className={`${INACTIVE_DOT} rounded-[4px] shrink-0 size-[8px]`} />
              )}
            </div>
          )
        })}
      </div>

      {showDone ? (
        <button
          type="button"
          onClick={onDone}
          className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]"
        >
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white text-center leading-[20px]">
            Done
          </p>
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]"
          aria-label="next"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip size-[36px]">
            <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
              <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgArrow} />
            </div>
          </div>
        </button>
      )}
    </div>
  )
}
