import ProductCertificationClient from "@/components/product-certification-client"; // Adjust path

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Certification & Regulatory Compliance',
  description: 'Navigate complex regulations and get your products to market faster. Konneckin provides expert guidance on certification and compliance.',
  openGraph: {
    title: 'Product Certification & Compliance | Konneckin',
    description: 'Navigate complex regulations and get your products to market faster with our expert guidance.',
    url: 'https://www.konneckin.com/product-certification-regulatory-compliance',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Product Certification & Regulatory Compliance',
      },
    ],
  },
  twitter: {
    title: 'Product Certification & Compliance | Konneckin',
    description: 'Navigate complex regulations and get your products to market faster with our expert guidance.',
    images: ['/og-image.png'],
  }
}
// 2. Render the client component
export default function ProductCertificationPage() {
  return (
    <ProductCertificationClient />
  );
}