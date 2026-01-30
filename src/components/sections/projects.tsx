import Illustration from '../Illustration'
import ProjectCard from '../ProjectCard'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  const ref = useSectionTheme('monolith')

  return (
    <section id="projects" ref={ref}>
      <FadeInSection>
        <div className="section-title-wrapper">
          <h2 className="section-title section-title-monolith">Projects</h2>
          <Illustration name="decoration" className="decoration-monolith" />
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
            />
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
