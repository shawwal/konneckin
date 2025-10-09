import { Card, CardContent, CardHeader } from "@/components/ui/card"

const items = [
  {
    topic: "Strategy",
    title: "Competing in the Age of AI",
    excerpt: "How leaders deploy AI to unlock efficiency and growth.",
    image: "/executives-discussion-in-office.jpg",
  },
  {
    topic: "Sustainability",
    title: "Net Zero at Scale",
    excerpt: "From pledges to measurable outcomes across portfolios.",
    image: "/sustainable-energy-transition.jpg",
  },
  {
    topic: "Digital",
    title: "Cloud Value Realized",
    excerpt: "Turning migrations into durable competitive advantage.",
    image: "/cloud-datacenter-abstract.jpg",
  },
]

export function InsightsCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16" aria-labelledby="insights-heading">
      <h2 id="insights-heading" className="font-serif text-2xl md:text-3xl">
        Latest Thinking.
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="overflow-hidden">
            <CardHeader className="p-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.title} cover`}
                className="h-44 w-full object-cover md:h-48"
              />
            </CardHeader>
            <CardContent className="p-4">
              <span className="inline-block rounded-full bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                {item.topic}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
