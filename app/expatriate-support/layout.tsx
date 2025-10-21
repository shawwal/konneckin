import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Expatriate support",
  description: "Visas and permits for Indonesia—compliant, reliable, and stress-free.",
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}