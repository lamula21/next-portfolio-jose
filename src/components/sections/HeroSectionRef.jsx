"use client"

import { useSectionInView } from "@/hooks/useSectionInView"

export function HeroSectionRef({ children }) {
	const { ref } = useSectionInView("Home", 0.5)

	return (
		<div
			ref={ref}
			id="home"
			className="w-full h-full mx-auto max-w-5xl px-20 flex flex-col items-center lg:items-start justify-center text-center lg:text-start"
		>
			{children}
		</div>
	)
}
