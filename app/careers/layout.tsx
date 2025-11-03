import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Konneckin',
  description: 'Join our team! Explore open positions at Konneckin and learn what it\'s like to work with us in shaping the future of business.',
  openGraph: {
    title: 'Careers at Konneckin | Join Our Team',
    description: 'Explore open positions at Konneckin and learn what it\'s like to work with us.',
    url: 'https://www.konneckin.com/careers',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Careers at Konneckin',
      },
    ],
  },
  twitter: {
    title: 'Careers at Konneckin | Join Our Team',
    description: 'Explore open positions at Konneckin and learn what it\'s like to work with us.',
    images: ['/og-image.png'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}