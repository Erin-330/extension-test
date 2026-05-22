const imgLightning = 'https://www.figma.com/api/mcp/asset/1e4f00d1-5cd9-4e65-b2ea-7313c2b60162'

export function BoostTag() {
  return (
    <div
      className="flex gap-[2px] items-center justify-center overflow-clip px-[2px] py-px rounded-[2px] shrink-0"
      style={{
        background:
          'linear-gradient(180deg, #c0b1ff 0%, #a28cff 4.808%, #6f4cff 100%)',
      }}
    >
      <div className="relative shrink-0 size-[6px] overflow-clip">
        <div className="absolute inset-[0_20.83%_0_22.92%]">
          <div className="absolute inset-[5.85%_10.2%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgLightning} />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white whitespace-nowrap leading-none">
        BOOST
      </p>
    </div>
  )
}
