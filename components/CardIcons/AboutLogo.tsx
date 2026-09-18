import Image from 'next/image'

export function Logo() {
  return (
    <span className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
      <Image src="/ecosystem.svg" alt="" width={20} height={20} className="h-5 w-5" />
      About ecosystem.Ai
    </span>
  )
}
