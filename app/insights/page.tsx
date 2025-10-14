import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { ArrowRight, Mail } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Insights",
  description: "Explore our latest analysis on Indonesian market trends, regulatory changes, and operational strategies to stay ahead.",
}

// Placeholder data for articles using an online service
const featuredInsights = [
  {
    category: "Market Analysis",
    title: "Navigating Indonesia's Digital Economy in 2026 and Beyond",
    excerpt: "A deep dive into the key trends, opportunities, and challenges shaping the nation's rapidly evolving digital landscape.",
    image: "https://placehold.co/800x600/104374/FFFFFF?text=Market+Analysis",
    link: "#",
  },
  {
    category: "Regulatory Update",
    title: "Understanding the New Foreign Investment Policies: What You Need to Know",
    excerpt: "We break down the latest government regulations impacting foreign-owned companies and provide actionable advice for compliance.",
    image: "https://placehold.co/800x600/E5E7EB/1F2937?text=Regulatory+Update",
    link: "#",
  },
  {
    category: "Operational Excellence",
    title: "Three Strategies for Building a Resilient Supply Chain in Southeast Asia",
    excerpt: "Learn how leading companies are mitigating risks and enhancing efficiency in their supply chain operations across the region.",
    image: "https://placehold.co/800x600/082C4A/FFFFFF?text=Operational+Excellence",
    link: "#",
  },
]

export default function InsightsPage() {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className="mx-auto container px-4 py-16 text-center md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Stay Ahead of the Curve
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore our latest thinking on the market dynamics, policy shifts, and operational strategies that matter most for your business in Indonesia.
          </p>
        </section>

        {/* Featured Insights Grid */}
        <section className="mx-auto container px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredInsights.map((insight) => (
              <div key={insight.title} className="group flex flex-col overflow-hidden rounded-lg border bg-card">
                <a href={insight.link} className="block overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={`Image for ${insight.title}`}
                    width={800}
                    height={600}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
                <div className="flex flex-grow flex-col p-6">
                  <p className="text-sm font-medium text-primary">{insight.category}</p>
                  <h3 className="mt-2 font-serif text-xl font-semibold">
                    <a href={insight.link} className="hover:underline">{insight.title}</a>
                  </h3>
                  <p className="mt-2 flex-grow text-muted-foreground">{insight.excerpt}</p>
                  <div className="mt-4">
                    <Button variant="link" asChild className="p-0">
                      <a href={insight.link}>
                        <span>Read More</span>
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto container px-4">
            <div className="rounded-lg bg-card p-8 text-center shadow-sm md:p-12">
              <Mail className="mx-auto size-12 text-primary" />
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">Get Our Insights Directly</h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Subscribe to our newsletter to receive our latest analysis and updates directly in your inbox.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="#">
                    <span>Subscribe Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}