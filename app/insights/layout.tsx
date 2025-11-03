import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Analysis',
  description: 'Explore expert insights, articles, and analysis on market trends, business strategy, and digital transformation from the Konneckin team.',
  openGraph: {
    title: 'Insights & Analysis | Konneckin',
    description: 'Explore expert insights, articles, and analysis on market trends and business strategy.',
    url: 'https.www.konneckin.com/insights',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Konneckin Insights',
      },
    ],
  },
  twitter: {
    title: 'Insights & Analysis | Konneckin',
    description: 'Explore expert insights, articles, and analysis on market trends and business strategy.',
    images: ['/og-image.png'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}