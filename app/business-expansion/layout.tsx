import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Expansion Services',
  description: 'Ready to grow? Konneckin provides end-to-end business expansion services, from market entry strategy to operational setup.',
  openGraph: {
    title: 'Business Expansion Services | Konneckin',
    description: 'Konneckin provides end-to-end business expansion services, from market entry to operational setup.',
    url: 'https.www.konneckin.com/business-expansion',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Business Expansion Services',
      },
    ],
  },
  twitter: {
    title: 'Business Expansion Services | Konneckin',
    description: 'Konneckin provides end-to-end business expansion services, from market entry to operational setup.',
    images: ['/og-image.png'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}