'use client';

import React from 'react';
import {
  FaHeartbeat, FaMoneyBillWave, FaBroadcastTower, FaShoppingCart, FaTree,
  FaBuilding, FaIndustry, FaUniversity, FaLandmark
} from 'react-icons/fa';

// --- Data for Industry Coverage (with Icons) ---
const industryData = [
  {
    icon: FaHeartbeat,
    title: 'Healthcare',
    description: 'Pharmaceuticals, healthcare IT, life sciences, biotechnology, diagnostics, medical devices, and healthcare services.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Financial and Strategic Investors',
    description: 'Family offices, pension funds, private equity firms, alternative asset investors, and credit funds.',
  },
  {
    icon: FaBroadcastTower,
    title: 'Technology, Media, and Telecommunications (TMT)',
    description: 'Hardware, ed-tech, internet, software, semiconductors, media, information services, and communications tech.',
  },
  {
    icon: FaShoppingCart,
    title: 'Consumer & Retail',
    description: 'Specialty retailers, food & beverage, beauty products, restaurants, supermarkets, and apparel.',
  },
  {
    icon: FaTree,
    title: 'Natural Resources',
    description: 'Chemicals, energy, power, mining, infrastructure, and metals.',
  },
  {
    icon: FaBuilding,
    title: 'Real Estate',
    description: 'Development projects, industrial properties, hotels, office buildings, shopping centers, and multifamily properties.',
  },
  {
    icon: FaIndustry,
    title: 'Industrials',
    description: 'Building materials, business services, packaging, capital goods, automotive, logistics, and aerospace.',
  },
  {
    icon: FaUniversity,
    title: 'Public Sector & Infrastructure',
    description: 'Public utilities, mass transit, higher education, seaports, airports, and state and local governments.',
  },
  {
    icon: FaLandmark,
    title: 'Financial Institutions',
    description: 'Insurance companies, fintech, specialty finance institutions, asset management firms, and banks.',
  },
];

// --- Industry Card Component (Upgraded with Icons & Animation) ---
const IndustryCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string; }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
        {/* Use the primary color for the icon */}
        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="ml-4 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

// --- Main Industry Coverage Component ---
export default function IndustryCoverage() {
  return (
    // Use a light background for the whole page for a modern feel
    <div className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">

        {/* --- Hero Section --- */}
        <section className="py-20 sm:py-28 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Industry Coverage
              </h1>
              <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Specialized support across diverse industries to help your business thrive and expand in Indonesia’s dynamic market.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/assets/getting-started.webp"
                alt="Industry collaboration visual"
                className="object-cover w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>
        </section>

        {/* --- "Who we cover" Section --- */}
        <section className="py-20 sm:py-24 text-center bg-white dark:bg-slate-800 rounded-2xl shadow-inner-lg">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Who We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Serving startups, SMEs, large enterprises, expatriates, and international investors looking for seamless company registration, visa solutions, and market entry support in Indonesia.
          </p>
        </section>

        {/* --- Industry Grid Section --- */}
        <section className="py-20 sm:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-12">
            Our Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryData.map((industry) => (
              <IndustryCard key={industry.title} icon={industry.icon} title={industry.title} description={industry.description} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}