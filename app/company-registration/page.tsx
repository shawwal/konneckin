'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path if needed
import {
  whyPartnerData,
  faqBusinessExpansionData,
  expertiseItems
} from '@/data/businessExpansionData'; // Adjust path if needed
import { SplitTwoSection } from '@/components/split-two-section';
import { AccordionWithImage } from '@/components/accordion-with-image';
import { accordionData } from '@/data/businessAccordionData';
import { ExpertiseSection } from '@/components/expertise-section';
import { comparisonTableData, incorporationServices, opportunityItems } from '@/data/companyRegistrationData';
import { MarketOpportunitiesSection } from '@/components/marketing-opportunities-section';
import { IncorporationServicesSection } from '@/components/incorporation-services-section';
import { ComparisonTableSection } from '@/components/comparison-table-section';


const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Start your business in Indonesia with confidence"
        subtitle="Set up your company in Indonesia—hassle-free, compliant, and fast."
        ctaText="Get a free consultation"
        ctaHref="#services"
        imageUrl="/assets/woman-writing.webp"
        imageAlt="Woman writing on a notebook at a desk"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

// --- Main Page Component ---
export default function BusinessExpansionPage() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <HeroSection />

      <IncorporationServicesSection
        title={
          <>
            Incorporate your company in Indonesia with ease —{' '}
            <span className="text-primary">
              guided by experts who understand the local legal landscape.
            </span>
          </>
        }
        serviceItems={incorporationServices}
        ctaText="See how we can help you grow"
        ctaHref="/contact"
      />

      <MarketOpportunitiesSection
        // Pass the title as a prop, with JSX for styling
        title={
          <>
            Indonesia offers a growing market and{' '}
            <span className="text-primary">investor-friendly policies</span>
          </>
        }
        // Pass the imported data array to the 'opportunityItems' prop
        opportunityItems={opportunityItems}
      />


      <ComparisonTableSection
        title="Compare business entity types for foreign companies"
        subtitle="This comparison helps you understand the legal structure, permitted activities, and key differences between PT PMA, KPPA, KP3A, and BUJKA — so you can align your setup with your business goals in Indonesia."
        tableData={comparisonTableData}
      />

      {/* ========== 2. "What's Next?" Core Services Section ========== */}
      <AccordionWithImage
        title={
          // Using a fragment to potentially style the two parts of the title differently
          <>
            Accelerate your expansion in Indonesia through a proven framework that combines{' '}
            <span className="text-blue-900 dark:text-primary">
              compliance, local insight, and strategic partnerships.
            </span>
          </>
        }
        // NOTE: The image URL was not in the provided HTML. Please replace this path.
        imageUrl="/assets/professional-marketing-team.webp"
        imageAlt="A professional team collaborating in a modern office setting"
        accordionItems={accordionData}
        ctaText="See how we can help you grow"
        ctaHref="/contact" // Assuming the button should link to a contact section
      />


      <ExpertiseSection
        title={
          <>
            Entering new markets requires the{' '}
            <span className="text-blue-800">right expertise</span>
          </>
        }
        featureItems={expertiseItems}
      />

      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* --- Image --- */}
            <div className="flex items-center justify-center order-last lg:order-first">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/professionals-collaborating.webp"
                alt="Professionals collaborating on a project"
              />
            </div>
            {/* --- Text Content --- */}
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Strategic Support for Sustainable Growth
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Expansion isn't just about paperwork—it's about making the right strategic moves. We provide the expertise to ensure your growth is both rapid and compliant.
              </p>
              <div className="mt-8 space-y-6">
                {whyPartnerData.map(item => (
                  <div key={item.title} className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{item.title}</h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqBusinessExpansionData}
        title="Expansion Questions"
        subtitle="Common questions about scaling your business operations in Indonesia."
      />
    </>
  );
}