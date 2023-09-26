'use client'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'

function Provider({ children }) {
	return (
		<motion.section
			// @ts-ignore
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			{children}
		</motion.section>
	)
}

export default Provider
