'use client'

import { Button } from 'nextra/components'

export function LinkButton({ href, target = '_blank', className, children }: {
  href: string
  target?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Button className={className} onClick={() => window.open(href, target)}>
      {children}
    </Button>
  )
}

export function AlertButton({ message, className, children }: {
  message: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Button className={className} onClick={() => alert(message)}>
      {children}
    </Button>
  )
}
