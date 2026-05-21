import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ITEMS = [
  { label: '팔로우', target: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', target: PAGES.PROFILE },
  { label: '랭킹', target: PAGES.RANK },
  { label: '구매 리스트', target: PAGES.PURCHASE_LIST },
] as const

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-[16px] bg-[#46383a] px-[11px] pb-[11px]">
      <div className="font-['Pretendard',sans-serif] font-bold text-[28px] text-white tracking-[2px] mb-[20px]">
        RORR
      </div>
      {ITEMS.map((item) => (
        <button
          key={item.target}
          onClick={() => onNavigate(item.target)}
          className="w-[240px] h-[56px] rounded-[12px] bg-[#969cda] hover:bg-[#afb5ea] font-['Pretendard',sans-serif] font-bold text-[16px] text-white"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
