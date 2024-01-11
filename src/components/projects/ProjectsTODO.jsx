'use client'
import React, { useRef } from 'react'
import SqlCrud from '../../../public/next-sql-crud.png'
import { motion, useScroll, useTransform } from 'framer-motion'

import { projectsData } from '@/data/config'
import { useSectionInView } from '@/hooks/useSectionInView'
import { Project } from './ProjectTODO'

export function Projects() {
	// const firstref = useRef(null)
	const lastref = useRef(null)

	// const { scrollYProgress } = useScroll({
	// 	target: firstref,
	// 	offset: ['0.37 1', '1.33 1'],
	// })
	// const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])

	const { scrollYProgress } = useScroll({
		target: lastref,
		offset: ['0.37 1', '1.33 1'],
	})
	const translateXProgress = useTransform(scrollYProgress, [0, 1], [-650, 1200])
	const translateYProgress = useTransform(
		scrollYProgress,
		[0, 0.8, 1],
		[-650, 100, 900]
	)

	// 0.5 = observer located from bottom + 50% of screen
	// 0.25 = observer located from bottom + 25% of screen
	const { ref } = useSectionInView('Projects', 0.5)

	return (
		<section
			ref={ref}
			id="projects"
			className="relative w-full shadow-lg shadow-[#030014]/50 flex flex-col overflow-hidden items-center justify-start px-[15px] scroll-mt-28 my-20"
		>
			<h2 className="relative scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-800">
				Projects
				{/* line effect */}
				<span className="absolute -inset-x-4 -bottom-[1px] h-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-purple-400/0 dark:via-fuchsia-400/60 dark:to-purple-400/0"></span>
			</h2>

			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mt-2 lg:text-5xl">
				Featured Projects
			</h1>

			<div className="mt-20 flex flex-col gap-14">
				<Project
					title="SQL Crud"
					description="HELOooooooooooooooooooo adsd a dad ds aasdds"
					tags={['xd']}
					imageUrl={SqlCrud}
					className="dark:bg-[rgba(0,0,0,0.99)] p-[1px]"
				>
					<motion.div
						ref={lastref}
						style={{
							translateX: translateXProgress,
							translateY: translateYProgress,
						}}
						className="absolute gradient-glow top-0 left-0 -z-10 blur-3xl"
					></motion.div>
				</Project>

				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
