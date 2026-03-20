import Image from 'next/image'
import { getAuthor } from '@/lib/authors'

export const Author = ({ authorid }: { authorid: string }) => {
  const author = getAuthor(authorid)

  if (!author) {
    return null
  }

  return (
    <div>
      <a href={`/authors/${authorid}`} className="group shrink-0" rel="noopener noreferrer">
        <div className="flex justify-end gap-2" key={author.name}>
          <div className="flex items-center gap-2">
            <Image
              src={author.ogImage}
              width={40}
              height={40}
              className="rounded-full"
              alt={`Picture ${author.name}`}
            />
            <span className="text-primary/60 group-hover:text-primary whitespace-nowrap">
              {author.name}
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}
