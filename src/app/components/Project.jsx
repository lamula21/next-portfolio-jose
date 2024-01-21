"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { DEVICONS } from "@/data/projects"
import { Github, Link } from "@/components/icons"

export function Project({
	title,
	description,
	tags,
	imageUrl,
	type,
	spinClass,
}) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0.37 1", "1.33 1"],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [1, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 0.3], [0, 1])
	// when x is 0, translate should be 50. When x is 100, opacity should be 0.
	const translateYProgress = useTransform(scrollYProgress, [0, 0.75], [70, 0])

	const opacityTextProgess = useTransform(scrollYProgress, [0.48, 1], [0, 1])

	return (
		<motion.article
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
				translateY: translateYProgress,
				backdropFilter: "blur(4px)",
			}}
			className="group relative overflow-hidden p-[1px] rounded-2xl flex-initial"
		>
			{/* Project Card */}
			<div
				className={cn(
					"group/overlay relative flex p-8  border border-white/10 rounded-2xl overflow-hidden transition h-auto lg:h-[20rem]"
				)}
			>
				<div className="w-full z-10 flex flex-col lg:justify-start h-full sm:group-even:order-2">
					<div className="flex items-center gap-3">
						<span className="ml-1.5 flex justify-center h-2 w-2 items-center ">
							<span
								className={cn(
									"absolute flex w-2 h-2 rounded-full opacity-75 animate-ping bg-green-400",
									spinClass
								)}
							/>
							<span
								className={cn(
									"relative inline-flex w-1 h-1 rounded-full",
									spinClass
								)}
							/>
						</span>

						<span className="font-semibold text-zinc-400 text-base uppercase">
							{type}
						</span>
					</div>

					<h1 className="text-2xl font-semibold tracking-tight  dark:text-zinc-100 mt-4">
						{title}
					</h1>

					<motion.p
						style={{
							opacity: opacityTextProgess,
						}}
						className="mt-2 leading-relaxed dark:text-white/70 relative z-10 text-base text-zinc-600 dark:text-zinc-400"
					>
						{description}
					</motion.p>

					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => {
							const Icon = DEVICONS[tag.icon]

							return (
								<li key={index}>
									<span
										className={cn(
											"flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2",
											tag.class
										)}
									>
										<Icon className="w-4 h-4" />
										{tag.name}
									</span>
								</li>
							)
						})}
					</ul>
				</div>

				<div className="hidden w-[450px] sm:flex sm:flex-row gap-4 flex-col h-full group-odd:justify-end z-20">
					<span className="relative group-odd:order-2 w-6 h-6 group/icon z-40">
						<Link className="w-6 h-6 text-white group-hover/icon:text-zinc-400" />
					</span>

					<span>
						<Github className="w-6 h-6 text-white" />
					</span>
				</div>

				<Image
					src={imageUrl}
					alt="Project I worked on"
					quality={95}
					className="absolute hidden z-10 sm:block top-8 lg:top-20 -right-60 w-[24.25rem] lg:w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-[14rem]"
				/>

				{/* Overlay */}
				<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
			</div>
		</motion.article>
	)
}
