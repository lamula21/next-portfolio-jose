'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Project({ title, description, tags, imageUrl }) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			className="group mb-3 sm:mb-8 last:mb-0"
		>
			<section className="group/overlay relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 backdrop-blur-sm hover:transition-shadow duration-500 hover:duration-600 hover:shadow-lg hover:shadow-indigo-800">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
						{description}
					</p>
				</div>

				<Image
					src={imageUrl}
					alt="Project I worked on"
					quality={95}
					className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
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

				<div className="overlay absolute w-full h-full flex flex-col justify-center top-0 left-0 bg-overlay-gradient opacity-0 group-hover/overlay:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none">
					<div className="relative w-full h-full">
						<ul className="absolute flex flex-wrap w-[45%] left-10 bottom-7  group-even:left-[initial] group-even:right-10 group-even:justify-end gap-y-2 gap-x-2">
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
		</motion.div>
	)
}
