'use client'

import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'
import { getAuthor } from '@/lib/authors'
import { Cards } from 'nextra/components'
import { Blog } from '@/components/CardIcons/Blog'
import { OurAuthors } from '@/components/CardIcons/OurAuthors'

interface AuthorProfileProps {
  authorId: string
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ authorId }) => {
  const author = getAuthor(authorId)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!author) {
    return <div>Author not found!</div>
  }

  const socialsEntries = Object.entries(author.socials ?? {}).filter(([, value]) => !!value)

  return (
    <>
      <section className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 mt-12 mb-24 md:mb-32">
        <div>
          <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-2">{author.name}</h1>
          <p
            className="md:text-lg mb-6 md:mb-10 font-medium"
            style={{ fontSize: '1.3rem', fontWeight: 'bold' }}
          >
            {author.subtitle}
          </p>
          {author.bio && <p className="md:text-lg text-base-content/80">{author.bio}</p>}
        </div>

        <div className="max-md:order-first flex md:flex-col gap-4 shrink-0">
          <Image
            width={512}
            height={512}
            src={author.ogImage}
            alt={author.name}
            className="rounded-box w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] rounded-square"
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />

          <div className="flex flex-wrap gap-4 max-w-[4rem] md:max-w-[16rem]">
            {isClient &&
              socialsEntries.map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  className="btn btn-square relative overflow-hidden"
                  title={`See ${author.name}'s ${key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ transition: 'transform 0.3s ease' }}
                >
                  <SocialIcon
                    url={value}
                    className="absolute inset-0 w-full h-full transform scale-100 transition-transform opacity-100 hover:scale-90"
                    bgColor="#9B9B9B80"
                    fgColor="background"
                  />
                </a>
              ))}
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mt-8">
        <div style={{ marginTop: '75px' }}></div>
        <div>
          <Cards num={3}>
            <Cards.Card title="" href="/blog" icon={<Blog />}>
              {null}
            </Cards.Card>
            <Cards.Card title="" href="/authors" icon={<OurAuthors />}>
              {null}
            </Cards.Card>
          </Cards>
        </div>
      </section>
    </>
  )
}

export default AuthorProfile
