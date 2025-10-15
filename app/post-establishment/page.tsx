'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path if needed
import {
  postEstablishmentServices,
  whyItMattersData,
  faqPostEstablishmentData
} from '@/data/postEstablishmentData'; // Adjust path if needed

// --- Main Page Component ---
export default function PostEstablishmentPage() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <section className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* --- Text Content --- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
                Stay Compliant and Thrive After Company Setup
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                Your business is registered. Now the real work begins. We provide ongoing operational, financial, and corporate support to ensure you remain compliant and can focus on growth.
              </p>
              <div className="mt-10">
                <a href="#services" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Explore Our Services
                </a>
              </div>
            </div>
            {/* --- Image --- */}
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/office-setup.webp"
                alt="Team collaborating in a modern office"
              />
            </div>
          </div>
        </div>
      </section>

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