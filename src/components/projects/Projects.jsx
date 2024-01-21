import React from "react"

import { Project } from "./Project"
import { ProjectSectionRef } from "@/components/sections/ProjectSectionRef"
import { projectsData } from "@/data/projects"

export function Projects() {
	return (
		<ProjectSectionRef>
			{/* <h1 className="relative scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-800">
				Projects
			</h1> */}

			<h1
				id="cursive"
				className="relative scroll-m-20 text-4xl font-extrabold tracking-tight mt-2 lg:text-5xl text-gradient-white pb-3"
			>
				Featured Projects
				{/* line effect */}
				{/* <span className="absolute -inset-x-4 -bottom-[1px] h-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-purple-400/0 dark:via-fuchsia-400/60 dark:to-purple-400/0"></span> */}
			</h1>

			<div className="flex flex-col max-w-5xl mx-auto px-20 mt-20 gap-24">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</ProjectSectionRef>
	)
}
