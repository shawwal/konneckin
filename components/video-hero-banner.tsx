"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "./providers"

export function VideoHeroBanner() {
  const { t } = useI18n()
  return (
    <section className="mx-auto container px-4 lg:px-0 pt-10 md:pt-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <h1 className="text-center font-serif text-3xl leading-tight md:text-4xl">{t("videoHeadline")}</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {t("videoSubheadline")}
      </p>
      <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Button asChild size="lg" className="min-h-[44px] px-6 py-3">
          <Link href="/contact">
            {t("getInTouch")}
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="min-h-[44px] px-6 py-3 bg-transparent">
          <Link href="/insights">
            {t("seeHowWeWork")}
          </Link>
        </Button>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border bg-card shadow-sm md:mt-8">
        <video
          className="h-[220px] w-full object-cover md:h-[420px]"
          controls
          playsInline
          aria-describedby="video-description"
        >
          <source src="/konneckin-introduction-video.webm" type="video/webm" />
          <track
            kind="captions"
            // src="/captions/konneckin-introduction-en.vtt"
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <p id="video-description" className="sr-only">
        An introductory video showcasing Konneckin's services, team collaboration, and modern office environment.
      </p>
    </section>
  )
}