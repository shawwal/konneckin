'use client'
import { Badge } from "@/components/ui/badge"
import { useI18n } from "./providers"

const items = [
  {
    tag: "Business Expansion",
    title: "Market Research",
    description: "Understand consumer behavior, competition, and regulatory trends before entering the Indonesian market.",
    img: "/assets/image-fx-15.webp",
  },
  {
    tag: "Post-establishment",
    title: "Recruitment service",
    description: "Attract and hire qualified talent to support your business growth with our efficient recruitment solutions.",
    img: "/assets/image-fx-4.webp",
  },
  {
    tag: "Expatriate Support",
    title: "KITAP & work permit",
    description: "If you’ve held a KITAS for several consecutive years or are married to an Indonesian national, you may qualify for a KITAP (Permanent Stay Permit).",
    img: "/assets/image-fx-17.webp",
  },
  {
    tag: "Importer of Record",
    title: "IOR Services in Indonesia",
    description: "Ensure full customs compliance and import clearance in Indonesia—without establishing a local legal entity.",
    img: "/assets/image-fx-78.webp",
  },
]

export function ServicesGlassGridBackup() {
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
                alt={`${it.title} background`}
                className="h-[360px] w-full object-cover md:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <Badge variant="glass" className="glass mb-2">
                  {it.tag}
                </Badge>
                <div className="glass rounded-xl p-4">
                  <h3 className="text-sm font-semibold md:text-base">{it.title}</h3>
                  <p className="text-sm md:text-base">{it.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
