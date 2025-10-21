import type { Metadata } from "next";
import MarketResearchClient from "@/components/market-research-client"; // Adjust path

// Export the metadata for SEO
export const metadata: Metadata = {
  title: "Market research for strategic growth",
  description: "Making business decisions without the right insights can lead to costly mistakes and missed opportunities.",
};

// Render the Client Component
export default function Page() {
  return (
    <MarketResearchClient />
  );
}