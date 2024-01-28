"use client"

import { DocsSidebarNavItems } from "./DocsSidebarNavItems"
import { Doc } from "contentlayer/generated"
import { groupBy } from "lodash"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { Button } from "../ui/button"
import { CoursesCombobox } from "../CoursesCombobox"

interface DocsSidebarNavProps {
  docs: Doc[]
}

export function DocsSidebarNav({ docs }: DocsSidebarNavProps) {
  const pathname = usePathname()

  // generate all unique courses from Docs
  const allCourses = docs.map((doc) => doc.breadcrumbs[1])
  const uniqueCourses = [...new Set(allCourses)]

  // grouped by categories
  const categoryDocsKV = useMemo(
    () =>
      groupBy(
        docs.filter((doc) => doc.category !== "index").sort(),
        (doc) => doc.category,
      ),
    [],
  )

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
      <div className="w-full">
        <CoursesCombobox courses={uniqueCourses} />

        {Object.keys(categoryDocsKV)
          .sort()
          .map((category) => (
            <div key={category} className="pb-8">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-bold capitalize text-white">
                {category}
              </h4>

              {categoryDocsKV[category].length > 0 ? (
                <DocsSidebarNavItems
                  items={categoryDocsKV[category]}
                  pathname={pathname}
                />
              ) : null}
            </div>
          ))}
      </div>
    </aside>
  )
}
