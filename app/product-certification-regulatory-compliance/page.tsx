import type { Metadata } from "next"
import { RichContent } from "@/components/marketing/rich-content"
import { fetchExternalContent } from "@/lib/external-content"
import { pageSources } from "@/lib/page-sources"

export const metadata: Metadata = {
  title: "Product certification & regulatory compliance",
  description: "Get your products certified and compliant — fast, legally, and with zero stress.",
}

export default async function Page() {
  const html = await fetchExternalContent(pageSources["product-certification-regulatory-compliance"])
  return (
    <main>
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-16 lg:py-20">
        <RichContent html={html} />
      </div>
    </main>
  )
}
