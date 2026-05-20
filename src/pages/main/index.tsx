import { PAGES } from '../../shared/constants/pages'

interface MainPageProps {
  onNavigate: (page: string) => void
}

export function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="flex h-dvh w-full flex-col bg-[#f0f2f5]">
      <header className="flex h-14 w-full shrink-0 items-center justify-center px-4">
        <span className="text-base font-semibold text-[#000000]">RORR</span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[24px] font-semibold leading-[1.5] text-[#000000]">메인 화면</p>
          <p className="text-[14px] font-light leading-5 text-[#757b90]">
            팔로우 설정을 시작하세요
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
          className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-[30px] bg-[#969cda] px-6 text-sm font-semibold text-white shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#afb5ea]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span>리그</span>
        </button>
      </main>
    </div>
  )
}
