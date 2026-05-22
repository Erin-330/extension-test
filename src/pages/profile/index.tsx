import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/1f993661-2c89-4884-a035-5ced62997894',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/2c23cfb2-d594-4de2-aba2-81c892fd7512',
  headerCloseX: 'https://www.figma.com/api/mcp/asset/c31f0656-5b49-4d21-bc88-fb5234c63ff0',
  buttonShape: 'https://www.figma.com/api/mcp/asset/39143450-a6ec-4ad0-ac3f-32e6f23293e2',
  closeIcon: 'https://www.figma.com/api/mcp/asset/5fd78162-7413-4a6e-aa82-250dfb28beea',
  iconUser: 'https://www.figma.com/api/mcp/asset/e2cd6546-6ad2-4743-99ff-ee5fee657ffa',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/5b73033a-f825-445b-8222-fc837a390137',
  highLight: 'https://www.figma.com/api/mcp/asset/f9a4f293-6d71-480a-b4dd-3ee5f6eb826f',
  innerLine: 'https://www.figma.com/api/mcp/asset/12a69de6-c527-4a33-9ec0-49ac13a9ce62',
  sparkle: 'https://www.figma.com/api/mcp/asset/a415532c-39ef-43a5-9224-a848a42c53a9',
  vDivider: 'https://www.figma.com/api/mcp/asset/fe958d83-6222-4746-8079-5f37df9a57c7',
  bolt: 'https://www.figma.com/api/mcp/asset/508aa2eb-6b97-429a-acaa-a4593c925be5',
  plus: 'https://www.figma.com/api/mcp/asset/09ae4afe-6445-4775-a106-2deec6d09245',
  hDivider: 'https://www.figma.com/api/mcp/asset/d29df1de-b626-4708-821d-7a26090a7188',
  iconFollow: 'https://www.figma.com/api/mcp/asset/381e1a68-d6b1-4fea-bc65-9200fb9f86e1',
  chevron: 'https://www.figma.com/api/mcp/asset/70f68fa9-203b-4dd1-afea-14aebbe2709d',
  iconPurchase: 'https://www.figma.com/api/mcp/asset/3148af07-3ade-4269-b6f9-99ee2e5b9324',
  iconPurchaseDollar: 'https://www.figma.com/api/mcp/asset/9f05647b-ecf9-432b-8021-68d73d3c7f17',
  iconBoost: 'https://www.figma.com/api/mcp/asset/569cad7c-5aef-4a67-b7fa-5e0bc92a5086',
  rorrSmall: 'https://www.figma.com/api/mcp/asset/73502627-13d3-4c74-a8e5-a83ffa512b3a',
  externalArrow: 'https://www.figma.com/api/mcp/asset/62a931d2-ab3f-4769-8adb-0f2b95ba94ff',
  mailbox1: 'https://www.figma.com/api/mcp/asset/80bd3455-0459-4e50-9ce8-e3382cd34414',
  mailbox2: 'https://www.figma.com/api/mcp/asset/a1f5fae9-6d8f-4123-9fe7-e2a3e3adf69f',
  mailbox3: 'https://www.figma.com/api/mcp/asset/dd6f4dd7-c81e-4e1e-b29d-a7726d5a0d28',
  emblemSubtract1: 'https://www.figma.com/api/mcp/asset/bcb97960-89eb-4407-b0fd-6ea5f647dce3',
  emblemSubtract2: 'https://www.figma.com/api/mcp/asset/bf88d2d7-f003-46dd-a3f3-90d1727b9226',
  emblemSubtract3: 'https://www.figma.com/api/mcp/asset/db7e6ddd-1d00-4bf8-bbb9-1619ead63f29',
  emblemVector: 'https://www.figma.com/api/mcp/asset/4b61819e-89c5-45df-b46c-c5e0700dda8c',
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

function MailboxIcon() {
  return (
    <div className="relative shrink-0 w-[32px] h-[32px]">
      <div className="absolute inset-[18.75%_6.25%]">
        <img src={ASSETS.mailbox3} className="absolute inset-0 w-full h-full" />
      </div>
      <div className="absolute inset-[22.18%_9.68%_41.64%_9.68%]">
        <img src={ASSETS.mailbox2} className="absolute inset-0 w-full h-full" />
      </div>
      <div className="absolute inset-[49.26%_9.68%_22.18%_9.68%]">
        <img src={ASSETS.mailbox1} className="absolute inset-0 w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-[-10px] bg-[#ff6f00] rounded-[10px] w-[20px] p-[2px] flex items-center justify-center">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-white">
          2
        </p>
      </div>
    </div>
  )
}

function MenuRow({
  icon,
  label,
  external,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  external?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[4px] items-center p-[10px] w-full shrink-0 text-left"
    >
      {icon}
      <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black whitespace-nowrap flex-1">
        {label}
      </p>
      <div className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center">
        {external ? (
          <img src={ASSETS.externalArrow} className="shrink-0 w-[16px] h-[16px]" />
        ) : (
          <img src={ASSETS.chevron} className="shrink-0 w-[8px] h-[16px]" />
        )}
      </div>
    </button>
  )
}

export function ProfilePage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full">
        <div className="flex gap-[4px] items-center">
          <img src={ASSETS.rorrLogoStroke} className="shrink-0 w-[22px] h-[18px]" />
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <button
          onClick={() => onNavigate(PAGES.MAIN)}
          className="shrink-0 w-[12.414px] h-[12.414px]"
          aria-label="Close"
        >
          <img src={ASSETS.headerCloseX} className="shrink-0 w-[12.414px] h-[12.414px]" />
        </button>
      </div>

      <div className="bg-[#f0f2f5] flex flex-1 min-h-0 overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-1 flex-col gap-[16px] items-center min-w-0 overflow-y-auto pb-[20px] pt-[80px] px-[16px]">
          <div className="flex flex-wrap gap-[16px] items-start w-full">
            <div className="flex items-start justify-center shrink-0 w-[110px] h-[110px]">
              <div className="relative shrink-0 w-[96px] h-[96px]">
                <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
                  <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
                    <img src={ASSETS.iconUser} className="absolute inset-0 w-full h-full" />
                  </div>
                </div>
                <div className="absolute inset-[0.41%_0_-0.41%_0]">
                  <img src={ASSETS.gradeBorder} className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-[5%]">
                    <img src={ASSETS.highLight} className="absolute inset-0 w-full h-full" />
                  </div>
                  <div className="absolute inset-[6%]">
                    <img src={ASSETS.innerLine} className="absolute inset-0 w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] items-start min-w-[220px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black overflow-hidden text-ellipsis w-full whitespace-nowrap">
                {MOCK_PROFILE.email}
              </p>
              <div className="flex h-[38px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[32px] text-black overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                  {MOCK_PROFILE.displayname}
                </p>
              </div>
              <div className="flex gap-[12px] items-center w-full">
                <div className="flex gap-[4px] items-center shrink-0">
                  <img src={ASSETS.sparkle} className="shrink-0 w-[20px] h-[20px]" />
                  <p
                    className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] whitespace-nowrap bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom, #f9d9ff 0%, #e08fee 4.327%, #c135da 100%)',
                    }}
                  >
                    {MOCK_PROFILE.exp}
                  </p>
                </div>
                <div className="w-px h-[20px] bg-[#ced6e6] shrink-0" />
                <p className="font-['Pretendard',sans-serif] font-extrabold text-[16px] leading-[1.2] text-black uppercase">
                  {MOCK_PROFILE.gradeName}
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="flex gap-[4px] items-center">
                  <img src={ASSETS.bolt} className="shrink-0 w-[20px] h-[20px]" />
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#00b395] whitespace-nowrap">
                    {MOCK_PROFILE.cash}
                  </p>
                </div>
                <button
                  type="button"
                  className="bg-[#969cda] flex items-center justify-center rounded-[4px] w-[20px] h-[20px] shrink-0"
                  aria-label="Charge"
                >
                  <img src={ASSETS.plus} className="shrink-0 w-[10px] h-[10px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#ced6e6] w-full shrink-0" />

          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-0 w-full">
            <MenuRow
              icon={<img src={ASSETS.iconFollow} className="shrink-0 w-[28px] h-[28px]" />}
              label="Follow Team & Player"
              onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
            />
            <MenuRow
              icon={<img src={ASSETS.iconPurchase} className="shrink-0 w-[28px] h-[28px]" />}
              label="Purchase List"
              onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
            />
            <MenuRow
              icon={<img src={ASSETS.iconBoost} className="shrink-0 w-[28px] h-[28px]" />}
              label="Boost List"
            />
            <MenuRow
              icon={<img src={ASSETS.rorrSmall} className="shrink-0 w-[28px] h-[28px]" />}
              label="dev-app.rorr.club"
              external
            />
            <button
              type="button"
              className="flex gap-[4px] items-center p-[10px] w-full text-left"
            >
              <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black whitespace-nowrap flex-1">
                Terms of use
              </p>
              <img src={ASSETS.externalArrow} className="shrink-0 w-[16px] h-[16px]" />
            </button>
            <button
              type="button"
              className="flex gap-[4px] items-center p-[10px] w-full text-left"
            >
              <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black whitespace-nowrap flex-1">
                Privacy policy
              </p>
              <img src={ASSETS.externalArrow} className="shrink-0 w-[16px] h-[16px]" />
            </button>
          </div>

          <div className="h-px bg-[#ced6e6] w-full shrink-0" />

          <div className="relative shrink-0 w-[64px] h-[54px] overflow-hidden flex items-center justify-center">
            <img src={ASSETS.emblemVector} className="shrink-0 w-[15px] h-[29px]" />
            <img src={ASSETS.emblemSubtract3} className="shrink-0 w-[36px] h-[51px] ml-[2px]" />
          </div>
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-clip p-[12px]">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center"
            aria-label="Close"
          >
            <img src={ASSETS.buttonShape} className="absolute inset-0 shrink-0 w-[24px] h-[24px]" />
            <img src={ASSETS.closeIcon} className="relative shrink-0 w-[8px] h-[8px]" />
          </button>
          <MailboxIcon />
        </div>
      </div>
    </div>
  )
}
