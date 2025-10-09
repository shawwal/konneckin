import { VideoHero } from "@/components/video-hero"
import { TrustedLogos } from "@/components/trusted-logos"
import { InsightFeature } from "@/components/insight-feature"
import { ServicesGlassGrid } from "@/components/services-glass-grid"

export default function Page() {
  return (
    <main>
      <VideoHero />
      <TrustedLogos />
      <InsightFeature />
      <ServicesGlassGrid />
    </main>
  )
}
