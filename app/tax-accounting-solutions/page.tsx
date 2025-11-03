import TaxAccountingClient from "@/components/tax-accounting-client"; // Adjust path

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tax & Accounting Solutions',
  description: 'Stay compliant and optimize your finances with Konneckin\'s expert tax and accounting solutions, tailored for your business needs.',
  openGraph: {
    title: 'Tax & Accounting Solutions | Konneckin',
    description: 'Stay compliant and optimize your finances with Konneckin\'s expert tax and accounting solutions.',
    url: 'https://www.konneckin.com/tax-accounting-solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tax & Accounting Solutions',
      },
    ],
  },
  twitter: {
    title: 'Tax & Accounting Solutions | Konneckin',
    description: 'Stay compliant and optimize your finances with Konneckin\'s expert tax and accounting solutions.',
    images: ['/og-image.png'],
  }
}
// Render the Client Component
export default function Page() {
  return (
    <TaxAccountingClient />
  );
}