import { type Page, PAGES } from '../../shared/constants/pages'

interface MainPageProps {
  onNavigate: (page: Page) => void
}

export function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center bg-[#46383a] gap-[16px]">
      <button
        className="bg-[#209fee] text-white font-['Pretendard',sans-serif] font-bold text-[16px] px-[24px] py-[14px] rounded-[12px] active:opacity-80"
        onClick={() => onNavigate(PAGES.MY_PICKS)}
      >
        픽 카드 보기
      </button>
    </div>
  )
}
