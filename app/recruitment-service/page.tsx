import type { Metadata } from "next"
import { RichContent } from "@/components/marketing/rich-content"
import { fetchExternalContent } from "@/lib/external-content"
import { pageSources } from "@/lib/page-sources"

export const metadata: Metadata = {
  title: "Hiring top talent in Indonesia made simple",
  description: "Source, screen, and secure the right candidates — locally and regionally.",
}

export default async function Page() {
  const html = await fetchExternalContent(pageSources["recruitment-service"])
  return (
    <main>
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-16 lg:py-20">
        <RichContent html={html} />
      </div>
    </main>
  )
}
