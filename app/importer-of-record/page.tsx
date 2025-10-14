"use client"
import React, { useState } from 'react';
import { SplitTwoSection } from '@/components/split-two-section';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import FaqSection from '@/components/faq-section';
import BenefitsSection from '@/components/benefits-section';
import TimelineSection from '@/components/timeline-section';

// Import Data
import { faqImportData } from '@/data/faqImport';
import { iorBenefitsData } from '@/data/benefitsData';
import { gettingStartedData } from '@/data/timelineData';
import { iorIndustriesData } from '@/data/industriesData';
import ServicesSection from '@/components/services-section';
import { iorServiceData } from '@/data/iorServiceData';
import { IndustriesSection } from '@/components/industries-section';

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Importer of Record Services in Indonesia"
        subtitle="Ensure full customs compliance and import clearance in Indonesia—without establishing a local legal entity."
        ctaText="Get a free consultation"
        ctaHref="#contact"
        imageUrl="/assets/earth-ior.webp"
        imageAlt="IOR Services Illustration"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

const WhatIsIorSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6 text-center md:text-left">
      <div className="md:w-3/4 lg:w-2/3 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What is an Importer of Record (IOR)?</h2>
        <p className="text-lg leading-relaxed">
          An Importer of Record (IOR) is the legal party responsible for ensuring imported goods comply with Indonesian laws and regulations, including customs clearance, product classification, tax payments, and proper documentation. Using an IOR service allows foreign companies to import goods into Indonesia without the need to set up a local entity.
        </p>
      </div>
    </div>
  </section>
);


// --- MAIN PAGE COMPONENT ---
const ImporterOfRecordPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-sans">
      <HeroSection />
      <WhatIsIorSection />
      <BenefitsSection
        title={iorBenefitsData.title}
        highlightedText={iorBenefitsData.highlightedText}
        items={iorBenefitsData.items}
        imageUrl={iorBenefitsData.imageUrl}
      />
      <ServicesSection
        title={iorServiceData.title}
        subtitle={iorServiceData.subtitle}
        services={iorServiceData.services}
      />
     <IndustriesSection {...iorIndustriesData} />
      <TimelineSection
        title={gettingStartedData.title}
        subtitle={gettingStartedData.subtitle}
        imageUrl={gettingStartedData.imageUrl}
        imageAlt={gettingStartedData.imageAlt}
        steps={gettingStartedData.steps}
      />
      <WhyChooseUsSection />
      <FaqSection faqData={faqImportData} />
    </div>
  );
};

export default ImporterOfRecordPage;