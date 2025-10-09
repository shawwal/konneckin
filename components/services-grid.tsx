import { Cpu, Leaf, Briefcase } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Digital Transformation",
    desc: "Reimagine operating models and technology to move faster.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Build resilient, net-zero strategies with measurable impact.",
  },
  {
    icon: Briefcase,
    title: "Corporate Strategy",
    desc: "Outperform markets through sharp portfolio and M&A choices.",
  },
]

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16" aria-labelledby="services-heading">
      <h2 id="services-heading" className="font-serif text-2xl md:text-3xl">
        What We Do
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border bg-card p-5">
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
