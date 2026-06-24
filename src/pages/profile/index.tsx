import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const PROFILE_ASSET = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/fbec60f5-24cc-446f-9877-4667124afd68',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/5392f870-3fc9-4ee1-9e4f-c346710c8eff',
  headerCloseX: 'https://www.figma.com/api/mcp/asset/96dc18be-2836-4829-96b7-91af40e29304',
  closeBtnBg: 'https://www.figma.com/api/mcp/asset/c72ca6af-8d43-4da4-869f-066f0edc3ca3',
  closeBtnX: 'https://www.figma.com/api/mcp/asset/7b822883-4b8a-44a3-b9cf-203f328023cb',
  userSilhouette: 'https://www.figma.com/api/mcp/asset/2435c4fc-af0b-4658-bc4d-fb21f1f35a79',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/0830c34f-379e-4518-b596-d9df05f6bda9',
  highLightStroke: 'https://www.figma.com/api/mcp/asset/3d48fed5-cda6-45cc-90ce-e0836473cc74',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/508e7543-60be-4682-9b8a-7e0f26f44bbc',
  sparkleIcon: 'https://www.figma.com/api/mcp/asset/4f07d570-dd41-47db-a6f9-a08627154db0',
  verticalDivider: 'https://www.figma.com/api/mcp/asset/99a4dde5-e342-4ae7-b421-c207df3fc63e',
  energyBolt: 'https://www.figma.com/api/mcp/asset/02ec5c25-92ea-4a70-8413-696f72213762',
  plusIcon: 'https://www.figma.com/api/mcp/asset/3212401b-0424-43c7-a541-2ed4f78549ec',
  hSeparator: 'https://www.figma.com/api/mcp/asset/c4641d0a-aa6d-41fd-a45e-9abd1386fc2a',
  followIcon: 'https://www.figma.com/api/mcp/asset/32032be8-d44a-412d-aae9-34edd15e3671',
  chevronRight: 'https://www.figma.com/api/mcp/asset/a12d1426-afda-41e2-a0fa-d7599eb38743',
  purchaseBox: 'https://www.figma.com/api/mcp/asset/08e4b2db-2e19-492b-9c9e-320229d16d2f',
  purchaseDollar: 'https://www.figma.com/api/mcp/asset/ec50d1de-5c78-4220-9f8c-ed5fa6d11ff4',
  boostBolt: 'https://www.figma.com/api/mcp/asset/50721312-d5c7-47cb-8969-b88f9cd87969',
  rorrClub: 'https://www.figma.com/api/mcp/asset/9de71ae6-8431-477e-bfdb-b04dc67c265e',
  externalLink: 'https://www.figma.com/api/mcp/asset/02cf6397-78dd-4a6e-b337-e4ce23d71df0',
  emblemSubtract1: 'https://www.figma.com/api/mcp/asset/c6b9c966-d79f-4bcb-9c20-4a7bd288b271',
  emblemSubtract2: 'https://www.figma.com/api/mcp/asset/c1ec46ad-28f4-4ff7-87ca-0789cb71ffcc',
  emblemSubtract3: 'https://www.figma.com/api/mcp/asset/9e3cf03d-1a94-4d68-a3b2-ac77535f602d',
  emblemVectorStroke: 'https://www.figma.com/api/mcp/asset/7f4ad918-b35c-4e45-aa4f-5a079ef69485',
  mailboxV1: 'https://www.figma.com/api/mcp/asset/b664fec9-c722-4d67-88da-ee2858ccc882',
  mailboxV2: 'https://www.figma.com/api/mcp/asset/51a3e259-3e35-4013-9e17-428689e506fe',
  mailboxRect: 'https://www.figma.com/api/mcp/asset/19ca5545-2146-4410-81b6-b76ee9c21b38',
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
  mailCount: 2,
}

function ProfileAvatar() {
  return (
    <div className="flex items-start justify-center size-[110px] shrink-0">
      <div className="relative size-[96px] shrink-0">
        <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img alt="" className="block w-full h-full" src={PROFILE_ASSET.userSilhouette} />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img alt="" className="absolute inset-0 size-full" src={PROFILE_ASSET.gradeBorder} />
          <div className="absolute inset-[5%]">
            <img alt="" className="block w-full h-full" src={PROFILE_ASSET.highLightStroke} />
          </div>
          <div className="absolute inset-[6%]">
            <img alt="" className="block w-full h-full" src={PROFILE_ASSET.innerLineStroke} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuItem({
  icon,
  label,
  external,
  onClick,
}: {
  icon?: React.ReactNode
  label: string
  external?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] w-full text-left"
    >
      {icon && <div className="relative size-[28px] overflow-clip shrink-0">{icon}</div>}
      <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
        {label}
      </p>
      <div className={`relative ${external ? 'size-[24px]' : 'size-[32px]'} overflow-clip shrink-0`}>
        {external ? (
          <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
            <img alt="" className="block w-full h-full" src={PROFILE_ASSET.externalLink} />
          </div>
        ) : (
          <div className="absolute inset-[22.92%_25%_22.92%_41.67%]">
            <img alt="" className="block w-full h-full" src={PROFILE_ASSET.chevronRight} />
          </div>
        )}
      </div>
    </button>
  )
}

function HorizontalDivider() {
  return (
    <div className="h-0 w-full relative shrink-0">
      <div className="absolute inset-[-0.5px_0]">
        <img alt="" className="block w-full h-full" src={PROFILE_ASSET.hSeparator} />
      </div>
    </div>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] w-full shrink-0">
        <div className="flex gap-[4px] items-center justify-center">
          <div className="-scale-y-100 rotate-180 flex items-center justify-center">
            <div className="h-[18px] overflow-clip relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="block w-full h-full" src={PROFILE_ASSET.rorrLogoStroke} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="block w-full h-full" src={PROFILE_ASSET.rorrLogoExclude} />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <div className="size-[12.414px] relative shrink-0">
          <img alt="" className="block w-full h-full" src={PROFILE_ASSET.headerCloseX} />
        </div>
      </div>
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full flex justify-center">
        <div className="flex-1 flex flex-col gap-[16px] h-full pt-[80px] pb-[20px] px-[16px] items-center overflow-y-auto">
          <div className="flex flex-wrap gap-[16px] items-start w-full content-start">
            <ProfileAvatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black truncate w-full">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-[292px] max-w-full">
                <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-none text-[32px] text-black truncate">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-start w-full rounded-[8px]">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="relative size-[20px] overflow-clip shrink-0">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img alt="" className="block w-full h-full" src={PROFILE_ASSET.sparkleIcon} />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] via-[4.327%] to-[#c135da] bg-clip-text text-transparent"
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="self-stretch w-0 relative shrink-0">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img alt="" className="block w-full h-full" src={PROFILE_ASSET.verticalDivider} />
                  </div>
                </div>
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold text-[16px] leading-[1.2] text-black uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="relative size-[20px] overflow-clip shrink-0">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%] h-[88.3%] w-[79.6%]">
                        <img alt="" className="block w-full h-full" src={PROFILE_ASSET.energyBolt} />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#00b395] leading-[20px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="charge"
                  className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] size-[20px] shrink-0"
                >
                  <div className="relative size-[16px] overflow-clip shrink-0">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" className="block w-full h-full" src={PROFILE_ASSET.plusIcon} />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <HorizontalDivider />
          <div className="flex flex-1 flex-col gap-[16px] items-start w-full min-h-0 overflow-clip">
            <MenuItem
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
              icon={
                <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                  <img alt="" className="block w-full h-full" src={PROFILE_ASSET.followIcon} />
                </div>
              }
            />
            <MenuItem
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
              icon={
                <>
                  <div className="absolute inset-[25%_12.5%_25%_12.5%]">
                    <img alt="" className="block w-full h-full" src={PROFILE_ASSET.purchaseBox} />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img alt="" className="block w-full h-full" src={PROFILE_ASSET.purchaseDollar} />
                  </div>
                </>
              }
            />
            <MenuItem
              label="Boost List"
              icon={
                <div className="absolute inset-[0_20.83%_0_22.92%]">
                  <div className="absolute inset-[5.85%_10.2%] h-[88.3%] w-[79.6%]">
                    <img alt="" className="block w-full h-full" src={PROFILE_ASSET.boostBolt} />
                  </div>
                </div>
              }
            />
            <MenuItem
              label="dev-app.rorr.club"
              external
              icon={
                <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                  <img alt="" className="block w-full h-full" src={PROFILE_ASSET.rorrClub} />
                </div>
              }
            />
            <MenuItem label="Terms of use" external />
            <MenuItem label="Privacy policy" external />
          </div>
          <HorizontalDivider />
          <div className="h-[54px] w-[64px] relative shrink-0 overflow-clip">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img alt="" className="block w-full h-full" src={PROFILE_ASSET.emblemSubtract1} />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img alt="" className="block w-full h-full" src={PROFILE_ASSET.emblemSubtract2} />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img alt="" className="block w-full h-full" src={PROFILE_ASSET.emblemSubtract3} />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img alt="" className="block w-full h-full" src={PROFILE_ASSET.emblemVectorStroke} />
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            type="button"
            aria-label="close"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="flex gap-[10px] items-center justify-center relative size-[24px] shrink-0"
          >
            <div className="absolute inset-0 size-full rounded-[30px]">
              <img alt="" className="absolute inset-0 size-full rounded-[30px]" src={PROFILE_ASSET.closeBtnBg} />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[28.59%]">
                <img alt="" className="block w-full h-full" src={PROFILE_ASSET.closeBtnX} />
              </div>
            </div>
          </button>
          <div className="flex gap-[8px] items-center justify-center relative size-[24px] shrink-0">
            <div className="relative size-[32px] overflow-clip shrink-0">
              <div className="absolute inset-[8.33%] overflow-clip">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img alt="" className="block w-full h-full" src={PROFILE_ASSET.mailboxV1} />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img alt="" className="block w-full h-full" src={PROFILE_ASSET.mailboxV2} />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img alt="" className="block w-full h-full" src={PROFILE_ASSET.mailboxRect} />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 left-[-10px] flex flex-col items-center justify-center p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2] whitespace-nowrap">
                {MOCK_PROFILE.mailCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
