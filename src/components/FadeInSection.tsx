import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  delay?: string
  className?: string
}

export default function FadeInSection({
  children,
  delay,
  className,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) {
              observer.unobserve(domRef.current)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const { current } = domRef
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  )
}
