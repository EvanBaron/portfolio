import Badge from '../Badge'
import Illustration from '../Illustration'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'

export default function ExperienceSection() {
  const ref = useSectionTheme('nomad')

  return (
    <section id="experiences" ref={ref}>
      <FadeInSection>
        <div className="section-title-wrapper">
          <h2 className="section-title">
            Experience
            <span className="title-s-container">
              s
              <Illustration name="cross" className="title-cross-icon" raw />
            </span>
          </h2>
          <Illustration name="decoration" className="decoration-nomad" />
        </div>
      </FadeInSection>

      <FadeInSection delay="200ms" className="experience-card">
        <div className="experience-header">
          <Illustration name="macif" className="company-logo" raw />
          <h3 className="card-title">MACIF</h3>
        </div>

        <div className="experience-content-grid">
          <div className="image-container">
            <img src="/macif-screen.png" className="image" />
          </div>

          <div className="experience-details">
            <p className="text-body">
              Designed and developed a feature flagging platform for{' '}
              <a
                href="https://www.macif.fr"
                target="_blank"
                rel="noreferrer"
                className="link-primary"
              >
                Macif
              </a>
              . Led the project from initial prototyping (
              <a href="https://www.figma.com/" className="link-primary">
                Figma
              </a>
              ) to technical implementation (
              <a href="https://react.dev/" className="link-primary">
                React.js
              </a>
              , Node.js). Delivered a tool that enables teams to remotely
              schedule and toggle features across the website and application.
            </p>

            <div className="badges-container">
              <Badge name="typescript" label="Typescript" theme="nomad" />
              <Badge name="react" label="React" theme="nomad" />
            </div>
          </div>
        </div>

        <Illustration name="decoration-alt" raw />
      </FadeInSection>
    </section>
  )
}
