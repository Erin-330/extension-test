import { PAGES } from '../../shared/constants/pages'

interface ProfilePageProps {
  onNavigate: (page: string) => void
}

// Figma assets
const IMG_HEADER_BTN_SHAPE = 'https://www.figma.com/api/mcp/asset/211bcb4a-017d-4623-aa5e-ff3a7216e9d8'
const IMG_CLOSE_X = 'https://www.figma.com/api/mcp/asset/c771336f-05f0-4144-a51e-bf69ae39219f'
const IMG_RORR_LOGO_UNION = 'https://www.figma.com/api/mcp/asset/e3d20f24-a43e-42c4-a65a-60b690d08826'
const IMG_RORR_LOGO_EXCLUDE = 'https://www.figma.com/api/mcp/asset/056743df-d29f-4b87-8682-4547c47e4373'
const IMG_OUTER_CLOSE = 'https://www.figma.com/api/mcp/asset/a7ee1d41-ae86-43d0-a64c-53ac92a47f4a'
const IMG_GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/c7a85590-e5f2-42b6-953e-8965724c2eb5'
const IMG_HIGHLIGHT_STROKE = 'https://www.figma.com/api/mcp/asset/e198d1d0-0778-47b3-9688-7456d69257ca'
const IMG_INNER_LINE_STROKE = 'https://www.figma.com/api/mcp/asset/dce3feac-8d95-4f16-87cb-dc9bd2931373'
const IMG_USER_ICON = 'https://www.figma.com/api/mcp/asset/bb3c27d7-6044-42a7-8f8a-b1b05728fcf3'
const IMG_EXP_ICON = 'https://www.figma.com/api/mcp/asset/38480b68-7acb-4a8c-a094-e13927ec7c09'
const IMG_VERTICAL_DIVIDER = 'https://www.figma.com/api/mcp/asset/e58ac877-0b63-445e-bad5-0e29ce33adb9'
const IMG_ENERGY_ICON = 'https://www.figma.com/api/mcp/asset/25d0e1cf-13a5-4d13-b241-d73d8c05a552'
const IMG_PLUS_BTN = 'https://www.figma.com/api/mcp/asset/530fa04e-d7ff-4edb-88c0-51b26406a5e8'
const IMG_H_DIVIDER = 'https://www.figma.com/api/mcp/asset/4ce659f8-9676-471c-ab86-b0cf66bfd053'
const IMG_FOLLOW_ICON = 'https://www.figma.com/api/mcp/asset/89ade57d-00cf-4c90-9b01-f3bcc836d2df'
const IMG_CHEVRON_RIGHT = 'https://www.figma.com/api/mcp/asset/be49c77e-9a88-44d4-8b3e-2def7506a09e'
const IMG_PURCHASE_ICON_UNION = 'https://www.figma.com/api/mcp/asset/a5ec73ce-c313-42c4-91f7-10dd901b9f26'
const IMG_PURCHASE_ICON_DOLLAR = 'https://www.figma.com/api/mcp/asset/facf90ea-dcbd-4c16-ae0d-5691cc9c216f'
const IMG_BOOST_ICON = 'https://www.figma.com/api/mcp/asset/2f8d7b77-a8fa-4df2-9977-0dbf4a925027'
const IMG_RORR_MENU_ICON = 'https://www.figma.com/api/mcp/asset/6dbf00b7-3046-4b1b-b6ec-b24106411ff3'
const IMG_EXTERNAL_LINK = 'https://www.figma.com/api/mcp/asset/0a63a393-ec65-4ac5-b6c1-b106d108bac6'
const IMG_EMBLEM_1 = 'https://www.figma.com/api/mcp/asset/abd4558b-0be1-4a3b-8df7-0e9e1ac29083'
const IMG_EMBLEM_2 = 'https://www.figma.com/api/mcp/asset/88d4dcf0-a4ba-4bcb-8a1a-162706518f21'
const IMG_EMBLEM_3 = 'https://www.figma.com/api/mcp/asset/6941df68-ec42-4f25-b665-13b02ea41262'
const IMG_EMBLEM_4 = 'https://www.figma.com/api/mcp/asset/adfec658-5812-4a38-ba53-abef72c417d9'
const IMG_MAIL_LINE1 = 'https://www.figma.com/api/mcp/asset/121e6e76-8dfb-42c0-b6b6-6c5caf091da1'
const IMG_MAIL_LINE2 = 'https://www.figma.com/api/mcp/asset/7472a0c1-67cb-4516-b501-211f728340c8'
const IMG_MAIL_BOX = 'https://www.figma.com/api/mcp/asset/f32acff9-94c0-42f7-9639-2e9873698d7a'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  exp: '45,678',
  cash: '12,345',
  gradeName: 'Hall of Fame',
  msgCnt: 2,
}

function HorizontalDivider() {
  return (
    <div className="relative h-0 w-full shrink-0">
      <div className="absolute inset-x-0" style={{ top: '-0.5px', bottom: '-0.5px' }}>
        <img src={IMG_H_DIVIDER} alt="" className="block size-full" />
      </div>
    </div>
  )
}

function MenuRow({
  icon,
  label,
  chevron = true,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  chevron?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-[4px] p-[10px]"
    >
      <div className="relative shrink-0 size-[28px]">{icon}</div>
      <p className="flex-1 text-left font-['Pretendard',sans-serif] text-[20px] font-bold leading-[normal] text-black">
        {label}
      </p>
      {chevron ? (
        <div className="relative shrink-0 size-[32px] overflow-hidden">
          <div className="absolute bottom-[22.92%] left-[41.67%] right-[25%] top-[22.92%]">
            <img src={IMG_CHEVRON_RIGHT} alt="" className="absolute block inset-0 size-full" />
          </div>
        </div>
      ) : (
        <div className="relative shrink-0 size-[24px] overflow-hidden">
          <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
            <img src={IMG_EXTERNAL_LINK} alt="" className="absolute block inset-0 size-full" />
          </div>
        </div>
      )}
    </button>
  )
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const profile = MOCK_PROFILE

  return (
    <div className="flex h-dvh w-full flex-col bg-[#46383a] px-[11px] pb-[11px]">
      {/* Outer top bar */}
      <div className="flex h-[48px] w-full shrink-0 items-center justify-between px-[4px] opacity-[0.66]">
        <div className="flex shrink-0 items-center gap-[4px]">
          <div className="h-[18px] w-[22px] overflow-hidden relative">
            <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
              <img src={IMG_RORR_LOGO_UNION} alt="" className="absolute block inset-0 size-full" />
            </div>
            <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
              <img src={IMG_RORR_LOGO_EXCLUDE} alt="" className="absolute block inset-0 size-full" />
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] text-[14px] font-light leading-[20px] text-white">
            RORR
          </p>
        </div>
        <div className="relative shrink-0 size-[12.4px]">
          <img src={IMG_OUTER_CLOSE} alt="" className="absolute block inset-0 size-full" />
        </div>
      </div>

      {/* Inner card */}
      <div className="relative flex w-full flex-1 min-h-0 overflow-hidden rounded-[16px] bg-[#f0f2f5]">
        {/* Scrollable content */}
        <div className="flex h-full w-full flex-1 flex-col items-center gap-[16px] overflow-y-auto px-[16px] pb-[20px] pt-[80px]">
          {/* User profile card */}
          <div className="flex w-full flex-wrap content-start items-start gap-[16px] shrink-0">
            {/* Avatar with grade border */}
            <div className="relative shrink-0 size-[110px] flex items-start justify-center">
              <div className="relative shrink-0 size-[96px]">
                {/* User icon */}
                <div className="absolute inset-[3.98%_3.57%_3.16%_3.57%] overflow-hidden rounded-full bg-[#bbbfd0]">
                  <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                    <img src={IMG_USER_ICON} alt="" className="absolute block inset-0 size-full" />
                  </div>
                </div>
                {/* Grade border */}
                <div className="absolute inset-[0.41%_0_-0.41%_0]">
                  <img src={IMG_GRADE_BORDER} alt="" className="absolute block inset-0 size-full" />
                  <div className="absolute inset-[5%]">
                    <img src={IMG_HIGHLIGHT_STROKE} alt="" className="absolute block inset-0 size-full" />
                  </div>
                  <div className="absolute inset-[6%]">
                    <img src={IMG_INNER_LINE_STROKE} alt="" className="absolute block inset-0 size-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* User info */}
            <div className="flex flex-1 min-w-[220px] flex-col items-start gap-[16px]">
              {/* Email */}
              <p className="font-['Pretendard',sans-serif] text-[14px] font-light leading-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {profile.email}
              </p>
              {/* Display name */}
              <p className="font-['Pretendard',sans-serif] text-[32px] font-bold leading-[normal] text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {profile.displayname}
              </p>
              {/* EXP + grade */}
              <div className="flex w-full items-center gap-[12px] rounded-[8px] shrink-0">
                <div className="flex items-center gap-[4px] shrink-0">
                  <div className="relative shrink-0 size-[20px] overflow-hidden">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img src={IMG_EXP_ICON} alt="" className="absolute block inset-0 size-full" />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] text-[16px] font-bold leading-[20px] whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(to bottom, #f9d9ff 0%, #e08fee 4.327%, #c135da 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {profile.exp}
                  </p>
                </div>
                {/* Vertical divider */}
                <div className="relative self-stretch w-0 shrink-0">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img src={IMG_VERTICAL_DIVIDER} alt="" className="block size-full" />
                  </div>
                </div>
                {/* Grade name */}
                <p className="flex-1 font-['Pretendard',sans-serif] text-[16px] font-extrabold leading-[1.2] uppercase text-black min-w-0">
                  {profile.gradeName}
                </p>
              </div>
              {/* Energy */}
              <div className="flex items-center gap-[8px] shrink-0">
                <div className="flex items-center gap-[4px] shrink-0">
                  <div className="relative shrink-0 size-[20px] overflow-hidden">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img src={IMG_ENERGY_ICON} alt="" className="absolute block inset-0 size-full" />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] text-[16px] font-bold leading-[20px] text-[#00b395] whitespace-nowrap">
                    {profile.cash}
                  </p>
                </div>
                {/* Plus charge button */}
                <div className="relative flex shrink-0 size-[20px] items-center justify-center rounded-[4px] bg-[#969cda]">
                  <div className="relative shrink-0 size-[16px] overflow-hidden">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img src={IMG_PLUS_BTN} alt="" className="absolute block inset-0 size-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HorizontalDivider />

          {/* Menu items */}
          <div className="flex w-full flex-1 flex-col items-start gap-[16px] overflow-hidden min-h-0 shrink-0">
            <MenuRow
              icon={
                <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                  <img src={IMG_FOLLOW_ICON} alt="" className="absolute block inset-0 size-full" />
                </div>
              }
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              icon={
                <>
                  <div className="absolute inset-[25%_12.5%_12.5%_12.5%]">
                    <img src={IMG_PURCHASE_ICON_UNION} alt="" className="absolute block inset-0 size-full" />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img src={IMG_PURCHASE_ICON_DOLLAR} alt="" className="absolute block inset-0 size-full" />
                  </div>
                </>
              }
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuRow
              icon={
                <div className="absolute inset-[0_20.83%_0_22.92%]">
                  <div className="absolute inset-[5.85%_10.2%]">
                    <img src={IMG_BOOST_ICON} alt="" className="absolute block inset-0 size-full" />
                  </div>
                </div>
              }
              label="Boost List"
            />
            <MenuRow
              icon={
                <div className="absolute inset-0 overflow-hidden" style={{ transform: 'scaleX(-1)' }}>
                  <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                    <img src={IMG_RORR_MENU_ICON} alt="" className="absolute block inset-0 size-full" />
                  </div>
                </div>
              }
              label="dev-app.rorr.club"
              chevron={false}
            />
            <MenuRow
              icon={<span />}
              label="Terms of use"
              chevron={false}
            />
            <MenuRow
              icon={<span />}
              label="Privacy policy"
              chevron={false}
            />
          </div>

          <HorizontalDivider />

          {/* RORR Emblem */}
          <div className="relative h-[54px] w-[64px] shrink-0 overflow-hidden">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img src={IMG_EMBLEM_1} alt="" className="absolute block inset-0 size-full" />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img src={IMG_EMBLEM_2} alt="" className="absolute block inset-0 size-full" />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img src={IMG_EMBLEM_3} alt="" className="absolute block inset-0 size-full" />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img src={IMG_EMBLEM_4} alt="" className="absolute block inset-0 size-full" />
            </div>
          </div>
        </div>

        {/* Fixed header inside card */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-hidden p-[12px]">
          {/* Close button */}
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            aria-label="닫기"
            className="relative flex shrink-0 size-[24px] items-center justify-center"
          >
            <img src={IMG_HEADER_BTN_SHAPE} alt="" className="absolute inset-0 size-full rounded-[30px]" />
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[28.59%]">
                <img src={IMG_CLOSE_X} alt="" className="absolute block inset-0 size-full" />
              </div>
            </div>
          </button>

          {/* Mail icon with badge */}
          <div className="relative flex shrink-0 size-[24px] items-center justify-center">
            <div className="relative shrink-0 size-[32px] overflow-hidden">
              <div className="absolute inset-[8.33%] overflow-hidden">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img src={IMG_MAIL_LINE1} alt="" className="absolute block inset-0 size-full" />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img src={IMG_MAIL_LINE2} alt="" className="absolute block inset-0 size-full" />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img src={IMG_MAIL_BOX} alt="" className="absolute block inset-0 size-full" />
                </div>
              </div>
            </div>
            {profile.msgCnt > 0 && (
              <div className="absolute bottom-0 left-[-10px] flex w-[20px] flex-col items-center justify-center rounded-[10px] bg-[#ff6f00] p-[2px]">
                <p className="font-['Pretendard',sans-serif] text-[12px] font-normal leading-[1.2] text-white whitespace-nowrap">
                  {profile.msgCnt > 99 ? '99+' : profile.msgCnt}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scroll bar indicator */}
        <div className="absolute bottom-[90px] right-0 top-0 flex w-[8px] items-center py-[16px]">
          <div className="relative flex h-full w-[4px] flex-col items-start justify-center rounded-[8px] bg-[#ced6e6] shrink-0">
            <div className="h-[48px] w-[4px] rounded-[2px] bg-[#969cda] shrink-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
