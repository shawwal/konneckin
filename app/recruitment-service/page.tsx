import type { Metadata } from "next";
import RecruitmentClient from "@/components/recruitment-client"; // Adjust path

// Export the metadata for SEO
export const metadata: Metadata = {
  title: "Recruitment & Executive Search in Indonesia",
  description: "Find and hire the top-tier talent you need to build, scale, and lead your business in Indonesia. We specialize in executive, managerial, and specialist roles.",
  openGraph: {
    title: 'Recruitment & Executive Search in Indonesia | Konneckin',
    description: 'Find and hire the top-tier talent you need to build, scale, and lead your business in Indonesia. We specialize in executive, managerial, and specialist roles.',
    url: '/recruitment-service',
    images: [
      {
        url: '/open-graph/recruitment-service.png',
        width: 1200,
        height: 630,
        alt: 'Recruitment & Executive Search in Indonesia',
      },
    ],
  },
  twitter: {
    title: 'Recruitment & Executive Search in Indonesia | Konneckin',
    description: 'Find and hire the top-tier talent you need to build, scale, and lead your business in Indonesia. We specialize in executive, managerial, and specialist roles.',
    images: ['/open-graph/recruitment-service.png'],
  }
};

// Render the Client Component
export default function Page() {
  return (
    <RecruitmentClient />
  );
}