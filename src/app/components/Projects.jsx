import React from "react"

import { Project } from "./Project"
import { CodeIcon } from "@/components/icons"
import { projectsData } from "@/data/projects"

export function Projects() {
	return (
		<div
			id="featured"
			className="relative flex flex-col lg:max-w-6xl gap-8 lg:mt-14"
		>
			<h2 className="absolute -top-10 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<CodeIcon className="w-6 h-6 flex-none text-zinc-400" />
				<span className="ml-3">Featured Projects</span>
			</h2>

			{projectsData.map((project, index) => (
				<Project {...project} key={index} />
			))}
		</div>
	)
}
