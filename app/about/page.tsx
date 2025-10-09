import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "We are your trusted partner for building and growing in Indonesia.",
}

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <h1 className="font-serif text-3xl md:text-4xl">About Us</h1>
        <p className="mt-2 text-muted-foreground">We are your trusted partner for building and growing in Indonesia.</p>
      </section>
    </main>
  )
}
