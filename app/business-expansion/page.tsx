import type { Metadata } from "next"
import { RichContent } from "@/components/marketing/rich-content"
import { fetchExternalContent } from "@/lib/external-content"
import { pageSources } from "@/lib/page-sources"

export const metadata: Metadata = {
  title: "Business expansion services in Indonesia",
  description: "We simplify your market entry process with local expertise and global standards.",
}

export default async function Page() {
  const html = await fetchExternalContent(pageSources["business-expansion"])
  return (
    <main className="bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-16 lg:py-20">
        <RichContent html={html} />
      </div>
    </main>
  )
}
