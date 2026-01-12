import { useState } from 'react'

export default function Header() {
  const [isOpen] = useState(false)

  return (
    <>
      <header></header>

      <aside className={isOpen ? '' : ''}></aside>
    </>
  )
}
