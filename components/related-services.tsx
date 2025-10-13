"use client"

import React from 'react';
import { useI18n } from './providers';
import { ArrowDown, ArrowRight } from 'lucide-react';

/**
 * Section 5: Related Services
 * A simple section linking to other relevant services.
 */
export default function RelatedServicesSection() {
  const { t } = useI18n();
  const relatedServicesTranslations = t('relatedServices') as any;

  const services = relatedServicesTranslations.links ? Object.keys(relatedServicesTranslations.links).map(key => ({
    key,
    // @ts-ignore
    title: relatedServicesTranslations.links[key],
    href: '#'
  })) : [];

  if (!relatedServicesTranslations || !services.length) {
    return null; // Or a loading state
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
            {/* @ts-ignore */}
            {relatedServicesTranslations.title}
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            {/* @ts-ignore */}
            {relatedServicesTranslations.subtitle}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          {services.map(service => (
            <div key={service.key}>
              <a href={service.href} className="group">
                <h3 className="mb-2 text-xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">Details about this service.</p>
                <div className="inline-flex items-center font-medium text-blue-600 group-hover:underline dark:text-blue-500 mt-2">
                  Learn more
                  <ArrowRight />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

