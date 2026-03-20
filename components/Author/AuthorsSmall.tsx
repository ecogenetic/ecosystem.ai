import Image from 'next/image'
import { getAuthor } from '@/lib/authors'

export const AuthorSmall = ({ authorid }: { authorid: string }) => {
  const author = getAuthor(authorid)

  if (!author) {
    return null
  }

  return (
    <div className="group shrink-0" key={author.name}>
      <div className="flex items-center gap-4">
        <Image
          src={author.ogImage}
          width={20}
          height={20}
          className="rounded-full"
          alt={`Picture ${author.name}`}
        />
        <span className="text-primary/60 whitespace-nowrap">{author.name}</span>
      </div>
    </div>
  )
}
