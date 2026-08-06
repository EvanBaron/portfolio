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
    title: 'Languages',
    items: [
      { name: 'javascript', label: 'Javascript' },
      { name: 'typescript', label: 'Typescript' },
      { name: 'rust', label: 'Rust' },
      { name: 'c', label: 'C Language' },
      { name: 'python', label: 'Python' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      { name: 'react', label: 'React' },
      { name: 'expo', label: 'Expo' },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'sql', label: 'SQL' },
      { name: 'postgresql', label: 'Postgresql' },
      { name: 'supabase', label: 'Supabase' },
    ],
  },
  {
    title: 'Graphics',
    items: [{ name: 'vulkan', label: 'Vulkan' }],
  },
  {
    title: 'Product & Infra',
    items: [
      { name: 'figma', label: 'Figma' },
      { name: 'cloudflare', label: 'Cloudflare' },
      { name: 'stripe', label: 'Stripe' },
      { name: 'revenuecat', label: 'RevenueCat' },
      { name: 'appstore', label: 'App Store Connect' },
      { name: 'googleplay', label: 'Google Play Console' },
      { name: 'googlecloud', label: 'Google Cloud Console' },
    ],
  },
]
