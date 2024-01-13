import { motion } from "framer-motion"
import { useState } from "react"

import {
	GithubIcon,
	MailIcon,
	AtIcon,
	DiscordIcon,
	LinkedInIcon,
	XIcon,
	MailCheckIcon,
} from "@/components/icons"
import { CheckIcon } from "lucide-react"
import { fadeInIcons } from "@/utils/motion"
import { cn } from "@/lib/utils"

export function ContactList() {
	const [onCopy, setOnCopy] = useState(false)
	const [onDone, setOnDone] = useState(false)

	const copyClipboard = async () => {
		try {
			await navigator.clipboard.writeText("jvaldiv8@terpmail.umd.edu")
			setOnCopy(true)
		} catch (error) {
			// toast here
			console.log("error copying to clipboard", error)
		}
	}

	return (
		<div className="relative h-auto flex items-end gap-3">
			<motion.div
				variants={fadeInIcons("left", "spring", 2.5, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<a href="https://github.com/lamula21" target="_blank">
					<GithubIcon className="fill-white" />
				</a>
			</motion.div>

			<motion.div
				variants={fadeInIcons("left", "spring", 2.6, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<a href="https://www.linkedin.com/in/joseavr/" target="_blank">
					<LinkedInIcon />
				</a>
			</motion.div>

			<motion.div
				variants={fadeInIcons("left", "spring", 2.7, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<a href="https://twitter.com/josevaldi6" target="_blank">
					<XIcon />
				</a>
			</motion.div>

			<motion.div
				variants={fadeInIcons("left", "spring", 2.8, 0)}
				className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
			>
				<DiscordIcon />
			</motion.div>

			<motion.button
				variants={fadeInIcons("left", "spring", 2.9, 0)}
				className="relative p-2 backdrop-blur-sm bg-white/10 rounded-full hover:shadow-xl hover:shadow-blue-600 transition-all duration-300 cursor-pointer"
				onClick={copyClipboard}
				disabled={onCopy || onDone}
			>
				<CheckIcon
					className={cn(
						"transition-all text-green-500",
						onDone ? "scale-100" : "scale-0"
					)}
					onTransitionEnd={() => {
						setTimeout(() => {
							setOnCopy(false)
							setOnDone(false)
						}, 2000)
					}}
					strokeWidth={3}
				/>

				<div className="h-full w-full absolute top-0 left-0 flex items-center justify-center">
					<MailIcon
						className={cn("transition-all", onCopy ? "scale-0" : "scale-100")}
						onTransitionEnd={() => {
							if (onCopy) {
								setOnDone(true)
							}
						}}
					/>
				</div>
			</motion.button>
		</div>
	)
}
