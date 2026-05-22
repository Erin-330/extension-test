import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

const imgBtnShape = 'https://www.figma.com/api/mcp/asset/e012689d-64c7-4ff5-a274-f61656b3de0a'
const imgXIcon = 'https://www.figma.com/api/mcp/asset/34342ac2-c3ae-4500-9cb6-7e2e70bddb3b'
const imgUserSilhouette = 'https://www.figma.com/api/mcp/asset/5ffed585-0cde-4505-88ee-c73ad99fb40b'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/fe5e834f-8843-4136-931a-9834907eb5be'
const imgHighlight = 'https://www.figma.com/api/mcp/asset/022ee112-34ed-47fd-b4a1-db9c89753ab4'
const imgInnerLine = 'https://www.figma.com/api/mcp/asset/ac0c373d-0600-4364-88f3-17508e2ff127'
const imgSparkle = 'https://www.figma.com/api/mcp/asset/28471e93-d04f-451e-b2ca-f4763aaa9bd0'
const imgVerticalSep = 'https://www.figma.com/api/mcp/asset/5d08e903-17ce-41e5-ab69-80bee81f44a1'
const imgLightning = 'https://www.figma.com/api/mcp/asset/12aed11a-9c72-4d2e-8fab-73dccb3ad2a3'
const imgPlus = 'https://www.figma.com/api/mcp/asset/b0578082-c7dc-45bc-9f26-e73d39b12978'
const imgDivider = 'https://www.figma.com/api/mcp/asset/e33b2766-664f-40bf-a355-cf60c96fa6b5'
const imgFollowIcon = 'https://www.figma.com/api/mcp/asset/ec7a1cd0-ea3c-4637-9154-1e69087f0c48'
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/4bffc60e-8054-4662-9748-a8f6ac918fee'
const imgWallet = 'https://www.figma.com/api/mcp/asset/824225bf-786d-4e8a-b468-e7ca3a895428'
const imgDollar = 'https://www.figma.com/api/mcp/asset/b03d0257-27d1-4ab0-83ab-1682758899fd'
const imgBoostLightning = 'https://www.figma.com/api/mcp/asset/c4ae1aa9-8444-47cb-a0bb-4227bd321217'
const imgRorrLogo = 'https://www.figma.com/api/mcp/asset/c0cc1c34-b026-4c98-8f63-84d1e5a9efb3'
const imgExternalLink = 'https://www.figma.com/api/mcp/asset/df9f925f-1558-40ec-9e2d-a3ddb190d024'
const imgMailVec709 = 'https://www.figma.com/api/mcp/asset/4f7a4539-0c02-4964-b396-ef5678b4c682'
const imgMailVec708 = 'https://www.figma.com/api/mcp/asset/e4fc41e7-9682-4e70-8c14-33e3ee51bdd8'
const imgMailRect = 'https://www.figma.com/api/mcp/asset/8fab8460-8927-4171-8126-c30cd3d48d0e'
const imgSubtract1 = 'https://www.figma.com/api/mcp/asset/6bb6a2bc-6c01-4514-b9bc-4044e368df66'
const imgSubtract2 = 'https://www.figma.com/api/mcp/asset/38d285f9-9ded-45ea-a6fa-e875b245e3e9'
const imgSubtract3 = 'https://www.figma.com/api/mcp/asset/7f4cd461-0e3d-4fac-b993-caca9ee6407c'
const imgVectorStroke = 'https://www.figma.com/api/mcp/asset/3c56d8ce-8fae-473b-b842-371691acadba'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'Hall of fame',
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 size-[24px] rounded-[30px]"
      aria-label="close"
    >
      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgBtnShape} />
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute inset-[28.59%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgXIcon} />
        </div>
      </div>
    </button>
  )
}

function MailboxButton() {
  return (
    <div className="relative shrink-0 flex items-center justify-center size-[24px]">
      <div className="relative size-[32px] overflow-clip shrink-0">
        <div className="absolute inset-[8.33%] overflow-clip">
          <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgMailVec709} />
          </div>
          <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgMailVec708} />
          </div>
          <div className="absolute inset-[18.75%_6.25%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgMailRect} />
          </div>
        </div>
      </div>
      <div className="absolute -left-[10px] bottom-0 flex bg-[#ff6f00] flex-col items-center justify-center p-[2px] rounded-[10px] w-[20px]">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2]">2</p>
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <div className="flex items-start justify-center shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgUserSilhouette} />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgGradeBorder} />
          <div className="absolute inset-[5%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgHighlight} />
          </div>
          <div className="absolute inset-[6%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgInnerLine} />
          </div>
        </div>
      </div>
    </div>
  )
}

interface MenuRowProps {
  icon?: React.ReactNode
  label: string
  trailing?: React.ReactNode
  onClick?: () => void
}

function MenuRow({ icon, label, trailing, onClick }: MenuRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] w-full text-left"
    >
      {icon}
      <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black flex-1 whitespace-nowrap leading-none">
        {label}
      </p>
      {trailing ?? (
        <div className="shrink-0 size-[32px] overflow-clip relative">
          <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgChevronRight} />
          </div>
        </div>
      )}
    </button>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start justify-center min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          {/* User Profile */}
          <div className="flex flex-wrap gap-[16px] items-start shrink-0 w-full">
            <Avatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black truncate w-full leading-[20px]">
                {MOCK_PROFILE.email}
              </p>
              <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black truncate w-full leading-none">
                {MOCK_PROFILE.displayname}
              </p>
              <div className="flex gap-[12px] items-start rounded-[8px] shrink-0 w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="shrink-0 size-[20px] overflow-clip relative">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgSparkle} />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(180deg, #f9d9ff 0%, #e08fee 4.327%, #c135da 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="self-stretch shrink-0 w-0 relative">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgVerticalSep} />
                  </div>
                </div>
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold text-[16px] text-black uppercase leading-[1.2]">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="shrink-0 size-[20px] overflow-clip relative">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgLightning} />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#00b395] leading-[20px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <div className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] shrink-0 size-[20px]">
                  <div className="shrink-0 size-[16px] overflow-clip relative">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgPlus} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 shrink-0 w-full relative">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgDivider} />
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-px overflow-clip w-full">
            <MenuRow
              icon={
                <div className="shrink-0 size-[28px] overflow-clip relative">
                  <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                    <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgFollowIcon} />
                  </div>
                </div>
              }
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              icon={
                <div className="shrink-0 size-[28px] overflow-clip relative">
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                    <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgWallet} />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgDollar} />
                  </div>
                </div>
              }
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuRow
              icon={
                <div className="shrink-0 size-[28px] overflow-clip relative">
                  <div className="absolute inset-[0_20.83%_0_22.92%]">
                    <div className="absolute inset-[5.85%_10.2%]">
                      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgBoostLightning} />
                    </div>
                  </div>
                </div>
              }
              label="Boost List"
            />
            <MenuRow
              icon={
                <div className="shrink-0 size-[28px] overflow-clip relative">
                  <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                    <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgRorrLogo} />
                  </div>
                </div>
              }
              label="dev-app.rorr.club"
              trailing={
                <div className="shrink-0 size-[24px] overflow-clip relative">
                  <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                    <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgExternalLink} />
                  </div>
                </div>
              }
            />
            <MenuRow
              label="Terms of use"
              trailing={
                <div className="shrink-0 size-[24px] overflow-clip relative">
                  <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                    <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgExternalLink} />
                  </div>
                </div>
              }
            />
            <MenuRow
              label="Privacy policy"
              trailing={
                <div className="shrink-0 size-[24px] overflow-clip relative">
                  <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                    <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgExternalLink} />
                  </div>
                </div>
              }
            />
          </div>

          {/* Bottom divider */}
          <div className="h-0 shrink-0 w-full relative">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgDivider} />
            </div>
          </div>

          {/* RORR EMBLEM */}
          <div className="h-[54px] overflow-clip relative shrink-0 w-[64px]">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgSubtract1} />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgSubtract2} />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgSubtract3} />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgVectorStroke} />
            </div>
          </div>
        </div>

        {/* UI Header */}
        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <CloseButton onClick={() => onNavigate(PAGES.MAIN)} />
          <MailboxButton />
        </div>
      </div>
    </div>
  )
}
