'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { links } from '@/utils/data'
import { cn } from '@/lib/utils'
import { useActiveSectionStore } from '@/store/active-section-store'
import { Logo } from '@/components/(Hero)/Logo'

export function Navbar() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionStore()

	return (
		<header className="w-full h-[4.5rem] fixed shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 flex items-center justify-between">
			<Logo className="m-auto" />

			{/* // */}
			<nav className="h-[2.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3rem] sm:w-[33rem] sm:rounded-full dark:bg-[#0300145e] dark:border-[#7042f861] dark:bg-opacity-75">
				<ul className="h-full flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-semibold text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
					{links.map((link) => (
						<li
							className="relative h-full flex items-center justify-center "
							key={link.hash}
						>
							<Link
								className={cn(
									'flex w-full items-center justify-center px-3 py-3 text-sm text-black hover:text-black transition dark:text-gray-300 dark:hover:text-gray-50 cursor-pointer animate-slowfade',
									activeSection === link.name &&
										'text-gray-950 dark:text-gray-200'
								)}
								href={link.hash}
								onClick={() => {
									setActiveSection(link.name)
									setTimeOfLastClick(Date.now())
								}}
							>
								{link.name}

								{link.name === activeSection && (
									<motion.span
										className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-[#7042f82b] dark:blur-md bg-p"
										layoutId="activeSection"
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								)}
							</Link>
							{link.name === activeSection && (
								<motion.span
									layoutId="activeSectionLine"
									transition={{
										type: 'spring',
										stiffness: 380,
										damping: 70,
									}}
									className="absolute -inset-x-4 -bottom-[1px] h-[2px] bg-gradient-to-r from-teal-500/0 via-purple-500/40 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-purple-400/0"
								></motion.span>
							)}
						</li>
					))}
				</ul>
			</nav>

			<Logo className="m-auto invisible" />
		</header>
	)
}
