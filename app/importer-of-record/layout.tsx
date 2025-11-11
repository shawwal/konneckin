import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Importer of Record (IoR) Services in Indonesia',
  description: 'Ensure customs compliance and import clearance in Indonesia without a local entity. Konneckin\'s Importer of Record (IoR) services handle all documentation, duties, and taxes.',
  openGraph: {
    title: 'Importer of Record (IoR) Services in Indonesia',
    description: 'Ensure full customs compliance in Indonesia without a local legal entity. Konneckin\'s IoR services handle all paperwork and duties for smooth imports.',
    url: 'https://www.konneckin.com/importer-of-record',
    images: [
      {
        url: '/og-image.png', // Assuming you use the same OG image
        width: 1200,
        height: 630,
        alt: 'Importer of Record Services in Indonesia by Konneckin',
      },
    ],
  },
  twitter: {
    title: 'Importer of Record (IoR) Services in Indonesia',
    description: 'Ensure customs compliance and import clearance in Indonesia without a local entity. Konneckin\'s Importer of Record (IoR) services handle all documentation, duties, and taxes.',
    images: ['/og-image.png'], // Assuming you use the same Twitter image
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  return children
}