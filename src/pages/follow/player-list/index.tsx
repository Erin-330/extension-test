import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowPlayerItem,
} from '../../../features/follow/model/store'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { SearchButton } from '../../../features/follow/ui/SearchButton'
import { StepBottom } from '../../../features/follow/ui/StepBottom'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { PLAYER_AVATAR, TEAM_LOGO } from '../../../features/follow/ui/assets'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_PLAYERS: FollowPlayerItem[] = [
  { target_id: 'doran', name: 'Doran', fullName: 'Choi Hyeon-joon', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.t1, hasBoost: true },
  { target_id: 'faker', name: 'Faker', fullName: 'Lee Sang-hyeok', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.t1, hasBoost: true },
  { target_id: 'keria', name: 'Keria', fullName: 'Ryu Min-seok', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.t1, hasBoost: true },
  { target_id: 'oner', name: 'Oner', fullName: 'Mun Hyeon-jun', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.t1, hasBoost: true },
  { target_id: 'perfect', name: 'PerfecT', fullName: 'Lee Seung-min', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.kt },
  { target_id: 'bdd', name: 'Bdd', fullName: 'Gwak Bo-seong', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.kt },
  { target_id: 'cuzz', name: 'Cuzz', fullName: 'Moon Woo-chan', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.kt },
  { target_id: 'aiming', name: 'Aiming', fullName: 'Kim Ha-ram', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.kt },
  { target_id: 'ghost', name: 'Ghost', fullName: 'Jang Yong-jun', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.kt },
  { target_id: 'canyon', name: 'Canyon', fullName: 'Kim Geon-bu', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.geng, hasBoost: true },
  { target_id: 'raiad', name: 'Raiad', fullName: 'Player Raiad', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.geng, hasBoost: true },
  { target_id: 'chovy', name: 'Chovy', fullName: 'Jeong Ji-hoon', avatarUrl: PLAYER_AVATAR, teamLogoUrl: TEAM_LOGO.geng },
]

function submitFollowAll(_payload: {
  league: { target_id: string }[]
  team: { target_id: string }[]
  player: { target_id: string }[]
}) {
  return Promise.resolve()
}

export function PlayerListPage({ onNavigate }: Props) {
  const { leagues, teams, players, togglePlayer, reset } = useFollowSelectionsStore()
  const orderedIds = players.map((p) => p.target_id)
  const selected = orderedIds
    .map((id) => MOCK_PLAYERS.find((i) => i.target_id === id))
    .filter((i): i is FollowPlayerItem => i !== undefined)
  const unselected = MOCK_PLAYERS.filter((i) => !orderedIds.includes(i.target_id))
  const display = [...selected, ...unselected]

  const handleDone = async () => {
    await submitFollowAll({
      league: leagues.map((l) => ({ target_id: l.target_id })),
      team: teams.map((t) => ({ target_id: t.target_id })),
      player: players.map((p) => ({ target_id: p.target_id })),
    })
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="flex-1 flex flex-col gap-[16px] h-full pt-[16px] pb-[70px] px-[16px] overflow-y-auto">
          <div className="flex flex-col gap-[4px] h-[68px] w-[215px] shrink-0">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black">
              Back Your Player
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Follow your favorite Players
            </p>
          </div>
          {display.map((item) => {
            const isSelected = orderedIds.includes(item.target_id)
            const order = isSelected ? orderedIds.indexOf(item.target_id) + 1 : 0
            return (
              <button
                type="button"
                key={item.target_id}
                onClick={() => togglePlayer(item)}
                className={`bg-white flex gap-[4px] h-[68px] items-center rounded-[8px] w-full shrink-0 text-left overflow-hidden ${
                  isSelected
                    ? 'border-2 border-[#209fee] border-solid'
                    : 'drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'
                }`}
              >
                <div className="flex flex-1 gap-[12px] h-full items-center min-w-0 px-[12px]">
                  <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
                    <div className="relative size-[28px] rounded-full overflow-clip shrink-0 bg-[#4e4743]">
                      <img
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                        src={item.avatarUrl}
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-0">
                    {item.hasBoost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-black leading-[20px] truncate w-full">
                      {item.name}
                    </p>
                    <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#757b90] leading-[1.2] truncate w-full">
                      {item.fullName}
                    </p>
                  </div>
                  <div className="relative size-[20px] shrink-0 overflow-clip">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-contain"
                      src={item.teamLogoUrl}
                    />
                  </div>
                </div>
                <SelectNum selected={isSelected} order={order} />
              </button>
            )
          })}
        </div>
        <SearchButton />
        <StepBottom
          currentStep={2}
          onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
          onNext={handleDone}
          nextLabel="Done"
        />
      </div>
    </div>
  )
}
