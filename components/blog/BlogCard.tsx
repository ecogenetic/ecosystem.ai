'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Video } from '../Video'
import { Author } from '../Author/Authors'

interface PageData {
  route: string
  name: string
  frontMatter: Record<string, unknown>
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
  const [cardWidth, setCardWidth] = useState(0)
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(160)

  const handleCardClick = () => {
    router.push(page.route)
  }

  useEffect(() => {
    setMaxDescriptionLength(cardWidth > 260 ? 145 : 46)
  }, [cardWidth])

  useEffect(() => {
    const updateCardWidth = () => {
      const el = document.querySelector('.blog-card')
      if (el) setCardWidth(el.clientWidth)
    }
    window.addEventListener('resize', updateCardWidth)
    updateCardWidth()
    return () => {
      window.removeEventListener('resize', updateCardWidth)
    }
  }, [])

  const truncateDescription = (text: string) => {
    if (text.length > maxDescriptionLength) {
      return text.slice(0, maxDescriptionLength) + '...'
    }
    return text
  }

  const fm = page.frontMatter

  return (
    <div className="bg-popover rounded-lg shadow-md overflow-hidden blog-card">
      <div
        className="relative h-52 md:h-64 mb-1 overflow-hidden transform scale-100 transition-transform hover:scale-105 cursor-pointer"
        onClick={handleCardClick}
        style={{ transformOrigin: 'bottom center' }}
      >
        {fm?.ogVideo ? (
          <Video
            src={fm.ogVideo as string}
            gifStyle
            className="object-cover w-full h-full mt-0"
          />
        ) : fm?.ogImage ? (
          <Image
            src={(fm.gif as string) ?? (fm.ogImage as string)}
            width={1200}
            height={675}
            className="object-cover absolute top-0 left-0 w-full h-full"
            alt={(fm?.title as string) ?? 'Blog post image'}
            unoptimized={
              fm.gif !== undefined || (fm.ogImage as string)?.endsWith('.gif')
            }
          />
        ) : null}
      </div>
      <div className="p-4 pt-2 h-56 overflow-hidden relative">
        <div className="items-center justify-between mb-2">
          {(fm?.tags as string[])?.map((tag) => (
            <span
              key={tag}
              className={`cursor-pointer text-xs py-1 px-2 bg-background/80 shadow-md rounded-md ml-1 mr-1 ${
                selectedTags.includes(tag) ? 'bg-gray-700/20' : ''
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-2 ml-1 mr-1 cursor-pointer" onClick={handleCardClick}>
          <h2 className="font-mono text-xl mb-2 font-bold">
            {(fm?.title as string) || page.name}
          </h2>
          <div>{truncateDescription((fm?.description as string) || '')}</div>
        </div>
        <div className="flex items-center justify-between absolute bottom-4 left-4 right-4">
          <Author authorid={fm?.authorid as string} />
          <span className="text-sm opacity-60">{fm?.date as string}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
