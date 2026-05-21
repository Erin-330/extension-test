const imgLightning = 'https://www.figma.com/api/mcp/asset/a3625f12-0dd8-4882-8c8b-2a70296d3f35'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex items-center justify-center gap-[2px] px-[2px] py-px rounded-[2px] overflow-clip">
      <div className="relative size-[6px] overflow-clip">
        <img alt="" src={imgLightning} className="absolute inset-[0_20.83%_0_22.92%] block max-w-none size-full" />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] leading-none text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}
