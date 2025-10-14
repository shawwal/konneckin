'use client'
import { Badge } from "@/components/ui/badge"

import { items } from "@/data/services";
import { useI18n } from "./providers";

export function ServicesGlassGridFull() {
  const { t } = useI18n();
  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
      <div className="mx-auto container px-4 lg:px-0">
        <h2 className="text-center font-serif text-3xl md:text-4xl">
          {t("everythingYouNeed")}
        </h2>
        
        {/* --- UPDATED: Responsive grid classes for mobile, tablet, and desktop --- */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {items.map((it, i) => (
            <article key={i} className="relative overflow-hidden rounded-2xl border bg-card">
              <img
                src={it.img || "/placeholder.svg"}
                alt={`${it.tag} background`}
                className="h-[400px] w-full object-cover md:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col p-6">
                <Badge
                  variant="glass"
                  className="glass mb-6 shrink-0 self-start"
                >
                  {/* Note: Using <strong> is more semantic here than <h2> */}
                  <strong className="text-base font-semibold">{it.tag}</strong>
                </Badge>

                <div className="mt-auto h-full min-h-0 overflow-y-auto pr-2">
                  <div className="flex flex-col gap-3">
                    {it.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="glass rounded-xl p-4">
                        <h3 className="mb-1 text-sm font-semibold md:text-base">{service.title}</h3>
                        <p className="text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}