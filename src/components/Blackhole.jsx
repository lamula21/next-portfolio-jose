import React from 'react'

export function Blackhole() {
	return (
		<div className=" w-[1250px] h-full z-[-10] absolute top-[-273px] flex flex-row items-start justify-center ">
			<video
				className="w-full h-auto rotate-180"
				preload="false"
				playsInline
				loop
				muted
				// @ts-ignore
				autoPlay="autoplay"
				src="/q-c3d7becf.webm"
			></video>
		</div>
	)
}
