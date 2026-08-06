import { Download } from 'lucide-react'
import Illustration from '../Illustration'
import SocialLink from '../SocialLink'
import FadeInSection from '../FadeInSection'
import '../../styles/closing.css'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import type { Theme } from '@/context/ThemeContext'

export default function ClosingSection({ theme }: { theme: Theme }) {
  const ref = useSectionTheme(theme)

  return (
    <section id="closing" className="section-full closing-section" ref={ref}>
      <FadeInSection>
        <div className="section-title-wrapper">
          <h2 className={`section-title section-title-${theme}`}>
            Let's Talk
          </h2>
          <Illustration name="decoration" className={`decoration-${theme}`} />
        </div>
      </FadeInSection>

      <div className="closing-content">
        <FadeInSection delay="200ms">
          <p className={`text-body text-body-${theme} closing-statement`}>
            Currently building OutLift, always studying something new, and
            genuinely happy to talk shop — reach out if you want to
            collaborate, have a role in mind, or just want to chat about AI,
            fitness, or rendering engines.
          </p>
        </FadeInSection>

        <FadeInSection delay="400ms" className="closing-actions">
          <a
            href="/Evan-Baron-CV.pdf"
            download
            className={`btn-primary btn-primary-${theme}`}
          >
            <Download size={18} />
            Download Résumé
          </a>

          <div className="social-links">
            <SocialLink
              href="mailto:evan.baron@outlook.fr"
              theme={theme}
              icon={<Illustration name="mail" className="icon" />}
            />
            <SocialLink
              href="https://github.com/EvanBaron"
              theme={theme}
              icon={<Illustration name="github" className="icon" />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/evan-baron-89ba57302/"
              theme={theme}
              icon={<Illustration name="linkedin" className="icon" />}
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
