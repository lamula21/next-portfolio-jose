'use client'
import { useEffect, useRef } from 'react'

export function GradientButton() {
	const lottieRef = useRef(null)

	useEffect(() => {
		import('@lottiefiles/lottie-player')
	}, [])

	return (
		<a
			href="#projects"
			id="button-primary"
			className="relative overflow-hidden border border-t-[#ffffff0d] rounded-xl px-[20px] py-4 text-white font-bold cursor-pointer transition-shadow duration-400 select-none bg-gradient-circle backdrop-brightness-150 
			backdrop-blur-sm animate-slideleftT4 hover-effect"
		>
			Start learing Now!
			<lottie-player
				ref={lottieRef}
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
	)
}
