import type { Metadata } from "next";
import TaxAccountingClientBackup from "@/components/tax-accounting-client-backup";

// Export the metadata for SEO
export const metadata: Metadata = {
  title: "Tax & Accounting Solutions in Indonesia",
  description: "Reliable, end-to-end accounting, tax reporting, and social security (BPJS) management to keep your business compliant and thriving in Indonesia.",
};

// Render the Client Component
export default function Page() {
  return (
    <TaxAccountingClientBackup />
  );
}