import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Users, Rocket } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission, values, and the team dedicated to helping you succeed in the Indonesian market.",
}

// Data for the core values section, similar to the insights data structure
const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    description: "We operate with unwavering honesty and transparency, ensuring your business is built on a foundation of trust.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "Your success is our success. We work as an extension of your team to navigate challenges and seize opportunities together.",
  },
  {
    icon: Rocket,
    title: "Driven by Excellence",
    description: "We are committed to delivering the highest quality of service and actionable insights to propel your growth.",
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className="mx-auto container px-4 py-16 text-center md:py-24 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Your Strategic Partner in Indonesia
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We bridge local insights with global standards to help you build, operate, and thrive in Southeast Asia's largest economy.
          </p>
        </section>

        {/* Mission/Story Section */}
        <section className="mx-auto container px-4 pb-16 md:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-last md:order-first">
              <h2 className="font-serif text-3xl md:text-4xl">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                Our mission is to demystify the Indonesian market for foreign enterprises. We believe in the immense potential of this nation and are dedicated to providing the strategic guidance and operational support necessary for businesses to navigate its complexities with confidence.
              </p>
              <p className="mt-4 text-muted-foreground">
                Founded by experts with decades of on-the-ground experience, we combine deep local knowledge with a commitment to international best practices, ensuring your venture is not only compliant but competitive.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/800x1000/082C4A/FFFFFF?text=Our+Team"
                alt="A team of professionals collaborating"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto container px-4">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl">Our Guiding Principles</h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                These values are the bedrock of our company. They guide our decisions, our actions, and our commitment to our clients.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {coreValues.map((value) => (
                <div key={value.title} className="rounded-lg border bg-card p-6 text-center shadow-sm">
                  <value.icon className="mx-auto size-12 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto container px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Let's discuss how we can help you achieve your business objectives in Indonesia.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}