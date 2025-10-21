import React from 'react';

// Define the shape of a single step
type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

interface ProcessSectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  steps: ProcessStep[];
  className?: string; // For additional styling on the section wrapper
}

export function ProcessSection({
  title,
  description,
  steps,
  className = '',
}: ProcessSectionProps) {
  return (
    <section id="process" className={`py-16 sm:py-20 bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-8 max-w-4xl mx-auto">
          {/* Vertical Line - Visible on all sizes, but centered on larger screens */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-700 rounded-full md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6"
              >
                {/* Step Circle Indicator */}
                <div className="absolute left-4 top-0 -translate-x-1/2 h-10 w-10 bg-primary rounded-full flex items-center justify-center z-10 md:left-1/2 md:-translate-x-1/2 shadow-md">
                  <span className="text-lg font-bold text-white">{step.step}</span>
                </div>

                {/* Content Panel */}
                <div
                  className={`pl-16 pr-4 sm:pr-0 md:pl-0 py-1 md:py-0 ${
                    index % 2 === 0
                      ? 'md:col-start-1 md:text-right md:pr-12' // Right align content for even steps on desktop
                      : 'md:col-start-2 md:pl-12' // Left align content for odd steps on desktop
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-0">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}