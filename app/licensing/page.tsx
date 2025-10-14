'use client';

import React, { useState } from 'react';
import { FileText, ShieldCheck, Factory, Building, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import FaqSection from '@/components/faq-section';
import { faqLicensingData } from '@/data/faqLicensingData';

// --- Data Structures ---
type LicenseItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

// --- Data Extracted From the Page ---
const licensesData: LicenseItem[] = [
  {
    icon: FileText,
    title: 'Business Identification Number (NIB)',
    description: 'The foundational registration for all businesses in Indonesia, serving as your company’s primary identity and import license.',
  },
  {
    icon: Factory,
    title: 'Industrial License',
    description: 'A mandatory permit for companies engaged in industrial processing or manufacturing activities.',
  },
  {
    icon: Building,
    title: 'Construction License (IUJK)',
    description: 'Required for all construction service companies, both for general contractors and specialized consultants.',
  },
  {
    icon: Briefcase,
    title: 'Commercial/Trade License',
    description: 'Essential for businesses involved in trading, distribution, and other commercial activities within Indonesia.',
  },
];

const whyChooseUsData = [
  {
    title: 'Regulatory Expertise',
    description: 'Our team stays ahead of regulatory changes to ensure your applications are always compliant and accurate.'
  },
  {
    title: 'Efficient Process',
    description: 'We streamline the application process, handling all paperwork and follow-ups to save you valuable time.'
  },
  {
    title: 'Full Transparency',
    description: 'We provide clear communication and updates at every stage, so you are always informed.'
  }
]

// --- Main Page Component ---
export default function LicensingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <section className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* --- Image --- */}
            <div className="flex items-center justify-center order-last lg:order-first">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/bridge.webp"
                alt="Professionals reviewing documents"
              />
            </div>
            {/* --- Text Content --- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Business Licensing & Compliance in Indonesia
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                Navigate the complexities of Indonesian regulations with confidence. We provide end-to-end support to secure the essential licenses your business needs to operate legally and efficiently.
              </p>
              <div className="mt-10">
                <a href="#contact" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Secure Your Licenses
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. Core Licenses Section ========== */}
      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Essential Licenses for Your Business
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We handle the entire application process for the key permits required to establish and run your operations in Indonesia.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {licensesData.map((license) => (
              <div key={license.title} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full h-14 w-14 flex items-center justify-center mx-auto">
                  <license.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{license.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{license.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. Why Partner With Us Section ========== */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* --- Text Content --- */}
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Simplify Your Path to Full Compliance
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Securing the right licenses is critical. One mistake can lead to months of delays and significant costs. Partner with us to get it right the first time.
              </p>
              <div className="mt-8 space-y-6">
                {whyChooseUsData.map(item => (
                  <div key={item.title} className="flex items-start">
                    <ShieldCheck className="h-7 w-7 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{item.title}</h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* --- Image --- */}
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/woman-smile.webp"
                alt="Businesswoman confidently smiling"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqLicensingData}
        title="Licensing Questions Answered"
        subtitle="Your guide to understanding the business licensing process in Indonesia."
      />
    </>
  );
}