// import type { Metadata } from "next"
// export const metadata: Metadata = {
//   title: "Expatriate support",
//   description: "Visas and permits for Indonesia—compliant, reliable, and stress-free.",
// }
'use client'
import FaqSection from '@/components/faq-section';
import PitfallsSection from '@/components/pitfalls-section';
import { SplitTwoSection } from '@/components/split-two-section';
import { Button } from '@/components/ui/button';
import { faqExpatriateData } from '@/data/faqExpatriateData';
import { Check, CheckCircle, ArrowRight, ShieldCheck, Handshake, FileText, Home } from 'lucide-react';
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

const servicesData = [
  {
    icon: FileText,
    title: 'Work & Stay Permits (KITAS/KITAP)',
    description: 'Expert handling of all visa applications for a seamless and compliant process for your foreign talent, from initial application to final approval.',
  },
  {
    icon: Home,
    title: 'Relocation & Settling-In',
    description: 'We go beyond paperwork. We assist in finding the right home, schools, and navigating local life to make Indonesia feel like home from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Personal Tax & Compliance',
    description: 'We manage all personal reporting (NPWP, SPT) and tax obligations for expatriates, ensuring full compliance with Indonesian regulations.',
  },
  {
    icon: FileText,
    title: 'Dependent Visas',
    description: 'Bring your family along. We facilitate the entire application process for spouses and children to ensure your loved ones can join you hassle-free.',
  },
  {
    icon: Handshake,
    title: 'Business Visas',
    description: 'For short-term business travel, we streamline the Multiple Business Visa and Visa on Arrival (VOA) processes for you and your partners.',
  },
  {
    icon: ShieldCheck,
    title: 'Other Immigration Documents',
    description: 'Full support for essential documentation, including Exit Permit Only (EPO) and other necessary immigration paperwork for a compliant stay.',
  },
];

// --- Data for the "Why Choose Us" Section ---
const whyChooseUsData = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Compliance',
    description: 'Our deep expertise in Indonesian immigration law ensures every application is accurate, complete, and fully compliant, minimizing risks and delays.',
  },
  {
    icon: Handshake,
    title: 'Experienced Team',
    description: 'Leverage our years of experience and established relationships to navigate complex bureaucratic processes efficiently and effectively.',
  },
  {
    icon: CheckCircle,
    title: 'Hassle-Free Process',
    description: 'We manage the entire journey from start to finish, providing clear communication and proactive support so you can focus on your business.',
  },
  {
    icon: ArrowRight,
    title: 'Transparent & Reliable',
    description: 'No hidden fees or surprises. We operate with complete transparency, providing a reliable service you can trust for your most valuable talent.',
  },
]



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

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Moving to Indonesia? Let’s make it effortless."
        subtitle="Whether you're just planning to arrive, already living here, or ready to settle permanently, Konneckin supports your visa and permit journey with full compliance and peace of mind."
        ctaText="Get a free consultation"
        ctaHref="/contact"
        imageUrl="/assets/city-skyline.webp"
        imageAlt="vibrant city skyline"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

// --- Main Page Component ---
export default function ExpatriateSupportPage() {
  const trustedCard = expatriateSupportCardData.find(item => item.type === 'trusted');
  const otherCards = expatriateSupportCardData.filter(item => item.type !== 'trusted');

  return (
    <>
      {/* Hero Section (Adapted from your SplitSection) */}
      <HeroSection />

      <PitfallsSection />

      {/* Features Section (Adapted from your ThriveSection) */}
      <section className="bg-muted/50">
        <div className="mx-auto container px-4 lg:px-0 pt-16">
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

        {/* ========== 2. Our Core Services Section ========== */}
        <section className="py-20 sm:py-28 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                A Complete Suite of Relocation Services
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Our dedicated services are designed to handle every aspect of the expatriate journey with professionalism and care.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <div key={service.title} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full h-12 w-12 flex items-center justify-center">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 3. Why Partner With Us Section ========== */}
        <section className="py-20 sm:py-28 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* --- Text Content --- */}
              <div className="max-w-xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                  Your Trusted Partner for Indonesian Immigration
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  Navigating the complexities of Indonesian regulations requires a partner you can rely on. We provide the expertise and support you need for a successful outcome.
                </p>
              </div>
              {/* --- Feature Grid --- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUsData.map((feature) => (
                  <div key={feature.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FaqSection faqData={faqExpatriateData} />
      </section>
    </>
  );
}
