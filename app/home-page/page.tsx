import { Hero } from "@/components/hero"
import { InsightsCards } from "@/components/insights-cards"
import { ServicesGrid } from "@/components/services-grid"
import { ClientCarousel } from "@/components/client-carousel"

export default function Page() {
  return (
    <main>
      <Hero />
      <InsightsCards />
      <ServicesGrid />
      <ClientCarousel />
      <div className="h-16 md:hidden" aria-hidden="true" />
    </main>
  )
}
