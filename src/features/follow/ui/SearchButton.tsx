import { FOLLOW_ICON } from './assets'

export function SearchButton() {
  return (
    <div className="absolute right-0 top-0 flex flex-col gap-[4px] items-start p-[10px]">
      <div className="flex gap-[10px] items-center w-full">
        <button
          type="button"
          aria-label="search"
          className="relative rounded-[28px] size-[24px] shrink-0"
        >
          <img
            alt=""
            className="absolute inset-0 size-full rounded-[30px]"
            src={FOLLOW_ICON.headerButtonBg}
          />
          <div className="absolute inset-[8.33%] overflow-clip">
            <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
              <img alt="" className="block w-full h-full" src={FOLLOW_ICON.searchIcon} />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
