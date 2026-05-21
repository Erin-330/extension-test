import { FOLLOW_ASSETS } from './assets'

type Props = {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext: () => void
  isLast?: boolean
}

export function StepIndicator({ currentStep, onPrev, onNext, isLast }: Props) {
  return (
    <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <button
        type="button"
        onClick={onPrev}
        className={`h-[48px] flex-1 max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        aria-label="previous"
      >
        <img alt="" src={FOLLOW_ASSETS.arrowIcon} className="block w-[16.7px] h-[14.3px] -scale-x-100" />
      </button>
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] px-[5px] py-[10px]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-1 items-center justify-center">
            {currentStep === i ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
            ) : (
              <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="h-[48px] flex-1 max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center"
        aria-label={isLast ? 'done' : 'next'}
      >
        {isLast ? (
          <span className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
            Done
          </span>
        ) : (
          <img alt="" src={FOLLOW_ASSETS.arrowIcon} className="block w-[16.7px] h-[14.3px]" />
        )}
      </button>
    </div>
  )
}
