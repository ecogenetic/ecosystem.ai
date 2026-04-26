'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { CrispWidget } from '@/components/supportChat'
import { hsPageView } from '@/components/analytics/hubspot'

export function AnalyticsProviders() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com',
        loaded: (ph) => {
          if (process.env.NODE_ENV === 'development') ph.debug()
        },
      })
    }
  }, [])

  useEffect(() => {
    posthog.capture('$pageview')
    hsPageView(pathname)
  }, [pathname])

  return (
    <PostHogProvider client={posthog}>
      {process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID ? <CrispWidget /> : null}
      <Script src="https://js-eu1.hs-scripts.com/143255669.js" strategy="afterInteractive" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-56R16ZWNK6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-56R16ZWNK6');
        `}
      </Script>
    </PostHogProvider>
  )
}
