"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "./providers"

export function VideoHero() {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 md:pt-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <h1 className="text-center font-serif text-3xl leading-tight md:text-4xl">{t("headline")}</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {t("subheadline")}
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <a href="/contact">
          <Button size="sm" className="md:size-auto">
            {t("contact")}
          </Button>
        </a>
        <a href="/insights">
          <Button size="sm" variant="outline" className="md:size-auto bg-transparent">
            {t("cta_discover")}
          </Button>
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border bg-card shadow-sm md:mt-8">
        {/* Placeholder media pane to mirror video block from reference */}
        <img
          src="/placeholder.jpg"
          alt="Modern building facade illustration"
          className="h-[220px] w-full object-cover md:h-[420px]"
        />
      </div>
    </section>
  )
}
