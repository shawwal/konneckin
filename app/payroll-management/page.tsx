'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path if needed
import { SplitTwoSection } from '@/components/split-two-section';
import { ExpertiseSection } from '@/components/expertise-section';
import { RiskShowcaseSection } from '@/components/risk-showcase';
import { AccordionWithImage } from '@/components/accordion-with-image';
import { faqPayrollData, payrollBenefits, payrollProcess, payrollRisks, payrollServicesAccordionData } from '@/data/payrollData';
import { ProcessSection } from '@/components/process-section';

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Precise and reliable payroll services"
        subtitle="Ensure smooth payroll processing with solutions that prioritize accuracy, confidentiality, and regulatory compliance."
        ctaText="Get a free consultation"
        ctaHref="#services"
        imageUrl="/assets/man-and-woman.webp"
        imageAlt="Man and Woman look at a phone"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

// --- Main Page Component ---
export default function PayRollManagementPage() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <HeroSection />

      <RiskShowcaseSection
        title="Payroll shouldn’t be painful. But for many companies, it is."
        subtitle="Managing payroll in Indonesia can be unexpectedly complex — especially for foreign-owned companies and growing teams. From calculating taxes to ensuring compliance with ever-changing labor regulations, it’s easy to fall behind or make costly mistakes."
        risks={payrollRisks}
      />

      <AccordionWithImage
        title={
          <>
            <span className="text-blue-900 dark:text-primary">
              Can payroll be simple, fast, and fully compliant?
            </span>
            <br />With us, absolutely.
          </>
        }
        imageUrl="/assets/woman-typing.webp"
        imageAlt="A woman typing"
        accordionItems={payrollServicesAccordionData}
        ctaText="See how we can help you grow"
        ctaHref="/contact" // Assuming the button should link to a contact section
      />


      <ExpertiseSection
        title={
          <>
            Calculate. Comply.
            <span className="text-primary"> Care.</span>
          </>
        }
        featureItems={payrollBenefits}
      />
      <ProcessSection
        title="How our payroll process works"
        steps={payrollProcess}
      />
      <FaqSection
        faqData={faqPayrollData}
        title="Company Registration Questions"
        subtitle="Common questions about registering your business in Indonesia."
      />
    </>
  );
}