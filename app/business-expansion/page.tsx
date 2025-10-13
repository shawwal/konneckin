import type { Metadata } from "next"
import ExpansionIntro from "@/components/expansion-intro"
import ChallengesSection from "@/components/challenges-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import WhyKonneckinSection from "@/components/why-konneckin-section"
import RelatedServicesSection from "@/components/related-services"

export const metadata: Metadata = {
  title: "Business expansion services in Indonesia",
  description: "We simplify your market entry process with local expertise and global standards.",
}

export default async function Page() {
  return (
    <section>
      <ExpansionIntro />
      <ChallengesSection />
      <WhatWeDoSection />
      <WhyKonneckinSection />
      <RelatedServicesSection />
    </section>
  )
}
