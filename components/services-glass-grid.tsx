'use client'
import { Badge } from "@/components/ui/badge"
import { useI18n } from "./providers"
import { ArrowRight } from "lucide-react"

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
    description: "If you’ve held a KITAS for several consecutive years or are married to an Indonesian national, you may qualify for a KITAP.",
    img: "/assets/image-fx-17.webp",
  },
  {
    tag: "Importer of Record",
    title: "IOR Services in Indonesia",
    description: "Ensure full customs compliance and import clearance in Indonesia—without establishing a local legal entity.",
    img: "/assets/image-fx-78.webp",
  },
]

export function ServicesGlassGrid() {
  const { t } = useI18n();
  return (
    <section className="bg-muted/30 py-12 md:py-16">
      {/* Increased max-width for better spacing on large screens */}
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <h2 className="text-center font-serif text-2xl md:text-4xl">
          {t("everythingYouNeed")}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article 
              key={i} 
              className="group relative h-[420px] overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl md:h-[520px]"
            >
              <img
                src={it.img || "/placeholder.svg"}
                alt={`${it.tag} service background`}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end p-6">
                <div className="glass rounded-xl p-4">
                  <h3 className="text-base font-semibold md:text-lg">{it.tag}</h3>
                  
                  {/* --- KEY CHANGE HERE --- */}
                  {/* Added a minimum height to ensure all description blocks are the same size */}
                  <p className="mt-2 text-sm min-h-[5rem]">
                    {it.description}
                  </p>
                  
                  <a 
                    href="#" // Replace with your actual link
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                    aria-label={`Learn more about ${it.tag}`}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}