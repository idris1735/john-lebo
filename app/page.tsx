import { AboutSection } from "@/components/about-section"
import { AchievementsSection } from "@/components/achievements-section"
import { DevelopmentPlanSection } from "@/components/development-plan-section"
import { Footer } from "@/components/footer"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LeadershipPhilosophySection } from "@/components/leadership-philosophy-section"
import { TimelineSection } from "@/components/timeline-section"

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <AchievementsSection />
      <DevelopmentPlanSection />
      <LeadershipPhilosophySection />
      <GetInvolvedSection />
      <Footer />
    </main>
  )
}
