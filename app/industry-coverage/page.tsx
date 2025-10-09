import type { Metadata } from "next"
import { RichContent } from "@/components/marketing/rich-content"
import { fetchExternalContent } from "@/lib/external-content"
import { pageSources } from "@/lib/page-sources"

export const metadata: Metadata = {
  title: "Industry coverage",
  description: "Serving startups, SMEs, enterprises, expatriates, and international investors.",
}

export default async function Page() {
  const html = await fetchExternalContent(pageSources["industry-coverage"])
  return (
    <main>
      <div className="container mx-auto max-w-5xl px-4 py-10 md:py-16 lg:py-20">
        <RichContent html={html} />
      </div>
    </main>
  )
}
