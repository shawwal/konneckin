'use client'
import { Button } from "@/components/ui/button"
import { useI18n } from "./providers"

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative isolate h-[100svh] overflow-hidden" aria-label="Hero">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/boardroom-meeting-professional-consulting-backgrou.jpg')",
        }}
      />
      {/* Subtle overlay via glass panel for Apple-like feel */}
      <div className="absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
        <div className="glass rounded-xl p-6 md:p-10">
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl text-balance">{t("headline")}</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg text-pretty">{t("subheadline")}</p>
          <div className="mt-6">
            <Button size="lg">{t("cta_discover")}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
