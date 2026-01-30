export type TechItem = {
  name: string
  label: string
}

export type Category = {
  title: string
  items: Array<TechItem>
}

export const SKILLS: Array<Category> = [
  {
    title: 'Web',
    items: [
      { name: 'javascript', label: 'Javascript' },
      { name: 'typescript', label: 'Typescript' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'sql', label: 'SQL' },
      { name: 'postgresql', label: 'Postgresql' },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'rust', label: 'Rust' },
      { name: 'c', label: 'C Language' },
      { name: 'python', label: 'Python' },
    ],
  },
]

export const TECHNOLOGIES: Array<Category> = [
  {
    title: 'Web',
    items: [
      { name: 'react', label: 'React' },
      { name: 'expo', label: 'Expo' },
      { name: 'supabase', label: 'Supabase' },
    ],
  },
  {
    title: 'Graphics',
    items: [{ name: 'vulkan', label: 'Vulkan' }],
  },
  {
    title: 'Design',
    items: [{ name: 'figma', label: 'Figma' }],
  },
]
