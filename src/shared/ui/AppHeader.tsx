const imgUnionStroke = 'https://www.figma.com/api/mcp/asset/41c510f4-7c10-4370-8d0b-901fa8a86a8f'
const imgExclude = 'https://www.figma.com/api/mcp/asset/f354198c-8f3e-40ab-982d-f88d2372c973'
const imgUnionClose = 'https://www.figma.com/api/mcp/asset/5532ca07-9c14-4054-945a-59d3f95e68df'

type Props = {
  onClose?: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-66 px-[4px] shrink-0 w-full">
      <div className="flex gap-[6px] items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] w-[22px] relative overflow-clip">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="absolute block inset-0 size-full" src={imgUnionStroke} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="absolute block inset-0 size-full" src={imgExclude} />
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          RORR
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="relative shrink-0 size-[12.414px] cursor-pointer"
        aria-label="Close"
      >
        <img alt="" className="absolute block inset-0 size-full" src={imgUnionClose} />
      </button>
    </div>
  )
}
