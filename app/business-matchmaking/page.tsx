import type { Metadata } from "next";
import BusinessMatchmakingClient from "@/components/business-matchmaking-client"; // Adjust path

// Export the metadata for SEO
export const metadata: Metadata = {
  title: "Business Matchmaking in Indonesia",
  description: "Find your perfect business partner in Indonesia. We connect you with vetted distributors, suppliers, and joint venture allies to accelerate your growth.",
};

// Render the Client Component
export default function Page() {
  return (
    <BusinessMatchmakingClient />
  );
}