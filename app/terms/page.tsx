import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Konneckin",
  description: "Read the terms and conditions governing your use of Konneckin’s website and services.",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-semibold text-pretty">Terms of Use</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="space-y-6 leading-relaxed">
        <div>
          <h2 className="font-medium">Acceptance of Terms</h2>
          <p className="mt-2 text-muted-foreground">
            By accessing or using this website, you agree to these Terms. If you do not agree, please discontinue use.
          </p>
        </div>

        <div>
          <h2 className="font-medium">Use of the Site</h2>
          <p className="mt-2 text-muted-foreground">
            You agree not to misuse the site or interfere with its normal operation. We may suspend access for any
            reason including maintenance or security.
          </p>
        </div>

        <div>
          <h2 className="font-medium">Intellectual Property</h2>
          <p className="mt-2 text-muted-foreground">
            All content on this site is the property of Konneckin or its licensors and is protected by applicable
            laws.
          </p>
        </div>

        <div>
          <h2 className="font-medium">Limitation of Liability</h2>
          <p className="mt-2 text-muted-foreground">
            To the fullest extent permitted by law, Konneckin is not liable for any indirect or consequential
            damages arising from the use of this site.
          </p>
        </div>

        <div>
          <h2 className="font-medium">Contact</h2>
          <p className="mt-2 text-muted-foreground">
            Questions about these Terms? Reach out via{" "}
            <a href="/contact" className="underline">
              our contact page
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
