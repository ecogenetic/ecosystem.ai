import Image from 'next/image'
import { Author } from '../Author/Authors'
import { Video } from '../Video'

interface BlogHeaderProps {
  title?: string
  description?: string
  ogImage?: string
  ogVideo?: string
  gif?: string
  date?: string
  authorid?: string
}

export const BlogHeader = ({
  title,
  description,
  ogImage,
  ogVideo,
  gif,
  date,
  authorid,
}: BlogHeaderProps) => {
  return (
    <header className="mb-10 mt-4 flex flex-col gap-6 md:mt-8">
      {date && (
        <p className="mb-0 text-sm text-primary/60 md:text-base">
          {new Date(`${date.replace(/\//g, '-')}T12:00:00Z`).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          })}
        </p>
      )}
      <div className="flex flex-col gap-4">
        <h1 className="!mt-0 !mb-0 font-extrabold tracking-tight text-3xl lg:text-5xl">{title}</h1>
        {description ? (
          <p className="!mt-0 !mb-0 text-lg font-medium leading-relaxed text-primary/80">
            {description}
          </p>
        ) : null}
        {authorid ? (
          <div className="flex justify-end">
            <Author authorid={authorid} />
          </div>
        ) : null}
      </div>
      {ogVideo ? (
        <Video src={ogVideo} gifStyle />
      ) : ogImage ? (
        <Image
          src={gif ?? ogImage}
          alt={title ?? ''}
          width={1200}
          height={630}
          className="h-auto w-full rounded-2xl border"
          unoptimized={gif !== undefined || ogImage?.endsWith('.gif')}
        />
      ) : null}
    </header>
  )
}
