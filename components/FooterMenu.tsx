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
      <div className="grid grid-cols-2 md:grid-cols-6 text-base gap-y-8 gap-x-2">
        {menuItems.map((menu) => (
          <div key={menu.heading}>
            <p className="pb-2 font-mono font-bold text-primary">{menu.heading}</p>
            <ul className="flex flex-col gap-2">
              {menu.items.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-tight hover:text-primary/80">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex items-center justify-between md:col-span-6">
          <div className="font-sans text-sm">© {new Date().getFullYear()} ecosystem.Ai</div>
          <div className="flex ml-auto">
            <SocialIcon
              url="https://github.ecosystem.ai/"
              className="absolute inset-0 w-full h-full transform scale-100 transition-transform opacity-100 hover:scale-90"
              style={{ height: 40, width: 40 }}
              bgColor="background"
              fgColor="#9B9B9B80"
            />
            <SocialIcon
              url="https://discord.ecosystem.ai/"
              className="absolute inset-0 w-full h-full transform scale-100 transition-transform opacity-100 hover:scale-90"
              style={{ height: 40, width: 40 }}
              bgColor="background"
              fgColor="#9B9B9B80"
            />
            <SocialIcon
              url="https://linkedin.ecosystem.ai/"
              className="absolute inset-0 w-full h-full transform scale-100 transition-transform opacity-100 hover:scale-90"
              style={{ height: 40, width: 40 }}
              bgColor="background"
              fgColor="#9B9B9B80"
            />
            <SocialIcon
              url="https://x.com/ecosystemAI"
              className="absolute inset-0 w-full h-full transform scale-100 transition-transform opacity-100 hover:scale-90"
              style={{ height: 40, width: 40 }}
              bgColor="background"
              fgColor="#9B9B9B80"
            />
            <SocialIcon
              url="https://www.youtube.com/@ecosystemai6786"
              className="absolute inset-0 w-full h-full transform scale-100 transition-transform opacity-100 hover:scale-90"
              style={{ height: 40, width: 40 }}
              bgColor="background"
              fgColor="#9B9B9B80"
            />
            <SocialIcon
              url="mailto:amy@ecosystem.ai"
              className="absolute inset-0 w-full h-full transform scale-100 transition-transform opacity-100 hover:scale-90"
              style={{ height: 40, width: 40 }}
              bgColor="background"
              fgColor="#9B9B9B80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMenu
