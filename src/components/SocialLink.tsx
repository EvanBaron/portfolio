export default function SocialLink({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="social-link">
      <div className="social-icon">{icon}</div>
    </a>
  )
}
