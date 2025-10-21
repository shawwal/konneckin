'use client';

import React from 'react';
import FaqSection from '@/components/faq-section'; // Adjust path
import {
  recruitmentServices,
  recruitmentProcess,
  faqRecruitmentData
} from '@/data/recruitmentData'; // Adjust path

export default function RecruitmentClientBackup() {
  return (
    <>
      {/* ========== 1. Hero Section ========== */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20 lg:py-0">
            {/* --- Text Content --- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Building Your A-Team in Indonesia
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
                Finding the right talent is your biggest competitive advantage. We connect you with the top-tier professionals you need to build, scale, and lead your business in Indonesia.
              </p>
              <div className="mt-10">
                <a href="#process" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Find Your Next Hire
                </a>
              </div>
            </div>
            {/* --- Image --- */}
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl object-cover h-[400px] w-full max-w-md lg:h-[500px] shadow-2xl"
                src="/assets/recruitment-team.webp"
                alt="A diverse team of professionals in a meeting"
              />
            </div>
          </div>
        </div>
      </section>

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
      <section id="process" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Our Proven Hiring Process
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We follow a structured, transparent process designed to deliver the best candidates efficiently.
            </p>
          </div>
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-4 top-4 h-full w-0.5 bg-slate-200 dark:bg-slate-700 lg:left-1/2 lg:-translate-x-1/2"></div>

            <div className="space-y-12">
              {recruitmentProcess.map((step, index) => (
                <div key={step.step} className="relative flex items-start lg:grid lg:grid-cols-2 lg:gap-12">
                  {/* Circle Indicator */}
                  <div className="absolute left-4 top-4 -translate-x-1/2 h-8 w-8 bg-white dark:bg-slate-800 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center lg:left-1/2">
                    <span className="text-sm font-bold text-primary">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className={`pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}`}>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. FAQ Section ========== */}
      <FaqSection
        faqData={faqRecruitmentData}
        title="Recruitment FAQs"
        subtitle="Your questions about finding and hiring talent in Indonesia, answered."
      />
    </>
  );
}