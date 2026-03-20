import { getPageMap } from 'nextra/page-map'
import { BlogIndexClient } from './BlogIndexClient'

interface PageData {
  route: string
  name: string
  frontMatter: Record<string, unknown>
}

export async function BlogIndex({ maxItems }: { maxItems?: number }) {
  const pageMap = await getPageMap('/blog')

  const pages: PageData[] = pageMap
    .filter((item): item is typeof item & { frontMatter: Record<string, unknown> } =>
      'frontMatter' in item && item.frontMatter != null
    )
    .map(item => ({
      route: 'route' in item ? (item as { route: string }).route : '',
      name: 'name' in item ? (item as { name: string }).name : '',
      frontMatter: (item as { frontMatter: Record<string, unknown> }).frontMatter,
    }))

  return <BlogIndexClient pages={pages} maxItems={maxItems} />
}
