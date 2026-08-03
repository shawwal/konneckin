import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { Mail } from "lucide-react"
import { insightsArticles } from "@/data/insightsArticles"

export default function InsightsPage() {
  return (
    <Layout>
      <main>
        <section className="mx-auto container px-4 py-16 text-center md:py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Insights & Analysis</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl">
            Stay Ahead of Indonesia’s Market Trends
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore our latest thinking on investment strategy, regulatory updates, and operational best practices for business success in Indonesia.
          </p>
        </section>

        <section className="mx-auto container px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insightsArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-shadow duration-200 hover:shadow-lg"
              >
                <Link href={`/insights/${article.slug}`} className="block overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={600}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </Link>
                <div className="flex flex-grow flex-col p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{article.category}</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight">
                    <Link href={`/insights/${article.slug}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-grow text-muted-foreground">{article.excerpt}</p>
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <Link href={`/insights/${article.slug}`}>Read Article</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto container px-4">
            <div className="rounded-3xl bg-card p-8 shadow-sm md:p-12">
              <div className="flex flex-col items-center text-center gap-4">
                <Mail className="size-12 text-primary" />
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl">Get Our Insights Directly</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">
                    Subscribe to our newsletter to receive our latest analysis, market updates, and guidance for Indonesia’s evolving business landscape.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link href="/contact">Subscribe Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
