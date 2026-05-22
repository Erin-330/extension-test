import { ASSETS } from './assets'

interface Props {
  currentStep: 0 | 1 | 2
  onPrev?: () => void
  onNext?: () => void
  onDone?: () => void
}

export function StepIndicator({ currentStep, onPrev, onNext, onDone }: Props) {
  const isFirst = currentStep === 0
  const isLast = currentStep === 2

  return (
    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <button
        onClick={onPrev}
        className={`flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] ${isFirst ? 'opacity-0 pointer-events-none' : ''}`}
        aria-label="prev"
      >
        <img
          src={ASSETS.arrowVector}
          className="shrink-0 w-[20px] h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180"
          alt=""
        />
      </button>
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] px-[5px] py-[10px]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-1 items-center justify-center">
            {i === currentStep ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
            ) : (
              <div className="bg-[#b2bac3] rounded-[4px] w-[8px] h-[8px]" />
            )}
          </div>
        ))}
      </div>
      {isLast ? (
        <button
          onClick={onDone}
          className="flex-1 max-w-[96px] min-w-[80px] h-[48px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]"
        >
          Done
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]"
          aria-label="next"
        >
          <img
            src={ASSETS.arrowVector}
            className="shrink-0 w-[20px] h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </button>
      )}
    </div>
  )
}
