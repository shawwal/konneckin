import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Layout } from "@/components/layout"
import { Mail, Building } from "lucide-react"
import type { Metadata } from "next"

// Metadata following the pattern from the Insights page
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch to discuss your goals in Indonesia. We're here to help you navigate the market and succeed.",
}

export default function ContactPage() {
  return (
    // Using the Layout component for consistency
    <Layout>
      <main>
        {/* Hero Section with consistent styling */}
        <section className="mx-auto container px-4 py-16 text-center md:py-24 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Let's Build Together
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Have a project in mind or want to learn more about operating in Indonesia? We'd love to hear from you.
          </p>
        </section>

        {/* Detailed Contact Section with a two-column layout */}
        <section className="mx-auto container px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            
            {/* Left Column: Contact Form */}
            <div className="rounded-lg border bg-card p-8">
              <h2 className="font-serif text-3xl">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
              <form className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" placeholder="you@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input id="company" placeholder="Your Company Inc." type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project or inquiry..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full md:w-auto">Send Message</Button>
              </form>
            </div>

            {/* Right Column: Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl">Contact Information</h3>
                <p className="mt-2 text-muted-foreground">
                  Reach out directly through our channels below. We look forward to connecting with you.
                </p>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex size-12 items-center justify-center rounded-md bg-muted text-primary">
                      <Mail className="size-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email Us</h4>
                    <p className="text-muted-foreground">For all inquiries, please email us.</p>
                    <a href="mailto:jakarta@konneckin.com" className="mt-1 block text-primary hover:underline">
                      jakarta@konneckin.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex size-12 items-center justify-center rounded-md bg-muted text-primary">
                      <Building className="size-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Our Office</h4>
                    <p className="text-muted-foreground">
                      Jl. Jenderal Sudirman Kav. 52-53
                      <br />
                      Jakarta Selatan, DKI Jakarta, 12190
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}