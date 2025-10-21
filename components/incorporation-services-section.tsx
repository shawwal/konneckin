import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { ArrowRight } from 'lucide-react';

// --- Type Definitions for Props ---
interface ServiceItem {
  icon: React.ElementType;
  subtitle: string;
  title: string;
  description: string;
  linkHref: string;
}

interface IncorporationServicesProps {
  title: React.ReactNode;
  serviceItems: ServiceItem[];
  ctaText: string;
  ctaHref: string;
}

// --- Service Card Sub-component ---
const ServiceCard = ({ icon: Icon, subtitle, title, description, linkHref }: ServiceItem) => {
  return (
    <div className="bg-white dark:bg-slate-800/70 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
        <Icon className="h-6 w-6 mr-3" />
        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{subtitle}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex-grow">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-6 mb-4">{description}</p>
      <div className="mt-auto">
        <a href={linkHref}>
          <Button variant="outline" size="sm">
            Learn more
          </Button>
        </a>
      </div>
    </div>
  );
};

// --- Main Component ---
export function IncorporationServicesSection({
  title,
  serviceItems,
  ctaText,
  ctaHref,
}: IncorporationServicesProps) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Main Title --- */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl tracking-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h2>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>

        {/* --- Main CTA --- */}
        <div className="text-center mt-16">
          <a href={ctaHref}>
            <Button size="lg">
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
