import { cn } from "@/lib/utils"

export function Headline2({ children, className }) {
  return (
    <p className={cn("text-base text-zinc-600 dark:text-zinc-400", className)}>
      {children}
    </p>
  )
}
