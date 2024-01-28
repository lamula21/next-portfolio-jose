"use client"

import { useSectionInView } from "@/hooks/useSectionInView"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  sectionId?: string
  className?: string
  footer?: boolean
  navigation?: React.ReactNode
  id?: string
}

export function Section({
  children,
  sectionId,
  className,
  footer = false,
  navigation,
  id,
}: SectionProps) {
  const { ref } = useSectionInView(sectionId, 0.5)

  if (ref.current) {
    return (
      <section id={id} className={className} ref={ref}>
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div
            className={cn(
              "relative px-4 sm:px-8 lg:px-12",
              footer
                ? "border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"
                : "",
            )}
          >
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
          </div>
        </div>

        {navigation}
      </section>
    )
  } else {
    return (
      <section id={id} className={className}>
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div
            className={cn(
              "relative px-4 sm:px-8 lg:px-12",
              footer
                ? "border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"
                : "",
            )}
          >
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
          </div>
        </div>

        {navigation}
      </section>
    )
  }
}
