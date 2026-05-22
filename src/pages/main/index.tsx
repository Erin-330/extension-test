import { PAGES } from '../../shared/constants/pages'

type Props = {
  onNavigate: (page: string) => void
}

const BUTTONS = [
  { label: 'Follow', page: PAGES.FOLLOW_LEAGUE },
  { label: 'Profile', page: PAGES.PROFILE },
  { label: 'Rank', page: PAGES.RANK },
  { label: 'Purchase List', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-[16px] bg-[#46383a] px-[24px] font-['Pretendard',sans-serif]">
      <p className="text-white text-[32px] font-extrabold mb-[24px]">RORR</p>
      {BUTTONS.map((b) => (
        <button
          key={b.page}
          onClick={() => onNavigate(b.page)}
          className="w-full max-w-[320px] py-[14px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] text-white text-[16px] font-bold transition-colors"
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}
