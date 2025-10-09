import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Your Company",
  description: "Explore how we help companies enter, operate, and scale in Indonesia.",
}

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <h1 className="font-serif text-3xl md:text-4xl">Services</h1>
        <p className="mt-2 text-muted-foreground">
          Explore how we help companies enter, operate, and scale in Indonesia.
        </p>
      </section>
    </main>
  )
}
