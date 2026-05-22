interface AppHeaderProps {
  onClose: () => void
}

const RORR_LOGO_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/e04d949c-657b-4acc-b73c-1c1c2b87a44e'
const RORR_LOGO_EXCLUDE = 'https://www.figma.com/api/mcp/asset/67eea722-ee9b-40a2-9de1-e558341326f9'
const CLOSE_X_ICON = 'https://www.figma.com/api/mcp/asset/228e74c7-f48c-4244-9eb1-a556b737c99e'

export function AppHeader({ onClose }: AppHeaderProps) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
      <div className="flex gap-[6px] items-center justify-center shrink-0">
        <div className="flex items-center justify-center shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[18px] overflow-clip relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={RORR_LOGO_UNION_STROKE} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={RORR_LOGO_EXCLUDE} />
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] not-italic shrink-0 text-[14px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button onClick={onClose} className="relative shrink-0 w-[12.414px] h-[12.414px]" aria-label="close">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={CLOSE_X_ICON} />
      </button>
    </div>
  )
}
