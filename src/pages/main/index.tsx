import { PAGES } from '../../shared/constants/pages'

interface MainPageProps {
  onNavigate: (page: string) => void
}

export function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-[#46383a] px-4 py-8">
      <div className="flex w-full max-w-[360px] flex-col items-center gap-6 rounded-[16px] bg-[#f0f2f5] px-6 py-10">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-[24px] font-semibold leading-[1.5] text-black">RORR</p>
          <p className="text-[14px] font-light leading-5 text-[#757b90]">
            Follow your favorite leagues, teams, and players
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-[30px] bg-[#969cda] text-[16px] font-semibold text-white transition-colors hover:bg-[#afb5ea]"
          style={{ boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.15)' }}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15 8.5L22 9.3L17 14.1L18.2 21L12 17.8L5.8 21L7 14.1L2 9.3L9 8.5L12 2Z"
              stroke="white"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          <span>리그 선택하기</span>
        </button>
      </div>
    </div>
  )
}
