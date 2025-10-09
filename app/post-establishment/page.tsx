import type { Metadata } from "next"
import { RichContent } from "@/components/marketing/rich-content"
import { fetchExternalContent } from "@/lib/external-content"
import { pageSources } from "@/lib/page-sources"

export const metadata: Metadata = {
  title: "Post-establishment services",
  description: "Professional, compliant, and reliable support for your business in Indonesia.",
}

export default async function Page() {
  const html = await fetchExternalContent(pageSources["post-establishment"])
  return (
    <main>
      <div className="container mx-auto max-w-5xl px-4 py-10 md:py-16 lg:py-20">
        <RichContent html={html} />
      </div>
    </main>
  )
}
