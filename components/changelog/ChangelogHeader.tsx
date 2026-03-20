import Image from 'next/image'
import { Author } from '../Author/Authors'
import { Video } from '../Video'

interface ChangelogHeaderProps {
  title?: string
  description?: string
  ogImage?: string
  ogVideo?: string
  gif?: string
  date?: string
  authorid?: string
}

export const ChangelogHeader = ({
  title,
  description,
  ogImage,
  ogVideo,
  gif,
  date,
  authorid = 'ecosystem',
}: ChangelogHeaderProps) => {
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
            <h1 className="text-2xl md:text-3xl text-pretty font-mono">{title}</h1>
          </div>
          <Author authorid={authorid} />
        </div>
      </div>
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
      {description && <p className="text-[17px]">{description}</p>}
    </div>
  )
}
