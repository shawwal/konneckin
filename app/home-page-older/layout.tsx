import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Start your business in Indonesia with confidence",
  description: "Set up your company in Indonesia—hassle-free, compliant, and fast.",
  // Add the robots metadata to prevent indexing
  robots: {
    index: false,
    follow: false, // You can set follow to false if you don't want crawlers to follow links
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}
