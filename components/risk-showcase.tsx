import React from 'react';

// --- Type Definitions for Props ---
interface RiskItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface RiskShowcaseProps {
  title: string;
  subtitle?: string;
  risks: RiskItemProps[];
}

// --- Risk Card Sub-component ---
const RiskCard = ({ icon: Icon, title, description }: RiskItemProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 bg-red-100 dark:bg-red-900/50 rounded-full text-red-600 dark:text-red-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
};

// --- Main Component ---
export function RiskShowcaseSection({ title, subtitle, risks }: RiskShowcaseProps) {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-slate-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {risks.map((risk, index) => (
            <RiskCard
              key={index}
              icon={risk.icon}
              title={risk.title}
              description={risk.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
