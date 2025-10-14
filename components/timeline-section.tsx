"use client";
import React from 'react';

// --- TYPE DEFINITIONS ---
type TimelineStepProps = {
  num: number;
  title: string;
  text: string;
  isLast?: boolean;
};

type TimelineSectionProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  steps: { title: string; text: string; }[];
};

// --- SUB-COMPONENT for a single step ---
const TimelineStep: React.FC<TimelineStepProps> = ({ num, title, text, isLast = false }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full">
          <span className="text-lg font-bold text-primary">{num}</span>
        </div>
      </div>
      {!isLast && <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>}
    </div>
    <div className="pb-8">
      <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</p>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const TimelineSection: React.FC<TimelineSectionProps> = ({ title, subtitle, imageUrl, imageAlt, steps }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
            <p className="text-xl lg:text-2xl  mb-8">{subtitle}</p>
            <img src={imageUrl} alt={imageAlt} />
          </div>
          <div className="lg:w-1/2">
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                num={index + 1}
                title={step.title}
                text={step.text}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;