import type { Metadata } from "next"
import ExpansionIntro from "@/components/expansion-intro"
import ChallengesSection from "@/components/challenges-section"

export const metadata: Metadata = {
  title: "Business expansion services in Indonesia",
  description: "We simplify your market entry process with local expertise and global standards.",
}

export default async function Page() {
  return (
    <section>
      <ExpansionIntro />
      <ChallengesSection />
    </section>
  )
}
