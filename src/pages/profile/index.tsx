import { PAGES } from '../../shared/constants/pages'
import { FOLLOW_ASSETS } from '../../features/follow/ui/assets'

type Props = { onNavigate: (page: string) => void }

const PROFILE_ASSETS = {
  closeButtonBg: 'https://www.figma.com/api/mcp/asset/0c399707-5fad-40f3-8e2f-f4c5c4874f41',
  closeButtonX: 'https://www.figma.com/api/mcp/asset/5fb5af20-b463-4b4b-a8e4-53ac0067fbcd',
  userIcon: 'https://www.figma.com/api/mcp/asset/d9d57e01-a422-49d1-8ee4-39a24f3235fa',
  topRightX: 'https://www.figma.com/api/mcp/asset/b8272202-a519-402d-9ccd-734475840762',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/4b4e0b78-992e-4d21-9bf5-98165a92a560',
  highlightStroke: 'https://www.figma.com/api/mcp/asset/2d865dbd-c093-498c-9c74-d2b7474069e7',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/7f30d953-de9b-4bd8-b42a-8693f9c54df1',
  sparkIcon: 'https://www.figma.com/api/mcp/asset/aee61b0d-9752-4fe6-999a-ebf0198d37c9',
  statDivider: 'https://www.figma.com/api/mcp/asset/2bd8188a-525c-47ed-98aa-c8a13b67f6de',
  lightningIcon: 'https://www.figma.com/api/mcp/asset/5d44caa3-f79d-440e-b56a-072da39c7ff4',
  plusIcon: 'https://www.figma.com/api/mcp/asset/8d084e86-0387-481b-9688-371dafd7f87b',
  divider: 'https://www.figma.com/api/mcp/asset/6139e60f-f673-444c-a891-ea4e75bc641f',
  followIcon: 'https://www.figma.com/api/mcp/asset/fd943bb2-222c-493a-9e20-4ac7aeecc6f0',
  chevronRight: 'https://www.figma.com/api/mcp/asset/f82fd088-d5f3-4917-8edd-388d903d3094',
  purchaseIconUnion: 'https://www.figma.com/api/mcp/asset/e711f86c-f930-4e27-98eb-c24a5547a128',
  purchaseIconDollar: 'https://www.figma.com/api/mcp/asset/218b94fd-2a87-4a69-a471-86ee3ac4dbca',
  boostListIcon: 'https://www.figma.com/api/mcp/asset/63e26f7b-ddc7-4464-9e19-88f41b2458b2',
  rorrEmblemSmall: 'https://www.figma.com/api/mcp/asset/d13d17e0-6a70-4895-b78f-0837c363e44b',
  externalLink: 'https://www.figma.com/api/mcp/asset/dbd8c48c-27a9-4bc0-b0b8-9d5c5618fc5b',
  emblemSubtract: 'https://www.figma.com/api/mcp/asset/f0656bfb-6626-4d4c-859e-b46c58b6747c',
  emblemSubtract1: 'https://www.figma.com/api/mcp/asset/bb675738-d621-4650-99f3-fd55b2e04123',
  emblemSubtract2: 'https://www.figma.com/api/mcp/asset/653e3e9c-a560-4fe8-8d60-b5ab803341ab',
  emblemVectorStroke: 'https://www.figma.com/api/mcp/asset/ce21e36f-76f9-4258-a0c2-42b92e4852d9',
  mailboxV709: 'https://www.figma.com/api/mcp/asset/2c196351-ed26-4b76-8c66-b543c0de296e',
  mailboxV708: 'https://www.figma.com/api/mcp/asset/3d80cbc5-0608-4505-b533-cb63f008415d',
  mailboxRect: 'https://www.figma.com/api/mcp/asset/a66eaea3-8e9c-4166-864c-cfdf750eca86',
} as const

const MENU_ITEMS = [
  { id: 'follow', label: 'Follow Team & Player', icon: PROFILE_ASSETS.followIcon, page: PAGES.FOLLOW_LEAGUE, external: false },
  { id: 'purchase', label: 'Purchase List', icon: 'purchase', page: PAGES.PURCHASE_LIST, external: false },
  { id: 'boost', label: 'Boost List', icon: PROFILE_ASSETS.boostListIcon, page: PAGES.PROFILE, external: false },
  { id: 'dev', label: 'dev-app.rorr.club', icon: PROFILE_ASSETS.rorrEmblemSmall, page: '', external: true },
  { id: 'terms', label: 'Terms of use', icon: '', page: '', external: true },
  { id: 'privacy', label: 'Privacy policy', icon: '', page: '', external: true },
]

function AppTopBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
      <div className="flex gap-[4px] items-center justify-center">
        <div className="relative h-[18px] w-[22px]">
          <img alt="" src={FOLLOW_ASSETS.rorrLogoStroke} className="absolute inset-0 size-full" />
          <img alt="" src={FOLLOW_ASSETS.rorrLogoExclude} className="absolute inset-0 size-full" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          RORR
        </p>
      </div>
      <button type="button" onClick={onClose} className="size-[12.414px] flex items-center justify-center">
        <img alt="close" src={PROFILE_ASSETS.topRightX} className="block size-full" />
      </button>
    </div>
  )
}

function GradeAvatar() {
  return (
    <div className="flex items-start justify-center size-[110px] shrink-0">
      <div className="relative size-[96px]">
        <div className="absolute inset-[0.41%_0_-0.41%_0] bg-[#bbbfd0] rounded-full overflow-hidden flex items-end justify-center">
          <img alt="" src={PROFILE_ASSETS.userIcon} className="block w-[80%] h-[83%] object-contain" />
        </div>
        <img alt="" src={PROFILE_ASSETS.gradeBorder} className="absolute inset-0 size-full" />
        <img alt="" src={PROFILE_ASSETS.highlightStroke} className="absolute inset-[5%] size-[90%]" />
        <img alt="" src={PROFILE_ASSETS.innerLineStroke} className="absolute inset-[6%] size-[88%]" />
      </div>
    </div>
  )
}

function ChevronRight() {
  return (
    <div className="size-[32px] flex items-center justify-center shrink-0">
      <img alt="" src={PROFILE_ASSETS.chevronRight} className="block w-[5.3px] h-[10.7px]" />
    </div>
  )
}

function ExternalIcon() {
  return (
    <div className="size-[24px] flex items-center justify-center shrink-0">
      <img alt="" src={PROFILE_ASSETS.externalLink} className="block w-[15.5px] h-[17.3px]" />
    </div>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppTopBar onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative bg-[#f0f2f5] flex-1 min-h-0 overflow-hidden rounded-[16px] w-full">
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-[12px]">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="relative size-[24px] rounded-full overflow-hidden flex items-center justify-center"
            aria-label="close"
          >
            <img alt="" src={PROFILE_ASSETS.closeButtonBg} className="absolute inset-0 size-full" />
            <img alt="" src={PROFILE_ASSETS.closeButtonX} className="relative w-[8px] h-[8px]" />
          </button>
          <div className="relative size-[24px] flex items-center justify-center">
            <div className="relative size-[32px] flex items-center justify-center">
              <div className="relative w-[27px] h-[20px]">
                <img alt="" src={PROFILE_ASSETS.mailboxRect} className="absolute inset-0 size-full" />
                <img alt="" src={PROFILE_ASSETS.mailboxV708} className="absolute inset-[22%_9.68%_41.64%_9.68%] size-full" style={{ width: 'auto', height: 'auto' }} />
                <img alt="" src={PROFILE_ASSETS.mailboxV709} className="absolute inset-[49%_9.68%_22.18%_9.68%]" style={{ width: 'auto', height: 'auto' }} />
              </div>
            </div>
            <div className="absolute -left-[10px] bottom-0 bg-[#ff6f00] flex flex-col items-center justify-center p-[2px] rounded-[10px] w-[20px] h-[20px]">
              <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-white leading-[1.2]">
                2
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] h-full overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          <div className="flex flex-wrap content-start gap-[16px] items-start w-full shrink-0">
            <GradeAvatar />
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black w-full overflow-hidden text-ellipsis whitespace-nowrap">
                yeomdw@gmail.com
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black overflow-hidden text-ellipsis whitespace-nowrap">
                  dany13
                </p>
              </div>
              <div className="flex gap-[12px] items-start rounded-[8px] w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="size-[20px] flex items-center justify-center">
                    <img alt="" src={PROFILE_ASSETS.sparkIcon} className="block w-[15.7px] h-[15.8px]" />
                  </div>
                  <p className="bg-clip-text bg-gradient-to-b from-[#f9d9ff] via-[#e08fee] via-[4.327%] to-[#c135da] text-transparent font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px]">
                    45,678
                  </p>
                </div>
                <div className="self-stretch w-[1px] bg-[#ced6e6]" />
                <p className="flex-1 font-['Pretendard',sans-serif] font-extrabold text-[16px] text-black uppercase leading-[1.2]">
                  Hall of fame
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <div className="size-[20px] flex items-center justify-center">
                    <img alt="" src={PROFILE_ASSETS.lightningIcon} className="block w-[10px] h-[17.3px]" />
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[#00b395] text-[16px] leading-[20px]">
                    12,345
                  </p>
                </div>
                <button
                  type="button"
                  className="bg-[#969cda] flex items-center justify-center px-[12px] py-[4px] rounded-[4px] size-[20px]"
                  aria-label="add energy"
                >
                  <img alt="" src={PROFILE_ASSETS.plusIcon} className="block w-[9.3px] h-[9.3px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#ced6e6] shrink-0" />

          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-0 w-full">
            {MENU_ITEMS.map((item) => {
              const isPurchase = item.icon === 'purchase'
              const hasIcon = isPurchase || !!item.icon
              const isClickable = !!item.page
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => isClickable && onNavigate(item.page)}
                  className="flex gap-[4px] items-center p-[10px] w-full shrink-0 text-left"
                >
                  {hasIcon && (
                    <div className="size-[28px] flex items-center justify-center shrink-0">
                      {isPurchase ? (
                        <div className="relative size-[28px]">
                          <img alt="" src={PROFILE_ASSETS.purchaseIconUnion} className="absolute inset-[25%_12.5%] size-[75%]" style={{ width: 'auto', height: 'auto' }} />
                          <img alt="" src={PROFILE_ASSETS.purchaseIconDollar} className="absolute inset-[31.25%_22.92%_43.75%_60.42%]" />
                        </div>
                      ) : (
                        <img alt="" src={item.icon} className="block w-[21px] h-[21px] object-contain" />
                      )}
                    </div>
                  )}
                  <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none">
                    {item.label}
                  </p>
                  {item.external ? <ExternalIcon /> : <ChevronRight />}
                </button>
              )
            })}
          </div>

          <div className="h-[1px] w-full bg-[#ced6e6] shrink-0" />

          <div className="relative h-[54px] w-[64px] shrink-0">
            <img alt="" src={PROFILE_ASSETS.emblemSubtract} className="absolute inset-[59.41%_2.37%_10.38%_84.59%]" />
            <img alt="" src={PROFILE_ASSETS.emblemSubtract1} className="absolute inset-[55.31%_14.37%_10.38%_70.12%]" />
            <img alt="" src={PROFILE_ASSETS.emblemSubtract2} className="absolute inset-[2.9%_25.14%_2.84%_18.94%]" />
            <img alt="" src={PROFILE_ASSETS.emblemVectorStroke} className="absolute inset-[36.92%_74.59%_10.67%_2.4%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
