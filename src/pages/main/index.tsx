import { PAGES } from '../../shared/constants/pages'

interface MainPageProps {
  onNavigate: (page: string) => void
}

const MENU = [
  { label: '팔로우', page: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', page: PAGES.PROFILE },
  { label: '랭킹', page: PAGES.RANK },
  { label: '구매 리스트', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] px-[11px] pb-[11px] gap-4">
      <h1 className="text-white font-['Pretendard',sans-serif] font-extrabold text-[36px] mb-4">RORR</h1>
      {MENU.map((item) => (
        <button
          key={item.page}
          onClick={() => onNavigate(item.page)}
          className="w-full max-w-[320px] py-4 rounded-full bg-[#969cda] hover:bg-[#afb5ea] text-white font-['Pretendard',sans-serif] font-bold text-[18px] transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
