import { TrustedLogos } from "@/components/trusted-logos"
import { InsightFeature } from "@/components/insight-feature"
import { ServicesGlassGrid } from "@/components/services-glass-grid"
import { VideoHeroBanner } from "@/components/video-hero-baner"

export default function Page() {
  return (
    <main>
      <VideoHeroBanner />
      <TrustedLogos />
      <InsightFeature />
      <ServicesGlassGrid />
    </main>
  )
}
