import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

export function MainPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] px-[11px] pb-[11px] gap-4">
      <h1 className="text-white text-2xl font-bold mb-6">rorr</h1>
      <button
        type="button"
        onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
        className="w-full max-w-[320px] py-4 bg-white text-[#46383a] font-semibold rounded-xl"
      >
        팔로우
      </button>
      <button
        type="button"
        onClick={() => onNavigate(PAGES.PROFILE)}
        className="w-full max-w-[320px] py-4 bg-white text-[#46383a] font-semibold rounded-xl"
      >
        프로필
      </button>
      <button
        type="button"
        onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
        className="w-full max-w-[320px] py-4 bg-white text-[#46383a] font-semibold rounded-xl"
      >
        구매 리스트
      </button>
    </div>
  )
}
