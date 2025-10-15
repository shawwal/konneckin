import type { Metadata } from "next";
import MarketResearchClient from "@/components/market-research-client"; // Adjust path

// Export the metadata for SEO
export const metadata: Metadata = {
  title: "Market Research in Indonesia",
  description: "Enter the Indonesian market with confidence. Get in-depth data and local insights to build a successful and sustainable entry strategy.",
};

// Render the Client Component
export default function Page() {
  return (
    <MarketResearchClient />
  );
}