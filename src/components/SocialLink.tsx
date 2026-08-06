import type { Theme } from '@/context/ThemeContext'

export default function SocialLink({
  href,
  icon,
  theme,
}: {
  href: string
  icon: React.ReactNode
  theme: Theme
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`social-link social-link-${theme}`}
    >
      <div className="social-icon">{icon}</div>
    </a>
  )
}
