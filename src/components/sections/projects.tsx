import Illustration from '../Illustration'
import ProjectCard from '../ProjectCard'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import { projects } from '@/data/projects'
import type { Theme } from '@/context/ThemeContext'

export default function ProjectsSection({ theme }: { theme: Theme }) {
  const ref = useSectionTheme(theme)

  return (
    <section id="projects" ref={ref}>
      <FadeInSection>
        <div className="section-title-wrapper">
          <h2 className={`section-title section-title-${theme}`}>
            Projects
          </h2>
          <Illustration name="decoration" className={`decoration-${theme}`} />
        </div>
      </FadeInSection>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <FadeInSection key={project.title} delay={`${index * 150}ms`}>
            <ProjectCard
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              badges={project.badges}
              meta={project.meta}
              gallery={project.gallery}
              themedIllustration={project.themedIllustration}
              theme={theme}
            />
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
