import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const MENU = [
  { label: '팔로우', target: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', target: PAGES.PROFILE },
  { label: '랭킹', target: PAGES.RANK },
  { label: '구매 리스트', target: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] px-[11px] pb-[11px] gap-[16px]">
      <h1 className="text-white text-[28px] font-['Pretendard',sans-serif] font-bold tracking-widest">RORR</h1>
      <div className="flex flex-col gap-[12px] w-full max-w-[320px]">
        {MENU.map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => onNavigate(item.target)}
            className="w-full py-[14px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] text-white text-[16px] font-['Pretendard',sans-serif] font-bold transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
