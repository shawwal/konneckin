'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path if needed
import {
  postEstablishmentServices,
  whyItMattersData,
  faqPostEstablishmentData,
  postSetupRisks,
  postSetupServicesData,
  whyChooseUsItems
} from '@/data/postEstablishmentData'; // Adjust path if needed
import { SplitTwoSection } from '@/components/split-two-section';
import { RiskShowcaseSection } from '@/components/risk-showcase';
import { AccordionWithImage } from '@/components/accordion-with-image';
import { ExpertiseSection } from '@/components/expertise-section';

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Post-establishment services"
        subtitle="Professional, compliant, and reliable support for your business in Indonesia"
        ctaText="Get a free consultation"
        ctaHref="/contact"
        imageUrl="/assets/man-seeing-building.webp"
        imageAlt="Man seeing building"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

// --- Main Page Component ---
export default function PostEstablishmentPage() {
  return (
    <>
      <HeroSection />

      <RiskShowcaseSection
        title="Your company is registered—now what?"
        subtitle="Without reliable post-establishment support, companies face critical gaps that delay operations, reduce efficiency, and increase legal risk."
        risks={postSetupRisks}
      />

      <AccordionWithImage
        title={
          <>
            <span className="text-blue-900 dark:text-primary">
              Secure your business operations and
            </span>
            {' '}corporate compliance in Indonesia.
          </>
        }
        imageUrl="/assets/white-staircase.webp"
        imageAlt="A long spinning staircase"
        accordionItems={postSetupServicesData}
        ctaText="See how we can help you grow"
        ctaHref="/contact" // Assuming the button should link to a contact section
      />

      <ExpertiseSection
        title={
          <>
            Expert support for ongoing {' '}
            <span className="text-primary">business success</span>
          </>
        }
        featureItems={whyChooseUsItems}
      />
      {/* ========== 2. Core Services Section ========== */}
      <section id="services" className="py-20 sm:py-28 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Ongoing Operational Support
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We manage the essential administrative tasks so your business runs smoothly and stays compliant.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postEstablishmentServices.map((service) => (
              <div key={service.title} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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

      {/* ========== 3. Why It Matters Section ========== */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* --- Image --- */}
            <div className="flex items-center justify-center order-last lg:order-first">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/woman-smile.webp"
                alt="Business professional smiling confidently"
              />
            </div>
            {/* --- Text Content --- */}
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Why Ongoing Compliance is Non-Negotiable
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                In Indonesia, company registration is just the beginning. Maintaining strict corporate and financial compliance is crucial for long-term success and avoiding legal trouble.
              </p>
              <div className="mt-8 space-y-6">
                {whyItMattersData.map(item => (
                  <div key={item.title} className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900/50 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
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
        faqData={faqPostEstablishmentData}
        title="Post-Establishment Questions"
        subtitle="Answers to common questions about maintaining your company in Indonesia."
      />
    </>
  );
}