import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageShell } from '../../../features/follow/ui/FollowPageShell'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import { TEAM_LOGOS } from '../../../features/follow/ui/assets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_TEAMS: FollowTargetItem[] = [
  { target_id: 't1', name: 'T1', description: '', logo: TEAM_LOGOS.T1, boost: true },
  { target_id: 'kt', name: 'KT Rollster', description: '', logo: TEAM_LOGOS.KT, boost: true },
  { target_id: 'geng', name: 'GEN G', description: '', logo: TEAM_LOGOS.GENG },
  { target_id: 'hle', name: 'Hanwha Life Esports', description: '', logo: TEAM_LOGOS.HLE },
  { target_id: 'dk', name: 'Dplus KIA', description: '', logo: TEAM_LOGOS.DK },
  { target_id: 'wbg', name: 'Weibo Gaming', description: '', logo: TEAM_LOGOS.WBG },
  { target_id: 'blg', name: 'Bilibili Gaming', description: '', logo: TEAM_LOGOS.BLG },
  { target_id: 'jdg', name: 'JD Gaming', description: '', logo: TEAM_LOGOS.WBG },
  { target_id: 'tes', name: 'Top Esports', description: '', logo: TEAM_LOGOS.WBG },
  { target_id: 'fnatic', name: 'Fnatic', description: '', logo: TEAM_LOGOS.WBG, boost: true },
]

export function TeamListPage({ onNavigate }: Props) {
  const teams = useFollowSelectionsStore((s) => s.teams)
  const toggleTeam = useFollowSelectionsStore((s) => s.toggleTeam)

  const ordered = useMemo(() => {
    const selectedIds = teams.map((t) => t.target_id)
    const selected = selectedIds
      .map((id) => MOCK_TEAMS.find((i) => i.target_id === id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_TEAMS.filter((i) => !selectedIds.includes(i.target_id))
    return [...selected, ...unselected]
  }, [teams])

  const selectedIds = teams.map((t) => t.target_id)

  return (
    <FollowPageShell
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    >
      {ordered.map((item) => {
        const isSelected = selectedIds.includes(item.target_id)
        const order = isSelected ? selectedIds.indexOf(item.target_id) + 1 : undefined
        return (
          <FollowCard
            key={item.target_id}
            item={item}
            selected={isSelected}
            order={order}
            variant="team"
            onToggle={() => toggleTeam(item)}
          />
        )
      })}
    </FollowPageShell>
  )
}
