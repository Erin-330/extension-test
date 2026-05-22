import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const BUTTONS = [
  { label: '팔로우', page: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', page: PAGES.PROFILE },
  { label: '랭킹', page: PAGES.RANK },
  { label: '구매 리스트', page: PAGES.PURCHASE_LIST },
] as const

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-[16px] bg-[#46383a] px-[24px]">
      <p className="font-['Pretendard',sans-serif] font-extrabold text-white text-[32px] mb-[24px]">RORR</p>
      {BUTTONS.map((b) => (
        <button
          key={b.page}
          onClick={() => onNavigate(b.page)}
          className="w-full max-w-[320px] h-[56px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] font-['Pretendard',sans-serif] font-bold text-white text-[16px]"
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}
