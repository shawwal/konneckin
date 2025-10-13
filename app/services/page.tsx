import { Button } from "@/components/ui/button"
import { ArrowRight, BriefcaseBusiness, FileText, GanttChart, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive solutions for market entry, corporate compliance, immigration, and business process outsourcing to help you succeed in Indonesia.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
          Your End-to-End Partner for Growth in Indonesia
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          From initial market entry to ongoing operational excellence, we provide the strategic guidance and hands-on support you need to navigate the Indonesian market with confidence.
        </p>
      </section>

      {/* Core Services Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Our Core Services</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              We offer a full suite of services tailored to the needs of foreign-owned companies.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Service Card 1 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BriefcaseBusiness className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Market Entry & Business Setup</h3>
              <p className="mt-2 text-muted-foreground">
                Navigate the complexities of establishing your presence with expert guidance on entity setup (PT PMA), licensing, and initial registrations.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Corporate Secretarial & Compliance</h3>
              <p className="mt-2 text-muted-foreground">
                Ensure your business remains compliant with all local regulations through our ongoing corporate secretarial, tax, and accounting services.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Users className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Immigration & Mobility Services</h3>
              <p className="mt-2 text-muted-foreground">
                Seamlessly secure the necessary work and stay permits (KITAS/KITAP) for your expatriate team, ensuring a smooth transition to working in Indonesia.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GanttChart className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Business Process Outsourcing (BPO)</h3>
              <p className="mt-2 text-muted-foreground">
                Focus on your core business while we handle essential functions like payroll, HR administration, and other back-office tasks efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl">Ready to Grow Your Business?</h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Let's discuss how our expertise can support your specific goals in Indonesia. Schedule a complimentary consultation with our team today.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">
                <span>Get in Touch</span>
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}