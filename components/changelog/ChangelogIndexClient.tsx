'use client'

import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'
import { Video } from '../Video'
import React from 'react'

interface PageData {
  route: string
  name: string
  frontMatter: Record<string, unknown>
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
        new Date(b.frontMatter.date as string).getTime() -
        new Date(a.frontMatter.date as string).getTime()
    )
    .slice(0, maxItems)

  return (
    <Accordion.Root asChild type="multiple">
      <div className="max-w-6xl mx-auto divide-y divide-primary/10">
        {sortedPages.map((page, i) => {
          const fm = page.frontMatter
          const pageName = page.route.replace('/changelog/', '')

          return (
            <div
              className="md:flex md:gap-4 py-6 transition-all"
              id={pageName}
              key={pageName}
            >
              <div className="hidden md:block opacity-80 text-sm group-hover:opacity-100 sticky top-24 self-start md:min-w-44">
                {fm?.date
                  ? new Date(fm.date as string).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      timeZone: 'UTC',
                    })
                  : null}
              </div>
              <Accordion.Item
                value={(fm?.title as string) || page.name}
              >
                <Accordion.Trigger asChild>
                  <div className="block group cursor-pointer select-none">
                    {fm?.ogVideo ? (
                      <Video
                        src={fm.ogVideo as string}
                        gifStyle
                        className="mb-14 rounded relative overflow-hidden shadow-md group-hover:shadow-lg ring-0 border-0 transform scale-100 transition-transform hover:scale-105 cursor-pointer"
                      />
                    ) : fm?.ogImage ? (
                      <div className="mb-14 rounded relative aspect-video overflow-hidden shadow-md transform scale-100 transition-transform hover:scale-105 cursor-pointer">
                        <Image
                          style={{ borderRadius: '20px' }}
                          src={
                            (fm.gif as string) ?? (fm.ogImage as string)
                          }
                          className="object-cover"
                          alt={
                            (fm?.title as string) ?? 'Changelog post image'
                          }
                          fill={true}
                          sizes="(min-width: 1024px) 1000px, 100vw"
                          priority={i < 3}
                          unoptimized={
                            fm.gif !== undefined ||
                            (fm.ogImage as string)?.endsWith('.gif')
                          }
                        />
                      </div>
                    ) : null}
                    <div className="md:hidden opacity-80 mb-4 text-sm group-hover:opacity-100">
                      {fm?.date
                        ? new Date(fm.date as string).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              timeZone: 'UTC',
                            }
                          )
                        : null}
                    </div>
                    <h2 className="block font-mono text-2xl opacity-90 group-hover:opacity-100">
                      {(fm?.title as string) || page.name}
                    </h2>
                    <div className="opacity-80 text-lg group-hover:opacity-100">
                      {fm?.description as string}
                    </div>
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="mt-4">
                  <div className="prose dark:prose-dark bg-secondary/45 p-4 rounded-lg max-w-screen-lg">
                    <p className="text-sm opacity-60">
                      View the full changelog entry for details.
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          )
        })}
      </div>
    </Accordion.Root>
  )
}
