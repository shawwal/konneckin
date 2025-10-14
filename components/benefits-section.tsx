"use client";
import React from 'react';
import { BenefitItem } from '@/data/benefitsData'; // Adjust path if needed

// --- TYPE DEFINITION FOR PROPS ---
type BenefitsSectionProps = {
  title: string;
  highlightedText?: string;
  items: BenefitItem[];
  imageUrl: string;
};

// --- COMPONENT DEFINITION ---
const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, highlightedText, items, imageUrl }) => {
  return (
    // Section container with vertical padding for spacing
    <section className="dark:bg-gray-900 py-16 sm:py-24">
      {/* Main content wrapper.
        - `container`: Sets max-width and centers content.
        - `mx-auto px-4`: Horizontal centering and padding.
        - `flex flex-col`: Stacks children vertically by default (for mobile).
        - `lg:flex-row`: Switches to a horizontal layout on large screens (iPad landscape, desktop).
        - `gap-12 lg:gap-16`: Sets spacing between image and text.
        - `lg:items-center`: Vertically aligns the image and text block on large screens.
      */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
        
        {/* ========== LEFT SIDE: IMAGE ========== */}
        {/* On large screens, this column takes up 50% of the width */}
        <div className="lg:w-1/2">
          <img
            src={imageUrl}
            alt="A satisfied professional using the IOR service"
            // `h-80`: Gives the image a consistent height on mobile.
            // `lg:h-full`: Makes the image height match the text content height on desktop.
            // `w-full object-cover rounded-xl shadow-lg`: Ensures the image fills its container beautifully.
            className="w-full h-80 lg:h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* ========== RIGHT SIDE: CONTENT (TITLE + BENEFITS) ========== */}
        {/* On large screens, this column also takes up 50% of the width */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-8">
            {title} {highlightedText && <span className="text-primary">{highlightedText}</span>}
          </h2>

          <ul className="space-y-5">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-start align-middle">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary mr-4" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;