'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import profile from '../../../public/profile.png'

import { SectionMotion } from '@/components/SectionMotion'
import { slideIn, textVariant } from '@/utils/motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DynamicToolTip } from '@/components/(Hero)/DynamicTooltip'
import { ContactIcons } from '@/components/(Hero)/ContactIcons'
import { ReactCanvas } from './ReactCanvas'
import { useSectionInView } from '@/lib/hooks'
import { GradientButton } from '@/components/GradientButton'

function Hero() {
	const lottieRef = useRef(null)
	const { ref } = useSectionInView('Home', 0.5)

	return (
		<div
			ref={ref}
			id="home"
			className="1300:w-[1250px] h-full flex flex-row gap-5 items-center justify-between z-[-10] mt-[80px] 500:mt-0"
		>
			<div
				id="Left"
				className="m-auto flex flex-col w-full h-full items-center justify-center
				text-center 800:w-[90%] 1000:w-[70%] 1140:w-[50%] 1140:items-start 1140:text-start"
			>
				<div className="flex flex-col items-center w-full gap-8 1140:flex-row 1140:justify-start">
					{/* Avatar */}
					<motion.div
						variants={textVariant(2)}
						className="group relative rounded-full border border-blue-900 opacity-[0.9] transition-shadow duration-300 hover:shadow-lg 
						hover:shadow-blue-600 cursor-pointer"
					>
						<Avatar className="w-28 h-28 m-1">
							<Image
								src={profile}
								className="scale-110"
								alt="JV profile picture"
							/>
							<AvatarFallback>JV</AvatarFallback>
						</Avatar>

						<DynamicToolTip />

						<span className="absolute top-0 left-0 w-full h-full rounded-full hover:border-r-[2px] transition-all hover:border-r-blue-600 hover:animate-spin-slow"></span>
					</motion.div>

					{/* Contact Icons */}
					<div className="flex flex-col items-center w-full h-full 1140:items-start">
						<ContactIcons />
					</div>
				</div>

				<div className="text-[40px] 400:text-md 800:text-7xl font-black w-auto h-auto  animate-slideleftT2 mt-[24px] text-white  ">
					<span className=" align-top">
						Providing{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-800">
							the best
						</span>{' '}
					</span>
					<span className="translate-y-[-20px] animate-slideleftT2 align-top">
						Project experience
					</span>
				</div>

				<p className="mt-2 animate-slideleftT3 text-[16px] 400:text-xl text-[#CDCDCD] font-light -tracking-normal mb-[20px]">
					This is <span className="text-blue-500 font-bold">NOT</span> a typical
					portfolio. It&apos;s a hub of inspiration and learning. Access my work
					and discover valuable resources, courses, blogs, coding, and much
					more. All in one place!
				</p>

				<GradientButton />
			</div>

			{/* animate-slidelefttranfromslow */}
			<motion.div
				variants={slideIn('up', 'spring', 3, 3)}
				className="relative w-[50%] h-full hidden 1140:flex flex-row items-center cursor-pointer justify-between "
			>
				<ReactCanvas />
			</motion.div>
		</div>
	)
}

export default SectionMotion(Hero, 'Hero')
