import { cn } from "@/lib/utils"

interface Headline2Props {
  children: React.ReactNode
  className?: string
}

export function Headline2({ children, className }: Headline2Props) {
  return (
    <p className={cn("text-base text-zinc-600 dark:text-zinc-400", className)}>
      {children}
    </p>
  )
}
