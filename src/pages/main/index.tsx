import { PAGES } from '../../shared/constants/pages'

type Props = {
  onNavigate: (page: string) => void
}

const MENU = [
  { label: 'Follow', target: PAGES.FOLLOW_LEAGUE },
  { label: 'Profile', target: PAGES.PROFILE },
  { label: 'Rank', target: PAGES.RANK },
  { label: 'Purchase List', target: PAGES.PURCHASE_LIST },
] as const

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="content-stretch flex h-[48px] items-center justify-center px-[4px] shrink-0 w-full opacity-66">
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white">RORR</p>
      </div>
      <div className="bg-[#f0f2f5] flex-1 flex flex-col items-center justify-center gap-[16px] rounded-[16px] w-full p-[24px]">
        {MENU.map((item) => (
          <button
            key={item.target}
            onClick={() => onNavigate(item.target)}
            className="w-full max-w-[280px] h-[56px] bg-[#969cda] hover:bg-[#afb5ea] active:bg-[#afb5ea] transition-colors rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] font-['Pretendard',sans-serif] font-bold text-[16px] text-white"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
