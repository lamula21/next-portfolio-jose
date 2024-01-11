'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Project({
	title,
	description,
	tags,
	imageUrl,
	children,
	className,
}) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0.37 1', '1.33 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [1, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 0.3], [0, 1])
	// when x is 0, translate should be 50. When x is 100, opacity should be 0.
	const translateYProgress = useTransform(scrollYProgress, [0, 0.75], [70, 0])

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
				translateY: translateYProgress,
				backdropFilter: 'blur(4px)',
			}}
			className="group relative overflow-hidden p-[1px] rounded-lg"
		>
			{/* Project Card */}
			<section
				className={cn(
					'group/overlay relative flex gap-20 p-12 bg-gray-100 border border-white/10 rounded-lg overflow-hidden transition backdrop-blur-sm max-w-[42rem] lg:max-w-[60rem] sm:h-[20rem] lg:h-[30rem] dark:text-white dark:bg-white/10 hover:bg-gray-200 hover:transition-shadow duration-500 hover:duration-600 hover:shadow-lg hover:shadow-indigo-800',
					className
				)}
			>
				<div className="sm:max-w-[50%] flex flex-col lg:justify-center h-full sm:group-even:order-2 sm:group-even:max-w-[45%]">
					<h3 className="text-2xl lg:text-5xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 lg:text-lg dark:text-white/70">
						{description}
					</p>
					<ul className="flex sm:hidden flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<div className="hidden w-full sm:max-w-[50%] sm:flex flex-col h-full"></div>

				<Image
					src={imageUrl}
					alt="Project I worked on"
					quality={95}
					className="absolute hidden sm:block top-8 lg:top-16 -right-40 w-[28.25rem] lg:w-[38.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
				/>

				<div className="overlay absolute w-full h-full hidden sm:flex flex-col justify-center top-0 left-0 bg-overlay-gradient opacity-0 group-hover/overlay:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none">
					<div className="relative w-full h-full">
						<ul className="absolute flex flex-wrap w-[45%] lg:w-[40%] left-10 bottom-7 lg:bottom-12 gap-y-2 gap-x-2 group-even:left-[initial] group-even:right-10 group-even:justify-end">
							{tags.map((tag, index) => (
								<li
									className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
									key={index}
								>
									{tag}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{children}
		</motion.div>
	)
}
