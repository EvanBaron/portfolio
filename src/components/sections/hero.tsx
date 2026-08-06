import { ChevronDown } from 'lucide-react'
import Illustration from '../Illustration'
import SocialLink from '../SocialLink'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import type { Theme } from '@/context/ThemeContext'

export default function HeroSection({ theme }: { theme: Theme }) {
  const ref = useSectionTheme(theme)

  return (
    <section id="hero" className="section-full" ref={ref}>
      <FadeInSection className="hero-grid">
        <div className="hero-text-col">
          <p className={`intro-text intro-text-${theme}`}>
            Hello, I am Evan Baron, and I'm
          </p>

          <div className="title-wrapper">
            <h1 className={`main-title main-title-${theme}`}>
              <span className="block">Just a</span>
              <span className="block">Student</span>
            </h1>

            <div className="decoration-wrapper">
              <Illustration
                name="decoration"
                className={`decoration-${theme}`}
              />
            </div>
          </div>
        </div>

        <div className="hero-content-col">
          <div className={`bio-text-container bio-text-container-${theme}`}>
            <p>
              Currently studying at{' '}
              <a
                href="https://www.epita.fr/"
                className={`link-primary link-primary-${theme}`}
              >
                EPITA
              </a>
              , I aim to become an engineer in artificial intelligence.
            </p>
            <p>
              On the side, I specialize in web development and building modern
              applications for fun.
            </p>
          </div>

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
        </div>
      </FadeInSection>

      <a
        href="#projects"
        className={`scroll-cue scroll-cue-${theme}`}
        aria-label="Scroll to skills"
      >
        <span className="scroll-cue-icon">
          <ChevronDown size={28} />
        </span>
      </a>
    </section>
  )
}
