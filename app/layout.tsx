import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../style.css'
import '../src/overrides.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Logo } from '@/components/logo'
import FooterMenu from '@/components/FooterMenu'
import { AnalyticsProviders } from '@/components/analytics/AnalyticsProviders'

export const metadata = {
  metadataBase: new URL('https://ecosystem.ai'),
  title: {
    template: '%s - ecosystem.Ai',
    default: 'ecosystem.Ai',
  },
  description: 'Prediction platform - Life happens in the moment and not in batches.',
  applicationName: 'ecosystem.Ai',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    site: 'https://ecosystem.ai',
  },
  openGraph: {
    siteName: 'ecosystem.Ai',
    url: 'https://ecosystem.ai',
  },
  other: {
    'msapplication-TileColor': '#da532c',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <Head>
        <meta name="theme-color" content="#111111" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --font-geist-sans: ${GeistSans.style.fontFamily}; --font-geist-mono: ${GeistMono.style.fontFamily}; --x-font-sans: ${GeistSans.style.fontFamily}; --x-font-mono: ${GeistMono.style.fontFamily}; }`,
          }}
        />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<Logo />}
              projectLink="https://github.com/ecogenetic/ecosystem.ai"
              chatLink="https://discord.gg/8dNyCq4e"
            />
          }
          footer={<Footer><FooterMenu /></Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/ecogenetic/ecosystem.ai/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
        <AnalyticsProviders />
      </body>
    </html>
  )
}
