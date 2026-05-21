import { FOLLOW_ASSETS } from './assets'

type Props = {
  title: string
  subtitle: string
}

export function HeaderTitle({ title, subtitle }: Props) {
  return (
    <div className="relative flex flex-col gap-[4px] h-[68px] items-start text-black w-full shrink-0">
      <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] w-full">
        {title}
      </p>
      <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-full">
        {subtitle}
      </p>
      <div className="absolute right-0 top-[2px]">
        <button
          type="button"
          className="relative rounded-[30px] size-[24px] overflow-hidden flex items-center justify-center"
        >
          <img alt="" src={FOLLOW_ASSETS.searchBg} className="absolute inset-0 size-full" />
          <img alt="search" src={FOLLOW_ASSETS.searchIcon} className="relative w-[14px] h-[14px]" />
        </button>
      </div>
    </div>
  )
}
