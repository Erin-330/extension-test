interface PageScrollLayoutProps {
  children: React.ReactNode
}

export function PageScrollLayout({ children }: PageScrollLayoutProps) {
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background">
      {children}
    </div>
  )
}
