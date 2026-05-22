import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const MENU = [
  { label: '팔로우', page: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', page: PAGES.PROFILE },
  { label: '랭킹', page: PAGES.RANK },
  { label: '구매 리스트', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-[16px] bg-[#46383a] px-[24px]">
      <p className="font-['Pretendard',sans-serif] font-extrabold text-white text-[40px] tracking-wider mb-[12px]">
        RORR
      </p>
      {MENU.map((m) => (
        <button
          key={m.page}
          onClick={() => onNavigate(m.page)}
          className="w-full max-w-[280px] h-[52px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] active:bg-[#7e84c6] font-['Pretendard',sans-serif] font-bold text-white text-[16px]"
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
