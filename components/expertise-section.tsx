import React from 'react';

// --- Type Definitions for Props ---
interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ExpertiseSectionProps {
  title: React.ReactNode;
  featureItems: FeatureItemProps[];
  containerClassName?: string;
}

// --- Feature Card Sub-component ---
const FeatureCard = ({ icon: Icon, title, description, index }: FeatureItemProps & { index: number }) => {
  // Determine background color based on index for a chessboard effect in a 2-column grid
  const col = index % 2;
  const row = Math.floor(index / 2);
  const isLightBg = (row + col) % 2 === 0;

  const bgColorClass = isLightBg
    ? 'bg-slate-50 dark:bg-slate-800/50'
    : 'bg-white dark:bg-gray-800';

  return (
    <div className={`${bgColorClass} p-6 rounded-2xl shadow-sm transition-all hover:shadow-md`}>
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-200 dark:bg-slate-700 mb-4">
        <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-6">{description}</p>
    </div>
  );
};


// --- Main Component ---
export function ExpertiseSection({
  title,
  featureItems,
  containerClassName = '',
}: ExpertiseSectionProps) {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {/* --- Main Grid (Mobile First) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* --- Title Panel --- */}
          {/* On mobile, this appears first. On desktop, 'lg:order-last' moves it to the right. */}
          <div className="text-center lg:text-left lg:order-last">
            <h2 className="text-4xl tracking-tight text-gray-700 dark:text-white sm:text-5xl leading-tight">
              {title}
            </h2>
          </div>

          {/* --- Feature Cards Panel --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureItems.map((item, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

