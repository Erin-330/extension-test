type Props = {
  currentStep: 0 | 1 | 2
  arrowIconUrl: string
  onPrev?: () => void
  onNext: () => void
  nextLabel?: string
}

const ACTIVE = '#2d39b4'
const INACTIVE = '#b2bac3'

export const StepIndicator = ({ currentStep, arrowIconUrl, onPrev, onNext, nextLabel }: Props) => {
  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <button
        onClick={onPrev}
        disabled={!onPrev}
        className={`h-[48px] flex-[1_0_0] max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center ${onPrev ? '' : 'opacity-0 pointer-events-none'}`}
        aria-label="previous"
      >
        <img
          src={arrowIconUrl}
          className="size-[16px] shrink-0 rotate-180"
          alt=""
        />
      </button>
      <div className="flex flex-[1_0_0] gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
        {[0, 1, 2].map((i) => {
          const isActive = i === currentStep
          return (
            <div key={i} className="flex flex-[1_0_0] items-center justify-center min-w-px">
              {isActive ? (
                <div
                  className="h-[8px] w-full rounded-[4px]"
                  style={{ background: ACTIVE }}
                />
              ) : (
                <div
                  className="size-[8px] rounded-[4px]"
                  style={{ background: INACTIVE }}
                />
              )}
            </div>
          )
        })}
      </div>
      <button
        onClick={onNext}
        className="h-[48px] flex-[1_0_0] max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center"
        aria-label={nextLabel || 'next'}
      >
        {nextLabel ? (
          <span className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
            {nextLabel}
          </span>
        ) : (
          <img src={arrowIconUrl} className="size-[16px] shrink-0" alt="" />
        )}
      </button>
    </div>
  )
}
