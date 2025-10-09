import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <h1 className="font-serif text-3xl md:text-4xl">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">Tell us about your goals in Indonesia and we’ll get back shortly.</p>
        <div className="mt-6">
          <a href="mailto:hello@example.com">
            <Button>Send Email</Button>
          </a>
        </div>
      </section>
    </main>
  )
}
