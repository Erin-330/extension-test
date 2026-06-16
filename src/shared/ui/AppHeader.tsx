const imgUnionStroke = 'https://www.figma.com/api/mcp/asset/9b4eb1fa-08b6-457a-8d3a-204d95886278'
const imgExclude = 'https://www.figma.com/api/mcp/asset/1959c7a1-275a-4f84-806a-d232692e068d'
const imgUnionClose = 'https://www.figma.com/api/mcp/asset/109d149b-ce24-4723-a602-f7c62e83e383'

type Props = { onClose?: () => void }

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
      <div className="flex gap-[6px] items-center justify-center shrink-0">
        <div className="-scale-y-100 rotate-180 flex items-center justify-center shrink-0">
          <div className="h-[18px] overflow-clip relative w-[22px]">
            <img
              src={imgUnionStroke}
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              style={{ inset: '0.03% 19.61% -0.09% 19.66%' }}
            />
            <img
              src={imgExclude}
              alt=""
              className="absolute block max-w-none"
              style={{ inset: '2.93% 22.01% 2.81% 22.06%' }}
            />
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] shrink-0 text-[14px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button
        onClick={onClose}
        className="shrink-0 w-[12.414px] h-[12.414px] relative"
        aria-label="close"
      >
        <img src={imgUnionClose} alt="" className="absolute block inset-0 max-w-none size-full" />
      </button>
    </div>
  )
}
