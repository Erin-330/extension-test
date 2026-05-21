import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSET_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/6492cda4-c432-4b87-9726-e95bb66eec39'
const ASSET_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/7b13d8b8-c52c-4dd5-8ef3-4836c1cce611'
const ASSET_HEADER_UNION = 'https://www.figma.com/api/mcp/asset/06624fa4-3d54-4d67-9dce-80499e6139cd'
const ASSET_BTN_BG = 'https://www.figma.com/api/mcp/asset/aaaff395-42b3-4992-ba3c-32abfa044b52'
const ASSET_BTN_CLOSE_X = 'https://www.figma.com/api/mcp/asset/17d6a464-1a40-463d-ad6d-f314587e2cf2'
const ASSET_BTN_INFO_I = 'https://www.figma.com/api/mcp/asset/2899b192-a823-4377-84d6-b599cc7e36c5'
const ASSET_DROP_ARROW = 'https://www.figma.com/api/mcp/asset/f6945d65-911c-4534-9b95-cfd58548ff34'
const ASSET_BAR_4 = 'https://www.figma.com/api/mcp/asset/a09685f3-cf62-48de-a320-32fb3ee5b24f'
const ASSET_BAR_2 = 'https://www.figma.com/api/mcp/asset/3c27b397-34f6-49da-9ddd-2733013ea090'
const ASSET_BAR_1 = 'https://www.figma.com/api/mcp/asset/5e03c061-df47-488e-a6f8-c750d054efb8'
const ASSET_BAR_3 = 'https://www.figma.com/api/mcp/asset/ebff07d7-5d9e-45fb-bd2d-b89ee7fc1932'
const ASSET_BAR_5 = 'https://www.figma.com/api/mcp/asset/b31889f8-e3a1-4878-b214-8eafff82f2be'
const ASSET_BAR_DIVIDER = 'https://www.figma.com/api/mcp/asset/922af284-247b-405b-80d9-47d37dd761bd'
const ASSET_AVATAR_BG = 'https://www.figma.com/api/mcp/asset/0ce21fee-bfba-4121-89b1-6e8c31ea8696'
const ASSET_AVATAR_GRADE = 'https://www.figma.com/api/mcp/asset/81262e14-7a3f-44c6-92e4-efa0529b4095'
const ASSET_AVATAR_HIGHLIGHT = 'https://www.figma.com/api/mcp/asset/3f3765fc-195b-4c33-a334-95fa46b9d068'
const ASSET_AVATAR_INNERLINE = 'https://www.figma.com/api/mcp/asset/46ba5e5a-8217-4ad3-9983-825e18cc679b'
const ASSET_V_DIVIDER = 'https://www.figma.com/api/mcp/asset/e5144718-4a87-44c1-9a58-bb3e60ba2386'
const ASSET_GRADE_SPRITE = 'https://www.figma.com/api/mcp/asset/d10bcffb-a52e-4203-aa7d-0a8fe242cef0'
const ASSET_GRADE_SPRITE_PLAT = 'https://www.figma.com/api/mcp/asset/58c631b2-f716-4068-9209-941565e25457'

type Row = { rank: string; name: string; leftStat: string; rightStat: string; highlighted?: boolean }

const TOP5: { name: string; rank: string; count: string; barUrl: string; pt: string; nameColor: string }[] = [
  { name: 'Alfred', rank: '4th', count: '12', barUrl: ASSET_BAR_4, pt: 'pt-[153px]', nameColor: 'text-[#969cd9]' },
  { name: 'bushman', rank: '2nd', count: '17', barUrl: ASSET_BAR_2, pt: 'pt-[19px]', nameColor: 'text-[#424cbb]' },
  { name: 'ddadda', rank: '1st', count: '20', barUrl: ASSET_BAR_1, pt: 'pt-0', nameColor: 'text-[#2d39b4]' },
  { name: 'Samantha', rank: '3rd', count: '16', barUrl: ASSET_BAR_3, pt: 'pt-[87px]', nameColor: 'text-[#6c74ca]' },
  { name: 'frifre', rank: '5th', count: '8', barUrl: ASSET_BAR_5, pt: 'pt-[193px]', nameColor: 'text-[#c0c3e8]' },
]

const DIAMOND: Row[] = [
  { rank: '6', name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
  { rank: '7', name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
]
const PLATINUM: Row[] = [
  { rank: '8', name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
  { rank: '9', name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlighted: true },
  { rank: '10', name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
]
const GOLD: Row[] = [
  { rank: '11', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: '12', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: '13', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: '14', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]
const SILVER: Row[] = [
  { rank: '15', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: '16', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: '17', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: '18', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]
const BRONZE: Row[] = [
  { rank: '19', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: '20', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: '21', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: '22', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]
const PARTICIPANT: Row[] = [
  { rank: '-', name: 'Asde', leftStat: 'L3', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
]

function MiniAvatar() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[0.41%_0_-0.41%_0] bg-[#bbbfd0] overflow-clip rounded-full">
        <img alt="" src={ASSET_AVATAR_BG} className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" src={ASSET_AVATAR_GRADE} className="absolute inset-0 size-full" />
        <div className="absolute inset-[5%]">
          <img alt="" src={ASSET_AVATAR_HIGHLIGHT} className="absolute inset-0 size-full" />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" src={ASSET_AVATAR_INNERLINE} className="absolute inset-0 size-full" />
        </div>
      </div>
    </div>
  )
}

type GradeIconProps = {
  spriteUrl?: string
  insetClass: string
  imgSizeClass: string
  imgPosClass: string
}

function GradeIcon({ spriteUrl = ASSET_GRADE_SPRITE, insetClass, imgSizeClass, imgPosClass }: GradeIconProps) {
  return (
    <div className="relative size-[20px] overflow-clip shrink-0">
      <div className={`absolute ${insetClass} overflow-clip`}>
        <img alt="" src={spriteUrl} className={`absolute ${imgPosClass} ${imgSizeClass} max-w-none`} />
      </div>
    </div>
  )
}

function RankRow({ row }: { row: Row }) {
  const textClass = row.highlighted ? 'text-white' : 'text-black'
  const wrapperBg = row.highlighted ? 'bg-[#9ca3f1] rounded-[4px]' : ''
  return (
    <div className={`flex items-center gap-[8px] px-[4px] py-[8px] w-full ${wrapperBg}`}>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[28px] text-center shrink-0 ${textClass}`}>
        {row.rank}
      </p>
      <div className="flex items-center gap-[4px] flex-1 min-w-0">
        <MiniAvatar />
        <p className={`font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap flex-1 ${textClass}`}>
          {row.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] text-right shrink-0 ${textClass}`}>
        {row.leftStat}
      </p>
      <div className="relative h-full w-0 shrink-0">
        <div className="absolute inset-[-2.5%_-0.5px]">
          <img alt="" src={ASSET_V_DIVIDER} className="block size-full" />
        </div>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] shrink-0 ${textClass}`}>
        {row.rightStat}
      </p>
    </div>
  )
}

type SectionProps = {
  label: string
  gradient: string
  rows: Row[]
  gradeIcon: GradeIconProps
}

function GradeSection({ label, gradient, rows, gradeIcon }: SectionProps) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] p-[4px] rounded-[8px] w-full">
      <div
        className={`flex items-center gap-[8px] p-[8px] rounded-[4px] w-full ${gradient}`}
      >
        <GradeIcon {...gradeIcon} />
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
          {label}
        </p>
      </div>
      {rows.map((r, i) => (
        <RankRow key={`${r.rank}-${r.name}-${i}`} row={r} />
      ))}
    </div>
  )
}

export function RankPage({ onNavigate }: Props) {
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
        <div className="size-[12.414px] relative shrink-0">
          <img alt="" src={ASSET_HEADER_UNION} className="absolute inset-0 size-full" />
        </div>
      </div>

      <div className="bg-[#f0f2f5] flex flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px overflow-y-auto px-[16px] py-[48px]">
          <div className="bg-white border border-[#ced6e6] flex items-center gap-[4px] pl-[4px] pr-[10px] py-[2px] rounded-[6px] w-[107px] shrink-0">
            <div className="relative size-[24px] overflow-clip shrink-0 rotate-90">
              <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
                <img alt="" src={ASSET_DROP_ARROW} className="absolute inset-0 size-full" />
              </div>
            </div>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black whitespace-nowrap">
              Dec. 2025
            </p>
          </div>

          <div className="bg-[#dce2eb] flex flex-col gap-[8px] p-[4px] rounded-[8px] w-[328px] shrink-0">
            <div className="flex items-center gap-[8px] p-[8px] rounded-[4px] w-full bg-gradient-to-r from-black from-[25%] to-transparent">
              <GradeIcon
                insetClass="inset-[14.58%_4.17%]"
                imgSizeClass="h-[538.24%] w-[415.91%]"
                imgPosClass="left-[-268.18%] top-[-400%]"
              />
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                Top 5
              </p>
            </div>
            <div className="flex h-[280px] items-end w-full">
              {TOP5.map((b) => (
                <div key={b.rank} className={`flex-1 relative h-full ${b.pt}`}>
                  <p
                    className={`absolute top-0 left-0 right-0 font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center -translate-y-[16px] ${b.nameColor}`}
                  >
                    {b.name}
                  </p>
                  <img alt="" src={b.barUrl} className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-0 flex flex-col items-center pt-[8px]">
                    <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                      {b.rank}
                    </p>
                    <div className="relative h-0 w-full mt-[6px]">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" src={ASSET_BAR_DIVIDER} className="block size-full" />
                      </div>
                    </div>
                    <div className="flex items-center w-full px-[4px] mt-[6px]">
                      <p className="flex-1 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white text-left">
                        W?
                      </p>
                      <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white text-right">
                        {b.count}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#9ca3f1] flex flex-col gap-[10px] p-[4px] rounded-[8px] w-full">
            <div className="bg-[#9ca3f1] flex items-center justify-center p-[8px] rounded-[4px] w-full">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                My Ranking
              </p>
            </div>
            <RankRow row={{ rank: '9', name: 'andy13', leftStat: 'L4', rightStat: 'W6' }} />
          </div>

          <GradeSection
            label="Diamond"
            gradient="bg-gradient-to-r from-[#81a0b8] to-[rgba(129,160,184,0)]"
            rows={DIAMOND}
            gradeIcon={{
              insetClass: 'inset-[20.83%_12.5%]',
              imgSizeClass: 'h-[538.24%] w-[415.91%]',
              imgPosClass: 'left-[-231.21%] top-[-154.94%]',
            }}
          />
          <GradeSection
            label="Platinum"
            gradient="bg-gradient-to-r from-[#afcfe2] to-[rgba(175,207,226,0)]"
            rows={PLATINUM}
            gradeIcon={{
              spriteUrl: ASSET_GRADE_SPRITE_PLAT,
              insetClass: 'inset-[14.58%_2.08%]',
              imgSizeClass: 'h-[496.3%] w-[362.16%]',
              imgPosClass: 'left-[-131.08%] top-[-170.37%]',
            }}
          />
          <GradeSection
            label="Gold"
            gradient="bg-gradient-to-r from-[#e9d17f] to-[rgba(122,90,31,0)]"
            rows={GOLD}
            gradeIcon={{
              insetClass: 'inset-[14.58%_4.17%]',
              imgSizeClass: 'h-[538.24%] w-[415.91%]',
              imgPosClass: 'left-[-304.38%] top-[-9.85%]',
            }}
          />
          <GradeSection
            label="Silver"
            gradient="bg-gradient-to-r from-[#bccfe3] to-[rgba(107,118,130,0)]"
            rows={SILVER}
            gradeIcon={{
              insetClass: 'inset-[14.58%_4.17%]',
              imgSizeClass: 'h-[538.24%] w-[415.91%]',
              imgPosClass: 'left-[-206.38%] top-[-9.85%]',
            }}
          />
          <GradeSection
            label="Bronze"
            gradient="bg-gradient-to-r from-[#ebc7b3] to-[rgba(63,46,37,0)]"
            rows={BRONZE}
            gradeIcon={{
              insetClass: 'inset-[14.58%_4.17%]',
              imgSizeClass: 'h-[538.24%] w-[415.91%]',
              imgPosClass: 'left-[-111.01%] top-[-9.85%]',
            }}
          />
          <GradeSection
            label="Participant"
            gradient="bg-gradient-to-r from-[#8b8e98] to-[rgba(117,123,144,0)]"
            rows={PARTICIPANT}
            gradeIcon={{
              insetClass: 'inset-[14.58%_4.17%]',
              imgSizeClass: 'h-[538.24%] w-[415.91%]',
              imgPosClass: 'left-[-12.9%] top-[-9.85%]',
            }}
          />
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="relative size-[24px] flex items-center justify-center shrink-0"
            aria-label="close"
          >
            <div className="absolute inset-0 rounded-[30px]">
              <img alt="" src={ASSET_BTN_BG} className="absolute inset-0 size-full" />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[28.59%]">
                <img alt="" src={ASSET_BTN_CLOSE_X} className="absolute inset-0 size-full" />
              </div>
            </div>
          </button>
          <button className="relative size-[24px] shrink-0" aria-label="info">
            <div className="absolute inset-0 rounded-[30px]">
              <img alt="" src={ASSET_BTN_BG} className="absolute inset-0 size-full" />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <img alt="" src={ASSET_BTN_INFO_I} className="absolute inset-0 size-full" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
