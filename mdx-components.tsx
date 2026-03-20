import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Cards, Steps, Tabs, FileTree, Button } from 'nextra/components'
import { Frame } from '@/components/Frame'
import { Callout } from '@/components/callouts/callout'
import Carousel from '@/components/carousel/Carousel'
import { OptionTable } from '@/components/table'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...docsComponents,
    Cards,
    Steps,
    Tabs,
    FileTree,
    Button,
    Frame,
    Callout,
    Carousel,
    OptionTable,
    ...components,
  }
}
