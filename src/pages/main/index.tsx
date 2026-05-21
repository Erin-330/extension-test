import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const BUTTONS = [
  { label: '팔로우', page: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', page: PAGES.PROFILE },
  { label: '랭킹', page: PAGES.RANK },
  { label: '구매 리스트', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-[16px] bg-[#46383a] px-[11px] pb-[11px]">
      <p className="text-white text-[28px] font-['Pretendard',sans-serif] font-bold mb-[24px]">
        RORR
      </p>
      {BUTTONS.map((btn) => (
        <button
          key={btn.page}
          onClick={() => onNavigate(btn.page)}
          className="w-full max-w-[320px] h-[56px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] text-white text-[18px] font-['Pretendard',sans-serif] font-bold transition-colors"
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}
