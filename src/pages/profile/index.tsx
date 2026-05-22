import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/3c83c12e-4871-4fd7-8ebd-b053e39fbce2',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/18aaa60b-63eb-48c0-88e0-8b3c4974d1b0',
  closeIconUnion: 'https://www.figma.com/api/mcp/asset/52d86541-e0eb-4e31-81e8-5cd46e58cefd',
  closeButtonShape: 'https://www.figma.com/api/mcp/asset/11cbf0c1-54a3-4c90-8156-9a88c671d98b',
  closeButtonX: 'https://www.figma.com/api/mcp/asset/01f7e804-3b8a-44da-b049-f67a7a2ad739',
  iconUser: 'https://www.figma.com/api/mcp/asset/ad59a326-ff36-41b6-9214-b25e55924607',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/5a9499d7-4d72-44df-9c04-76fd38da9a47',
  highLightStroke: 'https://www.figma.com/api/mcp/asset/424a7d6f-2ac3-4b86-8408-7f00e794e62e',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/e0562f08-a9ac-410d-b26a-770f11dea978',
  sparkIcon: 'https://www.figma.com/api/mcp/asset/55e38db9-332f-4858-8a83-dca315c3276e',
  verticalDivider: 'https://www.figma.com/api/mcp/asset/b3dc0e43-f8d5-4b1a-8cfb-f292c338ff7b',
  lightningIcon: 'https://www.figma.com/api/mcp/asset/2e4f2f13-5ede-489e-8df8-064ff3db37a7',
  plusIcon: 'https://www.figma.com/api/mcp/asset/dbaa4750-a581-474a-a18c-a9f4e1ff0a3e',
  horizontalDivider: 'https://www.figma.com/api/mcp/asset/2d276714-8156-40da-a1f0-fd017210bf28',
  followIcon: 'https://www.figma.com/api/mcp/asset/02afc194-5f4d-4845-93d8-e9f6e227b9c8',
  arrowRight: 'https://www.figma.com/api/mcp/asset/d4e3a76c-a7c8-428a-977a-fcfdf19bf06b',
  purchaseIcon: 'https://www.figma.com/api/mcp/asset/e66a4a3c-04a4-4e06-a190-70b3b989d83e',
  dollarIcon: 'https://www.figma.com/api/mcp/asset/da6dc218-7421-4f6c-88b0-26cd5b41bb4e',
  boostIcon: 'https://www.figma.com/api/mcp/asset/228bbe52-3619-4bad-aac9-b05afdb1c57c',
  rorrEmblem: 'https://www.figma.com/api/mcp/asset/e28db349-a54a-45d3-b5ea-1043022fb86d',
  externalLink: 'https://www.figma.com/api/mcp/asset/f223d491-7852-40a0-a29e-6d4be129d11e',
  mailVector709: 'https://www.figma.com/api/mcp/asset/67487768-5edf-461f-abaa-241c14f3e2a8',
  mailVector708: 'https://www.figma.com/api/mcp/asset/1d76388c-324b-49de-9b53-a1d2491e429b',
  mailRectangle762: 'https://www.figma.com/api/mcp/asset/09c6c059-fe8a-4a7b-90b4-dd1d4978bde2',
  emblemSubtract1: 'https://www.figma.com/api/mcp/asset/dd616db5-a5d5-4753-a500-53a5ae4c888c',
  emblemSubtract2: 'https://www.figma.com/api/mcp/asset/e80a6ed3-adb9-4f8e-9b3a-4a7faa856588',
  emblemSubtract3: 'https://www.figma.com/api/mcp/asset/11e8a29f-9b3a-4d94-b60f-8d2bf1a2fcee',
  emblemVectorStroke: 'https://www.figma.com/api/mcp/asset/0fb8118a-d5cc-48eb-b7c4-8ea91ecaf3a3',
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px] font-['Pretendard',sans-serif]">
      {/* Outer RORR header */}
      <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] w-full shrink-0">
        <div className="flex gap-[4px] items-center">
          <div className="relative w-[22px] h-[18px] shrink-0">
            <img src={ASSETS.rorrLogoStroke} className="absolute inset-0 w-full h-full" alt="" />
            <img src={ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">RORR</p>
        </div>
        <button onClick={() => onNavigate(PAGES.MAIN)} className="shrink-0">
          <img src={ASSETS.closeIconUnion} className="shrink-0 w-[12px] h-[12px]" alt="close" />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        {/* UI Header (X close + mail icon) */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] z-10">
          <button onClick={() => onNavigate(PAGES.MAIN)} className="relative w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <img src={ASSETS.closeButtonShape} className="absolute inset-0 w-full h-full" alt="" />
            <img src={ASSETS.closeButtonX} className="shrink-0 w-[10px] h-[10px] relative" alt="close" />
          </button>
          <div className="relative w-[24px] h-[24px] shrink-0">
            <div className="absolute inset-0 w-[32px] h-[32px] -left-[4px] -top-[4px]">
              <img src={ASSETS.mailRectangle762} className="absolute inset-[18.75%_6.25%] w-[28px] h-[20px]" alt="" />
              <img src={ASSETS.mailVector709} className="absolute inset-[49.26%_9.68%_22.18%_9.68%]" alt="" />
              <img src={ASSETS.mailVector708} className="absolute inset-[22.18%_9.68%_41.64%_9.68%]" alt="" />
            </div>
            <div className="absolute -left-[10px] bottom-0 bg-[#ff6f00] rounded-[10px] w-[20px] flex items-center justify-center p-[2px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2]">2</p>
            </div>
          </div>
        </div>

        <div className="h-full overflow-y-auto pt-[80px] pb-[20px] px-[16px] flex flex-col gap-[16px] items-center">
          {/* User profile section */}
          <div className="flex flex-wrap gap-[16px] items-start w-full shrink-0">
            <div className="flex items-start justify-center w-[110px] h-[110px] shrink-0">
              <div className="relative w-[96px] h-[96px] shrink-0">
                <div className="absolute bg-[#bbbfd0] overflow-hidden rounded-full inset-[0.41%_0_-0.41%_0]">
                  <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                    <img src={ASSETS.iconUser} className="absolute inset-0 w-full h-full" alt="" />
                  </div>
                </div>
                <div className="absolute inset-[0.41%_0_-0.41%_0]">
                  <img src={ASSETS.gradeBorder} className="absolute inset-0 w-full h-full" alt="" />
                  <div className="absolute inset-[5%]">
                    <img src={ASSETS.highLightStroke} className="absolute inset-0 w-full h-full" alt="" />
                  </div>
                  <div className="absolute inset-[6%]">
                    <img src={ASSETS.innerLineStroke} className="absolute inset-0 w-full h-full" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 min-w-[220px] flex-col gap-[16px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black truncate">
                {MOCK_PROFILE.email}
              </p>
              <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black leading-none">
                {MOCK_PROFILE.displayname}
              </p>
              <div className="flex gap-[12px] items-center w-full">
                <div className="flex gap-[4px] items-center">
                  <img src={ASSETS.sparkIcon} className="shrink-0 w-[20px] h-[20px]" alt="" />
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] bg-clip-text text-transparent bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] to-[#c135da] whitespace-nowrap">
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <img src={ASSETS.verticalDivider} className="shrink-0 w-[1px] h-[20px]" alt="" />
                <p className="font-['Pretendard',sans-serif] font-extrabold text-[16px] leading-[1.2] text-black uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <img src={ASSETS.lightningIcon} className="shrink-0 w-[20px] h-[20px]" alt="" />
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#00b395]">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <button className="bg-[#969cda] rounded-[4px] w-[20px] h-[20px] flex items-center justify-center">
                  <img src={ASSETS.plusIcon} className="shrink-0 w-[10px] h-[10px]" alt="add" />
                </button>
              </div>
            </div>
          </div>

          <img src={ASSETS.horizontalDivider} className="shrink-0 w-full h-[1px]" alt="" />

          {/* Menu */}
          <div className="flex flex-col gap-[16px] w-full">
            <button onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)} className="flex gap-[4px] items-center p-[10px] w-full text-left">
              <img src={ASSETS.followIcon} className="shrink-0 w-[28px] h-[28px]" alt="" />
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
                Follow Team & Player
              </p>
              <img src={ASSETS.arrowRight} className="shrink-0 w-[10px] h-[16px]" alt="" />
            </button>
            <button onClick={() => onNavigate(PAGES.PURCHASE_LIST)} className="flex gap-[4px] items-center p-[10px] w-full text-left">
              <div className="relative w-[28px] h-[28px] shrink-0">
                <img src={ASSETS.purchaseIcon} className="absolute inset-[25%_12.5%] w-[21px] h-[14px]" alt="" />
                <img src={ASSETS.dollarIcon} className="absolute inset-[31.25%_22.92%_43.75%_60.42%]" alt="" />
              </div>
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
                Purchase List
              </p>
              <img src={ASSETS.arrowRight} className="shrink-0 w-[10px] h-[16px]" alt="" />
            </button>
            <div className="flex gap-[4px] items-center p-[10px] w-full">
              <img src={ASSETS.boostIcon} className="shrink-0 w-[28px] h-[28px]" alt="" />
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
                Boost List
              </p>
              <img src={ASSETS.arrowRight} className="shrink-0 w-[10px] h-[16px]" alt="" />
            </div>
            <div className="flex gap-[4px] items-center p-[10px] w-full">
              <img src={ASSETS.rorrEmblem} className="shrink-0 w-[28px] h-[28px]" alt="" />
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
                dev-app.rorr.club
              </p>
              <img src={ASSETS.externalLink} className="shrink-0 w-[16px] h-[16px]" alt="" />
            </div>
            <div className="flex gap-[4px] items-center p-[10px] w-full">
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
                Terms of use
              </p>
              <img src={ASSETS.externalLink} className="shrink-0 w-[16px] h-[16px]" alt="" />
            </div>
            <div className="flex gap-[4px] items-center p-[10px] w-full">
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
                Privacy policy
              </p>
              <img src={ASSETS.externalLink} className="shrink-0 w-[16px] h-[16px]" alt="" />
            </div>
          </div>

          <img src={ASSETS.horizontalDivider} className="shrink-0 w-full h-[1px]" alt="" />

          <div className="relative w-[64px] h-[54px] shrink-0">
            <img src={ASSETS.emblemSubtract1} className="absolute inset-[59.41%_2.37%_10.38%_84.59%]" alt="" />
            <img src={ASSETS.emblemSubtract2} className="absolute inset-[55.31%_14.37%_10.38%_70.12%]" alt="" />
            <img src={ASSETS.emblemSubtract3} className="absolute inset-[2.9%_25.14%_2.84%_18.94%]" alt="" />
            <img src={ASSETS.emblemVectorStroke} className="absolute inset-[36.92%_74.59%_10.67%_2.4%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
