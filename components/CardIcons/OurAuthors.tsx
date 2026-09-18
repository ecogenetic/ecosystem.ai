import { Users } from 'lucide-react'

export function OurAuthors() {
  return (
    <span className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
      <Users className="h-5 w-5 text-[#00aeef]" strokeWidth={1.75} />
      Our Authors
    </span>
  )
}
