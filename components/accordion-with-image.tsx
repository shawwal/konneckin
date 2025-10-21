import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { AccordionItem, AccordionItemProps } from '@/components/accordion-item';

interface AccordionWithImageProps {
  title: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  accordionItems: AccordionItemProps[];
  ctaText: string;
  ctaHref: string;
  containerClassName?: string;
}

// --- Main Component ---
export function AccordionWithImage({
  title,
  imageUrl,
  imageAlt,
  accordionItems,
  ctaText,
  ctaHref,
  containerClassName = '',
}: AccordionWithImageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item to be open

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Main Title --- */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
        </div>

        {/* --- Content Grid (Mobile First) --- */}
        <div className={`mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start ${containerClassName}`}>
          {/* --- Image Panel --- */}
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full max-w-lg rounded-2xl object-cover shadow-lg"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/600x400/e2e8f0/475569?text=${encodeURIComponent(imageAlt)}`;
              }}
            />
          </div>

          {/* --- Accordion and CTA Panel --- */}
          <div className="flex flex-col">
            <div id="accordion-section">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>

            <div className="mt-8">
              <a href={ctaHref}>
                {/* Variant 'outline' is assumed for the button style in the image */}
                <Button variant="outline" size="lg">{ctaText}</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

