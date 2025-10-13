"use client"

import React from 'react';
import { useI18n } from './providers';

/**
 * Section 3: What We Do
 * Displays a grid of core services offered.
 */
export default function WhatWeDoSection() {
  const { t } = useI18n();
  const whatWeDoTranslations = t('whatWeDo') as any;
  
  const services = whatWeDoTranslations.cards ? Object.keys(whatWeDoTranslations.cards).map(key => ({
    key,
    // @ts-ignore
    title: whatWeDoTranslations.cards[key].title,
    // @ts-ignore
    description: whatWeDoTranslations.cards[key].description,
  })) : [];

  if (!whatWeDoTranslations || !services.length) {
    return null; // Or a loading state
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            {/* @ts-ignore */}
            {whatWeDoTranslations.title}
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            {/* @ts-ignore */}
            {whatWeDoTranslations.subtitle}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div key={service.key} className="p-6 bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

