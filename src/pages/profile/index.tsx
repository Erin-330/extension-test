import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

type Props = {
  onNavigate: (page: string) => void
}

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/7e26bb83-71b2-4c35-babf-c1002f45b83d'
const imgClose = 'https://www.figma.com/api/mcp/asset/7504074a-029b-4901-a214-8e3e20ec6595'
const imgUserSilhouette = 'https://www.figma.com/api/mcp/asset/4da54410-3116-405b-99bd-4182821bfffc'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/4d7a0af7-33a6-4fc0-a15b-24a276e7f098'
const imgHighLightStroke = 'https://www.figma.com/api/mcp/asset/037ec395-e436-4ad4-86c8-2fcbad64ccdf'
const imgInnerLineStroke = 'https://www.figma.com/api/mcp/asset/688c7ba8-aa83-4cd4-a828-8336faf5ca71'
const imgSpark = 'https://www.figma.com/api/mcp/asset/b12f2dbf-c921-4dbc-a5ee-3771314d910a'
const imgDivider = 'https://www.figma.com/api/mcp/asset/a11e0c25-a7e0-411a-a2fd-13f7d73c906b'
const imgEnergy = 'https://www.figma.com/api/mcp/asset/eedadb94-3258-46c4-8fc4-78008b50c150'
const imgPlus = 'https://www.figma.com/api/mcp/asset/da9ae3f4-f6c8-49fd-bc3f-9746c5d49c9d'
const imgRowDivider = 'https://www.figma.com/api/mcp/asset/014348ea-22e4-4f82-9540-9a11b6b42c2c'
const imgFollowIcon = 'https://www.figma.com/api/mcp/asset/36a4e561-4a22-47cb-9592-662ba9bb2c6f'
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/4ba5e073-d9b0-42fd-b132-6debe037e702'
const imgPurchaseIcon = 'https://www.figma.com/api/mcp/asset/7078c665-2bd7-42bb-8fc7-f7bd9a4e71ca'
const imgDollar = 'https://www.figma.com/api/mcp/asset/6a866400-a48e-455b-8ccd-a112c35de3d6'
const imgEnergyMenuIcon = 'https://www.figma.com/api/mcp/asset/6f88f40b-7aa9-475a-bdcb-b9c5fe81d230'
const imgExternalRorr = 'https://www.figma.com/api/mcp/asset/1cc038b1-e0b9-49ce-a5e1-537d3298a19b'
const imgExternalLink = 'https://www.figma.com/api/mcp/asset/036829ba-839d-43fa-bc2c-b9f59d515aa5'
const imgEmblemSub1 = 'https://www.figma.com/api/mcp/asset/34d113da-e4df-47af-86b2-87c695528c48'
const imgEmblemSub2 = 'https://www.figma.com/api/mcp/asset/7e5b0b4d-9d59-435f-9fd8-0772ff3f5e8b'
const imgEmblemSub3 = 'https://www.figma.com/api/mcp/asset/7e4eb778-8b45-467f-87a2-fdf2d12acac9'
const imgEmblemVector = 'https://www.figma.com/api/mcp/asset/b1295f32-6622-4b44-878e-ce1bd437b1e6'
const imgMailVec1 = 'https://www.figma.com/api/mcp/asset/e60050eb-41fc-4c95-9c92-b0551ef4c5c6'
const imgMailVec2 = 'https://www.figma.com/api/mcp/asset/407c1fc2-225a-41ed-90d9-b69cd81b550e'
const imgMailRect = 'https://www.figma.com/api/mcp/asset/3ee63bc1-d7b4-40b3-90eb-a81c400ac438'

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[10px] items-center justify-center relative shrink-0 size-[24px] cursor-pointer"
      aria-label="Close"
    >
      <div className="flex-1 h-full relative rounded-[30px]">
        <img alt="" className="absolute block inset-0 size-full" src={imgHeaderButtonShape} />
      </div>
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute inset-[28.59%]">
          <img alt="" className="absolute block inset-0 size-full" src={imgClose} />
        </div>
      </div>
    </button>
  )
}

function MailButton() {
  return (
    <div className="flex gap-[8px] items-center justify-center relative shrink-0 size-[24px]">
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%] overflow-clip">
          <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgMailVec1} />
          </div>
          <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgMailVec2} />
          </div>
          <div className="absolute inset-[18.75%_6.25%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgMailRect} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#ff6f00] bottom-0 flex flex-col items-center justify-center left-[-10px] p-[2px] rounded-[10px] w-[20px]">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2]">
          2
        </p>
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <div className="flex items-start justify-center relative shrink-0 size-[110px]">
      <div className="relative shrink-0 size-[96px]">
        <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
          <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgUserSilhouette} />
          </div>
        </div>
        <div className="absolute inset-[0.41%_0_-0.41%_0]">
          <img alt="" className="absolute block inset-0 size-full" src={imgGradeBorder} />
          <div className="absolute inset-[5%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgHighLightStroke} />
          </div>
          <div className="absolute inset-[6%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgInnerLineStroke} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuItem({
  icon,
  label,
  trailingIcon,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  trailingIcon: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] shrink-0 w-full text-left cursor-pointer"
    >
      {icon}
      <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-[normal] whitespace-nowrap">
        {label}
      </p>
      {trailingIcon}
    </button>
  )
}

function ChevronTrailing() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
        <img alt="" className="absolute block inset-0 size-full" src={imgChevronRight} />
      </div>
    </div>
  )
}

function ExternalTrailing() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[12.5%_14.58%_14.58%_20.83%]">
        <img alt="" className="absolute block inset-0 size-full" src={imgExternalLink} />
      </div>
    </div>
  )
}

function IconUiBox({ src, inset }: { src: string; inset: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute" style={{ inset }}>
        <img alt="" className="absolute block inset-0 size-full" src={src} />
      </div>
    </div>
  )
}

function EnergyIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[0_20.83%_0_22.92%]">
        <div className="absolute inset-[5.85%_10.2%]">
          <img alt="" className="absolute block inset-0 size-full" src={imgEnergyMenuIcon} />
        </div>
      </div>
    </div>
  )
}

function PurchaseIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
        <img alt="" className="absolute block inset-0 size-full" src={imgPurchaseIcon} />
      </div>
      <div className="absolute inset-[31.25%_22.92%_43.75%_60.42%]">
        <img alt="" className="absolute block inset-0 size-full" src={imgDollar} />
      </div>
    </div>
  )
}

function RorrSubIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute flex inset-[0_-10.42%] items-center justify-center">
        <div className="-scale-x-100 h-full w-full">
          <div className="overflow-clip relative size-full">
            <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
              <img alt="" className="absolute block inset-0 size-full" src={imgExternalRorr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RorrEmblem() {
  return (
    <div className="h-[54px] overflow-clip relative shrink-0 w-[64px]">
      <div className="absolute inset-[59.41%_2.37%_10.38%_84.59%]">
        <img alt="" className="absolute block inset-0 size-full" src={imgEmblemSub1} />
      </div>
      <div className="absolute inset-[55.31%_14.37%_10.38%_70.12%]">
        <img alt="" className="absolute block inset-0 size-full" src={imgEmblemSub2} />
      </div>
      <div className="absolute inset-[2.9%_25.14%_2.84%_18.94%]">
        <img alt="" className="absolute block inset-0 size-full" src={imgEmblemSub3} />
      </div>
      <div className="absolute inset-[36.92%_74.59%_10.67%_2.4%]">
        <img alt="" className="absolute block inset-0 size-full" src={imgEmblemVector} />
      </div>
    </div>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          {/* User Profile */}
          <div className="flex flex-wrap content-start gap-[16px] items-start shrink-0 w-full">
            <Avatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] overflow-hidden text-ellipsis w-full whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black leading-[normal] overflow-hidden text-ellipsis w-full whitespace-nowrap">
                {MOCK_PROFILE.displayname}
              </p>
              <div className="flex gap-[12px] items-center rounded-[8px] w-full">
                <div className="flex gap-[4px] items-center">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[8.33%_10.42%_12.5%_10.42%]">
                      <img alt="" className="absolute block inset-0 size-full" src={imgSpark} />
                    </div>
                  </div>
                  <p
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] via-[4.327%] to-[#c135da] bg-clip-text text-transparent"
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="relative self-stretch shrink-0 w-0">
                  <div className="absolute inset-[-2.5%_-0.5px]">
                    <img alt="" className="block size-full" src={imgDivider} />
                  </div>
                </div>
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold text-[16px] text-black leading-[1.2] uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[0_20.83%_0_22.92%]">
                      <div className="absolute inset-[5.85%_10.2%]">
                        <img alt="" className="absolute block inset-0 size-full" src={imgEnergy} />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[#00b395] text-[16px] leading-[20px] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <div className="bg-[#969cda] flex gap-[4px] items-center justify-center px-[12px] py-[4px] rounded-[4px] shrink-0 size-[20px]">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[18.75%_20.83%_22.92%_20.83%]">
                      <img alt="" className="absolute block inset-0 size-full" src={imgPlus} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block size-full" src={imgRowDivider} />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-[16px] items-start overflow-clip relative w-full">
            <MenuItem
              icon={
                <IconUiBox src={imgFollowIcon} inset="16.67% 12.5% 12.5% 12.5%" />
              }
              label="Follow Team & Player"
              trailingIcon={<ChevronTrailing />}
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuItem
              icon={<PurchaseIcon />}
              label="Purchase List"
              trailingIcon={<ChevronTrailing />}
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuItem
              icon={<EnergyIcon />}
              label="Boost List"
              trailingIcon={<ChevronTrailing />}
            />
            <MenuItem
              icon={<RorrSubIcon />}
              label="dev-app.rorr.club"
              trailingIcon={<ExternalTrailing />}
            />
            <MenuItem
              icon={<div className="shrink-0 size-[28px]" />}
              label="Terms of use"
              trailingIcon={<ExternalTrailing />}
            />
            <MenuItem
              icon={<div className="shrink-0 size-[28px]" />}
              label="Privacy policy"
              trailingIcon={<ExternalTrailing />}
            />
          </div>

          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block size-full" src={imgRowDivider} />
            </div>
          </div>

          <RorrEmblem />
        </div>

        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <CloseButton onClick={() => onNavigate(PAGES.MAIN)} />
          <MailButton />
        </div>
      </div>
    </div>
  )
}
