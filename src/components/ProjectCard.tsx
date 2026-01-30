import './ProjectCard.css'
import Badge from './Badge'
import type { BadgeProps } from './Badge'

type ProjectCardProps = {
  title: string
  imageSrc: string
  description: React.ReactNode
  badges: Array<Omit<BadgeProps, 'theme'>>
  theme?: 'nomad' | 'monolith'
}

export default function ProjectCard({
  title,
  imageSrc,
  description,
  badges,
  theme = 'monolith',
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="card-title card-title-monolith">{title}</h3>

      <div className="image-container">
        <img src={imageSrc} className="image" alt={title} />
      </div>

      <p className="text-body text-body-monolith">{description}</p>

      <div className="badges-container">
        {badges.map((badge) => (
          <Badge
            key={badge.name}
            name={badge.name}
            label={badge.label}
            theme={theme}
          />
        ))}
      </div>
    </div>
  )
}
