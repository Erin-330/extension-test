import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const BUTTONS = [
  { label: 'Follow', target: PAGES.FOLLOW_LEAGUE },
  { label: 'Profile', target: PAGES.PROFILE },
  { label: 'Ranking', target: PAGES.RANK },
  { label: 'Purchase List', target: PAGES.PURCHASE_LIST },
] as const

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] gap-[16px] px-[24px]">
      <h1 className="font-['Pretendard',sans-serif] font-extrabold text-white text-[32px] mb-[16px]">
        RORR
      </h1>
      {BUTTONS.map((b) => (
        <button
          key={b.target}
          onClick={() => onNavigate(b.target)}
          className="w-full max-w-[320px] py-[16px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] font-['Pretendard',sans-serif] font-bold text-white text-[16px]"
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}
