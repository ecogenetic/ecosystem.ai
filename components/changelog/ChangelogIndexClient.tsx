'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Video } from '../Video'
import React from 'react'

interface PageData {
  route: string
  name: string
  frontMatter: Record<string, unknown>
}

function formatChangelogDate(value: unknown) {
  if (!value) return null
  return new Date(`${String(value).replace(/\//g, '-')}T12:00:00Z`).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    },
  )
}

export function ChangelogIndexClient({
  pages,
  maxItems,
}: {
  pages: PageData[]
  maxItems?: number
}) {
  const sortedPages = [...pages]
    .sort(
      (a, b) =>
        new Date(`${String(b.frontMatter.date).replace(/\//g, '-')}T12:00:00Z`).getTime() -
        new Date(`${String(a.frontMatter.date).replace(/\//g, '-')}T12:00:00Z`).getTime(),
    )
    .slice(0, maxItems)

  return (
    <div className="max-w-6xl mx-auto divide-y divide-primary/10">
      {sortedPages.map((page, i) => {
        const fm = page.frontMatter
        const pageName = page.route.replace('/changelog/', '')
        const title = (fm?.title as string) || page.name

        return (
          <div className="md:flex md:gap-4 py-6 transition-all" id={pageName} key={pageName}>
            <div className="hidden md:block opacity-80 text-sm sticky top-24 self-start md:min-w-44">
              {formatChangelogDate(fm?.date)}
            </div>
            <Link href={page.route} className="block group min-w-0 flex-1">
              {fm?.ogVideo ? (
                <Video
                  src={fm.ogVideo as string}
                  gifStyle
                  className="mb-14 rounded relative overflow-hidden shadow-md group-hover:shadow-lg ring-0 border-0 transform scale-100 transition-transform hover:scale-105"
                />
              ) : fm?.ogImage ? (
                <div className="mb-14 rounded relative aspect-video overflow-hidden shadow-md transform scale-100 transition-transform hover:scale-105">
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={(fm.gif as string) ?? (fm.ogImage as string)}
                    className="object-cover"
                    alt={title}
                    fill={true}
                    sizes="(min-width: 1024px) 1000px, 100vw"
                    priority={i < 3}
                    unoptimized={fm.gif !== undefined || (fm.ogImage as string)?.endsWith('.gif')}
                  />
                </div>
              ) : null}
              <div className="md:hidden opacity-80 mb-4 text-sm">{formatChangelogDate(fm?.date)}</div>
              <h2 className="block font-mono text-2xl opacity-90 group-hover:opacity-100 group-hover:underline">
                {title}
              </h2>
              <div className="opacity-80 text-lg group-hover:opacity-100">{fm?.description as string}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
