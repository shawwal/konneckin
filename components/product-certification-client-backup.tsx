'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path if needed
import {
  certificationsData,
  whyPartnerData,
  faqProductCertificationData
} from '@/data/productCertificationData'; // Adjust path if needed

// --- Main Page Component ---
export default function ProductCertificationClientBackup() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <section className="bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* --- Text Content --- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
                Product Certification & Regulatory Compliance
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                From BPOM to SNI, we navigate Indonesia’s complex product registration requirements to get your goods to market—faster.
              </p>
              <div className="mt-10">
                <a href="#services" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Get My Products Certified
                </a>
              </div>
            </div>
            {/* --- Image --- */}
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/woman-scientist.webp"
                alt="Scientist working in a modern laboratory"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. "Don't Let Red Tape..." Intro Section (New Component) ========== */}
      <section className="py-20 sm:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Don’t Let Red Tape Block Your Market Access
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Bringing a product to the Indonesian market involves navigating a maze of regulations. A single mistake in your application can lead to costly delays, rejection, or customs issues. We manage the entire process, ensuring your products meet all standards and get certified efficiently.
          </p>
        </div>
      </section>

      {/* ========== 3. Certifications We Handle Section ========== */}
      <section id="services" className="py-20 sm:py-28 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Certifications We Handle
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We provide expert assistance for the most critical product certifications required in Indonesia.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert) => (
              <div key={cert.title} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg h-12 w-12 flex-shrink-0 flex items-center justify-center">
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.category}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. Why Partner With Us Section ========== */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* --- Image --- */}
            <div className="flex items-center justify-center order-last lg:order-first">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/business-partnership.webp"
                alt="Business professionals in a successful partnership meeting"
              />
            </div>
            {/* --- Text Content --- */}
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Your Partner in Regulatory Compliance
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                We act as your local regulatory team, translating complex requirements into a clear action plan and executing it on your behalf.
              </p>
              <div className="mt-8 space-y-6">
                {whyPartnerData.map(item => (
                  <div key={item.title} className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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

      {/* ========== 5. FAQ Section ========== */}
      <FaqSection
        faqData={faqProductCertificationData}
        title="Product Certification FAQs"
        subtitle="Your questions about product registration and compliance in Indonesia, answered."
      />
    </>
  );
}