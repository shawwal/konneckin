import React from 'react';
// Assuming you have a Button component at this path
import { Button } from '@/components/ui/button';

// Defining the types for the component's props
interface SplitTwoSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  ctaAriaLabel?: string;
  containerClassName?: string;
  imageOnLeft?: boolean;
}

export function SplitTwoSection({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  ctaText,
  ctaHref,
  ctaAriaLabel,
  containerClassName = '',
  imageOnLeft = true,
}: SplitTwoSectionProps) {
  const imagePanel = (
    <div className="relative h-64 sm:h-80 lg:min-h-[600px]">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={imageUrl}
        alt={imageAlt}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          // Type the event and cast the target to prevent TS errors
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://placehold.co/1200x1200/e2e8f0/475569?text=${encodeURIComponent(imageAlt)}`;
        }}
      />
    </div>
  );

  const contentPanel = (
    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">
          {subtitle}
        </p>
        <div className="pt-2">
          <a href={ctaHref} aria-label={ctaAriaLabel || ctaText}>
            <Button size="lg">{ctaText}</Button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`p-4 md:p-8 bg-white dark:bg-gray-900`}>
      <div className={`w-full overflow-hidden bg-gray-50 dark:bg-gray-800/50 shadow-sm rounded-2xl ${containerClassName}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {imageOnLeft ? (
            <>
              {imagePanel}
              {contentPanel}
            </>
          ) : (
            <>
              {/* On large screens, reverse the order */}
              <div className="lg:order-last">{imagePanel}</div>
              {contentPanel}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
