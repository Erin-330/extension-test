import { PAGES } from '../../shared/constants/pages'

type NavProp = { onNavigate: (page: string) => void }

const MENU_ITEMS: { label: string; page: string }[] = [
  { label: '팔로우', page: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', page: PAGES.PROFILE },
  { label: '랭킹', page: PAGES.RANK },
  { label: '구매 리스트', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: NavProp) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center opacity-65 px-[4px] w-full">
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          RORR
        </p>
      </div>
      <div className="relative flex-1 min-h-px w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden flex items-center justify-center">
        <div className="flex flex-col gap-[16px] w-[240px]">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => onNavigate(item.page)}
              className="bg-[#969cda] hover:bg-[#afb5ea] rounded-[30px] h-[48px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
