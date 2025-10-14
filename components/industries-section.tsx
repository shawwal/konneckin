import { FC, useState, ComponentType } from 'react';

// 1. Update the Industry interface to include the image property
interface Industry {
  name: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  image: string; // <-- Image URL
}

interface IndustriesSectionProps {
  title: string;
  subtitle: string;
  industries: Industry[];
}

export const IndustriesSection: FC<IndustriesSectionProps> = ({ title, subtitle, industries }) => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(
    industries.length > 0 ? industries[0].name : null
  );

  const activeIndustryData = industries.find(ind => ind.name === activeIndustry);

  if (!industries || industries.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left side: Buttons */}
          <div className="lg:w-1/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            {industries.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveIndustry(name)}
                className={`p-3 rounded-lg text-left text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeIndustry === name
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${activeIndustry === name ? 'text-white' : 'text-primary'}`} />
                <span>{name}</span>
              </button>
            ))}
          </div>

          {/* Right side: Content with background image */}
          <div className="lg:w-2/3">
            {activeIndustryData && (
              <div
                className="relative min-h-[400px] p-8 rounded-lg shadow-lg flex flex-col justify-end text-white overflow-hidden bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${activeIndustryData.image})` }} // <-- Set the background image here
              >
                {/* Background overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content, positioned above the overlay */}
                <div className="relative z-10 backdrop-brightness-50 p-4 rounded-lg">
                  <h3 className="text-3xl font-bold mb-3">{activeIndustryData.name}</h3>
                  <p className="text-lg mb-6 max-w-2xl">{activeIndustryData.description}</p>
                  <a href="#contact" className="font-semibold bg-primary hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition-colors">
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