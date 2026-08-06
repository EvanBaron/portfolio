import { useEffect, useState } from 'react'
import '../styles/loading.css'

export default function LoadingScreen() {
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [isExiting, setIsExiting] = useState<boolean>(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => setIsFinished(true), 600)
      }, 400)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (isFinished) return null

  return (
    <div className={`loading-screen ${isExiting ? 'exit' : ''}`}>
      <div className="loader-container">
        <img src="/ebaron.svg" className="loader-logo" alt="Loading..." />
        <div className="loader-ring"></div>
      </div>
    </div>
  )
}
