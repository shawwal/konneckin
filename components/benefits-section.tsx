"use client";
import React from 'react';

// --- TYPE DEFINITION FOR PROPS ---
type BenefitsSectionProps = {
  title: string;
  highlightedText?: string;
  items: string[];
};

// --- COMPONENT DEFINITION ---
const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, highlightedText, items }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title} {highlightedText && <span className="text-primary">{highlightedText}</span>}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;