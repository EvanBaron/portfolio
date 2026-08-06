import Illustration from './Illustration'
import './Badge.css'
import type { Theme } from '@/context/ThemeContext'

export type BadgeProps = {
  name: string
  label: string
  theme: Theme
}

export default function Badge({ name, label, theme }: BadgeProps) {
  return (
    <div className={`badge badge-${theme}`}>
      <Illustration
        name={name}
        className={`badge-icon-${theme}`}
        raw={theme === 'monolith'} // Icons are made for monolith first
      />
      <span className="badge-text">{label}</span>
    </div>
  )
}
