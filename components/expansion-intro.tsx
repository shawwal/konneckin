"use client"

import React from 'react';
import { useI18n } from './providers';

/**
 * Section 1: Intro Hero
 * Displays the main headline and subheadline for the page.
 */
export default function ExpansionIntro() {
  const { t } = useI18n();
  const introTranslations = t('intro');

  if (!introTranslations) {
    return null; // Or a loading state
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            {/* @ts-ignore */}
            {introTranslations.headline}
          </h1>
          <p className="mt-4 text-lg font-normal text-gray-500 sm:px-16 dark:text-gray-400">
            {/* @ts-ignore */}
            {introTranslations.subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}

