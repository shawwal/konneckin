import type { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

/**
 * Lightweight wrapper so pages can opt into a consistent container if needed.
 * Currently a pass-through, since header/footer live in app/layout.tsx.
 */
export function Layout({ children }: LayoutProps) {
  return <>{children}</>
}
