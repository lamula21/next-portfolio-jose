"use client"

import { DocsSidebarNavItems } from "./DocsSidebarNavItems"
import { Doc } from "contentlayer/generated"
import { groupBy } from "lodash"
import { useParams, usePathname } from "next/navigation"
import { useMemo } from "react"
import { CoursesCombobox } from "../CoursesCombobox"
import { ScrollArea } from "../ui/scroll-area"

interface DocsSidebarNavProps {
  docs: Doc[]
}

export function DocsSidebarNav({ docs }: DocsSidebarNavProps) {
  const pathname = usePathname()
  const currentCourseFromParams = useParams().slug[0]

  // generate all unique courses from Docs
  const allCourses = docs.map((doc) => doc.breadcrumbs[1])
  const uniqueCourses = [...new Set(allCourses)]

  // grouped by categories
  const categoryDocsKV = useMemo(
    () =>
      groupBy(
        docs.filter(
          (doc) =>
            doc.category !== "index" &&
            currentCourseFromParams === doc.breadcrumbs[1],
        ),
        (doc) => doc.category,
      ),
    [currentCourseFromParams],
  )

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r py-6 pl-1 pr-1 md:sticky md:block lg:py-10">
      <ScrollArea className="relative h-full w-full overflow-hidden pr-4">
        <div className="w-full">
          <CoursesCombobox courses={uniqueCourses} />
          {Object.keys(categoryDocsKV)
            .sort()
            .map((category) => (
              <div key={category} className="pb-8">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-bold capitalize text-white">
                  {category}
                </h4>
                {categoryDocsKV[category].length > 0 && (
                  <DocsSidebarNavItems
                    items={categoryDocsKV[category]}
                    pathname={pathname}
                  />
                )}
              </div>
            ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
