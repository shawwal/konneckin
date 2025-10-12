"use client"

import React from 'react';
import { useI18n } from './providers';



export function GrowthCTASection() {
  const { t } = useI18n();

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-sm">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Panel: Content */}
          <div className="flex flex-col justify-center bg-[#0f4375] p-8 text-white sm:p-12 lg:p-16 min-h-[400px] lg:min-h-[500px]">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {t('growthHeadline')}
              </h1>
              <p className="text-base sm:text-lg text-gray-200 lg:mb-8">
                {t('splitSubheadLine')}
              </p>
            </div>
          </div>

          {/* Right Panel: Image */}
          {/* On mobile, this div is just a spacer. On lg screens, it shows the image */}
          <div className="relative h-64 sm:h-80 lg:h-auto">
            <img 
              className="absolute inset-0 h-full w-full object-cover" 
              src="/assets/staircase.webp"
              alt="Aerial view of a modern spiral staircase"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/1000x1000/e2e8f0/475569?text=Staircase'; }}
            />
          </div>
        </div>

        {/* Floating CTA Bar */}
        <div className="absolute glass bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm dark:bg-gray-800/90 md:p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h4 className="text-center text-base font-semibold text-gray-800 dark:text-gray-200 md:text-left md:text-lg">
              {t('ctaPrompt')}
            </h4>
            <a
              href="/contact"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-md border border-gray-400 bg-transparent px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-700 md:w-auto"
            >
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

