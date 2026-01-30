import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export function useSectionTheme(themeName: 'nomad' | 'monolith') {
  const { setTheme } = useTheme()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(themeName)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [themeName, setTheme])

  return ref
}
