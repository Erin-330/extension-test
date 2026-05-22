import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

const imgHeaderShape = 'https://www.figma.com/api/mcp/asset/aa4adb57-b954-4361-951d-1e0cb415142b'
const imgCloseStroke = 'https://www.figma.com/api/mcp/asset/b8582716-aa52-4dcb-9be8-675fc11b7393'
const imgUserUnion = 'https://www.figma.com/api/mcp/asset/4f9d4359-07c4-4128-9c55-432e4baf6da8'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/24ede13f-691b-47c9-a5e8-26aca53a60e4'
const imgHighLightStroke = 'https://www.figma.com/api/mcp/asset/addda61f-ff0d-4dca-b3da-5d6cf1df5e12'
const imgInnerLineStroke = 'https://www.figma.com/api/mcp/asset/1045311c-7cc2-4cbe-9d8b-fe105c43d49c'
const imgSparkle = 'https://www.figma.com/api/mcp/asset/76685201-0f5b-4840-accd-dc647ab0d261'
const imgDivider = 'https://www.figma.com/api/mcp/asset/6a18d880-9e63-4e39-8f80-d55a012bf223'
const imgLightning = 'https://www.figma.com/api/mcp/asset/310a3ee0-a422-48b9-9b20-2e37a026d94b'
const imgPlusUnion = 'https://www.figma.com/api/mcp/asset/fc350d2d-e9ee-46d3-a790-79e560edf9b7'
const imgHr = 'https://www.figma.com/api/mcp/asset/4a8dbb87-3bf5-4186-b58d-423d6d102579'
const imgFollowIcon = 'https://www.figma.com/api/mcp/asset/58572931-6d95-4433-afaf-cc031b09df53'
const imgChevron = 'https://www.figma.com/api/mcp/asset/0060e2fd-a631-4701-99b6-aba26830ecb6'
const imgPurchaseUnion = 'https://www.figma.com/api/mcp/asset/0a72de33-1aa6-4b27-a240-fbfca3147a23'
const imgDollar = 'https://www.figma.com/api/mcp/asset/3d0a8f5a-3b8c-4df0-816d-54ec44773a25'
const imgBoostLight = 'https://www.figma.com/api/mcp/asset/557e9267-7ca8-4de8-99b7-65299e44a65f'
const imgRorrSmall = 'https://www.figma.com/api/mcp/asset/c20f4596-900c-48c9-a679-60f371ac66e4'
const imgExternal = 'https://www.figma.com/api/mcp/asset/9d552ba1-9af1-4654-82fb-78f557311fad'
const imgEmblem1 = 'https://www.figma.com/api/mcp/asset/6a6f38bd-2032-43a1-ba20-87ccc41071aa'
const imgEmblem2 = 'https://www.figma.com/api/mcp/asset/263dbbb9-0cca-4230-adae-21fc6b65bde4'
const imgEmblem3 = 'https://www.figma.com/api/mcp/asset/91352950-2648-4af9-b94a-cc943cd22d1f'
const imgEmblem4 = 'https://www.figma.com/api/mcp/asset/448ff796-35e7-45b3-9469-418b2e97e869'
const imgMailV709 = 'https://www.figma.com/api/mcp/asset/0cdaacdd-dbb2-414a-b8e7-3792cb8f0820'
const imgMailV708 = 'https://www.figma.com/api/mcp/asset/018e0ee4-c4a3-443e-99ac-bdfdd0f604b2'
const imgMailRect = 'https://www.figma.com/api/mcp/asset/f6d6fb94-7c80-486a-a5cd-00f8efaec991'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

type Props = { onNavigate: (page: string) => void }

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative size-[24px]" aria-label="close">
      <img src={imgHeaderShape} alt="" className="absolute block inset-0 max-w-none size-full rounded-[30px]" />
      <span className="absolute overflow-clip" style={{ inset: '8.33%' }}>
        <span className="absolute block" style={{ inset: '28.59%' }}>
          <img src={imgCloseStroke} alt="" className="absolute block inset-0 max-w-none size-full" />
        </span>
      </span>
    </button>
  )
}

function MailButton() {
  return (
    <div className="relative size-[24px]">
      <div className="overflow-clip relative size-[32px] -translate-x-[4px] -translate-y-[4px]">
        <div className="absolute overflow-clip" style={{ inset: '8.33%' }}>
          <div className="absolute" style={{ inset: '49.26% 9.68% 22.18% 9.68%' }}>
            <img src={imgMailV709} alt="" className="absolute block inset-0 max-w-none size-full" />
          </div>
          <div className="absolute" style={{ inset: '22.18% 9.68% 41.64% 9.68%' }}>
            <img src={imgMailV708} alt="" className="absolute block inset-0 max-w-none size-full" />
          </div>
          <div className="absolute" style={{ inset: '18.75% 6.25%' }}>
            <img src={imgMailRect} alt="" className="absolute block inset-0 max-w-none size-full" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#ff6f00] bottom-0 flex flex-col items-center justify-center -left-[10px] p-[2px] rounded-[10px] w-[20px]">
        <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] shrink-0 text-[12px] text-white whitespace-nowrap">
          2
        </p>
      </div>
    </div>
  )
}

function ProfileAvatar() {
  return (
    <div className="flex items-start justify-center shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div
          className="absolute bg-[#bbbfd0] overflow-clip rounded-full"
          style={{ inset: '0.41% 0 -0.41% 0' }}
        >
          <div className="absolute" style={{ inset: '16.67% 6.69% 0 6.69%' }}>
            <img src={imgUserUnion} alt="" className="absolute block inset-0 max-w-none size-full" />
          </div>
        </div>
        <div className="absolute" style={{ inset: '0.41% 0 -0.41% 0' }}>
          <img src={imgGradeBorder} alt="" className="absolute block inset-0 max-w-none size-full" />
          <div className="absolute" style={{ inset: '5%' }}>
            <img src={imgHighLightStroke} alt="" className="absolute block inset-0 max-w-none size-full" />
          </div>
          <div className="absolute" style={{ inset: '6%' }}>
            <img src={imgInnerLineStroke} alt="" className="absolute block inset-0 max-w-none size-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

type MenuItemProps = {
  icon: React.ReactNode
  label: string
  trailingIcon?: React.ReactNode
  onClick?: () => void
}

function MenuItem({ icon, label, trailingIcon, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left"
    >
      {icon}
      <span className="flex-1 font-['Pretendard',sans-serif] font-bold leading-normal shrink-0 text-[20px] text-black whitespace-nowrap">
        {label}
      </span>
      {trailingIcon ?? (
        <span className="overflow-clip relative shrink-0 size-[32px]">
          <span
            className="absolute block"
            style={{ bottom: '22.92%', left: '41.67%', right: '25%', top: '22.92%' }}
          >
            <img src={imgChevron} alt="" className="absolute block inset-0 max-w-none size-full" />
          </span>
        </span>
      )}
    </button>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          {/* UserProfile */}
          <div className="flex flex-wrap gap-[16px] items-start shrink-0 w-full">
            <ProfileAvatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] min-w-full overflow-hidden shrink-0 text-[14px] text-black text-ellipsis w-[min-content] whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-normal min-w-px overflow-hidden text-[32px] text-black text-ellipsis whitespace-nowrap">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-start rounded-[8px] shrink-0 w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div
                      className="absolute"
                      style={{ inset: '8.33% 10.42% 12.5% 10.42%' }}
                    >
                      <img
                        src={imgSparkle}
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                      />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold leading-[20px] shrink-0 text-[16px] text-center whitespace-nowrap"
                    style={{
                      backgroundImage: 'linear-gradient(to bottom, #f9d9ff 4.327%, #e08fee, #c135da)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="relative self-stretch shrink-0 w-0">
                  <div className="absolute" style={{ inset: '-2.5% -0.5px' }}>
                    <img src={imgDivider} alt="" className="block max-w-none size-full" />
                  </div>
                </div>
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold leading-[1.2] min-w-px text-[16px] text-black uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div
                      className="absolute"
                      style={{ inset: '0 20.83% 0 22.92%' }}
                    >
                      <div className="absolute h-full w-full" style={{ inset: '5.85% 10.2%' }}>
                        <img
                          src={imgLightning}
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] shrink-0 text-[#00b395] text-[16px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <div className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] shrink-0 size-[20px]">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div
                      className="absolute"
                      style={{ inset: '18.75% 20.83% 22.92% 20.83%' }}
                    >
                      <img
                        src={imgPlusUnion}
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute" style={{ inset: '-0.5px 0' }}>
              <img src={imgHr} alt="" className="block max-w-none size-full" />
            </div>
          </div>

          {/* Menu items */}
          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-px overflow-clip w-full">
            <MenuItem
              icon={
                <span className="overflow-clip relative shrink-0 size-[28px]">
                  <span className="absolute" style={{ inset: '16.67% 12.5% 12.5% 12.5%' }}>
                    <img src={imgFollowIcon} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </span>
                </span>
              }
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuItem
              icon={
                <span className="overflow-clip relative shrink-0 size-[28px]">
                  <span
                    className="absolute"
                    style={{ bottom: '25%', left: '12.5%', right: '12.5%', top: '25%' }}
                  >
                    <img src={imgPurchaseUnion} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </span>
                  <span className="absolute" style={{ inset: '31.25% 22.92% 43.75% 60.42%' }}>
                    <img src={imgDollar} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </span>
                </span>
              }
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuItem
              icon={
                <span className="overflow-clip relative shrink-0 size-[28px]">
                  <span className="absolute" style={{ inset: '0 20.83% 0 22.92%' }}>
                    <span className="absolute h-full w-full" style={{ inset: '5.85% 10.2%' }}>
                      <img src={imgBoostLight} alt="" className="absolute block inset-0 max-w-none size-full" />
                    </span>
                  </span>
                </span>
              }
              label="Boost List"
            />
            <MenuItem
              icon={
                <span className="overflow-clip relative shrink-0 size-[28px]">
                  <span className="absolute" style={{ inset: '2.93% 22.01% 2.81% 22.06%' }}>
                    <img src={imgRorrSmall} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </span>
                </span>
              }
              label="dev-app.rorr.club"
              trailingIcon={
                <span className="overflow-clip relative shrink-0 size-[24px]">
                  <span className="absolute" style={{ inset: '12.5% 14.58% 14.58% 20.83%' }}>
                    <img src={imgExternal} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </span>
                </span>
              }
            />
            <MenuItem
              icon={<span className="size-[0px]" />}
              label="Terms of use"
              trailingIcon={
                <span className="overflow-clip relative shrink-0 size-[24px]">
                  <span className="absolute" style={{ inset: '12.5% 14.58% 14.58% 20.83%' }}>
                    <img src={imgExternal} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </span>
                </span>
              }
            />
            <MenuItem
              icon={<span className="size-[0px]" />}
              label="Privacy policy"
              trailingIcon={
                <span className="overflow-clip relative shrink-0 size-[24px]">
                  <span className="absolute" style={{ inset: '12.5% 14.58% 14.58% 20.83%' }}>
                    <img src={imgExternal} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </span>
                </span>
              }
            />
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute" style={{ inset: '-0.5px 0' }}>
              <img src={imgHr} alt="" className="block max-w-none size-full" />
            </div>
          </div>

          <div className="h-[54px] overflow-clip relative shrink-0 w-[64px]">
            <div className="absolute" style={{ inset: '59.41% 2.37% 10.38% 84.59%' }}>
              <img src={imgEmblem1} alt="" className="absolute block inset-0 max-w-none size-full" />
            </div>
            <div className="absolute" style={{ inset: '55.31% 14.37% 10.38% 70.12%' }}>
              <img src={imgEmblem2} alt="" className="absolute block inset-0 max-w-none size-full" />
            </div>
            <div className="absolute" style={{ inset: '2.9% 25.14% 2.84% 18.94%' }}>
              <img src={imgEmblem3} alt="" className="absolute block inset-0 max-w-none size-full" />
            </div>
            <div className="absolute" style={{ inset: '36.92% 74.59% 10.67% 2.4%' }}>
              <img src={imgEmblem4} alt="" className="absolute block inset-0 max-w-none size-full" />
            </div>
          </div>
        </div>

        {/* UI Header (absolute) */}
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 overflow-clip p-[12px]">
          <CloseButton onClick={() => onNavigate(PAGES.MAIN)} />
          <div className="flex gap-[8px] items-center justify-center relative shrink-0 size-[24px]">
            <MailButton />
          </div>
        </div>
      </div>
    </div>
  )
}
