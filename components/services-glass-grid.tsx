import { Badge } from "@/components/ui/badge"

const items = [
  {
    tag: "Business Expansion",
    title: "Market Research",
    img: "/placeholder.jpg",
  },
  {
    tag: "Post-establishment",
    title: "Recruitment service",
    img: "/placeholder.jpg",
  },
  {
    tag: "Corporate Support",
    title: "KITAP & work permit",
    img: "/placeholder.jpg",
  },
  {
    tag: "Importer of Record",
    title: "IOR Services in Indonesia",
    img: "/placeholder.jpg",
  },
]

export function ServicesGlassGrid() {
  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-serif text-2xl md:text-3xl">
          {"Everything you need to launch & grow in Indonesia"}
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
                <Badge className="glass mb-2">{it.tag}</Badge>
                <div className="glass rounded-xl p-4">
                  <h3 className="text-sm font-semibold md:text-base">{it.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
