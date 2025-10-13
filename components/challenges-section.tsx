"use client"

import React from 'react';
import { useI18n } from './providers';

/**
 * Section 2: Common Challenges
 * Displays a grid of challenges faced during business expansion.
 */
export default function ChallengesSection() {
  const { t } = useI18n();

  // Fetch the entire 'challenges' translation object at once.
  // This adapts to the observed behavior where t() returns the parent object.
  const challengesTranslations = t('challenges') as any;

  // Create the array of challenges from the nested 'cards' object.
  const challenges = challengesTranslations.cards ? Object.keys(challengesTranslations.cards).map(key => ({
    key,
    title: challengesTranslations.cards[key].title,
    description: challengesTranslations.cards[key].description,
  })) : [];

  // Handle case where translations might not be loaded yet
  if (!challengesTranslations || !challenges.length) {
    return null; // Or a loading state
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            {challengesTranslations.title}
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            {challengesTranslations.subtitle}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map(challenge => (
            <div key={challenge.key} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{challenge.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

