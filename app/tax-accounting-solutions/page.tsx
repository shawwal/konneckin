import type { Metadata } from "next"
import { RichContent } from "@/components/marketing/rich-content"
import { fetchExternalContent } from "@/lib/external-content"
import { pageSources } from "@/lib/page-sources"

export const metadata: Metadata = {
  title: "Comprehensive tax and accounting support",
  description: "Professional tax and accounting services tailored to your business in Indonesia.",
}

export default async function Page() {
  const html = await fetchExternalContent(pageSources["tax-accounting-solutions"])
  return (
    <main>
      <div className="container mx-auto container px-4 py-10 md:py-16 lg:py-20">
        <RichContent html={html} />
      </div>
    </main>
  )
}
