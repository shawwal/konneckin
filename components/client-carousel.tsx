"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    stat: "35% faster",
    quote: "Our digital overhaul accelerated product cycles dramatically.",
    logo: "/abstract-client-logo.png",
  },
  {
    stat: "$1.2B value",
    quote: "A focused portfolio strategy unlocked shareholder value.",
    logo: "/abstract-client-logo.png",
  },
  {
    stat: "Net zero",
    quote: "We built a credible transition plan with measurable wins.",
    logo: "/abstract-client-logo.png",
  },
]

export function ClientCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" })
  }
  return (
    <section className="mx-auto container px-4 py-12 md:py-16" aria-labelledby="impact-heading">
      <div className="flex items-center justify-between">
        <h2 id="impact-heading" className="font-serif text-2xl md:text-3xl">
          Client Impact
        </h2>
        <div className="hidden gap-2 md:flex">
          <Button variant="outline" onClick={() => scrollBy(-1)} aria-label="Previous slide">
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="outline" onClick={() => scrollBy(1)} aria-label="Next slide">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div
        ref={ref}
        className={cn(
          "mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4",
          "[-ms-overflow-style:none] [scrollbar-width:none]",
          "[&::-webkit-scrollbar]:hidden",
        )}
      >
        {slides.map((s, i) => (
          <article
            key={i}
            className="glass snap-center shrink-0 basis-[85%] rounded-xl p-6 md:basis-[45%]"
            aria-roledescription="slide"
          >
            <img src={s.logo || "/placeholder.svg"} alt="Client logo" className="h-6 w-auto" />
            <div className="mt-4 text-2xl font-semibold text-primary">{s.stat}</div>
            <p className="mt-2 text-sm text-muted-foreground">“{s.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  )
}
