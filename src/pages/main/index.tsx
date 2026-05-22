import { PAGES } from '../../shared/constants/pages'

interface MainPageProps {
  onNavigate: (page: string) => void
}

const BUTTONS = [
  { label: '팔로우', page: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', page: PAGES.PROFILE },
  { label: '랭킹', page: PAGES.RANK },
  { label: '구매 리스트', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] px-[11px] pb-[11px] gap-[16px]">
      <p className="font-['Pretendard',sans-serif] font-bold text-white text-[32px] mb-[24px]">RORR</p>
      {BUTTONS.map((b) => (
        <button
          key={b.page}
          onClick={() => onNavigate(b.page)}
          className="font-['Pretendard',sans-serif] font-bold w-[240px] h-[56px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] text-white text-[18px]"
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}
