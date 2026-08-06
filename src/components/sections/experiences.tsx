import Badge from '../Badge'
import Illustration from '../Illustration'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import type { Theme } from '@/context/ThemeContext'

export default function ExperienceSection({ theme }: { theme: Theme }) {
  const ref = useSectionTheme(theme)

  return (
    <section id="experiences" ref={ref}>
      <FadeInSection>
        <div className="section-title-wrapper">
          <h2 className={`section-title section-title-${theme}`}>
            Experience
            <span className="title-s-container">
              s
              <Illustration
                name="cross"
                className={`title-cross-icon title-cross-icon-${theme}`}
              />
            </span>
          </h2>
          <Illustration name="decoration" className={`decoration-${theme}`} />
        </div>
      </FadeInSection>

      <FadeInSection delay="200ms" className="experience-card">
        <div className="experience-header">
          <Illustration name="macif" className="company-logo" raw />
          <h3 className={`card-title card-title-${theme}`}>MACIF</h3>
        </div>

        <div className="experience-content-grid">
          <div className="image-container">
            <img src="/macif-screen.png" className="image tilt-left" />
          </div>

          <div className="experience-details">
            <p className={`card-meta card-meta-${theme}`}>
              Summer Internship · Mobile App Team · Jun – Jul 2025 (8 weeks)
            </p>

            <p className={`text-body text-body-${theme}`}>
              Designed and developed a feature flagging platform for{' '}
              <a
                href="https://www.macif.fr"
                target="_blank"
                rel="noreferrer"
                className={`link-primary link-primary-${theme}`}
              >
                Macif
              </a>
              . Led the project from initial prototyping (
              <a
                href="https://www.figma.com/"
                className={`link-primary link-primary-${theme}`}
              >
                Figma
              </a>
              ) to technical implementation (
              <a
                href="https://react.dev/"
                className={`link-primary link-primary-${theme}`}
              >
                React.js
              </a>
              , Node.js). Delivered a tool that enables teams to remotely
              schedule and toggle features across the website and application.
            </p>

            <div className="badges-container">
              <Badge name="typescript" label="Typescript" theme={theme} />
              <Badge name="react" label="React" theme={theme} />
            </div>
          </div>
        </div>

        <Illustration
          name="decoration-alt"
          className={`decoration-alt-${theme}`}
        />
      </FadeInSection>
    </section>
  )
}
