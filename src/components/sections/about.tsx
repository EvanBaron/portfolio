import Illustration from '../Illustration'
import '../../styles/about.css'
import FadeInSection from '../FadeInSection'
import { useSectionTheme } from '@/hooks/useSectionTheme'

export default function AboutSection() {
  const ref = useSectionTheme('nomad')

  return (
    <section id="about" ref={ref}>
      <FadeInSection>
        <div className="section-title-wrapper">
          <h2 className="section-title">About Me</h2>
          <Illustration name="decoration" className="decoration-nomad" />
        </div>
      </FadeInSection>

      <div className="about-content">
        <FadeInSection delay="200ms" className="about-top-row">
          <div className="profile-container">
            <img src="/profile.png" className="profile-image" />
          </div>

          <div className="about-text-col">
            <p className="about-text text-body">
              While my academic focus is on Neural Networks and AI Engineering,
              I believe that a great model needs a great environment to run in,
              this is why I just don't stick to Python scripts. I build
              cross-platform applications with React and TypeScript to master
              the front-end of AI and how users interact with models.
            </p>
            <p className="about-text text-body">
              Simultaneously, I am diving into Rust and Vulkan to build a custom
              game engine to understand the back-end, where hardware
              acceleration and parallel computing drive modern AI performance.
              I’ve recently been able to practice by developing an{' '}
              <a
                href="https://gitlab.com/prs_c2_g4/projet-ocr"
                className="link-primary"
              >
                Optical Character Recognition system
              </a>{' '}
              in a team environment using only C with GTK and standard
              libraries.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay="400ms" className="about-text-col">
          <p className="about-text text-body">
            Outside of tech, you can find me at the gym. I am fascinated by the
            science of optimizing the human body, diving deep into nutrition,
            hypertrophy, strength building, and long-term health. This personal
            obsession with tracking and improving performance was what led me to
            create{' '}
            <a href="https://outlift.app" className="link-primary">
              OutLift
            </a>
            , it is the bridge between my love for fitness and my skills in
            development..
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
