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
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] px-[11px] pb-[11px] gap-4">
      <h1 className="text-white text-3xl font-['Pretendard',sans-serif] font-extrabold mb-4">
        RORR
      </h1>
      {BUTTONS.map((b) => (
        <button
          key={b.page}
          onClick={() => onNavigate(b.page)}
          className="w-full max-w-[320px] rounded-xl bg-[#969cda] hover:bg-[#afb5ea] text-white py-4 font-['Pretendard',sans-serif] font-bold text-lg"
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}
