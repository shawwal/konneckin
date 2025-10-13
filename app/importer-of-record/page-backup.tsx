// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Importer of Record Services in Indonesia",
//   description: "Full customs compliance and import clearance—without a local entity.",
// }

'use client'
import { Check } from 'lucide-react';

// --- Page Specific Data ---
const iorCardData = [
  {
    type: 'support',
    title: 'Expert Customs Clearance',
    description: 'We navigate complex customs regulations and ensure swift, compliant clearance for your goods entering Indonesia.',
    imageUrl: 'https://images.unsplash.com/photo-1580795478762-1f6b61f2fae7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
  },
  {
    type: 'process',
    title: 'Import Permit & License Handling',
    description: "Don't get stuck on paperwork. We secure all necessary import permits and licenses on your behalf for a wide range of products.",
  },
  {
    type: 'trusted',
    title: 'End-to-End Logistics Coordination',
    description: 'From the port to the final destination, we can coordinate warehousing and last-mile delivery to complete your supply chain.',
    imageUrl: 'https://images.unsplash.com/photo-1606964212858-c215029db704?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9naXN0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
  },
];


// --- Reusable Feature Card Component (Adapted from your ThriveSection) ---
function FeatureCard({ item }: any) {
  if (item.type === 'support') {
    return (
      <div className="relative h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm min-h-[300px]">
        <img src={item.imageUrl} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
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
            <div className="rounded bg-background px-3 py-1.5 text-foreground shadow-sm">Clearance</div>
            <div className="text-muted-foreground">Permits</div>
            <div className="text-muted-foreground">Delivery</div>
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
        <img src={item.imageUrl} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
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
export default function ImporterOfRecordPage() {
  const trustedCard = iorCardData.find(item => item.type === 'trusted');
  const otherCards = iorCardData.filter(item => item.type !== 'trusted');

  return (
    <>
      {/* Hero Section (Adapted from your SplitSection) */}
      <div className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
                Your Gateway to the Indonesian Market
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                Import goods into Indonesia seamlessly without establishing a local legal entity. We act as your official Importer of Record, handling all licensing and customs compliance.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:min-h-[500px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1661881030681-8346ef88cad0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZ28lMjBzaGlwJTIwYnVzeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
              alt="Cargo ship and containers at a busy port"
            />
          </div>
        </div>
      </div>

      {/* Features Section (Adapted from your ThriveSection) */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Reliable & Compliant Import Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We manage the entire import process, from customs and duties to final delivery, providing a true turnkey solution.
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

