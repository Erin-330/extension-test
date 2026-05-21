const imgUnionStroke = 'https://www.figma.com/api/mcp/asset/29fe625f-dc07-4cb2-905e-e25360e545d7'
const imgExclude = 'https://www.figma.com/api/mcp/asset/a210ca7a-5fe6-4f3b-8db1-18508ae0e028'
const imgClose = 'https://www.figma.com/api/mcp/asset/abf44047-91d1-4fb2-a982-56d4051bdafb'

type Props = {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] w-full shrink-0">
      <div className="flex gap-[6px] items-center">
        <div className="relative w-[22px] h-[18px] overflow-clip -scale-y-100 rotate-180">
          <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
            <img alt="" src={imgUnionStroke} className="absolute block inset-0 max-w-none size-full shrink-0" />
          </div>
          <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
            <img alt="" src={imgExclude} className="absolute block inset-0 max-w-none size-full shrink-0" />
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button type="button" onClick={onClose} className="size-[12.414px] flex items-center justify-center">
        <img alt="close" src={imgClose} className="block size-full shrink-0" />
      </button>
    </div>
  )
}
