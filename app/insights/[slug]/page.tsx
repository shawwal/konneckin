import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { insightsArticles, getArticleBySlug } from "@/data/insightsArticles"

const CTA_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1BeVqio9GsohFkvGkN4HLZhoMFhKkFoQt2fHg9hQkJvUjkiBlsOEMNAyT2umkdz_scOhb4B7dA"

export async function generateStaticParams() {
  return insightsArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article not found | Konneckin",
      description: "This article could not be found.",
    }
  }

  return {
    title: `${article.title} | Konneckin`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.konneckin.com/insights/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <Layout>
      <main className="mx-auto container px-4 py-16 md:py-24">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <Link href="/insights" className="text-sm font-medium text-primary hover:underline">
              ← Back to insights
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">{article.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={650}
              className="h-[420px] w-full object-cover"
              unoptimized
            />
          </div>

          <div className="grid gap-12 rounded-3xl border border-border bg-background p-8 shadow-sm md:p-12">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Schedule a consultation</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold">Talk with our team about your Indonesia entry strategy</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Book a slot directly with our advisors and start your market entry plan with confidence.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" asChild>
                  <a href={CTA_LINK} target="_blank" rel="noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
