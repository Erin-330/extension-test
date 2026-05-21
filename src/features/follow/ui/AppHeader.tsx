const imgUnionStroke = 'https://www.figma.com/api/mcp/asset/e4a1636c-bc33-4774-956a-a42f378534d4'
const imgExclude = 'https://www.figma.com/api/mcp/asset/7e689385-fed0-404c-908b-d056333cee70'
const imgUnion = 'https://www.figma.com/api/mcp/asset/f8f6e3b8-6de7-43c8-873a-47ea13782fb1'

type Props = {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] w-full">
      <div className="flex items-center justify-center gap-[6px]">
        <div className="-scale-y-100 rotate-180 flex items-center">
          <div className="relative h-[18px] w-[22px] overflow-clip">
            <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
              <img alt="" src={imgUnionStroke} className="absolute inset-0 block max-w-none size-full" />
            </div>
            <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
              <img alt="" src={imgExclude} className="absolute inset-0 block max-w-none size-full" />
            </div>
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          RORR
        </p>
      </div>
      <button onClick={onClose} className="relative size-[12.414px]" type="button" aria-label="close">
        <img alt="" src={imgUnion} className="absolute inset-0 block max-w-none size-full" />
      </button>
    </div>
  )
}
