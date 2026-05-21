const imgSearchShape = 'https://www.figma.com/api/mcp/asset/fda919ef-77eb-4b3a-97a8-78890521d51c'
const imgSearchIcon = 'https://www.figma.com/api/mcp/asset/5f2048be-f96a-4650-9961-f0a666a32a7a'

export function SearchButton() {
  return (
    <div className="absolute right-0 top-0 flex flex-col items-start gap-[4px] p-[10px]">
      <div className="flex items-center gap-[10px]">
        <button type="button" className="relative size-[24px] rounded-[28px]" aria-label="search">
          <img alt="" src={imgSearchShape} className="absolute inset-0 block max-w-none size-full rounded-[30px]" />
          <div className="absolute inset-[8.33%] overflow-clip">
            <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
              <img alt="" src={imgSearchIcon} className="absolute inset-0 block max-w-none size-full" />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
