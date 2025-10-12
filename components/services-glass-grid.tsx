'use client'
import { Badge } from "@/components/ui/badge"
import { useI18n } from "./providers";
import { items } from "@/data/services";

export function ServicesGlassGrid() {
  const { t } = useI18n();
  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-serif text-2xl md:text-4xl">
          {t("everythingYouNeed")}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <article key={i} className="relative overflow-hidden rounded-2xl border bg-card">
              <img
                src={it.img || "/placeholder.svg"}
                alt={`${it.tag} background`}
                className="h-[360px] w-full object-cover md:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col p-4">
                {/* --- FIXED TAG (STILL AT THE TOP) --- */}
                <Badge
                  variant="glass"
                  className="glass mb-2 shrink-0"
                >
                  <strong>{it.tag}</strong>
                </Badge>

                {/* --- SCROLLABLE CONTAINER FOR ALL SERVICE CARDS --- */}
                <div className="mt-auto h-full min-h-0 overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    {it.services.map((service, serviceIndex) => (
                      // --- INDIVIDUAL GLASS CARD FOR EACH SERVICE ---
                      <div key={serviceIndex} className="glass rounded-xl p-4">
                        <h3 className="text-sm font-semibold md:text-base">{service.title}</h3>
                        <p className="text-sm md:text-base">{service.description}</p>
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