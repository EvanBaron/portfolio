import TechCategory from '../TechCategory'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import { SKILLS, TECHNOLOGIES } from '@/data/tech'

export default function TechSection() {
  const ref = useSectionTheme('monolith')

  return (
    <section id="tech" ref={ref}>
      <FadeInSection>
        <TechCategory title="Skills" categories={SKILLS} theme="monolith" />
      </FadeInSection>
      <FadeInSection delay="200ms">
        <TechCategory
          title="Technologies"
          categories={TECHNOLOGIES}
          theme="monolith"
        />
      </FadeInSection>
    </section>
  )
}
