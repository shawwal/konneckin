'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path if needed
import { SplitTwoSection } from '@/components/split-two-section';
import { ExpertiseSection } from '@/components/expertise-section';
import { comparisonTableData, faqCompanyRegistrationData, incorporationServices, opportunityItems, processSteps } from '@/data/companyRegistrationData';
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

      <ExpertiseSection
        title={
          <>
            Expand into new <br />
            <span className="text-primary">markets seamlessly </span>
          </>
        }
        subTitle="We support your business at any stage of its journey, helping you optimise operations across your entire business landscape. Our flexible, integrated, and end-to-end solutions empower clients to start anywhere and scale everywhere."
        featureItems={processSteps}
      />

      <FaqSection
        faqData={faqCompanyRegistrationData}
        title="Company Registration Questions"
        subtitle="Common questions about registering your business in Indonesia."
      />
    </>
  );
}