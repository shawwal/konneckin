import React from 'react';

type ServicesSectionProps = {
  title: string;
  subtitle: string;
  services: string[];
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, subtitle, services }) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-12 grid max-w-lg gap-8 sm:mt-16 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300
                ${index === 3 ? 'lg:row-span-2' : ''}`}
            >
              <h3 className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServicesSection;
