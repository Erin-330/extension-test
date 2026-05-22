import { PAGES } from '../../shared/constants/pages'

const imgRorrUnionStroke = 'https://www.figma.com/api/mcp/asset/44106b3f-feea-445b-862d-13fa6ed785b0'
const imgRorrExclude = 'https://www.figma.com/api/mcp/asset/50f88096-1712-4722-94d5-64f14781a07c'
const imgCloseTopRight = 'https://www.figma.com/api/mcp/asset/88dc9cdd-4e50-4abc-86f5-ad918a82109f'

const imgCloseBg = 'https://www.figma.com/api/mcp/asset/84e3abab-72ea-4461-be37-b985639703c7'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/3d7d879d-45ec-4f5b-ad1b-01d44fb285cb'

const imgIconUserUnion = 'https://www.figma.com/api/mcp/asset/8d57076b-2c8c-42df-b276-21cba6c378b0'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/e2069eaa-4a41-49d2-9152-b0215000d7db'
const imgGradeHighlight = 'https://www.figma.com/api/mcp/asset/74fcc65e-8780-4fd0-abad-693331562c04'
const imgGradeInnerLine = 'https://www.figma.com/api/mcp/asset/c2d1b443-c2cd-4713-9468-892016746597'

const imgSparkleIcon = 'https://www.figma.com/api/mcp/asset/72a82ced-147f-4cdf-920f-cb4a55065830'
const imgVerticalDivider = 'https://www.figma.com/api/mcp/asset/3880ab2a-9af9-44f9-bf6f-361298a74b6b'
const imgLightningIcon = 'https://www.figma.com/api/mcp/asset/94039105-8f31-4019-b9e2-e0760338e824'
const imgPlusIcon = 'https://www.figma.com/api/mcp/asset/d0db2d91-424c-49a4-8050-e22392a09612'
const imgHDivider = 'https://www.figma.com/api/mcp/asset/a766d855-6316-4a68-8ac3-23ef34bc059e'

const imgMenuFollow = 'https://www.figma.com/api/mcp/asset/0d65d694-e71d-4f21-8b5c-6de60f00a20f'
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/5e5484e8-81ec-4307-b998-6ab5e2d59f3e'
const imgMenuPurchaseCard = 'https://www.figma.com/api/mcp/asset/a8f51ea5-4497-4fda-92cf-3191a8767bdb'
const imgMenuPurchaseDollar = 'https://www.figma.com/api/mcp/asset/3b51c7e1-ea2b-494b-954c-4f4305ff24dd'
const imgMenuBoost = 'https://www.figma.com/api/mcp/asset/dc5777d2-3565-4c7d-ae3b-2b9d03d8e31a'
const imgMenuRorrEmblem = 'https://www.figma.com/api/mcp/asset/47cf49c5-cc45-433a-adf7-f177b6d08400'
const imgExternalLink = 'https://www.figma.com/api/mcp/asset/4cb9362c-d223-4f5c-acd9-8210c4ac29b9'

const imgMailbox709 = 'https://www.figma.com/api/mcp/asset/3de4b7b3-2539-425c-a373-937adc333e52'
const imgMailbox708 = 'https://www.figma.com/api/mcp/asset/d00478fd-ad00-44c0-b16d-4054c0dcb7c4'
const imgMailboxRect = 'https://www.figma.com/api/mcp/asset/a57a9aad-5711-45bd-8c15-88a92236d205'

const imgEmblemSubtract0 = 'https://www.figma.com/api/mcp/asset/a72f1b29-ecdf-4f22-8bbd-96d0a03596e7'
const imgEmblemSubtract1 = 'https://www.figma.com/api/mcp/asset/8ca06d0e-8b86-4045-987e-4e8c80af7330'
const imgEmblemSubtract2 = 'https://www.figma.com/api/mcp/asset/20e3f231-a643-443a-af55-bb8ef74f28f4'
const imgEmblemVectorStroke = 'https://www.figma.com/api/mcp/asset/80708698-3bbe-48d9-9d4e-02322be69c24'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

function MenuItem({
  icon,
  label,
  trailing,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  trailing?: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] shrink-0 w-full"
    >
      {icon}
      <p className="font-['Pretendard',sans-serif] font-bold text-[20px] leading-none text-black whitespace-nowrap">
        {label}
      </p>
      {trailing}
    </button>
  )
}

export function ProfilePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="h-dvh w-full flex flex-col items-start bg-[#46383a] pb-[11px] px-[11px]">
      {/* App header */}
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center justify-center shrink-0">
          <div className="relative shrink-0 w-[22px] h-[18px] overflow-hidden">
            <img src={imgRorrUnionStroke} className="absolute inset-0 w-full h-full" alt="" />
            <img src={imgRorrExclude} className="absolute inset-0 w-full h-full" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">RORR</p>
        </div>
        <button
          onClick={() => onNavigate(PAGES.MAIN)}
          aria-label="close"
          className="shrink-0 w-[12.414px] h-[12.414px] relative"
        >
          <img src={imgCloseTopRight} className="absolute inset-0 w-full h-full" alt="" />
        </button>
      </div>

      {/* UI panel */}
      <div className="bg-[#f0f2f5] flex-1 min-h-0 min-w-[288px] relative rounded-[16px] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          <div className="flex flex-col gap-[16px] items-center w-full">

            {/* User profile row */}
            <div className="flex flex-wrap gap-[16px] items-start shrink-0 w-full">
              <div className="flex items-start justify-center shrink-0 size-[110px]">
                <div className="relative shrink-0 size-[96px]">
                  {/* User avatar (clipped) */}
                  <div className="absolute bg-[#bbbfd0] overflow-hidden rounded-full inset-[0.41%_0_-0.41%_0]">
                    <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                      <img src={imgIconUserUnion} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                  {/* Grade border */}
                  <div className="absolute inset-[0.41%_0_-0.41%_0]">
                    <img src={imgGradeBorder} className="absolute inset-0 w-full h-full" alt="" />
                    <div className="absolute inset-[5%]">
                      <img src={imgGradeHighlight} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                    <div className="absolute inset-[6%]">
                      <img src={imgGradeInnerLine} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
                <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  {MOCK_PROFILE.email}
                </p>

                <div className="flex h-[38px] items-end w-full">
                  <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[32px] leading-none text-black whitespace-nowrap overflow-hidden text-ellipsis">
                    {MOCK_PROFILE.displayname}
                  </p>
                </div>

                {/* exp + grade row */}
                <div className="flex gap-[12px] items-start w-full">
                  <div className="flex gap-[4px] items-center shrink-0">
                    <div className="overflow-hidden relative shrink-0 size-[20px]">
                      <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                        <img src={imgSparkleIcon} className="absolute inset-0 w-full h-full" alt="" />
                      </div>
                    </div>
                    <p
                      className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] to-[#c135da]"
                    >
                      {MOCK_PROFILE.exp}
                    </p>
                  </div>
                  <div className="self-stretch shrink-0 w-px relative">
                    <img src={imgVerticalDivider} alt="" className="absolute inset-0 w-full h-full" />
                  </div>
                  <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold text-[16px] leading-[1.2] text-black uppercase">
                    {MOCK_PROFILE.gradeName}
                  </p>
                </div>

                {/* cash row */}
                <div className="flex gap-[8px] items-center shrink-0">
                  <div className="flex gap-[4px] items-center shrink-0">
                    <div className="overflow-hidden relative shrink-0 size-[20px]">
                      <div className="absolute inset-[0_20.83%_0_22.92%]">
                        <div className="absolute inset-[5.85%_10.2%]">
                          <img src={imgLightningIcon} className="absolute inset-0 w-full h-full" alt="" />
                        </div>
                      </div>
                    </div>
                    <p className="font-['Pretendard',sans-serif] font-bold text-[#00b395] text-[16px] leading-[20px] whitespace-nowrap">
                      {MOCK_PROFILE.cash}
                    </p>
                  </div>
                  <button
                    aria-label="charge"
                    className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] shrink-0 size-[20px]"
                  >
                    <div className="overflow-hidden relative shrink-0 size-[16px]">
                      <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                        <img src={imgPlusIcon} className="absolute inset-0 w-full h-full" alt="" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0 shrink-0 w-full relative">
              <div className="absolute inset-[-0.5px_0]">
                <img src={imgHDivider} alt="" className="block w-full h-full" />
              </div>
            </div>

            {/* Menu list */}
            <div className="flex flex-1 flex-col gap-[16px] items-start overflow-hidden w-full">
              <MenuItem
                onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
                icon={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                      <img src={imgMenuFollow} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
                label="Follow Team & Player"
                trailing={
                  <div className="overflow-hidden relative shrink-0 size-[32px] ml-auto">
                    <div className="absolute inset-[22.92%_25%_22.92%_41.67%]">
                      <img src={imgChevronRight} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
              />

              <MenuItem
                onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
                icon={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute inset-[25%_12.5%]">
                      <img src={imgMenuPurchaseCard} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                    <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                      <img src={imgMenuPurchaseDollar} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
                label="Purchase List"
                trailing={
                  <div className="overflow-hidden relative shrink-0 size-[32px] ml-auto">
                    <div className="absolute inset-[22.92%_25%_22.92%_41.67%]">
                      <img src={imgChevronRight} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
              />

              <MenuItem
                icon={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img src={imgMenuBoost} className="absolute inset-0 w-full h-full" alt="" />
                      </div>
                    </div>
                  </div>
                }
                label="Boost List"
                trailing={
                  <div className="overflow-hidden relative shrink-0 size-[32px] ml-auto">
                    <div className="absolute inset-[22.92%_25%_22.92%_41.67%]">
                      <img src={imgChevronRight} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
              />

              <MenuItem
                icon={
                  <div className="overflow-hidden relative shrink-0 size-[28px]">
                    <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                      <img src={imgMenuRorrEmblem} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
                label="dev-app.rorr.club"
                trailing={
                  <div className="overflow-hidden relative shrink-0 size-[24px] ml-auto">
                    <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                      <img src={imgExternalLink} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
              />

              <MenuItem
                icon={null}
                label="Terms of use"
                trailing={
                  <div className="overflow-hidden relative shrink-0 size-[24px] ml-auto">
                    <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                      <img src={imgExternalLink} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
              />

              <MenuItem
                icon={null}
                label="Privacy policy"
                trailing={
                  <div className="overflow-hidden relative shrink-0 size-[24px] ml-auto">
                    <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                      <img src={imgExternalLink} className="absolute inset-0 w-full h-full" alt="" />
                    </div>
                  </div>
                }
              />
            </div>

            <div className="h-0 shrink-0 w-full relative">
              <div className="absolute inset-[-0.5px_0]">
                <img src={imgHDivider} alt="" className="block w-full h-full" />
              </div>
            </div>

            {/* RORR Emblem footer */}
            <div className="h-[54px] overflow-hidden relative shrink-0 w-[64px]">
              <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
                <img src={imgEmblemSubtract0} className="absolute inset-0 w-full h-full" alt="" />
              </div>
              <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
                <img src={imgEmblemSubtract1} className="absolute inset-0 w-full h-full" alt="" />
              </div>
              <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
                <img src={imgEmblemSubtract2} className="absolute inset-0 w-full h-full" alt="" />
              </div>
              <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
                <img src={imgEmblemVectorStroke} className="absolute inset-0 w-full h-full" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* UI Header (top, absolute) */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-hidden p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            aria-label="close"
            className="flex gap-[10px] items-center justify-center shrink-0 size-[24px] relative"
          >
            <div className="absolute inset-0 rounded-[30px] w-full h-full">
              <img src={imgCloseBg} className="absolute inset-0 w-full h-full" alt="" />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[28.59%]">
                <img src={imgCloseX} className="absolute inset-0 w-full h-full" alt="" />
              </div>
            </div>
          </button>

          <div className="relative flex gap-[8px] items-center justify-center shrink-0 size-[24px]">
            <div className="overflow-hidden relative shrink-0 size-[32px]">
              <div className="absolute inset-[8.33%] overflow-hidden">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img src={imgMailbox709} className="absolute inset-0 w-full h-full" alt="" />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img src={imgMailbox708} className="absolute inset-0 w-full h-full" alt="" />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img src={imgMailboxRect} className="absolute inset-0 w-full h-full" alt="" />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 left-[-10px] flex flex-col items-center justify-center p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-white whitespace-nowrap">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
