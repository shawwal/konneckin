import { Layout } from "@/components/layout"

export default function InsightsPage() {
  return (
    <Layout>
      <main>
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h1 className="font-serif text-3xl md:text-4xl">Insights</h1>
          <p className="mt-2 text-muted-foreground">Latest thinking on markets, policy, and operations.</p>
        </section>
      </main>
    </Layout>
  )
}
