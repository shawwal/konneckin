import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Post-establishment Services",
  description: "Professional, compliant, and reliable support for your business in Indonesia.",
   openGraph: {
    title: 'Post-establishment | Konneckin',
    description: 'Professional, compliant, and reliable support for your business in Indonesia.',
    url: '/post-establishment',
    images: [
      {
        url: '/open-graph/post-establishment.png',
        width: 1200,
        height: 630,
        alt: 'Post-establishment',
      },
    ],
  },
  twitter: {
    title: 'Post-establishment | Konneckin',
    description: 'Professional, compliant, and reliable support for your business in Indonesia.',
    images: ['/open-graph/post-establishment.png'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}