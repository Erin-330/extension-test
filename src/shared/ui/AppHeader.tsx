interface AppHeaderProps {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
}

export function AppHeader({ left, center, right }: AppHeaderProps) {
  return (
    <header className="relative flex h-12 w-full shrink-0 items-center justify-between px-4">
      <div className="flex items-center">{left}</div>
      {center && (
        <div className="absolute left-1/2 -translate-x-1/2 text-base font-semibold text-dsText-900">
          {center}
        </div>
      )}
      <div className="flex items-center">{right}</div>
    </header>
  )
}
