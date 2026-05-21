import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/36aa6e6f-54ff-43ec-a15f-46a7e79c6b3a',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/fa04cb0d-932f-4f98-8cbf-abbcb36947ef',
  closeHeaderIcon: 'https://www.figma.com/api/mcp/asset/933016f1-bc0a-40aa-a065-00fad07266a3',
  closeBtnBg: 'https://www.figma.com/api/mcp/asset/82877264-7a4d-4e55-a710-1361c0f737a2',
  closeBtnX: 'https://www.figma.com/api/mcp/asset/5eaa100f-77d4-4e4c-9dbe-309e3190142d',
  userSilhouette: 'https://www.figma.com/api/mcp/asset/3a4c31b6-a2af-492c-8132-a904591b86f4',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/327333b8-2631-4b98-b644-edca99311cf4',
  highLightStroke: 'https://www.figma.com/api/mcp/asset/e18e8ef2-eaf6-4b74-9ff8-36955a65b881',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/306e214e-7056-48b3-b328-4983f0334183',
  sparkIcon: 'https://www.figma.com/api/mcp/asset/3d47dce2-f9fe-40c0-8ada-d733f24ce7b9',
  vDivider: 'https://www.figma.com/api/mcp/asset/91b66b20-4f64-4912-9472-e4e37debffec',
  lightningCash: 'https://www.figma.com/api/mcp/asset/20c4d0d8-f62a-4915-96a7-dcdb69b5ced5',
  plusIcon: 'https://www.figma.com/api/mcp/asset/06c02f2d-13cc-4601-9a3b-0dbc0de3660a',
  hDivider: 'https://www.figma.com/api/mcp/asset/23705b7a-ca3b-4e73-b476-29e3cd4ec2eb',
  followAddIcon: 'https://www.figma.com/api/mcp/asset/11fe4fc4-7a78-4129-9afc-98e936d4e45e',
  chevronRight: 'https://www.figma.com/api/mcp/asset/e4f91077-56ae-4ba2-bf1d-54bfc456f005',
  purchaseUnion: 'https://www.figma.com/api/mcp/asset/e4ec49d1-23f6-4f36-9250-899534237e65',
  purchaseDollar: 'https://www.figma.com/api/mcp/asset/f6f890e0-23bc-4b8a-8eec-b495d8c0be04',
  boostLightning: 'https://www.figma.com/api/mcp/asset/cb83f15c-858b-4529-9414-c5d1bb740532',
  rorrEmblemHeadSmall: 'https://www.figma.com/api/mcp/asset/9ba58f32-a45d-41a6-b181-1669856576b4',
  externalLink: 'https://www.figma.com/api/mcp/asset/684879ed-0568-46d6-b35f-9b88e974321a',
  emblemSub1: 'https://www.figma.com/api/mcp/asset/ee5eefd8-e4eb-48d9-bf8b-bbf8bd3264cc',
  emblemSub2: 'https://www.figma.com/api/mcp/asset/1fa6e889-d978-4af7-b35a-7bf7a13574d6',
  emblemSub3: 'https://www.figma.com/api/mcp/asset/3748a213-d7a5-4144-af31-bb455b33d987',
  emblemStroke: 'https://www.figma.com/api/mcp/asset/65c8eeea-189f-4643-a7f4-af4c6e010042',
  mailVec1: 'https://www.figma.com/api/mcp/asset/ce48d0a2-0af3-41e9-b314-bf3f65d54fa7',
  mailVec2: 'https://www.figma.com/api/mcp/asset/1db501f9-8b31-4a90-b9f7-d0ddabb00180',
  mailRect: 'https://www.figma.com/api/mcp/asset/b962f7cd-ca2a-4896-aa12-23588248f250',
}

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
            <img src={ASSETS.userSilhouette} className="absolute inset-0 max-w-none size-full block shrink-0" alt="" />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img src={ASSETS.gradeBorder} className="absolute inset-0 max-w-none size-full block shrink-0" alt="" />
          <div className="absolute inset-[5%]">
            <img src={ASSETS.highLightStroke} className="absolute inset-0 max-w-none size-full block shrink-0" alt="" />
          </div>
          <div className="absolute inset-[6%]">
            <img src={ASSETS.innerLineStroke} className="absolute inset-0 max-w-none size-full block shrink-0" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

interface MenuItemProps {
  icon?: string
  iconInset?: string
  label: string
  onClick?: () => void
  external?: boolean
  size?: 'default' | 'large'
}

function MenuItem({ icon, iconInset, label, onClick, external = false, size = 'default' }: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] w-full shrink-0 text-left"
    >
      {icon && (
        <div className={`overflow-clip relative ${size === 'large' ? 'size-[28px]' : 'size-[28px]'} shrink-0`}>
          <img src={icon} className={`absolute ${iconInset ?? 'inset-0'} block max-w-none size-full shrink-0`} alt="" />
        </div>
      )}
      <span className="flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-tight">
        {label}
      </span>
      <div className="size-[24px] overflow-clip relative shrink-0">
        {external ? (
          <img src={ASSETS.externalLink} className="absolute inset-[12.5%_14.58%_14.58%_20.83%] block max-w-none size-full shrink-0" alt="" />
        ) : (
          <img src={ASSETS.chevronRight} className="absolute inset-[22.92%_25%_22.92%_41.67%] block max-w-none shrink-0" alt="" />
        )}
      </div>
    </button>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between px-[4px] w-full opacity-[0.66] shrink-0">
        <div className="flex gap-[4px] items-center justify-center shrink-0">
          <div className="relative h-[18px] w-[22px] overflow-hidden -scale-y-100 rotate-180">
            <img src={ASSETS.rorrLogoStroke} className="absolute inset-0 w-full h-full shrink-0" alt="" />
            <img src={ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full shrink-0" alt="" />
          </div>
          <p className="text-white text-[14px] font-['Pretendard',sans-serif] font-light leading-[20px] whitespace-nowrap">RORR</p>
        </div>
        <button onClick={() => onNavigate(PAGES.MAIN)} className="size-[12.414px] shrink-0">
          <img src={ASSETS.closeHeaderIcon} className="w-full h-full shrink-0" alt="" />
        </button>
      </div>

      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start justify-center min-h-0 min-w-[288px] overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-0 pb-[20px] pt-[80px] px-[16px] overflow-y-auto">

          <div className="flex flex-wrap gap-[16px] items-start w-full shrink-0">
            <Avatar />
            <div className="flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black leading-none whitespace-nowrap overflow-hidden text-ellipsis flex-[1_0_0]">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-center w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="size-[20px] relative overflow-clip shrink-0">
                    <img src={ASSETS.sparkIcon} className="absolute inset-[8.33%_10.42%_12.5%_10.42%] block max-w-none size-full shrink-0" alt="" />
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] to-[#c135da] bg-clip-text text-transparent">
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="self-stretch w-px bg-[#ced6e6] shrink-0">
                  <img src={ASSETS.vDivider} className="block max-w-none h-full shrink-0" alt="" />
                </div>
                <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-extrabold text-[16px] text-black leading-[1.2] uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="size-[20px] relative overflow-clip shrink-0">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img src={ASSETS.lightningCash} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[#00b395] text-[16px] leading-[20px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <button className="bg-[#969cda] flex gap-[4px] items-center justify-center rounded-[4px] size-[20px] shrink-0">
                  <div className="size-[16px] relative overflow-clip shrink-0">
                    <img src={ASSETS.plusIcon} className="absolute inset-[18.75%_20.83%_22.92%_20.83%] block max-w-none size-full shrink-0" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#ced6e6] shrink-0" />

          <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
            <MenuItem
              icon={ASSETS.followAddIcon}
              iconInset="inset-[16.67%_12.5%_12.5%_12.5%]"
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuItem
              icon={ASSETS.purchaseUnion}
              iconInset="inset-[25%_12.5%_25%_12.5%]"
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuItem
              icon={ASSETS.boostLightning}
              iconInset="inset-[0_20.83%_0_22.92%]"
              label="Boost List"
            />
            <MenuItem
              icon={ASSETS.rorrEmblemHeadSmall}
              iconInset="inset-[2.93%_22.01%_2.81%_22.06%]"
              label="dev-app.rorr.club"
              external
            />
            <MenuItem label="Terms of use" external />
            <MenuItem label="Privacy policy" external />
          </div>

          <div className="h-px w-full bg-[#ced6e6] shrink-0" />

          <div className="relative h-[54px] w-[64px] overflow-clip shrink-0">
            <img src={ASSETS.emblemSub1} className="absolute inset-[59.41%_2.37%_10.38%_84.59%] block max-w-none shrink-0" alt="" />
            <img src={ASSETS.emblemSub2} className="absolute inset-[55.31%_14.37%_10.38%_70.12%] block max-w-none shrink-0" alt="" />
            <img src={ASSETS.emblemSub3} className="absolute inset-[2.9%_25.14%_2.84%_18.94%] block max-w-none shrink-0" alt="" />
            <img src={ASSETS.emblemStroke} className="absolute inset-[36.92%_74.59%_10.67%_2.4%] block max-w-none shrink-0" alt="" />
          </div>
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="flex items-center justify-center size-[24px] relative shrink-0"
          >
            <img src={ASSETS.closeBtnBg} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <img src={ASSETS.closeBtnX} className="absolute inset-[28.59%] block max-w-none shrink-0" alt="" />
            </div>
          </button>
          <div className="relative size-[24px] shrink-0">
            <div className="size-[32px] absolute -top-1 -left-1 overflow-clip">
              <div className="absolute inset-[8.33%] overflow-clip">
                <img src={ASSETS.mailVec1} className="absolute inset-[49.26%_9.68%_22.18%_9.68%] block max-w-none shrink-0" alt="" />
                <img src={ASSETS.mailVec2} className="absolute inset-[22.18%_9.68%_41.64%_9.68%] block max-w-none shrink-0" alt="" />
                <img src={ASSETS.mailRect} className="absolute inset-[18.75%_6.25%] block max-w-none shrink-0" alt="" />
              </div>
            </div>
            <div className="absolute -left-[10px] bottom-0 bg-[#ff6f00] rounded-[10px] w-[20px] flex items-center justify-center p-[2px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2] whitespace-nowrap">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
