"use client"

import { type TOC } from "@/lib/toc"
import { useIsMounted } from "@/hooks/use-mounted"
import { useMemo } from "react"
import { useObserverActiveItem } from "@/hooks/use-observer-active-item"
import { Tree } from "./Tree"

interface TocProps {
  toc: TOC
}

export function TableOfContent({ toc }: TocProps) {
  // Performance optimization: we only want to render the TOC
  // when the page is mounted or when toc changes.
  const itemIds = useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc],
  )
  const activeHeading = useObserverActiveItem(itemIds)
  const mounted = useIsMounted()

  if (!toc?.items) {
    return null
  }

  return mounted ? (
    <div className="space-y-2">
      <p className="pb-1 font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  ) : null
}
