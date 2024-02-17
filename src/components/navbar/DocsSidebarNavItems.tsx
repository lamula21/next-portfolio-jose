import { cn } from "@/lib/utils"
import { Doc } from "contentlayer/generated"
import Link from "next/link"
import { useEffect, useRef } from "react"

interface DocsSidebarNavItemsProps {
  items: Doc[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <ul className="ml-4 mr-2 grid grid-flow-row auto-rows-max border-l pl-3 text-sm">
      {items.map((item) => {
        return (
          item.slugAsParams && (
            <li key={item._id} className="my-1.5 transition-colors">
              <Link
                href={item.slug}
                className={cn(
                  "relative flex w-full items-center rounded-md p-2 pl-3 transition-colors duration-300 dark:text-mdx-text/80 dark:hover:text-white",
                  pathname === item.slug && "dark:text-mdx-primary",
                )}
              >
                {item.title}

                <div
                  className={cn(
                    "absolute -left-[13px] bottom-0 top-0 w-[2px]",
                    pathname === item.slug && "bg-mdx-primary",
                  )}
                />
              </Link>
            </li>
          )
        )
      })}
    </ul>
  ) : null
}
