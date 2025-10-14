"use client"
import React, { useState } from 'react';
import { FaBuilding, FaLaptopCode, FaShoppingCart, FaStore, FaMedkit, FaFlask, FaBroadcastTower, FaMicrochip, FaCar, FaPlane, FaBullhorn, FaChartLine } from 'react-icons/fa';
import { SplitTwoSection } from '@/components/split-two-section';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import FaqSection from '@/components/faq-section';
import { faqImportData } from '@/data/faqImport';

// --- DATA DEFINITIONS ---
type Industry = { name: string; icon: React.ElementType; description: string; };


const industries: Industry[] = [
  { name: 'Foreign manufacturers', icon: FaBuilding, description: 'We assist overseas manufacturers in bringing machinery, components, and equipment into Indonesia for production, installation, or testing purposes.' },
  { name: 'Technology companies', icon: FaLaptopCode, description: 'Our team handles the importation of IT infrastructure, servers, enterprise software hardware, and electronic modules required for operations and development.' },
  { name: 'E-commerce businesses', icon: FaShoppingCart, description: 'We work with online retailers and international sellers who ship goods directly to Indonesian customers. Our IOR service ensures fast clearance and full compliance with customs.' },
  { name: 'Online sellers', icon: FaStore, description: 'For cross-border sellers using platforms like Amazon, Shopify, or independent channels, we provide a seamless import process for fulfilling orders in Indonesia.' },
  { name: 'Medical device companies', icon: FaMedkit, description: 'We manage the import of regulated medical equipment, diagnostic kits, and laboratory tools for hospitals, clinics, and health institutions.' },
  { name: 'Pharmaceutical suppliers', icon: FaFlask, description: 'We handle temperature-sensitive and restricted pharmaceutical imports with full regulatory compliance and timely delivery.' },
  { name: 'Telecom companies', icon: FaBroadcastTower, description: 'We support network infrastructure providers by importing modems, routers, switches, and telecommunication devices needed for rollout and upgrades.' },
  { name: 'Electronic vendors', icon: FaMicrochip, description: 'We facilitate the import of consumer electronics, industrial gadgets, and specialized tools for local distribution or internal use.' },
  { name: 'Automotive firms', icon: FaCar, description: 'We enable importation of auto parts, heavy tools, and mechanical systems used for servicing, prototyping, or research.' },
  { name: 'Aerospace businesses', icon: FaPlane, description: 'We assist companies importing precision tools, parts, and components for aviation projects, aerospace engineering, and air shows.' },
  { name: 'Advertising agencies', icon: FaBullhorn, description: 'We import promotional materials, display kits, and merchandise used for product launches, exhibitions, and branding campaigns.' },
  { name: 'Marketing firms', icon: FaChartLine, description: 'We support campaign execution by importing point-of-sale displays, printed materials, and event props across major cities in Indonesia.' },
];


// --- MODULAR PAGE SECTIONS ---

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

const WhyUseIorSection = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Why use an IOR service <span className="text-primary">in Indonesia?</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "No need to establish a local company (PT PMA)",
          "Complete legal compliance with Indonesian regulations",
          "Reduced risk of penalties and shipment delays",
          "All paperwork and import duties handled",
          "Ideal for foreign businesses, tech companies, and R&D shipments",
        ].map((text, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{text}</p>
          </div>
        ))}
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
                <Icon className={`w-5 h-5 ${activeIndustry === name ? 'text-white' : 'text-blue-500'}`} />
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

const GettingStartedSection = () => {
  const TimelineStep: React.FC<{ num: number, title: string, text: string, isLast?: boolean }> = ({ num, title, text, isLast = false }) => (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border-2 border-blue-500 rounded-full">
            <span className="text-lg font-bold text-blue-500">{num}</span>
          </div>
        </div>
        {!isLast && <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>}
      </div>
      <div className="pb-8">
        <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</p>
        <p className="text-gray-600 dark:text-gray-300">{text}</p>
      </div>
    </div>
  );
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Getting started is simple.</h2>
            <p className="text-xl mb-8">We handle the complex parts so you don’t have to.</p>
            <img src="https://konneckin.com/wp-content/uploads/2025/08/ChatGPT-Image-Jun-14-2025-at-05_03_33-PM.webp" alt="Simple Process" className="rounded-lg shadow-md" />
          </div>
          <div className="lg:w-1/2">
            <TimelineStep num={1} title="Consultation" text="We learn about your shipment, assess compliance needs, and recommend the best approach." />
            <TimelineStep num={2} title="Documentation" text="We prepare the required documents, licenses, and customs declarations—accurate and audit-ready." />
            <TimelineStep num={3} title="Customs clearance" text="We act as your Importer of Record, ensuring smooth clearance with no legal exposure for you." />
            <TimelineStep num={4} title="Delivery & compliance" text="Your goods arrive safely. We handle any storage or last-mile delivery, backed with full reporting." isLast={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE COMPONENT ---
const ImporterOfRecordPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-sans">
      <HeroSection />
      <WhatIsIorSection />
      <WhyUseIorSection />
      <IndustriesSection />
      <GettingStartedSection />
      <WhyChooseUsSection />
      <FaqSection faqData={faqImportData} />
    </div>
  );
};

export default ImporterOfRecordPage;

