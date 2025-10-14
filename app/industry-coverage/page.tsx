// import type { Metadata } from "next"
// export const metadata: Metadata = {
//   title: "Industry coverage",
//   description: "Serving startups, SMEs, enterprises, expatriates, and international investors.",
// }

'use client';

import React from 'react';

// --- Data for Industry Coverage ---
const industryData = [
  {
    title: 'Healthcare',
    description: 'Pharmaceuticals, healthcare information technology, life sciences, biotechnology, diagnostics, medical devices, and healthcare services.',
  },
  {
    title: 'Financial and Strategic Investors',
    description: 'Family offices, pension funds, sovereign wealth funds, private equity firms, alternative asset investors, and credit funds.',
  },
  {
    title: 'Technology, Media, and Telecommunications (TMT)',
    description: 'Hardware, education technology, internet, software, telecommunications, semiconductors, media, information services, and communications technology.',
  },
  {
    title: 'Consumer & Retail',
    description: 'Specialty and hardline retailers, food and beverage, convenience stores, pet food and services, beauty and personal care products, restaurants, supermarkets, apparel, department stores, and other consumer or retail businesses.',
  },
  {
    title: 'Natural Resources',
    description: 'Chemicals, energy, power, mining, infrastructure, and metals.',
  },
  {
    title: 'Real Estate',
    description: 'Development projects, industrial properties, retailers and public-sector entities, casinos, hotels and golf courses, office buildings, shopping centers, retail properties, and multifamily properties.',
  },
  {
    title: 'Industrials',
    description: 'Building and construction, business services, paper, forest products and packaging, capital goods, automotive, industrial technology, transportation, logistics, aerospace and defense, and diversified industrials.',
  },
  {
    title: 'Public Sector & Infrastructure',
    description: 'Public power utilities, surface transportation and mass transit agencies, higher education institutions, seaports, sports franchises, state and local governments, airports, and not-for-profit healthcare systems.',
  },
  {
    title: 'Financial Institutions',
    description: 'Insurance companies, financial technology companies, specialty finance institutions, asset management firms, and banks.',
  },
];

// --- Industry Card Component ---
const IndustryCard = ({ title, description }: { title: string; description: string; }) => (
  <div className="bg-[#F7F9FC] dark:bg-gray-800 rounded-2xl p-6 transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

// --- Main Industry Coverage Component ---
export default function IndustryCoverage() {
  return (
    <div className="bg-white dark:bg-black">
      <main className="mx-auto container px-4 sm:px-6 lg:px-8">

        {/* --- Hero Section --- */}
        <section className="py-16 sm:py-24" style={{ background: 'linear-gradient(158deg, #EFF7FF 0%, #FFFFFF 100%)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Industry coverage
              </h1>
              <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
                Specialized support across diverse industries to help your business thrive and expand in Indonesia’s dynamic market.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://konneckin.com/wp-content/uploads/2025/08/ChatGPT-Image-Jun-14-2025-at-05_03_33-PM.webp"
                alt="Industry collaboration visual"
                className="rounded-2xl object-cover w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>
        </section>

        {/* --- "Who we cover" Section --- */}
        <section className="py-16 sm:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Who we cover
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
            Serving startups, SMEs, large enterprises, expatriates, and international investors looking for seamless company registration, visa solutions, and market entry support in Indonesia.
          </p>
        </section>

        {/* --- Industry Grid Section --- */}
        <section className="pb-16 sm:pb-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Industry coverage
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryData.map((industry) => (
              <IndustryCard key={industry.title} title={industry.title} description={industry.description} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

