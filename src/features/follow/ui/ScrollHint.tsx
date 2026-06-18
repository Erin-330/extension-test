export function ScrollHint() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-[8px] flex items-center py-[16px] pointer-events-none">
      <div className="bg-[#ced6e6] w-[4px] h-full rounded-[8px] flex flex-col items-start justify-center">
        <div className="bg-[#969cda] w-[4px] h-[48px] rounded-[2px]" />
      </div>
    </div>
  )
}
