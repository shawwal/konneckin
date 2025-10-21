import { ChevronDownIcon } from 'lucide-react';
import React, { useState } from 'react';

// --- Type Definitions for Props ---
interface OpportunityItemProps {
  title: string;
  description: string;
}

interface MarketOpportunitiesProps {
  title: React.ReactNode;
  opportunityItems: OpportunityItemProps[];
  containerClassName?: string;
}

// --- Accordion Item Sub-component ---
const OpportunityAccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: OpportunityItemProps;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <h3 className="font-medium text-gray-700 dark:text-gray-300">
        <button
          type="button"
          className="flex w-full items-center justify-between py-5 text-left"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span>{item.title}</span>
          <ChevronDownIcon
            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        className={`grid text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pr-4">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---
export function MarketOpportunitiesSection({
  title,
  opportunityItems,
  containerClassName = '',
}: MarketOpportunitiesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* --- Title Panel --- */}
          {/* On mobile, this appears first. On desktop, it appears on the left. */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-700 dark:text-white sm:text-5xl leading-tight">
              {title}
            </h2>
          </div>

          {/* --- Accordion Panel --- */}
          <div className="w-full p-8 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm">
            {opportunityItems.map((item, index) => (
              <OpportunityAccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
