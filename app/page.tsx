import { TrustedLogos } from "@/components/trusted-logos"
import { ServicesGlassGrid } from "@/components/services-glass-grid"
import { VideoHeroBanner } from "@/components/video-hero-banner"
import { SplitSection } from "@/components/split-section"
import { GrowthCTASection } from "@/components/growth-cta-section"
import { ThriveSection } from "@/components/thrive-section"
import { LatestContentSection } from "@/components/latest-content-section"

export default function Page() {
  return (
    <>
      <VideoHeroBanner />
      <TrustedLogos />
      <SplitSection />
      <ThriveSection />

      <GrowthCTASection />
      <ServicesGlassGrid />
      <LatestContentSection />
    </>
  )
}
