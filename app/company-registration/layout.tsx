import type { ReactNode } from "react"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company Registration & Setup',
  description: 'Navigate complex legal requirements with ease. Konneckin offers fast, reliable company registration and incorporation services.',
  openGraph: {
    title: 'Company Registration & Setup | Konneckin',
    description: 'Konneckin offers fast, reliable company registration and incorporation services.',
    url: 'https://www.konneckin.com/company-registration',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Company Registration Services',
      },
    ],
  },
  twitter: {
    title: 'Company Registration & Setup | Konneckin',
    description: 'Konneckin offers fast, reliable company registration and incorporation services.',
    images: ['/og-image.png'],
  }
}
export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}