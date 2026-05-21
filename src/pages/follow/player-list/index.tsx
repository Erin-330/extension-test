import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type PlayerItem = FollowTargetItem

const T1_LOGO = 'https://www.figma.com/api/mcp/asset/33e74489-a0ca-422e-bcf1-49595b819cd4'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/a73e0862-a77c-473a-8e52-d646dac34144'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/775656a7-11f6-46ed-a7dd-a4d34cea0bca'

const MOCK_PLAYERS: PlayerItem[] = [
  { target_id: 'Doran', name: 'Doran', description: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'Faker', name: 'Faker', description: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'Keria', name: 'Keria', description: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'Oner', name: 'Oner', description: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'PerfecT', name: 'PerfecT', description: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'Bdd', name: 'Bdd', description: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'Cuzz', name: 'Cuzz', description: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'Aiming', name: 'Aiming', description: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'Ghost', name: 'Ghost', description: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'Canyon', name: 'Canyon', description: 'fullName', teamLogoUrl: GENG_LOGO, boost: true },
  { target_id: 'Raiad', name: 'Raiad', description: 'fullName', teamLogoUrl: GENG_LOGO, boost: true },
]

type Props = { onNavigate: (page: string) => void }

export function PlayerListPage({ onNavigate }: Props) {
  const { leagues, teams, players, togglePlayer, reset } = useFollowSelectionsStore()
  const orderedIds = useMemo(() => players.map((p) => p.target_id), [players])

  const sortedList = useMemo(() => {
    const selected = orderedIds
      .map((id) => MOCK_PLAYERS.find((p) => p.target_id === id))
      .filter((p): p is PlayerItem => p !== undefined)
    const unselected = MOCK_PLAYERS.filter((p) => !orderedIds.includes(p.target_id))
    return [...selected, ...unselected]
  }, [orderedIds])

  const teamLogoInset = (url?: string) => {
    if (url === KT_LOGO) return 'inset-[20%_19.17%_16.67%_18.33%]'
    if (url === GENG_LOGO) return 'inset-[15%_9.05%_14.89%_9.17%]'
    return 'inset-[30%_0_29.57%_0]'
  }

  const handleDone = () => {
    void leagues
    void teams
    void players
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageLayout
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      currentStep={2}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onNext={handleDone}
      nextLabel="Done"
    >
      {sortedList.map((item) => {
        const idx = orderedIds.indexOf(item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            name={item.name}
            description={item.description}
            boost={item.boost}
            selected={idx >= 0}
            order={idx >= 0 ? idx + 1 : undefined}
            variant="player"
            teamLogoUrl={item.teamLogoUrl}
            teamLogoInsetClass={teamLogoInset(item.teamLogoUrl)}
            onClick={() => togglePlayer(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
