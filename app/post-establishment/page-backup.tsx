// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Post-establishment services",
//   description: "Professional, compliant, and reliable support for your business in Indonesia.",
// }

'use client'
import { Check } from 'lucide-react';
import Image from 'next/image';

// --- Page Specific Data ---
const postEstablishmentCardData = [
  {
    type: 'support',
    title: 'Corporate Secretarial Services',
    description: 'Stay compliant with annual reporting, director changes, and shareholder resolutions. We manage all your corporate housekeeping.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop',
  },
  {
    type: 'process',
    title: 'Accounting & Tax Compliance',
    description: "From monthly bookkeeping and payroll to annual tax filings, we ensure your finances are always in perfect order and fully compliant.",
  },
  {
    type: 'trusted',
    title: 'Business License Management',
    description: 'We monitor and manage renewals for your essential business licenses, ensuring your operations are never interrupted.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
  },
];


// --- Reusable Feature Card Component (Adapted from your ThriveSection) ---
function FeatureCard({ item }: any) {
  if (item.type === 'support') {
    return (
      <div className="relative h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm min-h-[300px]">
        <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative flex h-full flex-col justify-end">
          <h3 className="font-serif text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-white/90">{item.description}</p>
        </div>
      </div>
    );
  }

  if (item.type === 'process') {
    return (
      <div className="flex h-full flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm">
        <div className="rounded-lg border bg-muted/50 p-3">
          <div className="flex items-center space-x-2 text-sm">
            <div className="rounded bg-background px-3 py-1.5 text-foreground shadow-sm">Reporting</div>
            <div className="text-muted-foreground">Filings</div>
            <div className="text-muted-foreground">Compliance</div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-2">
              <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
              <div>
                <div className="h-3 w-28 rounded-sm bg-muted-foreground/30"></div>
                <div className="mt-1.5 h-2 w-20 rounded-sm bg-muted-foreground/20"></div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
              <div>
                <div className="h-3 w-32 rounded-sm bg-muted-foreground/30"></div>
                <div className="mt-1.5 h-2 w-24 rounded-sm bg-muted-foreground/20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
          <p className="mt-2 text-muted-foreground">{item.description}</p>
        </div>
      </div>
    );
  }

  if (item.type === 'trusted') {
    return (
      <div className="relative h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm min-h-[300px]">
        <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative flex h-full flex-col justify-end">
          <h3 className="font-serif text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-white/90">{item.description}</p>
        </div>
      </div>
    );
  }

  return null;
}

// --- Main Page Component ---
export default function PostEstablishmentPage() {
  const trustedCard = postEstablishmentCardData.find(item => item.type === 'trusted');
  const otherCards = postEstablishmentCardData.filter(item => item.type !== 'trusted');

  return (
    <>
      {/* Hero Section (Adapted from your SplitSection) */}
      <div className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
                Seamless Operations, Post-Establishment
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                Focus on your growth while we handle the complexities of Indonesian compliance, accounting, and corporate secretarial duties. Our support ensures your business runs smoothly long after setup is complete.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:min-h-[500px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
              alt="Professional team collaborating in a modern office"
            />
          </div>
        </div>
      </div>

      {/* Features Section (Adapted from your ThriveSection) */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto container px-4 lg:px-0">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Your Comprehensive Post-Establishment Partner
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We provide end-to-end support to ensure your business remains compliant, efficient, and focused on its core objectives.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              {otherCards.map((item) => (
                <FeatureCard key={item.type} item={item} />
              ))}
            </div>
            {trustedCard && (
              <div>
                <FeatureCard item={trustedCard} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
