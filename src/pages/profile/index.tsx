import { PAGES } from '../../shared/constants/pages'

interface ProfilePageProps {
  onNavigate: (page: string) => void
}

const IMG_HEADER_BUTTON_SHAPE = 'https://www.figma.com/api/mcp/asset/5927f880-f047-4768-a5fd-3f900de139c7'
const IMG_X_STROKE = 'https://www.figma.com/api/mcp/asset/5d6d5f8e-3562-4f8d-bcb1-68b115229f28'
const IMG_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/1d0fdb34-1597-4039-b285-5f997bb81702'
const IMG_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/a2e6e308-8557-438f-9590-6c888c222b97'
const IMG_HEADER_CLOSE_TOP = 'https://www.figma.com/api/mcp/asset/8c019f56-1bb0-4990-99e7-c06f20fce0cd'
const IMG_USER_UNION = 'https://www.figma.com/api/mcp/asset/1ddddf12-d611-4334-9fbe-9f30fae5c228'
const IMG_GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/df977b73-3d3f-4c29-99f1-13795f8a4dbd'
const IMG_HIGHLIGHT = 'https://www.figma.com/api/mcp/asset/b39087a2-be1e-4413-a50e-b01cf8a7c8d4'
const IMG_INNER_LINE = 'https://www.figma.com/api/mcp/asset/446ced2e-864c-4316-9860-c7f650c81fa9'
const IMG_SPARK = 'https://www.figma.com/api/mcp/asset/44d0d59c-d506-400d-9b6f-93f1ed48f4ac'
const IMG_VERT_DIVIDER = 'https://www.figma.com/api/mcp/asset/fd921dd5-df25-4458-9031-b3da86ce2e46'
const IMG_BOOST_LIGHTNING = 'https://www.figma.com/api/mcp/asset/f9c0cddc-a04f-41af-b67d-99a02f399c5b'
const IMG_PLUS = 'https://www.figma.com/api/mcp/asset/72d93fda-4f4c-4ff7-8ded-baa80de0e5f1'
const IMG_HORIZONTAL_DIVIDER = 'https://www.figma.com/api/mcp/asset/ccdc7f4c-1dba-4a10-b28d-77b0f266b572'
const IMG_FOLLOW_ICON = 'https://www.figma.com/api/mcp/asset/9c7e7f04-4469-4c00-b8e4-de8197ee6664'
const IMG_CHEVRON_RIGHT = 'https://www.figma.com/api/mcp/asset/9d64c548-4938-4dd7-914b-a07139a660ce'
const IMG_PURCHASE_UNION = 'https://www.figma.com/api/mcp/asset/aa641526-fdbe-44c6-9071-de5229530260'
const IMG_PURCHASE_DOLLAR = 'https://www.figma.com/api/mcp/asset/44565528-d220-433f-99e4-102b4c21391f'
const IMG_BOOST_LIGHTNING_MENU = 'https://www.figma.com/api/mcp/asset/d830470c-7af6-49a2-bfe3-bc59e7c9027d'
const IMG_RORR_MINI = 'https://www.figma.com/api/mcp/asset/fc684485-177f-4d8d-9395-9735d0e6fb9e'
const IMG_EXTERNAL = 'https://www.figma.com/api/mcp/asset/214cccb6-e73c-4edc-b98a-7e4c265653df'
const IMG_EMBLEM_S1 = 'https://www.figma.com/api/mcp/asset/5deab113-ec99-43ad-bd3d-11d9984f96ab'
const IMG_EMBLEM_S2 = 'https://www.figma.com/api/mcp/asset/ce9c729d-62dd-4a35-9403-fa4eb9d6e4e0'
const IMG_EMBLEM_S3 = 'https://www.figma.com/api/mcp/asset/01127928-07c1-4aa4-8430-085f30f2f895'
const IMG_EMBLEM_VECTOR = 'https://www.figma.com/api/mcp/asset/1b1b84cc-10fb-4142-bfa2-75ca8e65e211'
const IMG_MAIL_V709 = 'https://www.figma.com/api/mcp/asset/b443dbeb-7b9a-49ae-a9bc-d536721dc453'
const IMG_MAIL_V708 = 'https://www.figma.com/api/mcp/asset/aab46ede-f970-4aaf-a1a2-a63f6ecb8c4d'
const IMG_MAIL_RECT = 'https://www.figma.com/api/mcp/asset/493e0bbd-b8fe-4294-b962-19ae45777a72'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

function Avatar() {
  return (
    <div className="flex items-start justify-center shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_USER_UNION} />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_GRADE_BORDER} />
          <div className="absolute inset-[5%]">
            <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_HIGHLIGHT} />
          </div>
          <div className="absolute inset-[6%]">
            <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_INNER_LINE} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuRow({
  iconSlot,
  label,
  trailingSlot,
  onClick,
}: {
  iconSlot?: React.ReactNode
  label: string
  trailingSlot: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left hover:bg-black/5 transition-colors rounded-md"
    >
      {iconSlot}
      <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-[normal] text-[20px] text-black whitespace-nowrap">
        {label}
      </p>
      {trailingSlot}
    </button>
  )
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      {/* Outer RORR header */}
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] overflow-hidden relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_UNION_STROKE} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_EXCLUDE} />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <button onClick={() => onNavigate(PAGES.MAIN)} className="relative shrink-0 size-[12.414px]">
          <img alt="close" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_CLOSE_TOP} />
        </button>
      </div>

      {/* Inner UI panel */}
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="flex flex-col gap-[16px] items-center pb-[20px] pt-[80px] px-[16px] w-full">
            {/* UserProfile section */}
            <div className="flex flex-wrap gap-[16px] items-start w-full">
              <Avatar />
              <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
                <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black overflow-hidden text-ellipsis whitespace-nowrap min-w-full">
                  {MOCK_PROFILE.email}
                </p>
                <div className="flex h-[38px] items-end w-full">
                  <p className="flex-1 min-w-0 font-['Pretendard',sans-serif] font-bold leading-[normal] text-[32px] text-black overflow-hidden text-ellipsis whitespace-nowrap">
                    {MOCK_PROFILE.displayname}
                  </p>
                </div>
                <div className="flex gap-[12px] items-center rounded-[8px] w-full">
                  <div className="flex gap-[4px] items-center">
                    <div className="overflow-hidden relative shrink-0 size-[20px]">
                      <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                        <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_SPARK} />
                      </div>
                    </div>
                    <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] whitespace-nowrap bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] via-[4.327%] to-[#c135da] bg-clip-text text-transparent">
                      {MOCK_PROFILE.exp}
                    </p>
                  </div>
                  <div className="relative self-stretch w-0">
                    <div className="absolute inset-[-2.5%_-0.5px]">
                      <img alt="" className="block max-w-none size-full" src={IMG_VERT_DIVIDER} />
                    </div>
                  </div>
                  <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold leading-[1.2] text-[16px] text-black uppercase">
                    {MOCK_PROFILE.gradeName}
                  </p>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="flex gap-[4px] items-center">
                    <div className="overflow-hidden relative shrink-0 size-[20px]">
                      <div className="absolute inset-[0_20.83%_0_22.92%]">
                        <div className="absolute inset-[5.85%_10.2%]">
                          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_BOOST_LIGHTNING} />
                        </div>
                      </div>
                    </div>
                    <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-[#00b395] whitespace-nowrap">
                      {MOCK_PROFILE.cash}
                    </p>
                  </div>
                  <button className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] size-[20px]">
                    <div className="overflow-hidden relative shrink-0 size-[16px]">
                      <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                        <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_PLUS} />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal divider */}
            <div className="h-0 w-full relative shrink-0">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={IMG_HORIZONTAL_DIVIDER} />
              </div>
            </div>

            {/* Menu list */}
            <div className="flex flex-1 flex-col gap-[16px] items-start overflow-hidden w-full">
              <MenuRow
                label="Follow Team & Player"
                onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
                iconSlot={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_FOLLOW_ICON} />
                    </div>
                  </div>
                }
                trailingSlot={
                  <div className="overflow-hidden relative shrink-0 size-[32px]">
                    <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_CHEVRON_RIGHT} />
                    </div>
                  </div>
                }
              />
              <MenuRow
                label="Purchase List"
                onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
                iconSlot={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_PURCHASE_UNION} />
                    </div>
                    <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_PURCHASE_DOLLAR} />
                    </div>
                  </div>
                }
                trailingSlot={
                  <div className="overflow-hidden relative shrink-0 size-[32px]">
                    <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_CHEVRON_RIGHT} />
                    </div>
                  </div>
                }
              />
              <MenuRow
                label="Boost List"
                iconSlot={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_BOOST_LIGHTNING_MENU} />
                      </div>
                    </div>
                  </div>
                }
                trailingSlot={
                  <div className="overflow-hidden relative shrink-0 size-[32px]">
                    <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_CHEVRON_RIGHT} />
                    </div>
                  </div>
                }
              />
              <MenuRow
                label="dev-app.rorr.club"
                iconSlot={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute flex inset-[0_-10.42%] items-center justify-center">
                      <div className="-scale-x-100 h-full w-full">
                        <div className="overflow-hidden relative size-full">
                          <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                            <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_MINI} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                trailingSlot={
                  <div className="overflow-hidden relative shrink-0 size-[24px]">
                    <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_EXTERNAL} />
                    </div>
                  </div>
                }
              />
              <MenuRow
                label="Terms of use"
                trailingSlot={
                  <div className="overflow-hidden relative shrink-0 size-[24px]">
                    <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_EXTERNAL} />
                    </div>
                  </div>
                }
              />
              <MenuRow
                label="Privacy policy"
                trailingSlot={
                  <div className="overflow-hidden relative shrink-0 size-[24px]">
                    <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                      <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_EXTERNAL} />
                    </div>
                  </div>
                }
              />
            </div>

            {/* Horizontal divider */}
            <div className="h-0 w-full relative shrink-0">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={IMG_HORIZONTAL_DIVIDER} />
              </div>
            </div>

            {/* RORR Emblem */}
            <div className="h-[54px] overflow-hidden relative shrink-0 w-[64px]">
              <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_EMBLEM_S1} />
              </div>
              <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_EMBLEM_S2} />
              </div>
              <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_EMBLEM_S3} />
              </div>
              <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_EMBLEM_VECTOR} />
              </div>
            </div>
          </div>
        </div>

        {/* UI Header (Close + Mailbox) - absolute */}
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 overflow-hidden p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="flex gap-[10px] items-center justify-center relative size-[24px]"
          >
            <div className="relative rounded-[30px] size-full">
              <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_BUTTON_SHAPE} />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[28.59%]">
                <img alt="close" className="absolute inset-0 max-w-none size-full" src={IMG_X_STROKE} />
              </div>
            </div>
          </button>
          <div className="flex gap-[8px] items-center justify-center relative size-[24px]">
            <div className="overflow-hidden relative shrink-0 size-[32px]">
              <div className="absolute inset-[8.33%] overflow-hidden">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_MAIL_V709} />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_MAIL_V708} />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_MAIL_RECT} />
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
