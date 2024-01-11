"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import profile from "../../../public/profile.png"

import { slideIn, textVariant } from "@/utils/motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DynamicToolTip } from "@/components/hero/DynamicTooltip"
import { ContactList } from "@/components/hero/ContactList"
import { VerifiedIcon } from "../icons"

export function Profile() {
	return (
		<div className="w-full flex flex-col items-center gap-8 lg:flex-row lg:justify-start ">
			{/* Avatar */}
			<motion.div
				variants={textVariant(2)}
				className="group relative rounded-full border border-blue-900 opacity-[0.9] transition-shadow duration-300 hover:shadow-lg
              hover:shadow-blue-600 cursor-pointer"
			>
				<Avatar className="w-28 h-28 m-1">
					<Image src={profile} className="scale-110" alt="JV profile picture" />
					<AvatarFallback>JV</AvatarFallback>
				</Avatar>

				<DynamicToolTip />

				<span className="absolute opacity-0 transition-400 group-hover:opacity-100 group-hover:transition-opacity top-0 left-0 w-full h-full rounded-full border-r-[2px] border-r-blue-600 animate-spin-slow"></span>
			</motion.div>

			<div className="w-full lg:min-w-[350px] h-full flex flex-col items-center gap-3 lg:items-start">
				<h2 className="font-extrabold text-3xl flex items-center">
					Jose Valdivia
					<VerifiedIcon className="inline-flex ml-2 text-[#B5924F]" />
				</h2>
				<div className="text-foreground/60 flex justify-center gap-x-2 items-center font-Interegular">
					<p>Est. 1999</p>
					<span className="w-[3px] h-[3px] bg-neutral-600 rounded-full"></span>
					<p>Maryland, US</p>
					<span className="w-[3px] h-[3px] bg-neutral-600 rounded-full"></span>
					<p>Full Stack Engineer</p>
				</div>

				<ContactList />
			</div>
		</div>
	)
}
