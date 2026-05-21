import { PAGES } from '../../shared/constants/pages'

type Props = {
  onNavigate: (page: string) => void
}

const MENU = [
  { label: 'Follow', page: PAGES.FOLLOW_LEAGUE },
  { label: 'Profile', page: PAGES.PROFILE },
  { label: 'Rank', page: PAGES.RANK },
  { label: 'Purchase List', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] px-[11px] pb-[11px] gap-[16px]">
      <h1 className="font-['Pretendard',sans-serif] font-extrabold text-[32px] text-white mb-[24px]">
        rorr
      </h1>
      {MENU.map((item) => (
        <button
          key={item.page}
          type="button"
          onClick={() => onNavigate(item.page)}
          className="w-[240px] h-[56px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] font-['Pretendard',sans-serif] font-bold text-[18px] text-white transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
