import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import { TEAM_LOGOS } from '../../../features/follow/ui/FollowAssets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_TEAMS: FollowTargetItem[] = [
  { target_id: 't1', name: 'T1', imageUrl: TEAM_LOGOS.t1, imageInset: 'inset-[30%_0_29.57%_0]', boost: true },
  { target_id: 'kt', name: 'KT Rollster', imageUrl: TEAM_LOGOS.kt, imageInset: 'inset-[20%_19.17%_16.67%_18.33%]', boost: true },
  { target_id: 'geng', name: 'GEN G', imageUrl: TEAM_LOGOS.geng, imageInset: 'inset-[15%_9.05%_14.89%_9.17%]' },
  { target_id: 'hle', name: 'Hanwha Life Esports', imageUrl: TEAM_LOGOS.hanwha, imageInset: 'inset-[15.38%_0_14.88%_0.13%]' },
  { target_id: 'dk', name: 'Dplus KIA', imageUrl: TEAM_LOGOS.dplus, imageInset: 'inset-[30%_4.17%_30.28%_4.17%]' },
  { target_id: 'wbg', name: 'Weibo Gaming', imageUrl: TEAM_LOGOS.weibo, imageInset: 'inset-[17.5%_10.75%_18.3%_10%]' },
  { target_id: 'bilibili', name: 'Bilibili Gaming', imageUrl: TEAM_LOGOS.weibo, imageInset: 'inset-[17.5%_10.75%_18.3%_10%]' },
  { target_id: 'jdg', name: 'JD Gaming', imageUrl: TEAM_LOGOS.weibo2, imageInset: 'inset-[17.5%_10.75%_18.3%_10%]' },
  { target_id: 'tes', name: 'Top Esports', imageUrl: TEAM_LOGOS.weibo2, imageInset: 'inset-[17.5%_10.75%_18.3%_10%]', boost: true },
]

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()

  const ordered = useMemo(() => {
    const selected = teams
      .map((s) => MOCK_TEAMS.find((i) => i.target_id === s.target_id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_TEAMS.filter((i) => !teams.some((s) => s.target_id === i.target_id))
    return [...selected, ...unselected]
  }, [teams])

  return (
    <FollowPageLayout
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    >
      {ordered.map((item) => {
        const selectedIndex = teams.findIndex((s) => s.target_id === item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            item={item}
            selected={selectedIndex >= 0}
            order={selectedIndex >= 0 ? selectedIndex + 1 : undefined}
            variant="team"
            onToggle={() => toggleTeam(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
