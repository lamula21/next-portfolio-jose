import Link from "next/link"
import React from "react"
import { docsConfig } from "@/config/docs"
import { allDocs } from "contentlayer/generated"

import { CourseSearch } from "@/components/CourseSearch"
import { DocsMainNavLeft } from "@/components/navbar/DocsMainNavLeft"
import { DocsMainNavRight } from "@/components/navbar/DocsMainNavRight"
import { DocsSidebarNav } from "@/components/navbar/DocsSidebarNav"

interface CoursesLayoutProps {
  children: React.ReactNode
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-black">
        <div className="container flex h-16 w-full items-center gap-x-4 sm:justify-between sm:space-x-0">
          {/* left side */}
          <DocsMainNavLeft items={docsConfig.mainNav}>
            {/* TODO: add nav for small screens */}
            {/* <DocsSidebarNav items={docsConfig.sidebarNav} /> */}
          </DocsMainNavLeft>

          {/* middle side */}
          <CourseSearch />

          {/* right side */}
          <DocsMainNavRight />
        </div>
      </header>

      <div className="container flex-1">
        <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          {/* left side */}
          <DocsSidebarNav docs={allDocs} />

          {/* right side */}
          {children}
        </div>
      </div>
    </div>
  )
}
