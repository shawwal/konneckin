'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path
import {
  matchmakingServices,
  matchmakingProcess,
  faqBusinessMatchmakingData,
  matchmakingClients,
  matchmakingProcessData,
  marketRisks
} from '@/data/businessMatchmakingData'; // Adjust path
import { ExpertiseSection } from './expertise-section';
import { AccordionWithImage } from './accordion-with-image';
import { RiskShowcaseSection } from './risk-showcase';
import { SplitTwoSection } from './split-two-section';

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Business matchmaking service in Indonesia"
        subtitle="Connecting international businesses with the right partners in Indonesia — fast, strategic, and reliable."
        ctaText="Get a free consultation"
        ctaHref="/contact"
        imageUrl="/assets/business-handshake.webp"
        imageAlt="Two business professionals shaking hands"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

export default function BusinessMatchmakingClient() {
  return (
    <>
      <HeroSection />
      <RiskShowcaseSection
        title="The hidden risks of expanding without the right local partners"
        subtitle="Many foreign companies struggle to navigate complex local dynamics alone, leading to missed opportunities and wasted resources."
        risks={marketRisks}
      />

      {/* ========== 2. Core Services Section ========== */}
      <section id="services" className="py-20 sm:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Strategic Partnership Opportunities
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We facilitate connections that align with your specific business objectives for market entry and expansion.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {matchmakingServices.map((service) => (
              <div key={service.title} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 dark:bg-blue-900/50 text-primary rounded-lg h-12 w-12 flex-shrink-0 flex items-center justify-center">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. "How It Works" Process Section ========== */}
      <section id="process" className="py-20 sm:py-28 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Our Matchmaking Process
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We follow a confidential, four-step process to ensure we find the right strategic fit for your business.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {matchmakingProcess.map(step => (
              <div key={step.step} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center h-12 w-12 bg-blue-100 dark:bg-blue-900/50 rounded-full text-lg font-bold text-primary">
                  {step.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccordionWithImage
        title={
          <>
            <span className="text-blue-900 dark:text-primary">
              Find the right partners, suppliers, and investors in Indonesia
            </span>
            {' '}— matched by professionals who understand your business goals.
          </>
        }
        // NOTE: The image URL was not in the provided HTML. Please replace this path.
        imageUrl="/assets/room-with-windows.webp"
        imageAlt="A long road room with many windows"
        accordionItems={matchmakingProcessData}
        ctaText="See how we can help you grow"
        ctaHref="/contact" // Assuming the button should link to a contact section
      />

      <ExpertiseSection
        title={
          <>
            Who needs our business matchmaking services?
          </>
        }
        featureItems={matchmakingClients}
      />

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqBusinessMatchmakingData}
        title="Business Matchmaking FAQs"
        subtitle="Your questions about finding the right partners in Indonesia, answered."
      />
    </>
  );
}