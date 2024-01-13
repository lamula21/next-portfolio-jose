"use client"

import { useSectionInView } from "@/hooks/useSectionInView"

export function ProjectSectionRef({ children }) {
	// 0.5 = observer located from bottom + 50% of screen
	// 0.25 = observer located from bottom + 25% of screen
	const { ref } = useSectionInView("Projects", 0.5)

	return (
		<section
			ref={ref}
			id="projects"
			className="relative w-full shadow-lg shadow-[#030014]/50 flex flex-col overflow-hidden items-center justify-start px-[15px] scroll-mt-28 my-20"
		>
			{children}
		</section>
	)
}
