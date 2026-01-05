import BusinessMatchmakingClient from "@/components/business-matchmaking-client"; // Adjust path

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Matchmaking Services',
  description: 'Find the right partners, investors, and clients. Konneckin\'s business matchmaking services connect you with verified opportunities.',
  openGraph: {
    title: 'Business Matchmaking Services | Konneckin',
    description: 'Find the right partners, investors, and clients with Konneckin\'s expert matchmaking.',
    url: '/business-matchmaking',
    images: [
      {
        url: '/open-graph/business-matchmaking.png',
        width: 1200,
        height: 630,
        alt: 'Business Matchmaking Services',
      },
    ],
  },
  twitter: {
    title: 'Business Matchmaking Services | Konneckin',
    description: 'Find the right partners, investors, and clients with Konneckin\'s expert matchmaking.',
    images: ['/open-graph/business-matchmaking.png'],
  }
}

// Render the Client Component
export default function Page() {
  return (
    <BusinessMatchmakingClient />
  );
}