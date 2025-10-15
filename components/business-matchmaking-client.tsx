'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path
import {
  matchmakingServices,
  matchmakingProcess,
  faqBusinessMatchmakingData
} from '@/data/businessMatchmakingData'; // Adjust path

export default function BusinessMatchmakingClient() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <section className="bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* --- Text Content --- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
                Find Your Perfect Business Partner in Indonesia
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                Navigate the Indonesian market with a trusted local ally. We connect you with vetted, high-quality partners—from distributors to joint venture allies—to accelerate your growth.
              </p>
              <div className="mt-10">
                <a href="#process" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Find My Partner
                </a>
              </div>
            </div>
            {/* --- Image --- */}
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/business-handshake.webp"
                alt="Two business professionals shaking hands"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqBusinessMatchmakingData}
        title="Business Matchmaking FAQs"
        subtitle="Your questions about finding the right partners in Indonesia, answered."
      />
    </>
  );
}