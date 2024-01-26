import React from "react"

import { Project } from "./Project"
import { CodeIcon } from "@/components/icons"
import { projectsData } from "@/data/projects"
import { ChevronRight } from "lucide-react"

export function Projects() {
  return (
    <div
      id="featured"
      className="relative flex flex-col gap-8 lg:mt-14 lg:max-w-6xl"
    >
      <h2 className="absolute -top-10 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CodeIcon className="h-6 w-6 flex-none text-zinc-400" />
        <span className="ml-3">Featured Projects</span>
      </h2>

      {projectsData.map((project, index) => (
        <Project {...project} key={index} />
      ))}

      <a
        href="/projects"
        aria-hidden="true"
        className="group relative z-10 mt-4 flex cursor-pointer items-center text-sm font-medium text-sky-500"
      >
        See All Projects
        <ChevronRight className="h-4 w-4 transition-transform will-change-transform group-hover:translate-x-2" />
      </a>
    </div>
  )
}
