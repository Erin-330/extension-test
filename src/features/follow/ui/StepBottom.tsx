import { FOLLOW_ICON } from './assets'

interface Props {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext: () => void
  nextLabel?: string
}

function StepArrowButton({
  flip,
  onClick,
  hidden,
}: {
  flip?: boolean
  onClick: () => void
  hidden?: boolean
}) {
  return (
    <div
      className={`flex-1 max-w-[96px] min-w-[80px] h-[48px] relative ${
        hidden ? 'opacity-0 pointer-events-none' : ''
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        disabled={hidden}
        aria-label={flip ? 'previous' : 'next'}
        className="absolute inset-0 max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] transition-colors"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] overflow-clip pointer-events-none">
        <div
          className={`absolute inset-[30.21%_22.66%_30.21%_23.96%] ${
            flip ? 'rotate-180' : ''
          }`}
        >
          <img alt="" className="block w-full h-full" src={FOLLOW_ICON.arrowRight} />
        </div>
      </div>
    </div>
  )
}

function StepDoneButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <div className="flex-1 max-w-[96px] min-w-[80px] h-[48px] relative">
      <button
        type="button"
        onClick={onClick}
        className="absolute inset-0 max-w-[96px] min-w-[80px] rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] transition-colors"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-center text-white leading-[20px] whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  )
}

export function StepBottom({ currentStep, onPrev, onNext, nextLabel }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px] backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)]">
      <StepArrowButton flip onClick={onPrev} hidden={currentStep === 0} />
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-0 px-[5px] py-[10px]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`flex-1 flex items-center justify-center min-w-0 ${
              i === currentStep ? 'flex-col' : ''
            }`}
          >
            {i === currentStep ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
            ) : (
              <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
            )}
          </div>
        ))}
      </div>
      {nextLabel ? (
        <StepDoneButton onClick={onNext} label={nextLabel} />
      ) : (
        <StepArrowButton onClick={onNext} />
      )}
    </div>
  )
}
