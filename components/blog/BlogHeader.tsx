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
    <div className="md:mt-10 flex flex-col gap-10">
      <div>
        {date && (
          <div className="text-lg text-primary/60 mb-3">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </div>
        )}
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between md:items-center">
          <div>
            <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-2">{title}</h1>
          </div>
        </div>
        <p
          className="md:text-lg md:mb-5 font-medium"
          style={{ fontSize: '1.3rem', fontWeight: 'bold' }}
        >
          {description}
        </p>
        <div style={{ textAlign: 'right' }}>
          <Author authorid={authorid} />
        </div>
        <br />
        {ogVideo ? (
          <Video src={ogVideo} gifStyle />
        ) : ogImage ? (
          <Image
            src={gif ?? ogImage}
            alt={title ?? ''}
            width={1200}
            height={630}
            className="border"
            style={{ borderRadius: 20 }}
            unoptimized={gif !== undefined || ogImage?.endsWith('.gif')}
          />
        ) : null}
        <div className="mt-6 md:mt-4"></div>
      </div>
    </div>
  )
}
