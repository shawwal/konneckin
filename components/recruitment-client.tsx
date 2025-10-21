'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path
import {
  recruitmentServices,
  recruitmentProcess,
  faqRecruitmentData,
  hiringRisks,
  hiringServicesAccordionData,
  recruitmentSteps
} from '@/data/recruitmentData'; // Adjust path
import { SplitTwoSection } from './split-two-section';
import { RiskShowcaseSection } from './risk-showcase';
import { AccordionWithImage } from './accordion-with-image';
import { postSetupServicesData } from '@/data/postEstablishmentData';
import { ProcessSection } from './process-section';

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Hiring top talent in Indonesia made simple"
        subtitle="We help you source, screen, and secure the right candidates locally and regionally."
        ctaText="Get a free consultation"
        ctaHref="/contact"
        imageUrl="/assets/recruitment-team.webp"
        imageAlt="woman listening to music and drink coffee"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

export default function RecruitmentClient() {
  return (
    <>
      <HeroSection />

      <RiskShowcaseSection
        title="Hiring in Indonesia isn’t easy. Here’s what companies struggle with."
        subtitle="Finding the right talent in Indonesia can be a major roadblock—especially for foreign companies unfamiliar with the local hiring landscape. These are the most common pain points we hear from clients:"
        risks={hiringRisks}
      />

      <AccordionWithImage
        title={
          <>
            <span className="text-blue-900 dark:text-primary">
              Helping you hire with
            </span>
            {' '}confidence and speed.
          </>
        }
        imageUrl="/assets/people-working.webp"
        imageAlt="people working"
        accordionItems={hiringServicesAccordionData}
        ctaText="See how we can help you grow"
        ctaHref="/contact" // Assuming the button should link to a contact section
      />

      {/* ========== 2. Core Services Section ========== */}
      <section id="services" className="py-20 sm:py-28 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Our Recruitment Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              From senior leadership to specialized technical roles, our services are tailored to meet your unique hiring needs.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {recruitmentServices.map((service) => (
              <div key={service.title} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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

      {/* ========== 3. Hiring Process Section (New Component) ========== */}
      <ProcessSection
        title="Find the right talent to power your business growth."
        description="We identify and analyze the talent landscape to provide strategic insights on the availability, quality, and competitiveness of potential candidates."
        steps={recruitmentSteps}
      />

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqRecruitmentData}
        title="Recruitment FAQs"
        subtitle="Your questions about finding and hiring talent in Indonesia, answered."
      />
    </>
  );
}