'use client'

import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

const menuItems: {
  heading: string
  items: { name: string; href: string }[]
}[] = [
  {
    heading: 'About',
    items: [
      {
        name: 'About',
        href: '/about',
      },
      { name: 'Contact Us', href: '/about#contact-us' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      {
        name: 'Changelog',
        href: '/changelog',
      },
      {
        name: 'Roadmap',
        href: '/blog/2025-07-03_2026_roadmap',
      },
      {
        name: 'Demo',
        href: 'http://demo.ecosystem.ai/',
      },
    ],
  },
  {
    heading: 'Documentation',
    items: [
      {
        name: 'Get Started',
        href: '/docs',
      },
      {
        name: 'Local Install',
        href: '/docs/local',
      },
    ],
  },
  {
    heading: 'Blog',
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Blog Authors', href: '/authors' },
    ],
  },
  {
    heading: 'Newsletter',
    items: [
      {
        name: 'Subscribe',
        href: '/subscribe',
      },
      {
        name: 'Unsubscribe',
        href: '/unsubscribe',
      },
    ],
  },
  {
    heading: 'Legal',
    items: [
      {
        name: 'Terms of services',
        href: '/tos',
      },
      {
        name: 'Privacy policy',
        href: '/privacy',
      },
      {
        name: 'Cookie policy',
        href: '/cookie',
      },
    ],
  },
]

const FooterMenu = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-y-8 gap-x-2">
        {menuItems.map((menu) => (
          <div key={menu.heading}>
            <p className="pb-2 text-sm font-semibold text-current">
              {menu.heading}
            </p>
            <ul className="flex flex-col gap-2">
              {menu.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex items-center justify-between md:col-span-6 pt-8 border-t border-neutral-800">
          <div className="text-sm text-gray-500 dark:text-neutral-500">
            © {new Date().getFullYear()} ecosystem.Ai
          </div>
          <div className="flex gap-1">
            <SocialIcon
              url="https://github.ecosystem.ai/"
              className="transition-opacity hover:opacity-70"
              style={{ height: 32, width: 32 }}
              bgColor="transparent"
              fgColor="#9B9B9B"
            />
            <SocialIcon
              url="https://discord.com/channels/1465898795949756458/1468558966513598526"
              className="transition-opacity hover:opacity-70"
              style={{ height: 32, width: 32 }}
              bgColor="transparent"
              fgColor="#9B9B9B"
            />
            <SocialIcon
              url="https://linkedin.ecosystem.ai/"
              className="transition-opacity hover:opacity-70"
              style={{ height: 32, width: 32 }}
              bgColor="transparent"
              fgColor="#9B9B9B"
            />
            <SocialIcon
              url="https://x.com/ecosystemAI"
              className="transition-opacity hover:opacity-70"
              style={{ height: 32, width: 32 }}
              bgColor="transparent"
              fgColor="#9B9B9B"
            />
            <SocialIcon
              url="https://www.youtube.com/@ecosystemai6786"
              className="transition-opacity hover:opacity-70"
              style={{ height: 32, width: 32 }}
              bgColor="transparent"
              fgColor="#9B9B9B"
            />
            <SocialIcon
              url="mailto:amy@ecosystem.ai"
              className="transition-opacity hover:opacity-70"
              style={{ height: 32, width: 32 }}
              bgColor="transparent"
              fgColor="#9B9B9B"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMenu
