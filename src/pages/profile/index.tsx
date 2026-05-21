import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const imgCloseBg =
  'https://www.figma.com/api/mcp/asset/6f867cfb-e7a6-465c-84f3-7d63411c9621'
const imgCloseX =
  'https://www.figma.com/api/mcp/asset/e0720d0f-dbc7-4f89-9f80-180920674fe9'
const imgUserUnion =
  'https://www.figma.com/api/mcp/asset/77b7f9b1-b766-47da-8219-182fae0a22ea'
const imgUnionStroke =
  'https://www.figma.com/api/mcp/asset/c1774701-12e4-423c-8d84-ab81359c18c8'
const imgExclude =
  'https://www.figma.com/api/mcp/asset/63b2c1cf-9323-4cdf-81c2-4a3b5745ad2e'
const imgClose =
  'https://www.figma.com/api/mcp/asset/61972d09-8459-47f4-b0fe-45d4a3d9bd93'
const imgGradeBorder =
  'https://www.figma.com/api/mcp/asset/25403c3a-8d36-492e-a23e-6c4d61b5a515'
const imgHighLight =
  'https://www.figma.com/api/mcp/asset/446a8674-9af0-4b8a-ac3b-ad3fc12a941f'
const imgInnerLine =
  'https://www.figma.com/api/mcp/asset/259a2423-86ea-4d8b-8476-47f81f483ec5'
const imgSparkle =
  'https://www.figma.com/api/mcp/asset/9e50a8c4-5ad2-432e-a8f1-80fd908eafe6'
const imgDivider =
  'https://www.figma.com/api/mcp/asset/a4a0a1a3-86eb-468e-a21b-2465151baf52'
const imgLightning =
  'https://www.figma.com/api/mcp/asset/d55d822e-d606-4297-8709-4247f94254dc'
const imgPlus =
  'https://www.figma.com/api/mcp/asset/9f53bc43-fcd2-42da-9a65-ec7e64171061'
const imgFollowIcon =
  'https://www.figma.com/api/mcp/asset/31b18fbe-8c35-498e-9e92-523ac5b15fdd'
const imgChevronRight =
  'https://www.figma.com/api/mcp/asset/bc87faf0-b381-4425-a3da-6ef18bbd63c0'
const imgPurchaseIcon =
  'https://www.figma.com/api/mcp/asset/65c5a21d-4f63-4830-8947-4e45c60fad11'
const imgPurchaseDollar =
  'https://www.figma.com/api/mcp/asset/90956fa3-0fc6-445b-95f8-c7e554da5bb8'
const imgBoostIcon =
  'https://www.figma.com/api/mcp/asset/73f6f717-b49a-4f26-8f76-41ce106c7dd3'
const imgRorrSmall =
  'https://www.figma.com/api/mcp/asset/2592a2a0-9277-44ce-95be-adfd91162d55'
const imgExternal =
  'https://www.figma.com/api/mcp/asset/81451a53-a508-4fb3-80b6-8aeb4c8dd1fa'
const imgEmblemS1 =
  'https://www.figma.com/api/mcp/asset/0a7e6c2d-2903-4ee9-ada6-43d36132fce0'
const imgEmblemS2 =
  'https://www.figma.com/api/mcp/asset/b11f01dd-d6d8-4b1c-908c-d34114bec2f7'
const imgEmblemS3 =
  'https://www.figma.com/api/mcp/asset/eec1fa3c-32e7-4f53-8580-878205504a4c'
const imgEmblemVec =
  'https://www.figma.com/api/mcp/asset/f5f42f2f-df4f-4012-9a84-f99c66a15582'
const imgMailV709 =
  'https://www.figma.com/api/mcp/asset/aaea5855-045d-4964-a29c-5b69dc41a829'
const imgMailV708 =
  'https://www.figma.com/api/mcp/asset/14c97dd3-7469-4ffc-9c26-bc4b9781a09b'
const imgMailRect =
  'https://www.figma.com/api/mcp/asset/85afc8bc-374b-47d3-a0e5-02cd5befd49d'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

type MenuItemProps = {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  trailingIcon?: string
}

const MenuItem = ({ icon, label, onClick, trailingIcon = imgChevronRight }: MenuItemProps) => (
  <button
    onClick={onClick}
    className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left"
  >
    {icon}
    <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black whitespace-nowrap">
      {label}
    </p>
    <img src={trailingIcon} className="size-[32px] shrink-0" alt="" />
  </button>
)

export const ProfilePage = ({ onNavigate }: Props) => {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center">
          <div className="h-[18px] relative w-[22px] overflow-hidden">
            <img src={imgUnionStroke} className="absolute inset-0 size-full shrink-0" alt="" />
            <img src={imgExclude} className="absolute inset-0 size-full shrink-0" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <img src={imgClose} className="size-[12.414px] shrink-0" alt="" />
      </div>
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto pb-[20px] pt-[80px] px-[16px] relative w-full">
          <div className="flex flex-wrap gap-[16px] items-start w-full shrink-0">
            <div className="flex items-start justify-center shrink-0 size-[110px]">
              <div className="relative shrink-0 size-[96px]">
                <div className="absolute bg-[#bbbfd0] overflow-hidden rounded-full inset-[0.41%_0_-0.41%_0]">
                  <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                    <img src={imgUserUnion} className="absolute inset-0 size-full shrink-0" alt="" />
                  </div>
                </div>
                <div className="absolute inset-[0.41%_0_-0.41%_0]">
                  <img src={imgGradeBorder} className="absolute inset-0 size-full shrink-0" alt="" />
                  <div className="absolute inset-[5%]">
                    <img src={imgHighLight} className="absolute inset-0 size-full shrink-0" alt="" />
                  </div>
                  <div className="absolute inset-[6%]">
                    <img src={imgInnerLine} className="absolute inset-0 size-full shrink-0" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black whitespace-nowrap overflow-hidden text-ellipsis">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-center w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <img src={imgSparkle} className="size-[20px] shrink-0" alt="" />
                  <span
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom, #f9d9ff 0%, #e08fee 4.327%, #c135da 100%)',
                    }}
                  >
                    {MOCK_PROFILE.exp}
                  </span>
                </div>
                <img src={imgDivider} className="h-[20px] w-px shrink-0" alt="" />
                <p className="font-['Pretendard',sans-serif] font-extrabold text-[16px] leading-[1.2] text-black uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center shrink-0">
                  <img src={imgLightning} className="size-[20px] shrink-0" alt="" />
                  <span className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#00b395]">
                    {MOCK_PROFILE.cash}
                  </span>
                </div>
                <div className="bg-[#969cda] flex items-center justify-center px-[12px] py-[4px] rounded-[4px] shrink-0 size-[20px]">
                  <img src={imgPlus} className="size-[16px] shrink-0" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full shrink-0 bg-[#ced6e6]" />
          <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
            <MenuItem
              icon={<img src={imgFollowIcon} className="size-[28px] shrink-0" alt="" />}
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuItem
              icon={
                <div className="relative size-[28px] shrink-0">
                  <img src={imgPurchaseIcon} className="absolute inset-0 size-full" alt="" />
                  <img
                    src={imgPurchaseDollar}
                    className="absolute inset-[31.25%_22.92%_43.75%_60.42%]"
                    alt=""
                  />
                </div>
              }
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuItem
              icon={<img src={imgBoostIcon} className="size-[28px] shrink-0" alt="" />}
              label="Boost List"
            />
            <MenuItem
              icon={<img src={imgRorrSmall} className="size-[28px] shrink-0" alt="" />}
              label="dev-app.rorr.club"
              trailingIcon={imgExternal}
            />
            <button className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left">
              <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black whitespace-nowrap">
                Terms of use
              </p>
              <img src={imgExternal} className="size-[24px] shrink-0" alt="" />
            </button>
            <button className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left">
              <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black whitespace-nowrap">
                Privacy policy
              </p>
              <img src={imgExternal} className="size-[24px] shrink-0" alt="" />
            </button>
          </div>
          <div className="h-px w-full shrink-0 bg-[#ced6e6]" />
          <div className="h-[54px] w-[64px] relative shrink-0">
            <img src={imgEmblemS1} className="absolute inset-[59.41%_2.37%_10.38%_84.59%]" alt="" />
            <img src={imgEmblemS2} className="absolute inset-[55.31%_14.37%_10.38%_70.12%]" alt="" />
            <img src={imgEmblemS3} className="absolute inset-[2.9%_25.14%_2.84%_18.94%]" alt="" />
            <img src={imgEmblemVec} className="absolute inset-[36.92%_74.59%_10.67%_2.4%]" alt="" />
          </div>
        </div>
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="flex items-center justify-center shrink-0 size-[24px] relative rounded-full"
            aria-label="close"
          >
            <img src={imgCloseBg} className="absolute inset-0 size-full shrink-0" alt="" />
            <img src={imgCloseX} className="absolute inset-[28%] size-[44%] shrink-0" alt="" />
          </button>
          <div className="flex items-center justify-center shrink-0 size-[24px] relative">
            <div className="relative size-[32px] shrink-0">
              <img src={imgMailV709} className="absolute inset-[49.26%_9.68%_22.18%_9.68%]" alt="" />
              <img src={imgMailV708} className="absolute inset-[22.18%_9.68%_41.64%_9.68%]" alt="" />
              <img src={imgMailRect} className="absolute inset-[18.75%_6.25%]" alt="" />
            </div>
            <div className="absolute bg-[#ff6f00] bottom-0 left-[-10px] flex items-center justify-center p-[2px] rounded-[10px] w-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-white">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
