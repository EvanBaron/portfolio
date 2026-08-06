import { createFileRoute } from '@tanstack/react-router'
import AboutSection from '@/components/sections/about'
import ClosingSection from '@/components/sections/closing'
import ExperiencesSection from '@/components/sections/experiences'
import HeroSection from '@/components/sections/hero'
import ProjectsSection from '@/components/sections/projects'
import TechSection from '@/components/sections/tech'

export const Route = createFileRoute('/')({ component: App })

// Fixed repeating rhythm: green (monolith) -> red (remnant) -> blue/teal (nomad)
function App() {
  return (
    <div>
      <HeroSection theme="monolith" />
      <ProjectsSection theme="remnant" />
      <ExperiencesSection theme="nomad" />
      <TechSection theme="monolith" />
      <AboutSection theme="remnant" />
      <ClosingSection theme="nomad" />
    </div>
  )
}
