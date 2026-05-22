import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

interface ProfilePageProps {
  onNavigate: (page: string) => void
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'Hall of fame',
}

const ICON_CLOSE_BG = 'https://www.figma.com/api/mcp/asset/62288c10-7bde-4321-9ac9-1c3584552ab0'
const ICON_CLOSE_X = 'https://www.figma.com/api/mcp/asset/35ac70d3-497c-4e1a-8af1-13f213909b9a'
const ICON_USER_UNION = 'https://www.figma.com/api/mcp/asset/3f896784-a726-4734-a478-3e7be1ef13ed'
const ICON_GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/6dae02f9-5ba2-46e8-8f51-62225b3bb685'
const ICON_HIGHLIGHT_STROKE = 'https://www.figma.com/api/mcp/asset/4ecffbfc-dc4f-4dd0-8292-afa72aca16f4'
const ICON_INNERLINE_STROKE = 'https://www.figma.com/api/mcp/asset/c22f70f3-451e-4373-a80b-e661c0f5ef85'
const ICON_EXP_STAR = 'https://www.figma.com/api/mcp/asset/a16e64ba-1a10-4f28-b461-2ebb563e3f34'
const ICON_VERTICAL_SEP = 'https://www.figma.com/api/mcp/asset/122ad182-2ef2-4f91-b62e-d82fd8b98030'
const ICON_ENERGY = 'https://www.figma.com/api/mcp/asset/a8073799-8254-4bbb-afd7-cd130da82f61'
const ICON_PLUS = 'https://www.figma.com/api/mcp/asset/2585cc5e-1e00-4180-954b-9782790fb564'
const ICON_DIVIDER = 'https://www.figma.com/api/mcp/asset/cf4ab8f2-fcd6-4d50-84b7-ef832b11192b'
const ICON_FOLLOW = 'https://www.figma.com/api/mcp/asset/2c3f99c6-f9ed-46b1-b0fb-8a334d6738aa'
const ICON_ARROW_RIGHT = 'https://www.figma.com/api/mcp/asset/b5b81fea-7945-4512-915e-1b94633eb59e'
const ICON_PURCHASE = 'https://www.figma.com/api/mcp/asset/472fb8f5-3ff1-4169-8a16-54d710ecd9c1'
const ICON_PURCHASE_DOLLAR = 'https://www.figma.com/api/mcp/asset/b7df2a90-12a9-4e42-9599-e3704407f66c'
const ICON_BOOST_LIST = 'https://www.figma.com/api/mcp/asset/9bc90398-7198-4c89-a5be-b0d95a9b53cb'
const ICON_DEV_RORR_LOGO = 'https://www.figma.com/api/mcp/asset/36dc6fdc-a81a-42f2-b712-4b0c07675441'
const ICON_EXTERNAL_LINK = 'https://www.figma.com/api/mcp/asset/1f7313eb-7994-48fe-baa0-e472a46a7b58'
const ICON_EMBLEM_S1 = 'https://www.figma.com/api/mcp/asset/832db1b1-41f6-48ad-bbaf-98e03295b83f'
const ICON_EMBLEM_S2 = 'https://www.figma.com/api/mcp/asset/6e77562b-7837-488b-8ca3-2174a3d8b9cb'
const ICON_EMBLEM_S3 = 'https://www.figma.com/api/mcp/asset/c2cbc1ca-c725-4c39-b7d7-7caa2a68da33'
const ICON_EMBLEM_STROKE = 'https://www.figma.com/api/mcp/asset/be228814-fed9-48bc-b946-82cb67da7e05'
const ICON_MAILBOX_S1 = 'https://www.figma.com/api/mcp/asset/994c39b3-3a26-44df-b48b-0421d22f3a28'
const ICON_MAILBOX_S2 = 'https://www.figma.com/api/mcp/asset/3dd85ff4-5654-4168-8c89-8b61b0912adc'
const ICON_MAILBOX_RECT = 'https://www.figma.com/api/mcp/asset/80c5b662-e872-4f19-a2d9-dc9d3e456215'

function ProfileAvatar() {
  return (
    <div className="flex items-start justify-center shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_USER_UNION} />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_GRADE_BORDER} />
          <div className="absolute inset-[5%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_HIGHLIGHT_STROKE} />
          </div>
          <div className="absolute inset-[6%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_INNERLINE_STROKE} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuRow({
  icon,
  label,
  onClick,
  trailing,
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  trailing?: React.ReactNode
}) {
  return (
    <button onClick={onClick} className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left">
      <div className="overflow-clip relative shrink-0 size-[28px]">{icon}</div>
      <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-[normal] not-italic shrink-0 text-[20px] text-black whitespace-nowrap">
        {label}
      </p>
      {trailing ?? (
        <div className="overflow-clip relative shrink-0 size-[32px]">
          <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_ARROW_RIGHT} />
          </div>
        </div>
      )}
    </button>
  )
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start justify-center min-h-px min-w-[288px] overflow-clip relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px pb-[20px] pt-[80px] px-[16px] overflow-y-auto">
          <div className="flex flex-wrap gap-[16px] items-start shrink-0 w-full">
            <ProfileAvatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] not-italic shrink-0 text-[14px] text-black overflow-hidden text-ellipsis max-w-full whitespace-nowrap w-full">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end shrink-0 w-full">
                <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-[normal] not-italic text-[32px] text-black overflow-hidden text-ellipsis whitespace-nowrap min-w-px">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-start shrink-0 w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <img src={ICON_EXP_STAR} alt="" className="shrink-0 w-[20px] h-[20px]" />
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] not-italic text-[16px] text-center whitespace-nowrap bg-clip-text bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] via-[4.327%] to-[#c135da] text-transparent">
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <img src={ICON_VERTICAL_SEP} alt="" className="shrink-0 w-px h-[20px]" />
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold leading-[1.2] not-italic text-[16px] text-black uppercase min-w-px">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_ENERGY} />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] not-italic text-[#00b395] text-[16px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <button className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] shrink-0 size-[20px]" aria-label="charge">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_PLUS} />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={ICON_DIVIDER} />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-px overflow-clip w-full">
            <MenuRow
              icon={
                <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_FOLLOW} />
                </div>
              }
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              icon={
                <>
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_PURCHASE} />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_PURCHASE_DOLLAR} />
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
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_BOOST_LIST} />
                  </div>
                </div>
              }
              label="Boost List"
            />
            <MenuRow
              icon={
                <div className="absolute inset-[0_-10.42%] flex items-center justify-center">
                  <div className="-scale-x-100 flex-none h-full w-full">
                    <div className="overflow-clip relative size-full">
                      <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_DEV_RORR_LOGO} />
                      </div>
                    </div>
                  </div>
                </div>
              }
              label="dev-app.rorr.club"
              trailing={
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_EXTERNAL_LINK} />
                  </div>
                </div>
              }
            />
            <button className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left">
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-[normal] not-italic shrink-0 text-[20px] text-black whitespace-nowrap">
                Terms of use
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_EXTERNAL_LINK} />
                </div>
              </div>
            </button>
            <button className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left">
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-[normal] not-italic shrink-0 text-[20px] text-black whitespace-nowrap">
                Privacy policy
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_EXTERNAL_LINK} />
                </div>
              </div>
            </button>
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={ICON_DIVIDER} />
            </div>
          </div>

          <div className="h-[54px] overflow-clip relative shrink-0 w-[64px]">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_EMBLEM_S1} />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_EMBLEM_S2} />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_EMBLEM_S3} />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_EMBLEM_STROKE} />
            </div>
          </div>
        </div>

        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <button onClick={() => onNavigate(PAGES.MAIN)} className="flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" aria-label="close">
            <div className="flex-1 h-full min-w-px relative rounded-[30px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_CLOSE_BG} />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[28.59%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_CLOSE_X} />
              </div>
            </div>
          </button>
          <div className="flex gap-[8px] items-center justify-center relative shrink-0 size-[24px]">
            <div className="overflow-clip relative shrink-0 size-[32px]">
              <div className="absolute inset-[8.33%] overflow-clip">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_MAILBOX_S1} />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_MAILBOX_S2} />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_MAILBOX_RECT} />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 flex flex-col items-center justify-center left-[-10px] p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] not-italic shrink-0 text-[12px] text-white whitespace-nowrap">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
