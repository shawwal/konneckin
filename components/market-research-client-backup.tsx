'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path
import {
  researchServices,
  researchProcess,
  faqMarketResearchData
} from '@/data/marketResearchData'; // Adjust path

export default function MarketResearchClientBackup() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <section className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center order-last lg:order-first">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/market-research.webp"
                alt="Person analyzing charts and graphs on a screen"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
                Enter the Indonesian Market with Confidence
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                Don't guess, know. Our in-depth market research provides the critical data and local insights you need to build a successful and sustainable entry strategy.
              </p>
              <div className="mt-10">
                <a href="#services" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Our Research Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Core Services Section ========== */}
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

      {/* ========== 3. Our Process Section ========== */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Our Proven Research Process
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                We follow a structured, three-step process to ensure our research is thorough, relevant, and directly aligned with your business objectives.
              </p>
              <div className="mt-8 space-y-6">
                {researchProcess.map(item => (
                  <div key={item.title} className="flex items-start">
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{item.title}</h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/white-staircase.webp"
                alt="Team collaborating around a whiteboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqMarketResearchData}
        title="Market Research FAQs"
        subtitle="Common questions about exploring the Indonesian market."
      />
    </>
  );
}