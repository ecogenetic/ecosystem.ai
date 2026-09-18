import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function GuideCardGrid({
  columns = 3,
  children,
  quiet = false,
}: {
  columns?: 2 | 3
  children: ReactNode
  quiet?: boolean
}) {
  return (
    <div
      className={cn(
        'not-prose grid',
        quiet
          ? 'mt-2 mb-4 gap-x-8 gap-y-1 sm:grid-cols-2 xl:grid-cols-3'
          : cn(
              'mt-4 mb-8 gap-3',
              columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 xl:grid-cols-3'
            )
      )}
    >
      {children}
    </div>
  )
}

export function GuideCard({
  href,
  title,
  description,
  icon,
  quiet = false,
}: {
  href: string
  title: string
  description?: string
  icon?: ReactNode
  quiet?: boolean
}) {
  if (quiet) {
    return (
      <Link
        href={href}
        className={cn(
          'not-prose py-0.5 text-[0.8rem] font-normal leading-snug no-underline',
          'text-zinc-400 hover:text-zinc-600',
          'dark:text-zinc-500 dark:hover:text-zinc-300'
        )}
      >
        {title}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        'group flex items-start gap-3.5 rounded-xl border px-4 py-3.5 no-underline transition-colors',
        'border-slate-200 bg-white hover:border-[#00aeef] hover:bg-sky-50/70',
        'dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-[#00aeef] dark:hover:bg-slate-800/70'
      )}
    >
      {icon ? (
        <span
          className={cn(
            'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            'bg-[#00aeef]/15 text-[#00aeef]',
            'dark:bg-[#00aeef]/20 dark:text-[#00aeef]'
          )}
        >
          {icon}
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="block text-[0.95rem] font-semibold leading-snug text-slate-900 group-hover:text-[#00aeef] dark:text-slate-100 dark:group-hover:text-[#00aeef]">
          {title}
        </span>
        {description ? (
          <span className="mt-1 block text-sm leading-snug text-slate-600 dark:text-slate-400">
            {description}
          </span>
        ) : null}
      </span>
    </Link>
  )
}
