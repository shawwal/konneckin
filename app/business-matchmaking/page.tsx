import type { Metadata } from "next"
import { RichContent } from "@/components/marketing/rich-content"
import { fetchExternalContent } from "@/lib/external-content"
import { pageSources } from "@/lib/page-sources"

export const metadata: Metadata = {
  title: "Business matchmaking service in Indonesia",
  description:
    "Connecting international businesses with the right partners in Indonesia — fast, strategic, and reliable.",
}

export default async function Page() {
  const html = await fetchExternalContent(pageSources["business-matchmaking"])
  return (
    <main>
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-16 lg:py-20">
        <RichContent html={html} />
      </div>
    </main>
  )
}
