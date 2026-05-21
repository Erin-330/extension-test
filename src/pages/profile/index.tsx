import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/dc0027da-4429-4e8e-b433-61eb24e1d0b6'
const imgClose = 'https://www.figma.com/api/mcp/asset/a36c2e60-44cd-4c42-9a4c-276df4a10f8a'
const imgIconUser = 'https://www.figma.com/api/mcp/asset/f49975e0-bfbd-4007-acd9-23f221675fda'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/aa961882-58be-4501-abc6-87bc817203f1'
const imgHighLight = 'https://www.figma.com/api/mcp/asset/d48effa0-3bd2-4b99-bf3e-34262f8d59ad'
const imgInnerLine = 'https://www.figma.com/api/mcp/asset/8fd3874f-c179-4e0f-b6b9-97500207feab'
const imgSparkle = 'https://www.figma.com/api/mcp/asset/5a5dac01-5d0b-4da3-87eb-c9479ddfac11'
const imgVDivider = 'https://www.figma.com/api/mcp/asset/1cca24ea-5c1c-4039-8400-41d94642082c'
const imgLightning = 'https://www.figma.com/api/mcp/asset/ce85f3f5-3620-429c-8f09-e6a0cd92e195'
const imgPlus = 'https://www.figma.com/api/mcp/asset/a8913597-f272-446c-a44e-a23cc7533c78'
const imgHDivider = 'https://www.figma.com/api/mcp/asset/1c960510-2f7c-4830-a3a8-4c3fbf7a6011'
const imgFollowIcon = 'https://www.figma.com/api/mcp/asset/5a02d695-340c-4262-a713-718ec10b0d9e'
const imgChevron = 'https://www.figma.com/api/mcp/asset/6e80301b-1f5a-4acb-a9d7-958553c49038'
const imgPurchaseIcon = 'https://www.figma.com/api/mcp/asset/451f5428-4ecc-4736-acd8-d66d31d9c09a'
const imgPurchaseDollar = 'https://www.figma.com/api/mcp/asset/88f1a8f3-1f27-4b1e-aa5b-cd899438e01f'
const imgBoostIcon = 'https://www.figma.com/api/mcp/asset/773b3dad-7386-4ac7-bc50-ae95d1da54a7'
const imgRorrIcon = 'https://www.figma.com/api/mcp/asset/6306c0cd-dfe4-42ce-9d27-a2b0df07c060'
const imgExternal = 'https://www.figma.com/api/mcp/asset/76e5b558-a9ed-4625-942b-1c1593f931b3'
const imgMail1 = 'https://www.figma.com/api/mcp/asset/587a6db6-18ce-48a6-a299-4bf4a77062a8'
const imgMail2 = 'https://www.figma.com/api/mcp/asset/06283217-c439-4d1b-afda-b3e76f8f03c5'
const imgMail3 = 'https://www.figma.com/api/mcp/asset/3e0ae32f-23d5-4816-a966-f7d8ed37761d'
const imgEmblem1 = 'https://www.figma.com/api/mcp/asset/2b0500f3-fc7d-4104-8dfc-f88b0eef6257'
const imgEmblem2 = 'https://www.figma.com/api/mcp/asset/eceb1cde-5a36-4546-a932-79b325ec7986'
const imgEmblem3 = 'https://www.figma.com/api/mcp/asset/6044dda9-243b-49f0-8294-8a3a897efbb2'
const imgEmblem4 = 'https://www.figma.com/api/mcp/asset/8e8491a1-277c-4a15-8e00-118885acac1d'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

type Props = { onNavigate: (page: string) => void }

type MenuRowProps = {
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
      className="flex gap-[4px] items-center p-[10px] w-full shrink-0 text-left"
    >
      {icon}
      <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black flex-1 whitespace-nowrap">
        {label}
      </p>
      {trailing ?? (
        <div className="relative size-[32px] overflow-clip shrink-0">
          <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
            <img alt="" src={imgChevron} className="absolute inset-0 size-full shrink-0" />
          </div>
        </div>
      )}
    </button>
  )
}

function Avatar() {
  return (
    <div className="flex items-start justify-center shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img alt="" src={imgIconUser} className="absolute inset-0 size-full shrink-0" />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img alt="" src={imgGradeBorder} className="absolute inset-0 size-full shrink-0" />
          <div className="absolute inset-[5%]">
            <img alt="" src={imgHighLight} className="absolute inset-0 size-full shrink-0" />
          </div>
          <div className="absolute inset-[6%]">
            <img alt="" src={imgInnerLine} className="absolute inset-0 size-full shrink-0" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-h-px rounded-[16px] w-full relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] z-10">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="size-[24px] relative flex items-center justify-center"
          >
            <img alt="" src={imgHeaderButtonShape} className="absolute inset-0 size-full shrink-0" />
            <div className="absolute inset-[8.33%] flex items-center justify-center">
              <div className="absolute inset-[28.59%]">
                <img alt="close" src={imgClose} className="absolute inset-0 size-full shrink-0" />
              </div>
            </div>
          </button>
          <div className="relative size-[24px] flex items-center justify-center">
            <div className="relative size-[32px] overflow-clip">
              <div className="absolute inset-[8.33%] overflow-clip">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img alt="" src={imgMail1} className="absolute inset-0 size-full shrink-0" />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img alt="" src={imgMail2} className="absolute inset-0 size-full shrink-0" />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img alt="" src={imgMail3} className="absolute inset-0 size-full shrink-0" />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 left-[-10px] flex items-center justify-center p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2]">
                2
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          <div className="flex flex-wrap gap-[16px] items-start w-full shrink-0">
            <Avatar />
            <div className="flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black flex-[1_0_0] min-w-px overflow-hidden text-ellipsis whitespace-nowrap leading-none">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-start w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="relative size-[20px] overflow-clip shrink-0">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img alt="" src={imgSparkle} className="absolute inset-0 size-full shrink-0" />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap"
                    style={{
                      background:
                        'linear-gradient(to bottom, #f9d9ff 0%, #e08fee 4.327%, #c135da 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="relative self-stretch w-0 shrink-0">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img alt="" src={imgVDivider} className="block size-full shrink-0" />
                  </div>
                </div>
                <p className="font-['Pretendard',sans-serif] font-extrabold text-[16px] text-black uppercase leading-[1.2] flex-[1_0_0]">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <div className="relative size-[20px] overflow-clip shrink-0">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" src={imgLightning} className="absolute inset-0 size-full shrink-0" />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[#00b395] text-[16px] leading-[20px]">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <div className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] size-[20px]">
                  <div className="relative size-[16px] overflow-clip shrink-0">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" src={imgPlus} className="absolute inset-0 size-full shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0 w-full shrink-0 relative">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" src={imgHDivider} className="block size-full shrink-0" />
            </div>
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full flex-[1_0_0] min-h-0 overflow-clip">
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
                    <img alt="" src={imgFollowIcon} className="absolute inset-0 size-full shrink-0" />
                  </div>
                </div>
              }
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                    <img alt="" src={imgPurchaseIcon} className="absolute inset-0 size-full shrink-0" />
                  </div>
                  <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
                    <img alt="" src={imgPurchaseDollar} className="absolute inset-0 size-full shrink-0" />
                  </div>
                </div>
              }
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute inset-[0_20.83%_0_22.92%]">
                    <div className="absolute inset-[5.85%_10.2%]">
                      <img alt="" src={imgBoostIcon} className="absolute inset-0 size-full shrink-0" />
                    </div>
                  </div>
                </div>
              }
              label="Boost List"
            />
            <MenuRow
              icon={
                <div className="relative size-[28px] overflow-clip shrink-0">
                  <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                    <img alt="" src={imgRorrIcon} className="absolute inset-0 size-full shrink-0" />
                  </div>
                </div>
              }
              label="dev-app.rorr.club"
              trailing={
                <div className="relative size-[24px] overflow-clip shrink-0">
                  <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                    <img alt="" src={imgExternal} className="absolute inset-0 size-full shrink-0" />
                  </div>
                </div>
              }
            />
            <MenuRow
              label="Terms of use"
              trailing={
                <div className="relative size-[24px] overflow-clip shrink-0">
                  <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                    <img alt="" src={imgExternal} className="absolute inset-0 size-full shrink-0" />
                  </div>
                </div>
              }
            />
            <MenuRow
              label="Privacy policy"
              trailing={
                <div className="relative size-[24px] overflow-clip shrink-0">
                  <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
                    <img alt="" src={imgExternal} className="absolute inset-0 size-full shrink-0" />
                  </div>
                </div>
              }
            />
          </div>

          <div className="h-0 w-full shrink-0 relative">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" src={imgHDivider} className="block size-full shrink-0" />
            </div>
          </div>

          <div className="h-[54px] w-[64px] relative overflow-clip shrink-0">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img alt="" src={imgEmblem1} className="absolute inset-0 size-full shrink-0" />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img alt="" src={imgEmblem2} className="absolute inset-0 size-full shrink-0" />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img alt="" src={imgEmblem3} className="absolute inset-0 size-full shrink-0" />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img alt="" src={imgEmblem4} className="absolute inset-0 size-full shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
