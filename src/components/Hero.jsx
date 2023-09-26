'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// import { slideIn } from '../../utils/motion'
import { SectionMotion } from './SectionMotion'
import { fadeIn, textVariant } from '@/utils/motion'
import profile from '../../public/profile.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Hero() {
	const ref = useRef(null)
	useEffect(() => {
		import('@lottiefiles/lottie-player')
	})

	return (
		<div
			id="Hero"
			className="1300:w-[1250px] h-full flex flex-row items-center justify-between z-[-10] mt-[80px] 500:mt-0"
		>
			<div
				className=" w-full 800:w-[90%] 1000:w-[70%] 1140:w-[50%] h-full flex flex-col items-center  1140:items-start  justify-center m-auto
       text-center 1140:text-start"
			>
				{/* padding: 40px;
	position: absolute;
	top: 0%;
	left: 0%;
	transform: translate(-50%, -50%), rotate(0);
	width: 100%;
	height: 100%;
	scale: ;
	border-radius: 50%;
	border-top: 0.2rem solid transparent;
	border-bottom: 0.2rem solid transparent;
	border-left: 0.2rem solid blue;
	border-right: 0.2rem solid blue; */}
				<motion.div
					variants={textVariant(2)}
					id="welcome-box"
					className="relative rounded-full border border-blue-900 opacity-[0.9]"
				>
					<Avatar className="w-28 h-28 m-1">
						{/* <AvatarImage src={profile} /> */}
						<Image src={profile} className="scale-110" />
						<AvatarFallback>JV</AvatarFallback>
					</Avatar>

					<span className="absolute top-0 left-0 w-full h-full rounded-full border-r-[2px] border-r-blue-600 animate-spin-slow"></span>
				</motion.div>

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
					portfolio. It's a hub of inspiration and learning. Access my work and
					discover valuable resources, courses, blogs, coding, and much more.
					All in one place!
				</p>

				<a
					href="#Section_4"
					id="button-primary"
					className="relative overflow-hidden border border-[#ffffff0d] hover-effect rounded-xl px-[20px] py-4 text-white cursor-pointer active:scale-90 transition-all duration-1000 select-none bg-gradient-circle backdrop-brightness-150 animate-slideleftT4"
				>
					Start learing Now!
					<lottie-player
						ref={ref}
						autoplay
						loop
						src="https://lottie.host/bfa0e5da-dd55-4c07-a0df-b81e4b443d72/oNUOpcnYvK.json"
						style={{
							width: '100px',
							height: '100px',
							position: 'absolute',
							top: '100%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					></lottie-player>
				</a>
			</div>
			<div className="w-[50%] h-full hidden 1140:flex flex-row items-center  select-none justify-between ">
				<Image
					src="/mainIconsdark.svg"
					width={708}
					height={709}
					alt="hero image"
					className="flex animate-slideright2  transition_"
				/>
			</div>
		</div>
	)
}

export default SectionMotion(Hero, 'Hero')
