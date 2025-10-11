"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "./providers"

export function VideoHeroBanner() {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <h1 className="text-center font-serif text-3xl leading-tight md:text-4xl">{t("videoHeadline")}</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {t("videoSubheadline")}
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <a href="/contact">
          <Button size="lg" className="md:size-auto p-2">
            {t("getInTouch")}
          </Button>
        </a>
        <a href="/insights">
          <Button size="lg" variant="outline" className="md:size-auto bg-transparent p-2">
            {t("seeHowWeWork")}
          </Button>
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border bg-card shadow-sm md:mt-8">
        <video
          className="h-[220px] w-full object-cover md:h-[420px]"
          // autoPlay
          controls
          // loop
          // muted
          playsInline
        >
          <source src="/konneckin-introduction-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p id="video-description" className="sr-only">
        An introductory video showcasing Konneckin's services, team collaboration, and modern office environment.
      </p>
    </section>
  )
}
