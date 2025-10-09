import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries - Sector-specific expertise across consumer, healthcare, industrial, and technology.",
  description: "Explore our industry solutions for consumer, healthcare, industrial, and technology sectors.",
}

export default function IndustriesPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <h1 className="font-serif text-3xl md:text-4xl">Industries</h1>
        <p className="mt-2 text-muted-foreground">
          Sector-specific expertise across consumer, healthcare, industrial, and technology.
        </p>
      </section>
    </main>
  )
}
