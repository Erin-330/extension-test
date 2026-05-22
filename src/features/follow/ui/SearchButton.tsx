import { ASSETS } from './assets'

export function SearchButton() {
  return (
    <button className="absolute right-0 top-0 p-[10px]">
      <div className="relative w-[24px] h-[24px] rounded-[30px]">
        <img src={ASSETS.searchButtonShape} className="absolute inset-0 w-full h-full" alt="" />
        <img
          src={ASSETS.searchIconUnion}
          className="shrink-0 w-[14px] h-[14px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="search"
        />
      </div>
    </button>
  )
}
