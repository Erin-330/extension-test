interface StepIndicatorProps {
  totalSteps: number
  currentStep: number
  onPrev?: () => void
  onNext?: () => void
  onDone?: () => void
  doneLabel?: string
}

export function StepIndicator({
  totalSteps,
  currentStep,
  onPrev,
  onNext,
  onDone,
  doneLabel = 'Done',
}: StepIndicatorProps) {
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-[10px] px-4 py-2"
      style={{ backdropFilter: 'blur(3px)', background: 'rgba(255,255,255,0.01)' }}
    >
      {/* Prev button — invisible at step 0 */}
      <button
        type="button"
        onClick={onPrev}
        aria-hidden={currentStep === 0}
        className={[
          'flex h-12 min-w-[80px] max-w-[96px] flex-1 items-center justify-center rounded-[30px] transition-colors',
          'bg-[#969cda] hover:bg-[#afb5ea]',
          'shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]',
          currentStep === 0 ? 'pointer-events-none opacity-0' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <svg className="h-9 w-9" viewBox="0 0 36 36" fill="none">
          <path d="M22 10l-8 8 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Step dots */}
      <div className="flex min-w-0 max-w-[190px] flex-1 items-center gap-1 px-[5px] py-[10px]">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex flex-1 items-center justify-center">
            {i === currentStep ? (
              <div className="h-2 w-full rounded-[4px] bg-[#2d39b4]" />
            ) : (
              <div className="h-2 w-2 shrink-0 rounded-[4px] bg-[#b2bac3]" />
            )}
          </div>
        ))}
      </div>

      {/* Next / Done button */}
      <button
        type="button"
        onClick={isLastStep ? onDone : onNext}
        className="flex h-12 min-w-[80px] max-w-[96px] flex-1 items-center justify-center rounded-[30px] bg-[#969cda] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#afb5ea]"
      >
        {isLastStep ? (
          <span className="text-sm font-semibold text-white">{doneLabel}</span>
        ) : (
          <svg className="h-9 w-9" viewBox="0 0 36 36" fill="none">
            <path d="M14 10l8 8-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  )
}
