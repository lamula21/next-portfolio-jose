import { motion } from 'framer-motion'

import { GithubIcon } from '@/components/icons'
import { AtIcon, DiscordIcon, LinkedInIcon, XIcon } from '@/components/icons'
import { fadeInIcons } from '@/utils/motion'

export function ContactList() {
	return (
		<div className="relative h-auto flex items-end gap-3">
			<motion.div
				variants={fadeInIcons('left', 'spring', 2.5, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<a href="https://github.com/lamula21" target="_blank">
					<GithubIcon className="fill-white" />
				</a>
			</motion.div>

			<motion.div
				variants={fadeInIcons('left', 'spring', 2.6, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<a href="https://www.linkedin.com/in/joseavr/" target="_blank">
					<LinkedInIcon />
				</a>
			</motion.div>

			<motion.div
				variants={fadeInIcons('left', 'spring', 2.7, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<a href="https://twitter.com/josevaldi6" target="_blank">
					<XIcon />
				</a>
			</motion.div>

			<motion.div
				variants={fadeInIcons('left', 'spring', 2.8, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<DiscordIcon />
			</motion.div>

			<motion.div
				variants={fadeInIcons('left', 'spring', 2.9, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<AtIcon />
			</motion.div>
		</div>
	)
}
