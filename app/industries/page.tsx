import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Factory, HeartPulse, ShoppingCart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Navigate Indonesia's key sectors with our deep industry expertise in consumer products, healthcare, industrials, and technology.",
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto container px-4 py-16 text-center md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
          Expertise That Drives Your Sector Forward
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          We combine deep local knowledge with global best practices to help you overcome sector-specific challenges and seize opportunities in Indonesia's dynamic market.
        </p>
      </section>

      {/* Industry Grid Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto container px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Our Industry Focus</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Specialized strategies for the industries shaping Indonesia's future.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Industry Card 1: Consumer */}
            <div className="flex flex-col rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShoppingCart className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Consumer & Retail</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                Tap into Indonesia's growing middle class with strategies for market entry, distribution, and navigating consumer behavior.
              </p>
            </div>
            {/* Industry Card 2: Healthcare */}
            <div className="flex flex-col rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <HeartPulse className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Healthcare & Pharma</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                Navigate complex regulations and licensing for pharmaceuticals, medical devices, and healthcare services to serve a nation's needs.
              </p>
            </div>
            {/* Industry Card 3: Industrial */}
            <div className="flex flex-col rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Factory className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Industrial & Manufacturing</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                Establish and scale your operations with support for factory licensing, supply chain optimization, and environmental compliance.
              </p>
            </div>
            {/* Industry Card 4: Technology */}
            <div className="flex flex-col rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cpu className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Technology & Digital</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                Capitalize on Indonesia's digital boom with guidance on fintech, e-commerce, and software-as-a-service regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mx-auto container px-4 py-16 md:py-24">
        <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl">Have a Specific Challenge?</h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Our experts are ready to provide insights tailored to your industry and business objectives. Let's build your success story in Indonesia together.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">
                <span>Schedule a Consultation</span>
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}