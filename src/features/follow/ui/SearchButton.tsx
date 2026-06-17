import { FOLLOW_ASSETS } from './assets'

export function SearchButton() {
  return (
    <div className="absolute top-0 right-0 flex flex-col gap-[4px] items-start p-[10px]">
      <div className="flex flex-col items-start relative rounded-[28px] shrink-0 size-[24px]">
        <div className="relative rounded-[30px] size-[24px] shrink-0">
          <img src={FOLLOW_ASSETS.searchButtonBg} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
        <div className="absolute inset-[8.33%] overflow-hidden">
          <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
            <img src={FOLLOW_ASSETS.searchIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
