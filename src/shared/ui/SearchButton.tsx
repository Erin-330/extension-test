const imgButtonBg = 'https://www.figma.com/api/mcp/asset/aed9c614-8bf1-49e0-92e3-098d458ec47e'
const imgSearchIcon = 'https://www.figma.com/api/mcp/asset/1f159d17-6fad-405e-8fc2-c0e020547816'

export function SearchButton() {
  return (
    <div className="absolute flex flex-col gap-[4px] items-start p-[10px] right-0 top-0">
      <div className="flex gap-[10px] items-center shrink-0 w-full">
        <button
          type="button"
          className="flex flex-col items-start relative rounded-[28px] shrink-0 size-[24px]"
          aria-label="search"
        >
          <div className="relative rounded-[30px] w-full h-full">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgButtonBg} />
          </div>
          <div className="absolute inset-[8.33%] overflow-clip">
            <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
              <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgSearchIcon} />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
