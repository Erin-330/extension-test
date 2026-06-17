import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const RORR_LOGO_STROKE = 'https://www.figma.com/api/mcp/asset/021a1318-ccbf-4c96-a08a-10abe734afb4'
const RORR_LOGO_EXCLUDE = 'https://www.figma.com/api/mcp/asset/58ff640c-2f16-456a-a4c7-dc711e12fb6c'
const HEADER_CLOSE_TOP = 'https://www.figma.com/api/mcp/asset/885f96e7-ea05-4553-828e-e318deaaa2a8'
const HEADER_BUTTON_BG = 'https://www.figma.com/api/mcp/asset/689c6cd0-44f6-4030-bbae-7cc85dd6237c'
const X_GLYPH = 'https://www.figma.com/api/mcp/asset/832f3d79-4536-4e26-bc6d-4310158b9f83'
const USER_SILHOUETTE = 'https://www.figma.com/api/mcp/asset/be99bd18-e03d-4589-a7b4-b182191d8faa'
const GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/b66724ef-893c-411e-8ba8-1079404efe61'
const HIGHLIGHT_STROKE = 'https://www.figma.com/api/mcp/asset/85a3ce83-8559-44b3-b1a8-ea85fe1986b0'
const INNERLINE_STROKE = 'https://www.figma.com/api/mcp/asset/9b4e31e3-02cc-42b3-b42d-f0fab7e45ca7'
const SPARKLE_ICON = 'https://www.figma.com/api/mcp/asset/88382757-b1b0-4382-80ea-512fa9ec2ba5'
const V_DIVIDER = 'https://www.figma.com/api/mcp/asset/c1727368-842c-4b1e-bf5f-f7a8c75c52b3'
const LIGHTNING_ICON = 'https://www.figma.com/api/mcp/asset/7af5582c-0b12-49be-ad79-3256e6dd23d7'
const PLUS_GLYPH = 'https://www.figma.com/api/mcp/asset/9d1065d5-2a9f-41e3-a376-93dad6e79135'
const H_DIVIDER = 'https://www.figma.com/api/mcp/asset/266d0958-f69f-41dd-9b47-280d7e1a61dc'
const FOLLOW_ICON = 'https://www.figma.com/api/mcp/asset/2b6131b7-c058-47f1-81a5-d9a261a6b7d0'
const CHEVRON_RIGHT = 'https://www.figma.com/api/mcp/asset/7280efb1-906a-40d5-985c-bc9dbee15e88'
const PURCHASE_ICON = 'https://www.figma.com/api/mcp/asset/9e581a39-789f-4ca6-afce-54153440f7ac'
const DOLLAR_ICON = 'https://www.figma.com/api/mcp/asset/927a1df7-b910-4e28-8b33-908c4af5ad3f'
const BOOST_LIGHTNING = 'https://www.figma.com/api/mcp/asset/ed10e435-9217-40ea-ad17-c02689936019'
const RORR_DEV_LOGO = 'https://www.figma.com/api/mcp/asset/3833ef5c-d3f6-44a1-9ce4-da536221fc8f'
const EXTERNAL_LINK = 'https://www.figma.com/api/mcp/asset/5648838e-1b49-4cec-9a16-2c4b05f6bbe7'
const MAIL_709 = 'https://www.figma.com/api/mcp/asset/87b54d5b-3c26-4dd0-aff3-decd08a2e564'
const MAIL_708 = 'https://www.figma.com/api/mcp/asset/24579596-b628-4e61-b88b-502cff0e9848'
const MAIL_762 = 'https://www.figma.com/api/mcp/asset/4fa32d89-fdf4-4bdf-a3e9-6679ce5d4d63'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

function AppHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
      <div className="flex gap-[4px] items-center">
        <div className="relative h-[18px] w-[22px] overflow-hidden">
          <img src={RORR_LOGO_STROKE} alt="" className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]" />
          <img src={RORR_LOGO_EXCLUDE} alt="" className="absolute inset-[2.93%_22.01%_2.81%_22.06%]" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          RORR
        </p>
      </div>
      <button onClick={onClose} className="relative size-[12.414px] cursor-pointer">
        <img src={HEADER_CLOSE_TOP} alt="close" className="block size-full" />
      </button>
    </div>
  )
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative size-[24px] cursor-pointer">
      <img src={HEADER_BUTTON_BG} alt="" className="absolute inset-0 size-full rounded-[30px]" />
      <div className="absolute inset-[8.33%] overflow-hidden">
        <img src={X_GLYPH} alt="" className="absolute inset-[28.59%]" />
      </div>
    </button>
  )
}

function MailButton() {
  return (
    <div className="relative size-[24px]">
      <div className="relative size-[32px] overflow-hidden -ml-[4px] -mt-[4px]">
        <div className="absolute inset-[8.33%] overflow-hidden">
          <img src={MAIL_709} alt="" className="absolute inset-[49.26%_9.68%_22.18%_9.68%]" />
          <img src={MAIL_708} alt="" className="absolute inset-[22.18%_9.68%_41.64%_9.68%]" />
          <img src={MAIL_762} alt="" className="absolute inset-[18.75%_6.25%]" />
        </div>
      </div>
      <div className="absolute -bottom-0 -left-[10px] bg-[#ff6f00] flex items-center justify-center rounded-[10px] w-[20px] p-[2px]">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2]">
          2
        </p>
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <div className="flex items-start justify-center shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-hidden rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img src={USER_SILHOUETTE} alt="" className="absolute block inset-0 size-full" />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img src={GRADE_BORDER} alt="" className="absolute block inset-0 size-full" />
          <div className="absolute inset-[5%]">
            <img src={HIGHLIGHT_STROKE} alt="" className="absolute block inset-0 size-full" />
          </div>
          <div className="absolute inset-[6%]">
            <img src={INNERLINE_STROKE} alt="" className="absolute block inset-0 size-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuItem({
  icon,
  label,
  rightIcon,
  onClick,
}: {
  icon?: React.ReactNode
  label: string
  rightIcon?: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left hover:bg-black/5 rounded transition-colors"
    >
      {icon ? <div className="relative shrink-0 size-[28px] overflow-hidden">{icon}</div> : null}
      <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
        {label}
      </p>
      {rightIcon}
    </button>
  )
}

function ChevronRight() {
  return (
    <div className="relative size-[32px] overflow-hidden shrink-0">
      <img src={CHEVRON_RIGHT} alt="" className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]" />
    </div>
  )
}

function ExternalIcon() {
  return (
    <div className="relative size-[24px] overflow-hidden shrink-0">
      <img src={EXTERNAL_LINK} alt="" className="absolute inset-[12.5%_14.58%_14.58%_20.83%]" />
    </div>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 min-h-px rounded-[16px] w-full relative overflow-hidden">
        <div className="flex flex-1 flex-col gap-[16px] items-center min-w-px overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          <div className="flex flex-wrap gap-[16px] items-start shrink-0 w-full">
            <Avatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black leading-none w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {MOCK_PROFILE.displayname}
              </p>
              <div className="flex gap-[12px] items-center w-full rounded-[8px]">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="relative size-[20px] overflow-hidden">
                    <img src={SPARKLE_ICON} alt="" className="absolute inset-[8.33%_10.42%_12.5%_10.42%]" />
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] to-[#c135da] bg-clip-text text-transparent"
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="relative h-[20px] w-0 shrink-0">
                  <img src={V_DIVIDER} alt="" className="absolute inset-[-2.5%_-0.5px] block h-full" />
                </div>
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold text-[16px] text-black leading-[1.2] uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <div className="relative size-[20px] overflow-hidden">
                    <img src={LIGHTNING_ICON} alt="" className="absolute inset-[5.85%_31.03%_5.85%_33.12%]" />
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#00b395] leading-[20px]">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <button className="bg-[#969cda] flex items-center justify-center px-[12px] py-[4px] rounded-[4px] size-[20px]">
                  <div className="relative size-[16px] overflow-hidden">
                    <img src={PLUS_GLYPH} alt="+" className="absolute inset-[18.75%_20.83%_22.92%_20.83%]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <img src={H_DIVIDER} alt="" className="absolute inset-[-0.5px_0] block w-full" />
          </div>
          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-px w-full">
            <MenuItem
              icon={
                <img
                  src={FOLLOW_ICON}
                  alt=""
                  className="absolute inset-[16.67%_12.5%_12.5%_12.5%]"
                />
              }
              label="Follow Team & Player"
              rightIcon={<ChevronRight />}
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuItem
              icon={
                <>
                  <img
                    src={PURCHASE_ICON}
                    alt=""
                    className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4"
                  />
                  <img
                    src={DOLLAR_ICON}
                    alt=""
                    className="absolute inset-[31.25%_22.92%_43.75%_60.42%]"
                  />
                </>
              }
              label="Purchase List"
              rightIcon={<ChevronRight />}
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuItem
              icon={
                <img
                  src={BOOST_LIGHTNING}
                  alt=""
                  className="absolute inset-[5.85%_31.03%_5.85%_33.12%]"
                />
              }
              label="Boost List"
              rightIcon={<ChevronRight />}
            />
            <MenuItem
              icon={
                <img
                  src={RORR_DEV_LOGO}
                  alt=""
                  className="absolute inset-[2.93%_22.01%_2.81%_22.06%]"
                />
              }
              label="dev-app.rorr.club"
              rightIcon={<ExternalIcon />}
            />
            <MenuItem label="Terms of use" rightIcon={<ExternalIcon />} />
            <MenuItem label="Privacy policy" rightIcon={<ExternalIcon />} />
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] overflow-hidden">
          <CloseButton onClick={() => onNavigate(PAGES.MAIN)} />
          <MailButton />
        </div>
      </div>
    </div>
  )
}
