import { useEffect, useState } from 'react'

export default function GrainOverlay() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <svg className="grain-overlay" aria-hidden="true">
      <filter id="grain-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves={3}
          stitchTiles="stitch"
          result="noise"
        >
          {!reducedMotion && (
            <animate
              attributeName="seed"
              values="1;7;3;9;5;2;8;4;6;1"
              dur="0.7s"
              repeatCount="indefinite"
              calcMode="discrete"
            />
          )}
        </feTurbulence>
        <feColorMatrix
          in="noise"
          type="matrix"
          values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  )
}
