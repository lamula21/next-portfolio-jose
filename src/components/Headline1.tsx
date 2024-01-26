import { cn } from "@/lib/utils"

interface Headline1Props {
  children: React.ReactNode
  className?: string
}

export function Headline1({ children, className }: Headline1Props) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-[3rem] sm:font-medium sm:leading-[4rem]",
        className,
      )}
    >
      {children}
    </h1>
  )
}
