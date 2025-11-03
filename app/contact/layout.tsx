import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Konneckin team. We\'re ready to answer your questions on business expansion, market strategy, and regulatory compliance.',
  openGraph: {
    title: 'Contact Us | Konneckin',
    description: 'Get in touch with the Konneckin team. We\'re ready to answer your questions.',
    url: 'https://www.konneckin.com/contact',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Konneckin',
      },
    ],
  },
  twitter: {
    title: 'Contact Us | Konneckin',
    description: 'Get in touch with the Konneckin team. We\'re ready to answer your questions.',
    images: ['/og-image.png'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}