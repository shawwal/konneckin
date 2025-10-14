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
import { industries } from '@/data/industriesData';
import ServicesSection from '@/components/services-section';
import { iorServiceData } from '@/data/iorServiceData';

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Importer of Record Services in Indonesia"
        subtitle="Ensure full customs compliance and import clearance in Indonesia—without establishing a local legal entity."
        ctaText="Get a free consultation"
        ctaHref="#contact"
        imageUrl="https://konneckin.com/wp-content/uploads/2025/08/Image_fx-30-1.webp"
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

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>(industries[0].name);
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Industries we serve</h2>
          <p className="text-lg">
            We support a diverse range of industries with tailored Importer of Record (IOR) services. Our expertise helps foreign companies comply with Indonesian import regulations and ensure smooth delivery for specialized goods.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            {industries.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveIndustry(name)}
                className={`p-3 rounded-lg text-left text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeIndustry === name ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <Icon className={`w-5 h-5 ${activeIndustry === name ? 'text-white' : 'text-primary'}`} />
                <span>{name}</span>
              </button>
            ))}
          </div>
          <div className="lg:w-2/3">
            {industries.find(ind => ind.name === activeIndustry) && (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{activeIndustry}</h3>
                <p className="text-lg mb-6">{industries.find(ind => ind.name === activeIndustry)?.description}</p>
                <a href="#contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Contact us
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


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
      />
      <ServicesSection
        title={iorServiceData.title}
        subtitle={iorServiceData.subtitle}
        services={iorServiceData.services}
      />
      <IndustriesSection />
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