import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface LoadMoreProps {
  hasNextPage: boolean
  fetchNextPage: () => void
  isFetchingNextPage: boolean
}

interface SearchPanelState {
  isOpen: boolean
  query: string
  open: () => void
  close: () => void
  setQuery: (q: string) => void
}

interface FollowListLayoutProps {
  title: string
  subtitle: string
  searchPanel: SearchPanelState
  loadMoreProps: LoadMoreProps
  stepIndicator: ReactNode
  renderListContent: () => ReactNode
  onClose?: () => void
  searchPlaceholder?: string
}

export function FollowListLayout({
  title,
  subtitle,
  searchPanel,
  loadMoreProps,
  stepIndicator,
  renderListContent,
  onClose,
  searchPlaceholder = 'Search leagues...',
}: FollowListLayoutProps) {
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loadMoreProps.hasNextPage) return
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loadMoreProps.isFetchingNextPage) {
        loadMoreProps.fetchNextPage()
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [loadMoreProps])

  return (
    <div className="flex h-dvh w-full flex-col bg-[#46383a] px-[11px] pb-[11px]">
      {/* ── Outer top bar ── */}
      <div className="flex h-12 shrink-0 items-center justify-between px-1" style={{ opacity: 0.66 }}>
        {/* RORR logo + text */}
        <div className="flex items-center gap-[6px]">
          {/* Logo: rendered as a rotated/flipped "R" shape */}
          <div className="flex h-[18px] w-[22px] items-center justify-center" style={{ transform: 'scaleY(-1) rotate(180deg)' }}>
            <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path
                d="M3 2h9c2.5 0 4 1.5 4 3.5S14 9 11.5 9L15 16H12l-3-7H6v7H3V2z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-[14px] font-light leading-5 text-white">RORR</span>
        </div>

        {/* Close (X) */}
        <button type="button" onClick={onClose} className="text-white" aria-label="닫기">
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ── Inner content card ── */}
      <div className="relative flex min-h-0 flex-1 overflow-hidden rounded-[16px] bg-[#f0f2f5]">

        {/* Search icon button — absolute top-right */}
        {!searchPanel.isOpen && (
          <div className="absolute right-0 top-0 z-10 p-[10px]">
            <button
              type="button"
              onClick={searchPanel.open}
              aria-label="검색"
              className="relative flex h-6 w-6 items-center justify-center rounded-[30px]"
            >
              <svg className="h-3 w-3 text-[#555]" viewBox="0 0 12 12" fill="none">
                <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7.5 7.5L10.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}

        {/* Scrollable content */}
        <div className="flex h-full w-full flex-col gap-4 overflow-y-auto overflow-x-hidden px-4 pb-[70px] pt-3">

          {/* Title row or search bar */}
          {searchPanel.isOpen ? (
            <div
              className="flex shrink-0 items-center gap-2 rounded-[8px] bg-white px-3 py-2"
              style={{ boxShadow: '0px 2px 2px rgba(0,0,0,0.08)' }}
            >
              <svg className="h-4 w-4 shrink-0 text-[#969cda]" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                autoFocus
                type="text"
                value={searchPanel.query}
                onChange={(e) => searchPanel.setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="flex-1 bg-transparent text-[14px] text-black placeholder-[#b2bac3] outline-none"
              />
              <button type="button" onClick={searchPanel.close} className="shrink-0 text-[#757b90]">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex shrink-0 flex-col gap-1">
              <p className="text-[24px] font-semibold leading-[1.5] text-black">{title}</p>
              <p className="text-[14px] font-light leading-5 text-black">{subtitle}</p>
            </div>
          )}

          {/* List */}
          {renderListContent()}

          {/* Infinite scroll sentinel */}
          <div ref={sentinelRef} className="h-px shrink-0" />

          {loadMoreProps.isFetchingNextPage && (
            <div className="flex justify-center py-2">
              <svg className="h-6 w-6 animate-spin text-[#969cda]" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
          )}
        </div>

        {/* Step indicator overlay */}
        {stepIndicator}

        {/* Scrollbar decoration */}
        <div className="pointer-events-none absolute bottom-4 right-0 top-4 flex w-2 items-start justify-center">
          <div className="relative h-full w-1 overflow-hidden rounded-full bg-[#ced6e6]">
            <div className="absolute top-0 h-12 w-full rounded-full bg-[#969cda]" />
          </div>
        </div>
      </div>
    </div>
  )
}
