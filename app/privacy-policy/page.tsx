import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Konneckin",
  description: "Learn how Konneckin collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-semibold text-pretty">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="space-y-6 leading-relaxed">
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
          website and use our services.
        </p>

        <div>
          <h2 className="font-medium">Information We Collect</h2>
          <p className="mt-2 text-muted-foreground">
            We may collect information you provide directly (such as contact details) and information collected
            automatically (such as usage data, device information, and cookies).
          </p>
        </div>

        <div>
          <h2 className="font-medium">How We Use Information</h2>
          <p className="mt-2 text-muted-foreground">
            We use the information to operate, maintain, and improve our website and services, communicate with you, and
            comply with legal obligations.
          </p>
        </div>

        <div>
          <h2 className="font-medium">Your Choices</h2>
          <p className="mt-2 text-muted-foreground">
            You may manage cookies via your browser settings and request access, correction, or deletion of your
            personal data where applicable.
          </p>
        </div>

        <div>
          <h2 className="font-medium">Contact</h2>
          <p className="mt-2 text-muted-foreground">
            If you have questions about this policy, contact us at{" "}
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
