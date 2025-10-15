import type { Metadata } from "next";
import ProductCertificationClient from "@/components/product-certification-client"; // Adjust path

// 1. Export the metadata object
export const metadata: Metadata = {
  title: "Product Certification & Regulatory Compliance",
  description: "Get your products certified and compliant with BPOM, SNI, and more in Indonesia—fast, legally, and with zero stress.",
};

// 2. Render the client component
export default function ProductCertificationPage() {
  return (
    <ProductCertificationClient />
  );
}