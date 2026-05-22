import { FOLLOW_ASSETS } from './assets'

type Props = {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext: () => void
  doneLabel?: string
}

export function StepIndicator({ currentStep, onPrev, onNext, doneLabel }: Props) {
  const isLastStep = currentStep === 2
  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <button
        type="button"
        onClick={onPrev}
        className={`flex-[1_0_0] h-[48px] max-w-[96px] min-w-[80px] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center bg-[#969cda] hover:bg-[#afb5ea] transition-colors ${
          currentStep === 0 ? 'opacity-0 pointer-events-none' : ''
        }`}
        aria-label="prev"
      >
        <img src={FOLLOW_ASSETS.stepArrowStroke} alt="" className="shrink-0 w-[14px] h-[14px] rotate-180" />
      </button>
      <div className="flex flex-[1_0_0] gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
        {[0, 1, 2].map((step) => (
          <div key={step} className="flex flex-[1_0_0] items-center justify-center min-w-px">
            {currentStep === step ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] shrink-0 w-full" />
            ) : (
              <div className="bg-[#b2bac3] rounded-[4px] shrink-0 w-[8px] h-[8px]" />
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="flex-[1_0_0] h-[48px] max-w-[96px] min-w-[80px] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] flex items-center justify-center bg-[#969cda] hover:bg-[#afb5ea] transition-colors"
        aria-label={isLastStep ? 'done' : 'next'}
      >
        {isLastStep ? (
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
            {doneLabel ?? 'Done'}
          </p>
        ) : (
          <img src={FOLLOW_ASSETS.stepArrowStroke} alt="" className="shrink-0 w-[14px] h-[14px]" />
        )}
      </button>
    </div>
  )
}
