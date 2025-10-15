'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path if needed
import {
  legalEntities,
  registrationProcess,
  faqCompanyRegulationData
} from '@/data/companyRegulationData'; // Adjust path if needed

// --- Main Page Component ---
export default function CompanyRegulationPage() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20 lg:py-0">
            {/* --- Text Content --- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Set Up Your Company in Indonesia, The Right Way
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
                From PT PMA to Representative Office, we handle your entire company registration process, ensuring a fast, compliant, and hassle-free market entry.
              </p>
              <div className="mt-10">
                <a href="#process" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Start Your Company Setup
                </a>
              </div>
            </div>
            {/* --- Image --- */}
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/jakarta-city.webp"
                alt="Jakarta city skyline with modern architecture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Legal Entities Section ========== */}
      <section className="py-20 sm:py-28 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Choose the Right Legal Entity
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We guide you through the options to find the best fit for your business goals and investment strategy in Indonesia.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalEntities.map((entity) => (
              <div key={entity.title} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50">
                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full h-12 w-12 flex items-center justify-center">
                  <entity.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{entity.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{entity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. Registration Process Section ========== */}
      <section id="process" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Our Hassle-Free Registration Process
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We’ve streamlined the company setup process into clear, manageable steps, handling all the complexities for you.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationProcess.map(step => (
              <div key={step.step} className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center">
                <div className="text-5xl font-bold text-blue-200 dark:text-blue-800">{step.step}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqCompanyRegulationData}
        title="Company Registration FAQs"
        subtitle="Your questions about setting up a PT PMA in Indonesia, answered."
      />
    </>
  );
}