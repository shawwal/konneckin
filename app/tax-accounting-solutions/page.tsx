import type { Metadata } from "next";
import TaxAccountingClient from "@/components/tax-accounting-client"; // Adjust path

// Export the metadata for SEO
export const metadata: Metadata = {
  title: "Tax & Accounting Solutions in Indonesia",
  description: "Reliable, end-to-end accounting, tax reporting, and social security (BPJS) management to keep your business compliant and thriving in Indonesia.",
};

// Render the Client Component
export default function Page() {
  return (
    <TaxAccountingClient />
  );
}