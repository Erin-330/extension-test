import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSETS = {
  headerButtonShape: 'https://www.figma.com/api/mcp/asset/03ba45dc-836b-4211-afd2-d5a6266c5dd9',
  closeStroke: 'https://www.figma.com/api/mcp/asset/526ce86f-94bc-4888-8f3e-e567b5a269ae',
  userSilhouette: 'https://www.figma.com/api/mcp/asset/0deb8ac3-d3e3-4680-9e01-ae81093c96ee',
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/436188fd-c869-4cbe-b925-e045d2783f31',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/d633ba9c-e2e4-4598-abeb-b120ffff7f70',
  headerCloseUnion: 'https://www.figma.com/api/mcp/asset/237557c7-f4bd-4523-ac50-37e402d95ae6',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/5a1763f1-8b28-4a41-81f7-0156ccbab4c2',
  gradeHighLight: 'https://www.figma.com/api/mcp/asset/ea164b66-a3bb-4eb5-bdb0-2ed0ae95fc8f',
  gradeInnerLine: 'https://www.figma.com/api/mcp/asset/2ef31661-a50c-4478-9950-bf3427dc09bf',
  sparkIcon: 'https://www.figma.com/api/mcp/asset/8a1eaed9-9e61-4d66-9629-8b4d989eb3ab',
  separator: 'https://www.figma.com/api/mcp/asset/321c2b32-cbb7-4113-b3a8-1c9aa4a344ad',
  energyIcon: 'https://www.figma.com/api/mcp/asset/44465e78-d07c-4d06-a03c-ee32f2188a29',
  plusIcon: 'https://www.figma.com/api/mcp/asset/4a9e4604-b6e4-4f32-b1d3-210b4b12c225',
  divider: 'https://www.figma.com/api/mcp/asset/a5abd60c-7ae0-4583-831b-86aecc8769e0',
  followIcon: 'https://www.figma.com/api/mcp/asset/c1a573e0-9552-44da-973a-99eae856a0a5',
  arrowRight: 'https://www.figma.com/api/mcp/asset/5c44b1dd-fba2-4b33-8ed5-907f6f507c2e',
  purchaseIconUnion: 'https://www.figma.com/api/mcp/asset/2339b915-913d-49b6-9dad-93b57885dd89',
  purchaseDollar: 'https://www.figma.com/api/mcp/asset/b0db1bff-543d-4162-b757-7a9ecee7be61',
  boostIcon: 'https://www.figma.com/api/mcp/asset/1736330a-50f6-42e6-a448-0496b619b940',
  rorrSmall: 'https://www.figma.com/api/mcp/asset/ca315508-569b-42b5-9e77-be7aac23d837',
  linkOut: 'https://www.figma.com/api/mcp/asset/e8837379-0dae-4a4b-8e78-566852b98169',
  emblemSubtract: 'https://www.figma.com/api/mcp/asset/7682ac9f-8767-438f-807e-88d5b08843b9',
  emblemSubtract1: 'https://www.figma.com/api/mcp/asset/b19ba869-3da6-41d7-8d44-b46619caf7c9',
  emblemSubtract2: 'https://www.figma.com/api/mcp/asset/decbef90-33d8-4402-8850-8dfa2ef2e952',
  emblemVector: 'https://www.figma.com/api/mcp/asset/57477258-fff9-453e-b827-977fcb1a32cc',
  mailVector709: 'https://www.figma.com/api/mcp/asset/569a6bbf-487d-423f-bc4b-a5796fbe6764',
  mailVector708: 'https://www.figma.com/api/mcp/asset/f0088a8d-1916-4505-865a-8955165b4c3b',
  mailRect762: 'https://www.figma.com/api/mcp/asset/27ce9521-1f36-4f49-901f-8c4dffe25325',
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
  mailCount: 2,
}

function Avatar() {
  return (
    <div className="flex items-start justify-center shrink-0 w-[110px] h-[110px]">
      <div className="relative shrink-0 w-[96px] h-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img alt="" src={ASSETS.userSilhouette} className="absolute inset-0 w-full h-full" />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img alt="" src={ASSETS.gradeBorder} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-[5%]">
            <img alt="" src={ASSETS.gradeHighLight} className="absolute inset-0 w-full h-full" />
          </div>
          <div className="absolute inset-[6%]">
            <img alt="" src={ASSETS.gradeInnerLine} className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuRow({ icon, label, onClick, external }: { icon: React.ReactNode; label: string; onClick?: () => void; external?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] w-full text-left hover:bg-black/5 rounded-[4px] transition-colors"
    >
      {icon}
      <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black whitespace-nowrap leading-none flex-1">
        {label}
      </p>
      {external ? (
        <div className="overflow-clip relative shrink-0 w-[24px] h-[24px]">
          <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
            <img alt="" src={ASSETS.linkOut} className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      ) : (
        <div className="overflow-clip relative shrink-0 w-[32px] h-[32px]">
          <div className="absolute bottom-[22.92%] left-[41.67%] right-[25%] top-[22.92%]">
            <img alt="" src={ASSETS.arrowRight} className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      )}
    </button>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center justify-center">
          <div className="relative w-[22px] h-[18px] overflow-hidden">
            <img alt="" src={ASSETS.rorrLogoStroke} className="absolute inset-[0.03%_19.61%_-0.09%_19.66%] w-auto h-auto" />
            <img alt="" src={ASSETS.rorrLogoExclude} className="absolute inset-[2.93%_22.01%_2.81%_22.06%] w-auto h-auto" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white">RORR</p>
        </div>
        <button type="button" onClick={() => onNavigate(PAGES.MAIN)} className="shrink-0 w-[12.414px] h-[12.414px]" aria-label="close">
          <img alt="close" src={ASSETS.headerCloseUnion} className="shrink-0 w-[12.414px] h-[12.414px]" />
        </button>
      </div>
      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start justify-center min-h-px min-w-[288px] overflow-clip relative rounded-[16px] w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px overflow-y-auto pb-[20px] pt-[80px] px-[16px] relative">
          <div className="flex flex-wrap gap-[16px] items-start shrink-0 w-full">
            <Avatar />
            <div className="flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black leading-none overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-center w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="overflow-clip relative shrink-0 w-[20px] h-[20px]">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img alt="" src={ASSETS.sparkIcon} className="absolute inset-0 w-full h-full" />
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-clip-text bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] via-[4.327%] to-[#c135da] text-transparent">
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="shrink-0 self-stretch w-px bg-[#ced6e6]" />
                <p className="font-['Pretendard',sans-serif] font-extrabold text-[16px] text-black uppercase leading-[1.2] flex-1">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <div className="overflow-clip relative shrink-0 w-[20px] h-[20px]">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" src={ASSETS.energyIcon} className="absolute inset-0 w-full h-full" />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[#00b395] text-[16px] leading-[20px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <button
                  type="button"
                  className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] shrink-0 w-[20px] h-[20px]"
                  aria-label="charge"
                >
                  <div className="overflow-clip relative shrink-0 w-[16px] h-[16px]">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" src={ASSETS.plusIcon} className="absolute inset-0 w-full h-full" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-[#ced6e6] shrink-0" />
          <div className="flex flex-col gap-[16px] items-start w-full">
            <MenuRow
              icon={
                <div className="overflow-clip relative shrink-0 w-[28px] h-[28px]">
                  <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                    <img alt="" src={ASSETS.followIcon} className="absolute inset-0 w-full h-full" />
                  </div>
                </div>
              }
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              icon={
                <div className="overflow-clip relative shrink-0 w-[28px] h-[28px]">
                  <div className="absolute bottom-[25%] left-[12.5%] right-[12.5%] top-[25%]">
                    <img alt="" src={ASSETS.purchaseIconUnion} className="absolute inset-0 w-full h-full" />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img alt="" src={ASSETS.purchaseDollar} className="absolute inset-0 w-full h-full" />
                  </div>
                </div>
              }
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuRow
              icon={
                <div className="overflow-clip relative shrink-0 w-[28px] h-[28px]">
                  <div className="absolute inset-[0_20.83%_0_22.92%]">
                    <div className="absolute inset-[5.85%_10.2%]">
                      <img alt="" src={ASSETS.boostIcon} className="absolute inset-0 w-full h-full" />
                    </div>
                  </div>
                </div>
              }
              label="Boost List"
            />
            <MenuRow
              icon={
                <div className="overflow-clip relative shrink-0 w-[28px] h-[28px]">
                  <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                    <img alt="" src={ASSETS.rorrSmall} className="absolute inset-0 w-full h-full" />
                  </div>
                </div>
              }
              label="dev-app.rorr.club"
              external
            />
            <MenuRow icon={<div className="w-[28px] h-[28px] shrink-0" />} label="Terms of use" external />
            <MenuRow icon={<div className="w-[28px] h-[28px] shrink-0" />} label="Privacy policy" external />
          </div>
          <div className="h-px w-full bg-[#ced6e6] shrink-0" />
          <div className="overflow-clip relative shrink-0 w-[64px] h-[54px]">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img alt="" src={ASSETS.emblemSubtract} className="absolute inset-0 w-full h-full" />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img alt="" src={ASSETS.emblemSubtract1} className="absolute inset-0 w-full h-full" />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img alt="" src={ASSETS.emblemSubtract2} className="absolute inset-0 w-full h-full" />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img alt="" src={ASSETS.emblemVector} className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 p-[12px] overflow-clip">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="flex gap-[10px] items-center justify-center relative shrink-0 w-[24px] h-[24px]"
            aria-label="close"
          >
            <div className="h-full w-full relative rounded-[30px]">
              <img alt="" src={ASSETS.headerButtonShape} className="absolute inset-0 w-full h-full" />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[28.59%]">
                <img alt="" src={ASSETS.closeStroke} className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </button>
          <div className="flex gap-[8px] items-center justify-center relative shrink-0 w-[24px] h-[24px]">
            <div className="overflow-clip relative shrink-0 w-[32px] h-[32px]">
              <div className="absolute inset-[8.33%] overflow-clip">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img alt="" src={ASSETS.mailVector709} className="absolute inset-0 w-full h-full" />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img alt="" src={ASSETS.mailVector708} className="absolute inset-0 w-full h-full" />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img alt="" src={ASSETS.mailRect762} className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 flex flex-col items-center justify-center left-[-10px] p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-white">
                {MOCK_PROFILE.mailCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
