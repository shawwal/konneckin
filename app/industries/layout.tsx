import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Discover the diverse industries Konneckin serves, providing tailored consulting solutions for technology, healthcare, finance, and more.',
  openGraph: {
    title: 'Industries We Serve | Konneckin',
    description: 'Discover the diverse industries Konneckin serves with tailored consulting solutions.',
    url: 'https.www.konneckin.com/industries',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Industries Served by Konneckin',
      },
    ],
  },
  twitter: {
    title: 'Industries We Serve | Konneckin',
    description: 'Discover the diverse industries Konneckin serves with tailored consulting solutions.',
    images: ['/og-image.png'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}