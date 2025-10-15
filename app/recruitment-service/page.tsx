import type { Metadata } from "next";
import RecruitmentClient from "@/components/recruitment-client"; // Adjust path

// Export the metadata for SEO
export const metadata: Metadata = {
  title: "Recruitment & Executive Search in Indonesia",
  description: "Find and hire the top-tier talent you need to build, scale, and lead your business in Indonesia. We specialize in executive, managerial, and specialist roles.",
};

// Render the Client Component
export default function Page() {
  return (
    <RecruitmentClient />
  );
}