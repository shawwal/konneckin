import React from 'react';
import { ChevronDown } from 'lucide-react';

// --- Type Definitions for Props ---
export interface AccordionItemProps {
  title: string;
  content: string;
  linkText?: string;
  linkHref?: string;
}

// --- Accordion Item Sub-component ---
export const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: AccordionItemProps;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <h2>
        <button
          type="button"
          className="flex w-full items-center justify-between py-5 text-left font-medium text-gray-700 dark:text-gray-300"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span>{item.title}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </button>
      </h2>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pr-4">
            <p className="text-gray-600 dark:text-gray-400">{item.content}</p>

            {item.linkText && (
              <a
                href={item.linkHref}
                className="mt-2 inline-block text-sm font-semibold text-blue-900 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400"
              >
                {item.linkText} &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};