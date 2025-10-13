// import type { Metadata } from "next"
// export const metadata: Metadata = {
//   title: "Expatriate support",
//   description: "Visas and permits for Indonesia—compliant, reliable, and stress-free.",
// }

'use client'
import { Check } from 'lucide-react';
import Image from 'next/image';

// --- Page Specific Data ---
const expatriateSupportCardData = [
  {
    type: 'support',
    title: 'Work & Stay Permits (KITAS/KITAP)',
    description: 'Expert handling of all visa and permit applications for a seamless and compliant process for your foreign talent.',
    imageUrl: 'https://media.istockphoto.com/id/877497140/photo/usa-green-card-or-permanent-resident-card-and-employment-authorization-card.webp?a=1&b=1&s=612x612&w=0&k=20&c=z58TclDrjsh0mj-JkhhjmfHtjWLn42N6maGaXNOF4zo=',
  },
  {
    type: 'process',
    title: 'Home Search & Settling-In',
    description: "We assist in finding the right home, schools, and navigating local life to make Indonesia feel like home from day one.",
  },
  {
    type: 'trusted',
    title: 'Personal Tax & Compliance',
    description: 'We manage all personal reporting and tax obligations for expatriates, ensuring full compliance with Indonesian regulations.',
    imageUrl: 'https://images.unsplash.com/photo-1591522810633-3363f115af87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYWwlMjB0YXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
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
            <div className="rounded bg-background px-3 py-1.5 text-foreground shadow-sm">Relocation</div>
            <div className="text-muted-foreground">Orientation</div>
            <div className="text-muted-foreground">Support</div>
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
            <div className="flex items-start space-x-2 opacity-50">
              <div className="mt-1 h-4 w-4 rounded-sm border border-muted-foreground/50"></div>
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
export default function ExpatriateSupportPage() {
  const trustedCard = expatriateSupportCardData.find(item => item.type === 'trusted');
  const otherCards = expatriateSupportCardData.filter(item => item.type !== 'trusted');

  return (
    <>
      {/* Hero Section (Adapted from your SplitSection) */}
      <div className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
                Effortless Relocation for Your Expatriate Team
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                From visas to settling in, we provide comprehensive support to ensure a smooth transition for your international talent, allowing them to be productive from day one.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:min-h-[500px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2695&auto=format&fit=crop"
              alt="Person looking over a vibrant city skyline"
            />
          </div>
        </div>
      </div>

      {/* Features Section (Adapted from your ThriveSection) */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Complete Support for Life in Indonesia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our dedicated services are designed to handle every aspect of the expatriate journey with care and expertise.
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
