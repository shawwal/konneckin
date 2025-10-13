import { Button } from "@/components/ui/button"
import { ArrowRight, BrainCircuit, Globe, Handshake, Lightbulb } from "lucide-react"

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
          Build the Future With Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          We're a team of innovators, strategists, and problem-solvers dedicated to creating measurable impact for our clients. If you're driven by challenge and inspired by growth, you're in the right place.
        </p>
        <div className="mt-8">
          <a href="#open-positions">
            <Button size="lg">
              <span>View Open Positions</span>
              <ArrowRight />
            </Button>
          </a>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-serif text-3xl md:text-4xl">
            Why Join Konneckin?
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            We empower our people to do their best work.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1: Impact */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Globe className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Make a Real Impact</h3>
              <p className="mt-2 text-muted-foreground">
                Work on challenging projects for industry-leading clients and see your contributions shape the future of business in Indonesia and beyond.
              </p>
            </div>
            {/* Feature 2: Growth */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BrainCircuit className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Grow Your Career</h3>
              <p className="mt-2 text-muted-foreground">
                We invest in your professional development with continuous learning opportunities, mentorship programs, and clear paths for advancement.
              </p>
            </div>
            {/* Feature 3: Culture */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Handshake className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">A Culture of Collaboration</h3>
              <p className="mt-2 text-muted-foreground">
                Join a diverse, supportive, and inclusive team where every voice is heard and great ideas can come from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Current Openings</h2>
          <p className="mt-2 text-muted-foreground">
            We’re always looking for passionate people to join our team.
          </p>
        </div>
        <div className="mt-12">
          {/* Placeholder for Job Listings */}
          <div className="rounded-lg border bg-card p-8 text-center">
            <Lightbulb className="mx-auto size-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-xl font-semibold">No Open Positions Right Now</h3>
            <p className="mt-2 text-muted-foreground">
              We don't have any specific roles open at the moment, but we're always interested in hearing from talented individuals. Feel free to send us your resume.
            </p>
            <div className="mt-6">
              <Button variant="outline" asChild>
                <a href="mailto:careers@konneckin.com">Submit Your Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}