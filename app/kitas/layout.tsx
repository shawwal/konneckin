import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Legal Stay & Work Permits (KITAS) for Foreigners",
  description: "Ensure your KITAS is structured properly from the beginning. We advise on Investor, Working, and Dependent visas so you avoid rejection risks and compliance issues.",
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}