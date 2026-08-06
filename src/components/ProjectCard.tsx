import './ProjectCard.css'
import Badge from './Badge'
import Illustration from './Illustration'
import type { BadgeProps } from './Badge'
import type { Theme } from '@/context/ThemeContext'
import { ReactNode } from 'react'

type ProjectCardProps = {
  title: string
  imageSrc: string
  description: (theme: Theme) => ReactNode
  badges: Array<Omit<BadgeProps, 'theme'>>
  theme: Theme
  meta?: ReactNode
  gallery?: Array<string>
  themedIllustration?: boolean
}

export default function ProjectCard({
  title,
  imageSrc,
  description,
  badges,
  theme,
  meta,
  gallery,
  themedIllustration,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className={`card-title card-title-${theme}`}>{title}</h3>

      {meta && <p className={`card-meta card-meta-${theme}`}>{meta}</p>}

      <div className="image-container">
        {themedIllustration ? (
          <Illustration
            name={imageSrc.replace(/^\//, '').replace(/\.svg$/, '')}
            className="image themed-illustration"
            color={`var(--color-base-06-${theme})`}
          />
        ) : (
          <img src={imageSrc} className="image" alt={title} />
        )}
      </div>

      {gallery && gallery.length > 0 && (
        <div className="project-gallery">
          {gallery.map((src) => (
            <div key={src} className="project-gallery-item">
              <img src={src} alt={`${title} screenshot`} />
            </div>
          ))}
        </div>
      )}

      <p className={`text-body text-body-${theme}`}>{description(theme)}</p>

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
