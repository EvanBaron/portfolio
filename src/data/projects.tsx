import type { ReactNode } from 'react'

export type BadgeData = {
  name: string
  label: string
}

export type Project = {
  title: string
  imageSrc: string
  description: ReactNode
  badges: Array<BadgeData>
}

export const projects: Array<Project> = [
  {
    title: 'Outlift',
    imageSrc: '/outlift.png',
    description: (
      <>
        <a
          href="https://outlift.app"
          className="link-primary link-primary-monolith"
        >
          OutLift
        </a>{' '}
        is a web and mobile app aiming to help users track their workout
        progress, create custom training plans, monitor nutrition, and leverage
        an intelligent algorithm to optimize training regimens based on
        individual performance and goals. The app is currently under active
        development and not all features are fully implemented yet.
      </>
    ),
    badges: [
      { name: 'typescript', label: 'Typescript' },
      { name: 'react', label: 'React' },
      { name: 'expo', label: 'Expo' },
      { name: 'postgresql', label: 'Postgresql' },
      { name: 'supabase', label: 'Supabase' },
    ],
  },
  {
    title: 'Kast',
    imageSrc: '/kast.png',
    description: (
      <>
        <a
          href="https://github.com/EvanBaron/kast"
          className="link-primary link-primary-monolith"
        >
          Kast
        </a>{' '}
        is a game engine made using only the raw{' '}
        <a
          href="https://www.vulkan.org/"
          className="link-primary link-primary-monolith"
        >
          Vulkan
        </a>{' '}
        Graphics API's bindings on Rust and{' '}
        <a
          href="https://github.com/rust-windowing/winit"
          className="link-primary link-primary-monolith"
        >
          Winit
        </a>{' '}
        to display the window, everything else is self-made.
      </>
    ),
    badges: [
      { name: 'vulkan', label: 'Vulkan' },
      { name: 'rust', label: 'Rust' },
    ],
  },
]
