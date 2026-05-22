// Figma node-id: 7259:125496 / fileKey: FR0ELVIB6XF3dHidbEqBdz
// 픽 상태별 프레임 에셋 URL — get_design_context 확인값

const FRAME_URLS = {
  'cancel-enable': 'https://www.figma.com/api/mcp/asset/7d830be8-a591-4ade-98f0-c3bd8a787118',
  locked:          'https://www.figma.com/api/mcp/asset/7d830be8-a591-4ade-98f0-c3bd8a787118',
  success:         'https://www.figma.com/api/mcp/asset/0089e6f9-3e09-4885-a402-2b5f438612a5',
  fail:            'https://www.figma.com/api/mcp/asset/6c1bdf67-545c-4fa4-a997-4c9b7ec38ff3',
} as const

const CHECK_ICON_URL = 'https://www.figma.com/api/mcp/asset/c50f9299-b91a-48e4-a822-6381982b1900'

type PickState = 'cancel-enable' | 'locked' | 'success' | 'fail' | null

export interface Team {
  teamId: string
  teamInitial: string
  teamLogo: string
}

export interface MatchPickCardProps {
  gameLabel?: string
  leagueLabel?: string
  gameNumber?: string
  time?: string
  status?: 'upcoming' | 'running' | 'completed'
  leftTeam: Team
  rightTeam: Team
  leftScore?: number | null
  rightScore?: number | null
  selectedTeamId?: string | null
  isCorrect?: boolean | null
  verified?: boolean
  onPickTeam?: (teamId: string) => void
  onCancelPick?: () => void
}

function resolvePickState(
  selectedTeamId: string | null | undefined,
  isCorrect: boolean | null | undefined,
  verified: boolean | undefined,
  status: 'upcoming' | 'running' | 'completed' | undefined,
): PickState {
  if (!selectedTeamId) return null
  if (verified && isCorrect === true) return 'success'
  if (verified && isCorrect === false) return 'fail'
  if (status === 'upcoming') return 'cancel-enable'
  return 'locked'
}

// 취소/잠금 버튼 — 20×20, top-right of pick overlay
function BtnCancelPick({
  pickState,
  onCancel,
}: {
  pickState: 'cancel-enable' | 'locked'
  onCancel?: () => void
}) {
  if (pickState === 'cancel-enable') {
    return (
      <div
        className="absolute right-0 top-0 flex items-center justify-center rounded-[4px] shrink-0 size-[20px] bg-[#860000] border border-solid border-[#209fee] cursor-pointer"
        onClick={onCancel}
      >
        <p className="font-['Pretendard',sans-serif] font-bold text-[12px] text-center text-white uppercase leading-[20px]">
          X
        </p>
      </div>
    )
  }
  return (
    <div className="absolute right-0 top-0 flex items-center justify-center rounded-[4px] shrink-0 size-[20px] bg-[#209fee]">
      <img src={CHECK_ICON_URL} className="shrink-0 w-[14px] h-[14px]" alt="" />
    </div>
  )
}

// QuizResultCheck — 픽 오버레이 (프레임 이미지 + YOUR PICK 라벨 + 버튼)
function PickOverlay({
  pickState,
  onCancel,
}: {
  pickState: Exclude<PickState, null>
  onCancel?: () => void
}) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 max-w-[90px] min-h-[66px] min-w-[72px] size-[74px] top-1/2">
      {/* 프레임 이미지 — 전체를 덮는다 */}
      <img
        src={FRAME_URLS[pickState]}
        className="absolute block inset-0 max-w-none size-full"
        alt=""
      />
      {/* YOUR PICK 라벨 — 하단 중앙 */}
      <div className="-translate-x-1/2 absolute bottom-0 flex h-[10px] w-[80px] items-center justify-center left-1/2 px-[8px] rounded-bl-[8px] rounded-br-[8px]">
        <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-center text-white uppercase whitespace-nowrap leading-normal">
          YOUR PICK
        </p>
      </div>
      {(pickState === 'cancel-enable' || pickState === 'locked') && (
        <BtnCancelPick pickState={pickState} onCancel={onCancel} />
      )}
    </div>
  )
}

// QuizResultTeamInfo — 팀 로고 + 선택 오버레이 영역 (80×74px)
function TeamArea({
  team,
  pickState,
  onPick,
  onCancel,
}: {
  team: Team
  pickState: PickState
  onPick?: () => void
  onCancel?: () => void
}) {
  return (
    <div
      className={`h-[74px] overflow-clip relative w-[80px] ${!pickState ? 'cursor-pointer' : ''}`}
      onClick={!pickState ? onPick : undefined}
    >
      {/* TeamDefaultInfo: 로고 + 팀명, 중앙 absolute */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center justify-center left-1/2 min-w-[56px] top-[calc(50%-3.5px)] w-[64px]">
        <div className="bg-[rgba(0,0,0,0.07)] flex items-center justify-center relative rounded-[8px] shrink-0 size-[42px]">
          <div className="overflow-clip relative shrink-0 size-[32px]">
            <img
              src={team.teamLogo}
              className="absolute block inset-0 max-w-none size-full"
              alt={team.teamInitial}
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black text-center whitespace-nowrap leading-normal">
            {team.teamInitial}
          </p>
        </div>
      </div>
      {/* 픽 오버레이 */}
      {pickState && <PickOverlay pickState={pickState} onCancel={onCancel} />}
    </div>
  )
}

export function MatchPickCard({
  gameLabel = 'LOL',
  leagueLabel = 'league',
  gameNumber = 'Game 0',
  time = '',
  status = 'upcoming',
  leftTeam,
  rightTeam,
  leftScore,
  rightScore,
  selectedTeamId,
  isCorrect,
  verified,
  onPickTeam,
  onCancelPick,
}: MatchPickCardProps) {
  const pickState = resolvePickState(selectedTeamId, isCorrect, verified, status)
  const leftPickState: PickState = pickState && selectedTeamId === leftTeam.teamId ? pickState : null
  const rightPickState: PickState = pickState && selectedTeamId === rightTeam.teamId ? pickState : null

  return (
    <div className="bg-white rounded-[12px] px-[16px] py-[12px] w-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      {/* 헤더: 게임 레이블 + 리그 레이블 */}
      <div className="flex items-center justify-between mb-[8px]">
        <span className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#888888]">
          {gameLabel}
        </span>
        <span className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#6E3FF3]">
          {leagueLabel}
        </span>
      </div>

      {/* 메인 행: 왼팀 + 중앙 정보 + 오른팀 */}
      <div className="flex items-center justify-between">
        <TeamArea
          team={leftTeam}
          pickState={leftPickState}
          onPick={() => onPickTeam?.(leftTeam.teamId)}
          onCancel={onCancelPick}
        />

        {/* 중앙: 경기 번호 + 시간 + 상태 */}
        <div className="flex flex-1 flex-col items-center gap-[4px]">
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#aaaaaa]">
            {gameNumber}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[14px] text-[#333333]">
            {time}
          </p>
          {status === 'running' ? (
            <span className="font-['Pretendard',sans-serif] font-extrabold text-[12px] text-[#c10f0f] uppercase">
              LIVE
            </span>
          ) : status === 'completed' && leftScore != null && rightScore != null ? (
            <span className="font-['Pretendard',sans-serif] font-bold text-[14px] text-[#333333]">
              {leftScore} - {rightScore}
            </span>
          ) : (
            <span className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#6E3FF3]">
              Upcoming
            </span>
          )}
        </div>

        <TeamArea
          team={rightTeam}
          pickState={rightPickState}
          onPick={() => onPickTeam?.(rightTeam.teamId)}
          onCancel={onCancelPick}
        />
      </div>
    </div>
  )
}
