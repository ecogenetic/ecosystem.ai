'use client'

import Image from 'next/image'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const ContextMenu = dynamic(() => import('./LogoContextMenu'), {
  ssr: false,
})

export function Logo() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onContextMenu={(e) => {
          e.preventDefault()
          setMenuOpen(true)
        }}
      >
        <Image src="/ecosystem.svg" alt="ecosystem.Ai Alt Logo" width={30} height={30} />
        <span className="ml-2 text-lg font-bold text-slate-800 dark:text-slate-200">ecosystem.Ai</span>
        {/* CSS for hover effect */}
        <style jsx>{`
          div {
            padding: 0.5rem 0.5rem 0.5rem 0;
            mask-image: none;
          }
          div:hover {
            mask-image: linear-gradient(
              60deg,
              #00aeef 25%,
              rgba(0, 174, 239, 0.7) 50%,
              #00aeef 75%
            );
            mask-size: 400%;
            mask-position: 100%;
            transition:
              mask-position 1s ease,
              -webkit-mask-position 1s ease;
          }
        `}</style>
      </div>
      {menuOpen && <ContextMenu open={menuOpen} setOpen={setMenuOpen} />}
    </>
  )
}
