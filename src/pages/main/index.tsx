import { PAGES } from '../../shared/constants/pages'

interface MainPageProps {
  onNavigate: (page: string) => void
}

const IMG_USER_ICON = 'https://www.figma.com/api/mcp/asset/bb3c27d7-6044-42a7-8f8a-b1b05728fcf3'
const IMG_GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/c7a85590-e5f2-42b6-953e-8965724c2eb5'

export function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="flex h-dvh w-full flex-col bg-[#f0f2f5]">
      <header className="flex h-14 w-full shrink-0 items-center justify-between px-4">
        <button
          type="button"
          onClick={() => onNavigate(PAGES.PROFILE)}
          aria-label="프로필"
          className="relative flex shrink-0 size-[40px] items-center justify-center"
        >
          <div className="relative size-[36px]">
            <div className="absolute inset-[3.98%_3.57%_3.16%_3.57%] overflow-hidden rounded-full bg-[#bbbfd0]">
              <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                <img src={IMG_USER_ICON} alt="" className="absolute block inset-0 size-full" />
              </div>
            </div>
            <div className="absolute inset-[0.41%_0_-0.41%_0]">
              <img src={IMG_GRADE_BORDER} alt="" className="absolute block inset-0 size-full" />
            </div>
          </div>
        </button>
        <span className="text-base font-semibold text-[#000000]">RORR</span>
        <div className="size-[40px]" />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[24px] font-semibold leading-[1.5] text-[#000000]">메인 화면</p>
          <p className="text-[14px] font-light leading-5 text-[#757b90]">
            팔로우 설정을 시작하세요
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
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

          <button
            type="button"
            onClick={() => onNavigate(PAGES.RANK)}
            className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-[30px] bg-white px-6 text-sm font-semibold text-[#969cda] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] ring-1 ring-[#ced6e6] transition-colors hover:bg-[#f0f2f5]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 4h4v16H3V4zm7-2h4v18h-4V2zm7 6h4v12h-4V8z"
                stroke="#969cda"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>랭킹</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-[30px] border border-[#a7c1e1] bg-white px-6 text-sm font-semibold text-[#46383a] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.08)] transition-colors hover:bg-[#f5f7fa]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h8.5a2 2 0 0 0 2-1.5L21 8H6"
                stroke="#46383a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.5" stroke="#46383a" strokeWidth="1.5" />
              <circle cx="18" cy="20" r="1.5" stroke="#46383a" strokeWidth="1.5" />
            </svg>
            <span>구매 리스트</span>
          </button>
        </div>
      </main>
    </div>
  )
}
