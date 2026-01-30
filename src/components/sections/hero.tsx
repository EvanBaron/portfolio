import Illustration from '../Illustration'
import SocialLink from '../SocialLink'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'

export default function HeroSection() {
  const ref = useSectionTheme('nomad')

  return (
    <section id="hero" ref={ref}>
      <FadeInSection className="hero-grid">
        <div className="hero-text-col">
          <p className="intro-text">Hello, I am Evan Baron, and I'm</p>

          <div className="title-wrapper">
            <h1 className="main-title">
              <span className="block">Just a</span>
              <span className="block">Student</span>
            </h1>

            <div className="decoration-wrapper">
              <Illustration name="decoration" className="decoration-nomad" />
            </div>
          </div>
        </div>

        <div className="hero-content-col">
          <div className="bio-text-container">
            <p>
              Currently studying at{' '}
              <a href="https://www.epita.fr/" className="link-primary">
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
              icon={<Illustration name="mail" className="icon" />}
            />
            <SocialLink
              href="https://github.com/EvanBaron"
              icon={<Illustration name="github" className="icon" />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/evan-baron-89ba57302/"
              icon={<Illustration name="linkedin" className="icon" />}
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
