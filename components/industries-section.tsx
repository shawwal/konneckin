import { FC, useState, ComponentType } from 'react';

// Interface for a single industry
interface Industry {
  name: string;
  description: string;
  image: string; // URL for the background image
  icon: ComponentType<{ className?: string }>;
}

// Props for the main section component
interface IndustriesSectionProps {
  title: string;
  subtitle: string;
  industries: Industry[];
}

export const IndustriesSection: FC<IndustriesSectionProps> = ({ title, subtitle, industries }) => {
  // Set the first industry as active by default, or find "Advertising agencies" to match screenshot
  const initialIndustry = industries.find(i => i.name === 'Advertising agencies') || industries[0];
  const [activeIndustry, setActiveIndustry] = useState<string | null>(
    initialIndustry ? initialIndustry.name : null
  );

  // Find the full data object for the currently active industry
  const activeIndustryData = industries.find(ind => ind.name === activeIndustry);

  // Don't render if there's no data
  if (!industries || industries.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main layout container.
          - Stacks vertically on mobile (flex-col).
          - Becomes a two-column layout on large screens (lg:flex-row).
        */}
        <div className="flex flex-col lg:flex-row lg:gap-12">

          {/* ========== LEFT COLUMN ========== */}
          {/* Contains header text and the button grid */}
          <div className="lg:w-1/2 flex flex-col mb-8 lg:mb-0">
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-3xl tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
            </div>

            {/* Industry Selection Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {industries.map(({ name, icon: Icon }) => ( // <-- Destructure the icon here
                <button
                  key={name}
                  onClick={() => setActiveIndustry(name)}
                  // Added 'flex items-center gap-3' for icon alignment
                  className={`w-full p-4 rounded-md text-left text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500 flex items-center gap-3 ${activeIndustry === name
                      ? 'bg-slate-800 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                >
                  {/* Icon Component Rendered Here */}
                  <Icon className={`w-5 h-5 flex-shrink-0 ${activeIndustry === name ? 'text-white' : 'text-slate-500'}`} />
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ========== RIGHT COLUMN ========== */}
          {/* Contains the image and its overlay content */}
          <div className="lg:w-1/2">
            {activeIndustryData && (
              <div
                className="relative min-h-[500px] w-full h-full rounded-lg shadow-lg flex items-end p-4 sm:p-6 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${activeIndustryData.image})` }}
              >
                {/* Gradient overlay for text readability, applied from the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg"></div>

                {/* Content Box */}
                <div className="relative w-full bg-black/40 backdrop-blur-sm p-6 rounded-md border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2">{activeIndustryData.name}</h3>
                  <p className="text-base text-gray-200 mb-6 max-w-xl">
                    {activeIndustryData.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block font-semibold text-white py-2 px-5 rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};