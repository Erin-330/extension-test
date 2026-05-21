import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSETS = {
  headerButtonBg: 'https://www.figma.com/api/mcp/asset/d00832f6-b3d1-404c-af4b-ecd88efe5d5f',
  closeX: 'https://www.figma.com/api/mcp/asset/53c67aba-fd37-4e02-8355-6cec7e7462ae',
  iconUserSilhouette: 'https://www.figma.com/api/mcp/asset/3c571419-e10c-460b-87e0-2dd17ad6686e',
  rorrLogoUnionStroke: 'https://www.figma.com/api/mcp/asset/f3eb2d03-6395-48a2-b7e7-aeddeda09001',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/6a78ea22-b3e5-47f8-a29c-e873c0ad872a',
  outerCloseX: 'https://www.figma.com/api/mcp/asset/b811c716-00cd-40a5-bbf1-5c17f5c9f157',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/28970979-03ff-4e43-967f-e1f90ee4118d',
  highLightStroke: 'https://www.figma.com/api/mcp/asset/23e2b179-d306-468f-9b92-b4d339e8d721',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/81b14c47-abf0-4334-9f5b-2522aa7908f2',
  expStar: 'https://www.figma.com/api/mcp/asset/e1272407-ef3d-4ecf-ab54-f33a4c7599f1',
  verticalDivider: 'https://www.figma.com/api/mcp/asset/392d65c3-1bb0-4794-ab8e-ea7ba746f7f4',
  boostLightning: 'https://www.figma.com/api/mcp/asset/17ef6d22-c840-4d72-9857-6b5c97bebf7e',
  plusIcon: 'https://www.figma.com/api/mcp/asset/33d422fd-7bef-4ab7-8e90-09bb87504ef8',
  horizontalDivider: 'https://www.figma.com/api/mcp/asset/c4f3312b-9744-446d-af21-a87c58543abe',
  followIcon: 'https://www.figma.com/api/mcp/asset/ab7e2668-c46a-4bdd-a34f-f7349edd2712',
  rightArrow: 'https://www.figma.com/api/mcp/asset/44e8ccf9-8829-4171-b6ab-67d4def73ac9',
  purchaseIconOuter: 'https://www.figma.com/api/mcp/asset/e2533468-251a-4799-a9d4-153d1b4cd2be',
  purchaseDollar: 'https://www.figma.com/api/mcp/asset/fba5d67a-28fb-4cae-996a-06bf6ffbed02',
  boostListLightning: 'https://www.figma.com/api/mcp/asset/da03ca6e-3809-4a9f-91ee-7b9da2309840',
  devAppExclude: 'https://www.figma.com/api/mcp/asset/0210afcc-f5d8-4943-9c9e-e8289f3b9ed1',
  externalLink: 'https://www.figma.com/api/mcp/asset/a031e65f-9722-489e-814a-415d818fb102',
  emblemSubtract: 'https://www.figma.com/api/mcp/asset/269eb8ef-d4b5-4632-bc7b-3a20d3be99b5',
  emblemSubtract1: 'https://www.figma.com/api/mcp/asset/917fcff5-5a76-4f53-8924-7cb01d282cf2',
  emblemSubtract2: 'https://www.figma.com/api/mcp/asset/f7178c94-c55c-4a37-aef6-60f039d4fbf7',
  emblemVectorStroke: 'https://www.figma.com/api/mcp/asset/b3c7c66f-9e6c-448f-ab0b-53ef220b9215',
  mailV709: 'https://www.figma.com/api/mcp/asset/d2dbd6ad-ea96-4594-8ef2-c13068b366cd',
  mailV708: 'https://www.figma.com/api/mcp/asset/4ca0a253-6980-44dd-9838-8a2de80470e3',
  mailRect: 'https://www.figma.com/api/mcp/asset/f1c56c35-b016-47fe-816f-a33ac29dea41',
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

function CloseModButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[10px] items-center justify-center relative size-[24px]"
      aria-label="Close"
    >
      <div className="flex-1 h-full min-w-px relative rounded-[30px]">
        <img src={ASSETS.headerButtonBg} className="absolute block max-w-none size-full shrink-0" alt="" />
      </div>
      <div className="absolute inset-[8.33%] overflow-hidden">
        <div className="absolute inset-[28.59%]">
          <img src={ASSETS.closeX} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </button>
  )
}

function AppHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full shrink-0">
      <div className="flex gap-[4px] items-center justify-center shrink-0">
        <div className="-scale-y-100 rotate-180 flex items-center justify-center shrink-0">
          <div className="h-[18px] w-[22px] relative overflow-hidden">
            <img src={ASSETS.rorrLogoUnionStroke} className="absolute block max-w-none size-full inset-[0.03%_19.61%_-0.09%_19.66%] shrink-0" alt="" />
            <img src={ASSETS.rorrLogoExclude} className="absolute block max-w-none size-full inset-[2.93%_22.01%_2.81%_22.06%] shrink-0" alt="" />
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap shrink-0">
          RORR
        </p>
      </div>
      <button type="button" onClick={onClose} className="relative size-[12.414px] shrink-0" aria-label="Close">
        <img src={ASSETS.outerCloseX} className="absolute block max-w-none size-full shrink-0" alt="" />
      </button>
    </div>
  )
}

function Avatar() {
  return (
    <div className="flex items-start justify-center relative shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-hidden rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img src={ASSETS.iconUserSilhouette} className="absolute block max-w-none size-full shrink-0" alt="" />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img src={ASSETS.gradeBorder} className="absolute block max-w-none size-full shrink-0" alt="" />
          <div className="absolute inset-[5%]">
            <img src={ASSETS.highLightStroke} className="absolute block max-w-none size-full shrink-0" alt="" />
          </div>
          <div className="absolute inset-[6%]">
            <img src={ASSETS.innerLineStroke} className="absolute block max-w-none size-full shrink-0" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuItem({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex gap-[4px] items-center p-[10px] relative shrink-0 w-full">
      <div className="overflow-hidden relative shrink-0 size-[28px]">{icon}</div>
      <p className="font-['Pretendard',sans-serif] font-bold leading-none text-[20px] text-black whitespace-nowrap text-left">
        {label}
      </p>
      <div className="overflow-hidden relative shrink-0 size-[32px] ml-auto">
        <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
          <img src={ASSETS.rightArrow} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </button>
  )
}

function ExternalItem({ icon, label }: { icon?: React.ReactNode; label: string }) {
  return (
    <div className="flex gap-[4px] items-center p-[10px] relative shrink-0 w-full">
      {icon && <div className="overflow-hidden relative shrink-0 size-[28px]">{icon}</div>}
      <p className="font-['Pretendard',sans-serif] font-bold leading-none text-[20px] text-black whitespace-nowrap">
        {label}
      </p>
      <div className="overflow-hidden relative shrink-0 size-[24px] ml-auto">
        <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
          <img src={ASSETS.externalLink} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </div>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start justify-center min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px overflow-y-auto pb-[20px] pt-[80px] px-[16px] relative">
          <div className="flex flex-wrap gap-[16px] items-start content-start relative shrink-0 w-full">
            <Avatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px] relative">
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end relative w-full">
                <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-none text-[32px] text-black overflow-hidden text-ellipsis whitespace-nowrap">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-center relative rounded-[8px] shrink-0 w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="overflow-hidden relative shrink-0 size-[20px]">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img src={ASSETS.expStar} className="absolute block max-w-none size-full shrink-0" alt="" />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-center whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(to bottom, #f9d9ff 0%, #e08fee 4.327%, #c135da 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="relative self-stretch w-0 shrink-0">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img src={ASSETS.verticalDivider} className="block max-w-none size-full shrink-0" alt="" />
                  </div>
                </div>
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold leading-[1.2] text-[16px] text-black uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="overflow-hidden relative shrink-0 size-[20px]">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img src={ASSETS.boostLightning} className="absolute block max-w-none size-full shrink-0" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[#00b395] text-[16px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <div className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] size-[20px] shrink-0">
                  <div className="overflow-hidden relative shrink-0 size-[16px]">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img src={ASSETS.plusIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img src={ASSETS.horizontalDivider} className="block max-w-none size-full shrink-0" alt="" />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-px overflow-hidden relative w-full">
            <MenuItem
              icon={
                <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                  <img src={ASSETS.followIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
                </div>
              }
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuItem
              icon={
                <>
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                    <img src={ASSETS.purchaseIconOuter} className="absolute block max-w-none size-full shrink-0" alt="" />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img src={ASSETS.purchaseDollar} className="absolute block max-w-none size-full shrink-0" alt="" />
                  </div>
                </>
              }
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuItem
              icon={
                <div className="absolute inset-[0_20.83%_0_22.92%]">
                  <div className="absolute inset-[5.85%_10.2%]">
                    <img src={ASSETS.boostListLightning} className="absolute block max-w-none size-full shrink-0" alt="" />
                  </div>
                </div>
              }
              label="Boost List"
            />
            <ExternalItem
              icon={
                <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                  <img src={ASSETS.devAppExclude} className="absolute block max-w-none size-full shrink-0" alt="" />
                </div>
              }
              label="dev-app.rorr.club"
            />
            <ExternalItem label="Terms of use" />
            <ExternalItem label="Privacy policy" />
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img src={ASSETS.horizontalDivider} className="block max-w-none size-full shrink-0" alt="" />
            </div>
          </div>

          <div className="h-[54px] overflow-hidden relative shrink-0 w-[64px]">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img src={ASSETS.emblemSubtract} className="absolute block max-w-none size-full shrink-0" alt="" />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img src={ASSETS.emblemSubtract1} className="absolute block max-w-none size-full shrink-0" alt="" />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img src={ASSETS.emblemSubtract2} className="absolute block max-w-none size-full shrink-0" alt="" />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img src={ASSETS.emblemVectorStroke} className="absolute block max-w-none size-full shrink-0" alt="" />
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-hidden p-[12px]">
          <CloseModButton onClick={() => onNavigate(PAGES.MAIN)} />
          <div className="flex gap-[8px] items-center justify-center relative size-[24px]">
            <div className="overflow-hidden relative shrink-0 size-[32px]">
              <div className="absolute inset-[8.33%] overflow-hidden">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img src={ASSETS.mailV709} className="absolute block max-w-none size-full shrink-0" alt="" />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img src={ASSETS.mailV708} className="absolute block max-w-none size-full shrink-0" alt="" />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img src={ASSETS.mailRect} className="absolute block max-w-none size-full shrink-0" alt="" />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 flex flex-col items-center justify-center left-[-10px] p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-white whitespace-nowrap">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
