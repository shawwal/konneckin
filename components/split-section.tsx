"use client"

import { useI18n } from "./providers";
import { Button } from "./ui/button";

export function SplitSection() {
  const { t } = useI18n();

  return (
    <div className="p-4 sm:p-6 lg:p-0">
      <div className="mx-auto w-full overflow-hidden bg-gray-50 dark:bg-gray-800/50 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Panel: Image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/konneckin-office.webp"
              alt="Modern office"
            // onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1000x1000/e2e8f0/475569?text=Office+Image'; }}
            />
          </div>

          {/* Right Panel: Content */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="space-y-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                {t('splitHeadline')}
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                {t('splitSubheadLine')}
              </p>
              <div className="pt-2">
                <a href="/contact">
                  <Button size="lg" className="md:size-auto p-2">
                    {t("splitCta")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}