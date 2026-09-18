import { History } from 'lucide-react'

export function Changelog() {
  return (
    <span className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
      <History className="h-5 w-5 text-[#00aeef]" strokeWidth={1.75} />
      Changelog
    </span>
  )
}
