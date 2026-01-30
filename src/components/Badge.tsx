import Illustration from './Illustration'
import './Badge.css'

export type BadgeProps = {
  name: string
  label: string
  theme: 'nomad' | 'monolith'
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
