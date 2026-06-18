import { AppHeader } from '../../features/follow/ui/AppHeader'
import { PAGES } from '../../shared/constants/pages'

const imgCloseShape = 'https://www.figma.com/api/mcp/asset/3a6de5f6-51d7-4087-acf4-ffb1f5f665f6'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/b76304d6-7cea-4a24-b723-bd489fe2efb5'
const imgUserSilhouette = 'https://www.figma.com/api/mcp/asset/1a7b67d7-8d19-411c-807d-4d94cdb91609'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/878e7679-b5a5-4f30-9bc9-e67c5cd86424'
const imgHighLightStroke = 'https://www.figma.com/api/mcp/asset/c741d783-680f-48e0-a1d2-2a0018a994e6'
const imgInnerLineStroke = 'https://www.figma.com/api/mcp/asset/720e69c8-4473-429d-a214-3788b768abf9'
const imgSparkExp = 'https://www.figma.com/api/mcp/asset/0715fe0f-c5f3-4c30-95e1-21cb843377a6'
const imgDividerVert = 'https://www.figma.com/api/mcp/asset/cc196e3a-68ed-47ee-bd4a-f489a4100975'
const imgEnergyLightning = 'https://www.figma.com/api/mcp/asset/81fd0a83-7edf-4c48-a183-8cc9f9422702'
const imgPlusIcon = 'https://www.figma.com/api/mcp/asset/f1638b13-6492-4999-98c8-93580491cecf'
const imgDividerHoriz = 'https://www.figma.com/api/mcp/asset/5876579a-ac32-46d0-8bbf-35d8d5222b06'
const imgFollowIcon = 'https://www.figma.com/api/mcp/asset/8d550192-80ed-45b8-9a17-402381e79be7'
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/333b97d3-3040-4e20-bd69-59c10da1c610'
const imgPurchaseDollar1 = 'https://www.figma.com/api/mcp/asset/8af497cf-7551-4674-91ec-2fbab144d3f1'
const imgPurchaseDollar2 = 'https://www.figma.com/api/mcp/asset/2965337c-fcae-460d-af7e-b7ffc8d13806'
const imgBoostListLightning = 'https://www.figma.com/api/mcp/asset/9b500f7a-b033-4644-96d8-497d72372f98'
const imgRorrLink = 'https://www.figma.com/api/mcp/asset/06b51c73-2c27-4faf-843d-658b5350d427'
const imgExternalArrow = 'https://www.figma.com/api/mcp/asset/51ab3f43-22c5-4a1c-8f52-45a17a0cff2c'
const imgMailVec1 = 'https://www.figma.com/api/mcp/asset/f04c6937-505b-4922-9a8d-140346c6dd7b'
const imgMailVec2 = 'https://www.figma.com/api/mcp/asset/16a169c2-d0ae-4939-aecd-8b0753903ba6'
const imgMailRect = 'https://www.figma.com/api/mcp/asset/de1ad067-c854-4b2f-9b5a-87bfc005bbd2'
const imgEmblemSub1 = 'https://www.figma.com/api/mcp/asset/0776221d-abc2-453d-bac4-7fb9ebc90d63'
const imgEmblemSub2 = 'https://www.figma.com/api/mcp/asset/5f72a5db-b7b2-4946-b20a-705b162e07dd'
const imgEmblemSub3 = 'https://www.figma.com/api/mcp/asset/f8008910-0bcd-4de2-b5e2-e98cd2a4e2e4'
const imgEmblemStroke = 'https://www.figma.com/api/mcp/asset/80c58231-9499-4707-a444-75d43ecf68c4'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

type NavProp = {
  onNavigate: (page: string) => void
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} type="button" className="relative size-[24px]" aria-label="close">
      <img alt="" src={imgCloseShape} className="absolute inset-0 block size-full rounded-[30px]" />
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute inset-[28.59%]">
          <img alt="" src={imgCloseX} className="absolute inset-0 block max-w-none size-full" />
        </div>
      </div>
    </button>
  )
}

function MailButton() {
  return (
    <div className="relative size-[24px]">
      <div className="absolute size-[32px] -left-1 -top-1 overflow-clip">
        <div className="absolute inset-[8.33%] overflow-clip">
          <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
            <img alt="" src={imgMailVec1} className="absolute inset-0 block size-full" />
          </div>
          <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
            <img alt="" src={imgMailVec2} className="absolute inset-0 block size-full" />
          </div>
          <div className="absolute inset-[18.75%_6.25%]">
            <img alt="" src={imgMailRect} className="absolute inset-0 block size-full" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 -left-[10px] flex flex-col items-center justify-center p-[2px] bg-[#ff6f00] rounded-[10px] w-[20px]">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-white">2</p>
      </div>
    </div>
  )
}

function MenuRow({
  icon,
  label,
  showChevron,
  showExternal,
  onClick,
}: {
  icon?: React.ReactNode
  label: string
  showChevron?: boolean
  showExternal?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-[4px] p-[10px] w-full text-left"
    >
      {icon}
      <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] leading-none text-black whitespace-nowrap">
        {label}
      </p>
      {showChevron && (
        <div className="relative size-[32px] overflow-clip shrink-0">
          <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
            <img alt="" src={imgChevronRight} className="absolute inset-0 block size-full" />
          </div>
        </div>
      )}
      {showExternal && (
        <div className="relative size-[24px] overflow-clip shrink-0">
          <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
            <img alt="" src={imgExternalArrow} className="absolute inset-0 block size-full" />
          </div>
        </div>
      )}
    </button>
  )
}

export function ProfilePage({ onNavigate }: NavProp) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative flex-1 min-h-px w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        {/* UI Header */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip z-10">
          <CloseButton onClick={() => onNavigate(PAGES.MAIN)} />
          <MailButton />
        </div>

        <div className="flex flex-col gap-[16px] h-full items-center pt-[80px] pb-[20px] px-[16px] overflow-y-auto">
          {/* User Profile */}
          <div className="flex flex-wrap gap-[16px] items-start w-full">
            <div className="flex items-start justify-center size-[110px] shrink-0">
              {/* Profile with Frame: size-[96px] */}
              <div className="relative size-[96px]">
                <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
                  <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                    <img alt="" src={imgUserSilhouette} className="absolute inset-0 block max-w-none size-full" />
                  </div>
                </div>
                <div className="absolute inset-[0.41%_0_-0.41%_0]">
                  <img alt="" src={imgGradeBorder} className="absolute inset-0 block max-w-none size-full" />
                  <div className="absolute inset-[5%]">
                    <img alt="" src={imgHighLightStroke} className="absolute inset-0 block max-w-none size-full" />
                  </div>
                  <div className="absolute inset-[6%]">
                    <img alt="" src={imgInnerLineStroke} className="absolute inset-0 block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[32px] leading-none text-black flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              {/* Grade row */}
              <div className="flex gap-[12px] items-start rounded-[8px] w-full">
                <div className="flex items-center gap-[4px]">
                  <div className="relative size-[20px] overflow-clip">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img alt="" src={imgSparkExp} className="absolute inset-0 block size-full" />
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-transparent bg-clip-text bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] via-[4.327%] to-[#c135da] whitespace-nowrap">
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="relative self-stretch w-0">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img alt="" src={imgDividerVert} className="block max-w-none size-full" />
                  </div>
                </div>
                <p className="font-['Pretendard',sans-serif] font-extrabold text-[16px] leading-[1.2] text-black uppercase flex-1">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              {/* Cash row */}
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <div className="relative size-[20px] overflow-clip">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" src={imgEnergyLightning} className="absolute inset-0 block size-full" />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#00b395]">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <div className="bg-[#969cda] flex items-center justify-center rounded-[4px] size-[20px]">
                  <div className="relative size-[16px] overflow-clip">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" src={imgPlusIcon} className="absolute inset-0 block size-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" src={imgDividerHoriz} className="block max-w-none size-full" />
            </div>
          </div>

          {/* Menu list */}
          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-px overflow-clip w-full">
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                    <img alt="" src={imgFollowIcon} className="absolute inset-0 block size-full" />
                  </div>
                </div>
              }
              label="Follow Team & Player"
              showChevron
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                    <img alt="" src={imgPurchaseDollar1} className="absolute inset-0 block size-full" />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img alt="" src={imgPurchaseDollar2} className="absolute inset-0 block size-full" />
                  </div>
                </div>
              }
              label="Purchase List"
              showChevron
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute inset-[0_20.83%_0_22.92%]">
                    <div className="absolute inset-[5.85%_10.2%]">
                      <img alt="" src={imgBoostListLightning} className="absolute inset-0 block size-full" />
                    </div>
                  </div>
                </div>
              }
              label="Boost List"
              showChevron
            />
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute inset-[0_-10.42%] flex items-center justify-center">
                    <div className="-scale-x-100 h-full w-full">
                      <div className="overflow-clip relative size-full">
                        <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                          <img alt="" src={imgRorrLink} className="absolute inset-0 block size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              label="dev-app.rorr.club"
              showExternal
            />
            <MenuRow label="Terms of use" showExternal />
            <MenuRow label="Privacy policy" showExternal />
          </div>

          {/* Footer divider */}
          <div className="relative h-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" src={imgDividerHoriz} className="block max-w-none size-full" />
            </div>
          </div>

          {/* RORR EMBLEM */}
          <div className="relative h-[54px] w-[64px] overflow-clip shrink-0">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img alt="" src={imgEmblemSub1} className="absolute inset-0 block size-full" />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img alt="" src={imgEmblemSub2} className="absolute inset-0 block size-full" />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img alt="" src={imgEmblemSub3} className="absolute inset-0 block size-full" />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img alt="" src={imgEmblemStroke} className="absolute inset-0 block size-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
