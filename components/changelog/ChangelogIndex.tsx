import { getPageMap } from 'nextra/page-map'
import { ChangelogIndexClient } from './ChangelogIndexClient'

interface PageData {
  route: string
  name: string
  frontMatter: Record<string, unknown>
}

export async function ChangelogIndex({ maxItems }: { maxItems?: number }) {
  const pageMap = await getPageMap('/changelog')

  const pages: PageData[] = pageMap
    .filter((item): item is typeof item & { frontMatter: Record<string, unknown> } =>
      'frontMatter' in item && item.frontMatter != null
    )
    .filter((item) => {
      const route = 'route' in item ? (item as { route: string }).route : ''
      return !route.includes('content')
    })
    .map(item => ({
      route: 'route' in item ? (item as { route: string }).route : '',
      name: 'name' in item ? (item as { name: string }).name : '',
      frontMatter: (item as { frontMatter: Record<string, unknown> }).frontMatter,
    }))

  return <ChangelogIndexClient pages={pages} maxItems={maxItems} />
}
