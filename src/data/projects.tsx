import type { ReactNode } from 'react'
import type { Theme } from '@/context/ThemeContext'

export type BadgeData = {
  name: string
  label: string
}

export type Project = {
  title: string
  imageSrc: string
  description: (theme: Theme) => ReactNode
  badges: Array<BadgeData>
  meta?: ReactNode
  gallery?: Array<string>
  themedIllustration?: boolean
}

export const projects: Array<Project> = [
  {
    title: 'OutLift Workouts',
    imageSrc: '/outlift.png',
    meta: 'Founder & CEO, Baryonic · Building the OutLift ecosystem since Summer 2025',
    description: (theme) => (
      <>
        <a
          href="https://outlift.app"
          className={`link-primary link-primary-${theme}`}
        >
          OutLift Workouts
        </a>{' '}
        (shown here) is the flagship app of the OutLift ecosystem, built
        under{' '}
        <span className={`link-primary-${theme}`}>Baryonic</span>, the
        company I founded to grow it. It helps users track their workouts,
        build custom training plans, and optimize their programming with an
        adaptive algorithm — not all features are fully implemented yet.
        Alongside it sit two shared libraries (outlift-components,
        outlift-services) and the live outlift-website; OutLift Coaches is in
        active development to integrate with Workouts next, with OutLift
        Nutrition and the OutLift Store planned once that foundation is
        solid.
      </>
    ),
    badges: [
      { name: 'typescript', label: 'Typescript' },
      { name: 'react', label: 'React' },
      { name: 'expo', label: 'Expo' },
      { name: 'postgresql', label: 'Postgresql' },
      { name: 'supabase', label: 'Supabase' },
    ],
    gallery: [
      '/outlift-mobile-1.png',
      '/outlift-mobile-2.png',
      '/outlift-mobile-3.png',
      '/outlift-mobile-4.png',
      '/outlift-mobile-5.png',
    ],
  },
  {
    title: 'Kast',
    imageSrc: '/kast-visual.svg',
    themedIllustration: true,
    meta: 'Solo project · Nov 2025 – present · on hold, engine rewrite incoming',
    description: (theme) => (
      <>
        <a
          href="https://github.com/EvanBaron/kast"
          className={`link-primary link-primary-${theme}`}
        >
          Kast
        </a>{' '}
        is a game engine made using only the raw{' '}
        <a
          href="https://www.vulkan.org/"
          className={`link-primary link-primary-${theme}`}
        >
          Vulkan
        </a>{' '}
        Graphics API's bindings on Rust and{' '}
        <a
          href="https://github.com/rust-windowing/winit"
          className={`link-primary link-primary-${theme}`}
        >
          Winit
        </a>{' '}
        to display the window, everything else is self-made. It's currently
        paused while I focus on OutLift — a large rewrite is queued to turn
        it from a rigid prototype into an actual rendering engine.
      </>
    ),
    badges: [
      { name: 'vulkan', label: 'Vulkan' },
      { name: 'rust', label: 'Rust' },
    ],
  },
]
