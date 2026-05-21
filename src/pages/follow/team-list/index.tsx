import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type TeamItem = FollowTargetItem & { logoInsetClass?: string }

const MOCK_TEAMS: TeamItem[] = [
  {
    target_id: 'T1',
    name: 'T1',
    logoUrl: 'https://www.figma.com/api/mcp/asset/7e04d6f8-47b0-4f81-bb02-92141b85e0f2',
    logoInsetClass: 'inset-[30%_0_29.57%_0]',
    boost: true,
  },
  {
    target_id: 'KT',
    name: 'KT Rollster',
    logoUrl: 'https://www.figma.com/api/mcp/asset/b6ee4a08-2922-49f9-a9f1-6df81dc44b39',
    logoInsetClass: 'inset-[20%_19.17%_16.67%_18.33%]',
    boost: true,
  },
  {
    target_id: 'GENG',
    name: 'GEN G',
    logoUrl: 'https://www.figma.com/api/mcp/asset/b3758730-4f3a-4387-9a05-fc88c18269aa',
    logoInsetClass: 'inset-[15%_9.05%_14.89%_9.17%]',
  },
  {
    target_id: 'HLE',
    name: 'Hanwha Life Esports',
    logoUrl: 'https://www.figma.com/api/mcp/asset/5ac0e21d-5c17-46d4-b842-9ed1c5851fea',
    logoInsetClass: 'inset-[15.38%_0_14.88%_0.13%]',
  },
  {
    target_id: 'DK',
    name: 'Dplus KIA',
    logoUrl: 'https://www.figma.com/api/mcp/asset/d728bdb3-394b-44a5-809a-bd466951215a',
    logoInsetClass: 'inset-[30%_4.17%_30.28%_4.17%]',
  },
  {
    target_id: 'WBG',
    name: 'Weibo Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/5eb5b471-ec48-4347-b01f-78188c02aa9d',
    logoInsetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'BLG',
    name: 'Bilibili Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/5eb5b471-ec48-4347-b01f-78188c02aa9d',
    logoInsetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'TES',
    name: 'Top Esports',
    logoUrl: 'https://www.figma.com/api/mcp/asset/1b811b6e-bd4a-46a0-bc39-9a122bb0e1dd',
    logoInsetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'JDG',
    name: 'JD Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/1b811b6e-bd4a-46a0-bc39-9a122bb0e1dd',
    logoInsetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
    boost: true,
  },
]

type Props = { onNavigate: (page: string) => void }

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()
  const orderedIds = useMemo(() => teams.map((t) => t.target_id), [teams])

  const sortedList = useMemo(() => {
    const selected = orderedIds
      .map((id) => MOCK_TEAMS.find((t) => t.target_id === id))
      .filter((t): t is TeamItem => t !== undefined)
    const unselected = MOCK_TEAMS.filter((t) => !orderedIds.includes(t.target_id))
    return [...selected, ...unselected]
  }, [orderedIds])

  return (
    <FollowPageLayout
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    >
      {sortedList.map((item) => {
        const idx = orderedIds.indexOf(item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            name={item.name}
            logoUrl={item.logoUrl}
            logoInsetClass={item.logoInsetClass}
            boost={item.boost}
            selected={idx >= 0}
            order={idx >= 0 ? idx + 1 : undefined}
            variant="team"
            onClick={() => toggleTeam(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
