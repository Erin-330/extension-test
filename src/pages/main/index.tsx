import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const MENU = [
  { label: 'Follow', target: PAGES.FOLLOW_LEAGUE },
  { label: 'Profile', target: PAGES.PROFILE },
  { label: 'Rank', target: PAGES.RANK },
  { label: 'Purchase List', target: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-[16px] bg-[#46383a] px-[24px]">
      <p className="font-['Pretendard',sans-serif] font-extrabold text-white text-[32px] mb-[16px]">RORR</p>
      {MENU.map((m) => (
        <button
          key={m.target}
          onClick={() => onNavigate(m.target)}
          className="w-full max-w-[280px] h-[56px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] text-white font-['Pretendard',sans-serif] font-bold text-[16px]"
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
