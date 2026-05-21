import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSET_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/41dc704a-b819-480f-b96a-55f51b98a162'
const ASSET_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/ffaafc42-36d4-4ed0-aa0c-37da1d8553a5'
const ASSET_HEADER_CLOSE_UNION = 'https://www.figma.com/api/mcp/asset/e62dc7c9-b7c0-4b55-9433-819e7eb4d5d9'
const ASSET_BTN_CLOSE_BG = 'https://www.figma.com/api/mcp/asset/6148e9ec-7e64-402e-95ce-adec8826a472'
const ASSET_BTN_CLOSE_X = 'https://www.figma.com/api/mcp/asset/4e664bb3-f4ee-46bf-a1cb-34cd987370ca'
const ASSET_USER_SILHOUETTE = 'https://www.figma.com/api/mcp/asset/d4da3b25-98dc-470e-a8ff-c66c87f98b73'
const ASSET_GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/ce8b6d57-ecf1-433d-9eec-3671f1306ac5'
const ASSET_HIGHLIGHT_STROKE = 'https://www.figma.com/api/mcp/asset/44489199-e26f-4a98-a85d-a53cbbdd0795'
const ASSET_INNERLINE_STROKE = 'https://www.figma.com/api/mcp/asset/74154ff8-6bf0-48fe-849f-76142dbe0d41'
const ASSET_SPARK = 'https://www.figma.com/api/mcp/asset/b319d07d-6dbc-4b16-9161-bdc838b909ba'
const ASSET_V_DIVIDER = 'https://www.figma.com/api/mcp/asset/d76e54c1-186e-4b92-b8c9-a1b78a341c8a'
const ASSET_LIGHTNING = 'https://www.figma.com/api/mcp/asset/6c75e446-c650-4ccd-9cdf-b460a13d55bc'
const ASSET_PLUS = 'https://www.figma.com/api/mcp/asset/dcd2e881-b972-4b5a-b7f9-3d2572c4616b'
const ASSET_H_DIVIDER = 'https://www.figma.com/api/mcp/asset/3caf1646-44ca-439b-be51-f60933106fc8'
const ASSET_ICON_FOLLOW = 'https://www.figma.com/api/mcp/asset/385ac1d0-0bdb-4fc7-b1a2-a27c9fb9fca4'
const ASSET_CHEVRON_R = 'https://www.figma.com/api/mcp/asset/a0ac02f6-b541-4448-8506-da1e99cb6dd0'
const ASSET_ICON_PURCHASE = 'https://www.figma.com/api/mcp/asset/f0f942ec-f434-46da-9f37-88d8c7f1c528'
const ASSET_ICON_DOLLAR = 'https://www.figma.com/api/mcp/asset/7df74bfc-5a2a-4608-8448-07324bf871fe'
const ASSET_ICON_BOOST = 'https://www.figma.com/api/mcp/asset/0e8ab3c7-ecb7-4d70-854c-2104ab2ce683'
const ASSET_RORR_LINK = 'https://www.figma.com/api/mcp/asset/4fd0cf8a-fdbb-4e57-8957-7018ed07d52b'
const ASSET_EXT_ARROW = 'https://www.figma.com/api/mcp/asset/b188578b-9398-4a5a-9f81-dcf7abf4a451'
const ASSET_EMBLEM_S1 = 'https://www.figma.com/api/mcp/asset/05baa299-101e-4b46-a8c2-df3612924a04'
const ASSET_EMBLEM_S2 = 'https://www.figma.com/api/mcp/asset/97a22205-2b1a-41c2-bc46-c902b1ec502a'
const ASSET_EMBLEM_S3 = 'https://www.figma.com/api/mcp/asset/888aab02-e5ed-452a-b741-67a996d94eb5'
const ASSET_EMBLEM_V = 'https://www.figma.com/api/mcp/asset/71c58c41-4675-4ab1-ad6b-33a1e240ac81'
const ASSET_MAIL_1 = 'https://www.figma.com/api/mcp/asset/1e40ecc7-23f8-45a3-b07b-ce8ed7dbd645'
const ASSET_MAIL_2 = 'https://www.figma.com/api/mcp/asset/dafd0391-8267-4196-8446-175438ebaa6e'
const ASSET_MAIL_3 = 'https://www.figma.com/api/mcp/asset/7fd91298-05bd-40c0-9448-2f3e0c90202f'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full shrink-0">
        <div className="flex gap-[4px] items-center justify-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] relative w-[22px] overflow-clip">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" src={ASSET_RORR_UNION_STROKE} className="absolute inset-0 size-full" />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" src={ASSET_RORR_EXCLUDE} className="absolute inset-0 size-full" />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <button
          onClick={() => onNavigate(PAGES.MAIN)}
          className="size-[12.414px] relative shrink-0"
          aria-label="close"
        >
          <img alt="" src={ASSET_HEADER_CLOSE_UNION} className="absolute inset-0 size-full" />
        </button>
      </div>

      <div className="bg-[#f0f2f5] flex flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full justify-center">
        <div className="flex flex-1 flex-col gap-[16px] h-full min-w-px items-center pt-[80px] pb-[20px] px-[16px] overflow-y-auto">
          <div className="flex flex-wrap gap-[16px] items-start w-full">
            <div className="flex items-start justify-center shrink-0 size-[110px]">
              <div className="relative shrink-0 size-[96px]">
                <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
                  <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                    <img alt="" src={ASSET_USER_SILHOUETTE} className="absolute inset-0 size-full" />
                  </div>
                </div>
                <div className="absolute inset-[0.41%_0_-0.41%_0]">
                  <img alt="" src={ASSET_GRADE_BORDER} className="absolute inset-0 size-full" />
                  <div className="absolute inset-[5%]">
                    <img alt="" src={ASSET_HIGHLIGHT_STROKE} className="absolute inset-0 size-full" />
                  </div>
                  <div className="absolute inset-[6%]">
                    <img alt="" src={ASSET_INNERLINE_STROKE} className="absolute inset-0 size-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[32px] leading-none text-black overflow-hidden text-ellipsis whitespace-nowrap">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-start rounded-[8px] w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="relative size-[20px] overflow-clip shrink-0">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img alt="" src={ASSET_SPARK} className="absolute inset-0 size-full" />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, #f9d9ff 0%, #e08fee 4.327%, #c135da 100%)',
                    }}
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="self-stretch w-0 relative shrink-0">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img alt="" src={ASSET_V_DIVIDER} className="block size-full" />
                  </div>
                </div>
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold text-[16px] leading-[1.2] text-black uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="relative size-[20px] overflow-clip shrink-0">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" src={ASSET_LIGHTNING} className="absolute inset-0 size-full" />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#00b395] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <div className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] size-[20px]">
                  <div className="relative size-[16px] overflow-clip shrink-0">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" src={ASSET_PLUS} className="absolute inset-0 size-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" src={ASSET_H_DIVIDER} className="block size-full" />
            </div>
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            <MenuRow
              iconUrl={ASSET_ICON_FOLLOW}
              iconInset="inset-[16.67%_12.5%_12.5%_12.5%]"
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              iconUrl={ASSET_ICON_PURCHASE}
              iconInset="inset-[25%_12.5%_25%_12.5%]"
              extraIconUrl={ASSET_ICON_DOLLAR}
              extraIconInset="inset-[31.25%_22.92%_43.75%_60.42%]"
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuRow
              iconUrl={ASSET_ICON_BOOST}
              iconInset="inset-[0_20.83%_0_22.92%] [&_>_div]:absolute [&_>_div]:inset-[5.85%_10.2%]"
              label="Boost List"
              onClick={() => {}}
            />
            <MenuRow
              iconUrl={ASSET_RORR_LINK}
              iconInset="inset-[2.93%_22.01%_2.81%_22.06%]"
              label="dev-app.rorr.club"
              endIconUrl={ASSET_EXT_ARROW}
              onClick={() => {}}
            />
            <MenuRow label="Terms of use" endIconUrl={ASSET_EXT_ARROW} onClick={() => {}} />
            <MenuRow label="Privacy policy" endIconUrl={ASSET_EXT_ARROW} onClick={() => {}} />
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" src={ASSET_H_DIVIDER} className="block size-full" />
            </div>
          </div>

          <div className="h-[54px] w-[64px] relative shrink-0 overflow-clip">
            <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
              <img alt="" src={ASSET_EMBLEM_S1} className="absolute inset-0 size-full" />
            </div>
            <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
              <img alt="" src={ASSET_EMBLEM_S2} className="absolute inset-0 size-full" />
            </div>
            <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
              <img alt="" src={ASSET_EMBLEM_S3} className="absolute inset-0 size-full" />
            </div>
            <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
              <img alt="" src={ASSET_EMBLEM_V} className="absolute inset-0 size-full" />
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="relative size-[24px] flex items-center justify-center shrink-0"
            aria-label="close"
          >
            <div className="absolute inset-0 rounded-[30px]">
              <img alt="" src={ASSET_BTN_CLOSE_BG} className="absolute inset-0 size-full" />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[28.59%]">
                <img alt="" src={ASSET_BTN_CLOSE_X} className="absolute inset-0 size-full" />
              </div>
            </div>
          </button>
          <div className="relative size-[24px] shrink-0">
            <div className="absolute inset-0 size-[32px] -translate-y-[4px] -translate-x-[4px] overflow-clip">
              <div className="absolute inset-[8.33%] overflow-clip">
                <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
                  <img alt="" src={ASSET_MAIL_1} className="absolute inset-0 size-full" />
                </div>
                <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
                  <img alt="" src={ASSET_MAIL_2} className="absolute inset-0 size-full" />
                </div>
                <div className="absolute inset-[18.75%_6.25%]">
                  <img alt="" src={ASSET_MAIL_3} className="absolute inset-0 size-full" />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 left-[-10px] flex flex-col items-center justify-center p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-white whitespace-nowrap">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type MenuRowProps = {
  iconUrl?: string
  iconInset?: string
  extraIconUrl?: string
  extraIconInset?: string
  label: string
  endIconUrl?: string
  onClick: () => void
}

function MenuRow({ iconUrl, iconInset, extraIconUrl, extraIconInset, label, endIconUrl, onClick }: MenuRowProps) {
  const showChevron = !endIconUrl
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] w-full text-left"
    >
      {iconUrl && (
        <div className="relative size-[28px] overflow-clip shrink-0">
          <div className={`absolute ${iconInset ?? 'inset-0'}`}>
            <img alt="" src={iconUrl} className="absolute inset-0 size-full" />
          </div>
          {extraIconUrl && (
            <div className={`absolute ${extraIconInset ?? 'inset-0'}`}>
              <img alt="" src={extraIconUrl} className="absolute inset-0 size-full" />
            </div>
          )}
        </div>
      )}
      <p className="font-['Pretendard',sans-serif] font-bold text-[20px] leading-none text-black whitespace-nowrap">
        {label}
      </p>
      <div className="relative size-[32px] overflow-clip shrink-0">
        {showChevron ? (
          <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
            <img alt="" src={ASSET_CHEVRON_R} className="absolute inset-0 size-full" />
          </div>
        ) : (
          <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
            <img alt="" src={endIconUrl} className="absolute inset-0 size-full" />
          </div>
        )}
      </div>
    </button>
  )
}
