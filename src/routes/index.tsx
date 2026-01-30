import { createFileRoute } from '@tanstack/react-router'
import AboutSection from '@/components/sections/about'
import ExperiencesSection from '@/components/sections/experiences'
import HeroSection from '@/components/sections/hero'
import ProjectsSection from '@/components/sections/projects'
import TechSection from '@/components/sections/tech'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <HeroSection />
      <TechSection />
      <ExperiencesSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  )
}
