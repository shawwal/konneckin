import MarketResearchClient from "@/components/market-research-client"; // Adjust path

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Research & Analysis',
  description: 'Make data-driven decisions with our in-depth market research and analysis services. We provide insights on competitors, trends, and opportunities.',
  openGraph: {
    title: 'Market Research & Analysis | Konneckin',
    description: 'Make data-driven decisions with our in-depth market research and analysis services.',
    url: 'https.www.konneckin.com/market-research',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Market Research & Analysis',
      },
    ],
  },
  twitter: {
    title: 'Market Research & Analysis | Konneckin',
    description: 'Make data-driven decisions with our in-depth market research and analysis services.',
    images: ['/og-image.png'],
  }
}
// Render the Client Component
export default function Page() {
  return (
    <MarketResearchClient />
  );
}