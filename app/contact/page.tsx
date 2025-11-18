'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Layout } from "@/components/layout"
import { Mail, Building, Send } from "lucide-react"

export default function ContactPage() {
  // 1. Create state to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  // 2. Update state when user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  // 3. Handle the submission (Opens Email Client)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, company, message } = formData
    
    // Destination email
    const recipient = "jakarta@konneckin.com"
    
    // Construct the email subject
    const subject = `Project Inquiry from ${name}`
    
    // Construct the email body
    const body = `Hi Konneckin Team,

${message}

-----------------------------------
Contact Details:
Name: ${name}
Email: ${email}
Company: ${company || "Not specified"}
`

    // Create the mailto link with proper encoding
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open the email client
    window.location.href = mailtoLink
  }

  return (
    <Layout>
      <main>
        <section className="mx-auto container px-4 py-16 text-center md:py-24 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Let's Build Together
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Have a project in mind or want to learn more about operating in Indonesia? We'd love to hear from you.
          </p>
        </section>

        <section className="mx-auto container px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            
            <div className="rounded-lg border bg-card p-8">
              <h2 className="font-serif text-3xl">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below to compose an email automatically.</p>
              
              {/* Added onSubmit handler */}
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  {/* Added value and onChange */}
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    placeholder="you@example.com" 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Inc." 
                    type="text" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project or inquiry..." 
                    className="min-h-[120px]" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto gap-2">
                  <Send className="size-4" /> Compose Email
                </Button>
              </form>
            </div>

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