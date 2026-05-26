import { useState } from 'react'
import { PAGES, type Page } from './shared/constants/pages'
import { MainPage } from './pages/main'
import { FollowLeaguePage } from './pages/follow/league-list'
import { ProfilePage } from './pages/profile'
import { PurchaseListPage } from './pages/purchase/list'

export function App() {
  const [page, setPage] = useState<Page>(PAGES.MAIN)

  const onNavigate = (next: string) => setPage(next as Page)

  switch (page) {
    case PAGES.FOLLOW_LEAGUE:
      return <FollowLeaguePage onNavigate={onNavigate} />
    case PAGES.PROFILE:
      return <ProfilePage onNavigate={onNavigate} />
    case PAGES.PURCHASE_LIST:
      return <PurchaseListPage onNavigate={onNavigate} />
    case PAGES.MAIN:
    default:
      return <MainPage onNavigate={onNavigate} />
  }
}
