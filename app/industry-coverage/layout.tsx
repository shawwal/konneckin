import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry Coverage',
  description: 'Specialized support across diverse industries to help your business thrive and expand in Indonesia\'s dynamic market.',
  openGraph: {
    title: 'Industry Coverage',
    description: 'Specialized support across diverse industries to help your business thrive and expand in Indonesia\'s dynamic market.',
    url: 'https://www.konneckin.com/industry-coverage',
    images: [
      {
        url: '/og-image.png', // Assuming you use the same OG image
        width: 1200,
        height: 630,
        alt: 'Industries covered by Konneckin',
      },
    ],
  },
  twitter: {
    title: 'Industry Coverage',
    description: 'Specialized support across diverse industries to help your business thrive and expand in Indonesia\'s dynamic market.',
    images: ['/og-image.png'], // Assuming you use the same Twitter image
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  return children
}