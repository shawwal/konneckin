'use client'

import React from 'react';
import { useI18n } from './providers';

export function TrustedLogos() {
  const { t } = useI18n()
  const logos = [
    { src: "/client-logo/google-logo-colour.webp", alt: "Google Logo" },
    { src: "/client-logo/shopee.png", alt: "Shopee Logo" },
    { src: "/client-logo/calvin-klein.png", alt: "Calvin Klein Logo" },
    { src: "/client-logo/suez.png", alt: "Suez Logo" },
    { src: "/client-logo/djoy.png", alt: "Djoy Logo" },
    { src: "/client-logo/iqos.png", alt: "IQOS Logo" },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 lg:px-0 py-8 md:py-10">
      <div className="mx-auto text-center w-fit rounded-full border bg-neutral-100 px-4 py-2 text-sm text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-600 dark:text-neutral-300">
        {t("trustedBy")}
      </div>

      {/* --- UPDATED SECTION --- */}
      {/* The container now uses a lighter dark mode background and a subtle border. */}
      <div className="mt-3 lg:mt-4 w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100/80 dark:border-neutral-800 dark:bg-neutral-600">
        {/* This is now a responsive flex grid, centered and with consistent spacing. */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 p-8 md:gap-x-16">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 max-h-8 w-auto flex-shrink-0 object-contain md:h-8 md:max-h-8"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}