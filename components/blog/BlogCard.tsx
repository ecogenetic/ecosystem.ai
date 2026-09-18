'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Video } from '../Video'
import { Author } from '../Author/Authors'

interface PageData {
  route: string
  name: string
  frontMatter: Record<string, unknown>
}

function formatBlogDate(value: unknown) {
  if (!value) return null
  return new Date(`${String(value).replace(/\//g, '-')}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const BlogCard = ({
  page,
  handleTagClick,
  selectedTags = [],
}: {
  page: PageData
  handleTagClick: (tag: string) => void
  selectedTags?: string[]
}) => {
  const router = useRouter()
  const fm = page.frontMatter
  const title = (fm?.title as string) || page.name
  const description = (fm?.description as string) || ''
  const tags = (fm?.tags as string[]) ?? []
  const imageSrc = (fm.gif as string) ?? (fm.ogImage as string) ?? ''

  return (
    <article className="blog-card flex h-full flex-col overflow-hidden rounded-lg border border-black/5 bg-popover shadow-md dark:border-white/10">
      <button
        type="button"
        className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black/5"
        onClick={() => router.push(page.route)}
        aria-label={title}
      >
        {fm?.ogVideo ? (
          <Video src={fm.ogVideo as string} gifStyle className="h-full w-full object-cover" />
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            width={1200}
            height={675}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            alt={title}
            unoptimized={fm.gif !== undefined || imageSrc.endsWith('.gif')}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm opacity-50">No image</div>
        )}
      </button>
      <div className="flex flex-1 flex-col gap-3 p-4">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`rounded-md px-2 py-0.5 text-xs shadow-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-gray-700/20 dark:bg-white/15'
                    : 'bg-background/80'
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          className="text-left"
          onClick={() => router.push(page.route)}
        >
          <h2 className="!mt-0 !mb-1 font-mono text-lg font-bold leading-snug">{title}</h2>
          {description ? (
            <p className="!mt-0 line-clamp-3 text-sm leading-relaxed opacity-80">{description}</p>
          ) : null}
        </button>
        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <Author authorid={fm?.authorid as string} />
          <span className="shrink-0 text-sm opacity-60">{formatBlogDate(fm?.date)}</span>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
