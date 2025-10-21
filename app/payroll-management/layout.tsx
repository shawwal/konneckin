import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Precise and reliable payroll services",
  description: "Ensure smooth payroll processing with solutions that prioritize accuracy, confidentiality, and regulatory compliance.",
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}