import type { MetadataRoute } from 'next'
import { generateStaticParamsFor } from 'nextra/pages'

const siteUrl = 'https://developer.ecosystem.ai'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticParams = await generateStaticParamsFor('mdxPath')()
  const fromMdx = staticParams
    .map((entry: { mdxPath?: string[] }) => {
      const segments = entry.mdxPath ?? []
      if (segments.length === 0) {
        return { url: `${siteUrl}/`, changeFrequency: 'daily' as const, priority: 1 }
      }
      const path = segments.join('/')
      return {
        url: `${siteUrl}/${path}`,
        changeFrequency: 'weekly' as const,
        priority: path.startsWith('docs/') ? 0.7 : 0.5,
      }
    })
    .filter((item) => !item.url.includes('_meta'))

  const extras: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'daily', priority: 1 },
    { url: `${siteUrl}/docs`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/changelog`, changeFrequency: 'weekly', priority: 0.6 },
  ]

  const seen = new Set<string>()
  return [...extras, ...fromMdx].filter((item) => {
    if (seen.has(item.url)) return false
    seen.add(item.url)
    return true
  })
}
