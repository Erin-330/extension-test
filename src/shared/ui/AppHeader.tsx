const imgUnionStroke = 'https://www.figma.com/api/mcp/asset/03d02f04-8002-4832-9830-c9d5a609800d'
const imgExclude = 'https://www.figma.com/api/mcp/asset/89877849-87b9-4fad-a519-60f5317f13cf'
const imgClose = 'https://www.figma.com/api/mcp/asset/aedc0c9c-0493-4cab-869a-3e2bb4f7770a'

interface Props {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
      <div className="flex gap-[6px] items-center justify-center shrink-0">
        <div className="flex items-center justify-center shrink-0">
          <div className="-scale-y-100 rotate-180">
            <div className="relative shrink-0 h-[18px] w-[22px] overflow-clip">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgUnionStroke} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgExclude} />
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="relative shrink-0 size-[12.414px]"
        aria-label="close"
      >
        <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgClose} />
      </button>
    </div>
  )
}
