'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path
import {
  researchServices,
  marketResearchRisks,
  marketResearchAccordionData,
  faqMarketResearch
} from '@/data/marketResearchData'; // Adjust path
import { SplitTwoSection } from './split-two-section';
import { RiskShowcaseSection } from './risk-showcase';
import { AccordionWithImage } from './accordion-with-image';

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Market research for strategic growth"
        subtitle="Making business decisions without the right insights can lead to costly mistakes and missed opportunities."
        ctaText="Get a free consultation"
        ctaHref="/contact"
        imageUrl="/assets/market-research.webp"
        imageAlt="market research glass"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);


export default function MarketResearchClient() {
  return (
    <>
      <HeroSection />

      <RiskShowcaseSection
        title="Without the right insights, you’re expanding blindly"
        risks={marketResearchRisks}
      />
      <AccordionWithImage
        title={
          <>
            <span className="text-blue-900 dark:text-primary">
              Gain clarity and confidence with market research that reveals real opportunities in the Indonesian market —
            </span>
            {' '}— not just assumptions.
          </>
        }
        imageUrl="/assets/white-staircase.webp"
        imageAlt="A long spinning staircase"
        accordionItems={marketResearchAccordionData}
        ctaText="See how we can help you grow"
        ctaHref="/contact" // Assuming the button should link to a contact section
      />

      <section id="services" className="py-20 sm:py-28 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Actionable Insights to Guide Your Strategy
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We provide a comprehensive analysis of the local market landscape to answer your most critical business questions.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchServices.map((service) => (
              <div key={service.title} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
                <div className="bg-blue-100 dark:bg-blue-900/50 text-primary rounded-full h-14 w-14 flex items-center justify-center mx-auto">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqMarketResearch}
        title="Market Research FAQs"
        subtitle="Common questions about exploring the Indonesian market."
      />
    </>
  );
}