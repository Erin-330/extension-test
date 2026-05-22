import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowItemCard } from '../../../features/follow/ui/FollowItemCard'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface TeamListPageProps {
  onNavigate: (page: string) => void
}

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 't1',
    name: 'T1',
    imageUrl: 'https://www.figma.com/api/mcp/asset/f7a5117d-bd48-4c17-8de5-2d47489042a0',
    insetClass: 'inset-[30%_0_29.57%_0]',
    hasBoost: true,
  },
  {
    target_id: 'kt',
    name: 'KT Rollster',
    imageUrl: 'https://www.figma.com/api/mcp/asset/77072709-9fa9-4d2c-a74d-06c9bbb32778',
    insetClass: 'inset-[20%_19.17%_16.67%_18.33%]',
    hasBoost: true,
  },
  {
    target_id: 'geng',
    name: 'GEN G',
    imageUrl: 'https://www.figma.com/api/mcp/asset/51e9d92e-d2bf-42fe-bf3e-022abfb8a3c5',
    insetClass: 'inset-[15%_9.05%_14.89%_9.17%]',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life Esports',
    imageUrl: 'https://www.figma.com/api/mcp/asset/aac02425-b79b-400d-9626-34535eaf4cf5',
    insetClass: 'inset-[22.32%_0]',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    imageUrl: 'https://www.figma.com/api/mcp/asset/3bcf2108-5073-44b0-9eaa-8ce16b95fb2b',
    insetClass: 'inset-[30%_4.17%_30.28%_4.17%]',
  },
  {
    target_id: 'wbg',
    name: 'Weibo Gaming',
    imageUrl: 'https://www.figma.com/api/mcp/asset/601f370a-bde0-4047-b971-ecf7be923ddc',
    insetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'blg',
    name: 'Bilibili Gaming',
    imageUrl: 'https://www.figma.com/api/mcp/asset/2d98f22a-7bc5-428f-bdcf-3abe06c660e3',
    insetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'tes',
    name: 'TOP Esports',
    imageUrl: 'https://www.figma.com/api/mcp/asset/2d98f22a-7bc5-428f-bdcf-3abe06c660e3',
    insetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'jdg',
    name: 'JDG Intel Esports',
    imageUrl: 'https://www.figma.com/api/mcp/asset/2d98f22a-7bc5-428f-bdcf-3abe06c660e3',
    insetClass: 'inset-[17.5%_10.75%_18.3%_10%]',
    hasBoost: true,
  },
]

export function TeamListPage({ onNavigate }: TeamListPageProps) {
  const { teams, toggleTeam } = useFollowSelectionsStore()

  const orderedItems = useMemo(() => {
    const selectedIds = teams.map((l) => l.target_id)
    const selected = selectedIds
      .map((id) => MOCK_TEAMS.find((i) => i.target_id === id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_TEAMS.filter((i) => !selectedIds.includes(i.target_id))
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
      {orderedItems.map((item) => {
        const order = teams.findIndex((l) => l.target_id === item.target_id)
        return (
          <FollowItemCard
            key={item.target_id}
            item={item}
            selected={order >= 0}
            order={order + 1}
            onClick={() => toggleTeam(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
