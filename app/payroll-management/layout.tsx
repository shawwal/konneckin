import type { ReactNode } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payroll Management Services',
  description: 'Streamline your operations with our reliable payroll management services. We handle payroll, compliance, and reporting so you can focus on growth.',
  openGraph: {
    title: 'Payroll Management Services | Konneckin',
    description: 'Streamline your operations with our reliable payroll management services.',
    url: 'https://www.konneckin.com/payroll-management',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Payroll Management Services',
      },
    ],
  },
  twitter: {
    title: 'Payroll Management Services | Konneckin',
    description: 'Streamline your operations with our reliable payroll management services.',
    images: ['/og-image.png'],
  }
}
export default function Layout({ children }: { children: ReactNode }) {
  // This layout applies metadata and renders children directly
  // without any additional wrapping elements, as requested.
  return children
}