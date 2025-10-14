'use client'

import { Button } from "@/components/ui/button"
import { useI18n } from "./providers"

export function InsightFeature() {
  const { t } = useI18n()
  return (
    <section className="mx-auto grid container grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:py-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="md:col-span-2">
        <div className="text-xs text-primary">{t("insight")}</div>
        <h2 className="mt-3 font-serif text-2xl leading-snug md:text-5xl">
          {t("businessExpansion")}
        </h2>
      </div>
      <div className="row-start-2 md:row-start-auto">
        <img
          src="/assets/image-fx-8.webp"
          alt="Colorful abstract"
          className="h-64 w-full rounded-[2rem] object-cover md:h-80"
        />
         <p className="text-sm text-muted-foreground mt-5">
          {t("indonesiaRapidGrowth")}
        </p>
        <div className="mt-4">
          <a href="/insights">
            <Button size="sm" variant="outline">
              {t("learn_more")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
