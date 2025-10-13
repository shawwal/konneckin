"use client"

import React from 'react';
import { useI18n } from './providers';
import { CheckIcon } from 'lucide-react';

/**
 * Section 4: Why Work With Konneckin
 * Displays key benefits of working with the company next to an image.
 */
export default function WhyKonneckinSection() {
  const { t } = useI18n();
  const whyUsTranslations = t('whyUs') as any;

  const benefits = whyUsTranslations.points ? Object.keys(whyUsTranslations.points).map(key => ({
    key,
    // @ts-ignore
    title: whyUsTranslations.points[key].title,
    // @ts-ignore
    description: whyUsTranslations.points[key].description,
  })) : [];

  if (!whyUsTranslations || !benefits.length) {
    return null; // Or a loading state
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
            {/* @ts-ignore */}
            {whyUsTranslations.title}
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            {/* @ts-ignore */}
            {whyUsTranslations.subtitle}
          </p>
          <ul role="list" className="space-y-4">
            {benefits.map(benefit => (
              <li key={benefit.key} className="flex space-x-3">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <div className="flex flex-col">
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{benefit.title}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img
          className="w-full rounded-lg shadow-md"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="office content"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/800x600/e2e8f0/475569?text=Team+Meeting'; }}
        />
      </div>
    </section>
  );
}

