'use client'

import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export const SectionMotion = (Component, idName) =>
	function AOS() {
		return (
			<motion.section
				id={idName}
				variants={staggerContainer('', 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="h-[900px]"
			>
				<Component />
			</motion.section>
		)
	}
