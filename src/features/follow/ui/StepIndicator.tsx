import { FOLLOW_ASSETS } from './assets'

type Props = {
  currentStep: 0 | 1 | 2
  onPrev?: () => void
  onNext?: () => void
  doneLabel?: string
}

function StepArrowButton({ onClick, flip }: { onClick?: () => void; flip?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative bg-[#969cda] hover:bg-[#afb5ea] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] transition-colors"
    >
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden size-[36px] ${flip ? 'rotate-180' : ''}`}>
        <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
          <img src={FOLLOW_ASSETS.stepArrow} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </button>
  )
}

function StepDoneButton({ onClick, label }: { onClick?: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative bg-[#969cda] hover:bg-[#afb5ea] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] transition-colors"
    >
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-center text-white leading-[20px]">
        {label}
      </p>
    </button>
  )
}

export function StepIndicator({ currentStep, onPrev, onNext, doneLabel }: Props) {
  const isFirst = currentStep === 0
  const isLast = currentStep === 2

  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 flex gap-[10px] items-center justify-center left-0 right-0 px-[16px] py-[8px]">
      {isFirst ? (
        <div className="flex-1 h-[48px] max-w-[96px] min-w-[80px] opacity-0" />
      ) : (
        <StepArrowButton onClick={onPrev} flip />
      )}
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="flex flex-1 items-center justify-center min-w-px">
            {idx === currentStep ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full shrink-0" />
            ) : (
              <div className="bg-[#b2bac3] rounded-[4px] size-[8px] shrink-0" />
            )}
          </div>
        ))}
      </div>
      {isLast && doneLabel ? (
        <StepDoneButton onClick={onNext} label={doneLabel} />
      ) : (
        <StepArrowButton onClick={onNext} />
      )}
    </div>
  )
}
