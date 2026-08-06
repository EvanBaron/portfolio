import TechCategory from '../TechCategory'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import { SKILLS } from '@/data/tech'
import type { Theme } from '@/context/ThemeContext'

export default function TechSection({ theme }: { theme: Theme }) {
  const ref = useSectionTheme(theme)

  return (
    <section id="tech" ref={ref}>
      <FadeInSection>
        <TechCategory
          title="Skills & Technologies"
          categories={SKILLS}
          theme={theme}
        />
      </FadeInSection>
    </section>
  )
}
