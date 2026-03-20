'use client'

import { useEffect, useRef } from 'react'

export function DynamicCode({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const tokenRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      const token = Array.from(ref.current.querySelectorAll('code span')).find(
        (el) => el.textContent === '1',
      ) as HTMLSpanElement | undefined
      tokenRef.current = token ?? null
    }
  }, [])

  return (
    <>
      <div ref={ref} style={{ marginTop: '1.5rem' }}>
        {children}
      </div>
      <a
        onClick={() => {
          if (tokenRef.current) {
            tokenRef.current.innerText = String((parseInt(tokenRef.current.innerText) || 0) + 1)
          }
        }}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        Increase the number
      </a>
      <a
        onClick={() => {
          if (tokenRef.current) {
            tokenRef.current.innerText = '1 + 1'
          }
        }}
        style={{ marginLeft: '.5rem', cursor: 'pointer', userSelect: 'none' }}
      >
        Change to `1 + 1`
      </a>
    </>
  )
}
