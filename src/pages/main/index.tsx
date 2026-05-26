import { PAGES } from '../../shared/constants/pages'

type Props = {
  onNavigate: (page: string) => void
}

const BUTTONS = [
  { label: '팔로우', page: PAGES.FOLLOW_LEAGUE },
  { label: '프로필', page: PAGES.PROFILE },
  { label: '구매 리스트', page: PAGES.PURCHASE_LIST },
]

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] px-[11px] pb-[11px] gap-4">
      <h1 className="text-white text-2xl font-bold mb-6 font-['Pretendard',sans-serif]">rorr</h1>
      {BUTTONS.map((b) => (
        <button
          key={b.page}
          onClick={() => onNavigate(b.page)}
          className="w-full max-w-[280px] py-4 rounded-[12px] bg-white text-[#46383a] text-base font-semibold font-['Pretendard',sans-serif] active:opacity-80"
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}
