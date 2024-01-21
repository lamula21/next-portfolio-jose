"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useReel } from "../store/useReel"

export function Story({ slides, timer = 4000, thumbnail, topic }) {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const currentSlide = slides[currentSlideIndex]
	const slideCount = slides.length

	const { goNextReel, goPreviousReel } = useReel((state) => state)

	// Set the CSS animation timing equal to the value in the story props
	// useEffect(() => {
	// 	document.documentElement.style.setProperty(
	// 		'--animation-timing',
	// 		`${timer}ms`
	// 	)
	// }, [timer])

	// Change slides on an interval
	useEffect(() => {
		let interval

		interval = setInterval(() => {
			if (currentSlideIndex < slideCount - 1) {
				setCurrentSlideIndex(currentSlideIndex + 1)
			} else if (currentSlideIndex === slideCount - 1) {
				setCurrentSlideIndex(0)
				goNextReel()
			}
		}, timer)

		return () => {
			clearInterval(interval)
		}
	}, [currentSlideIndex, slideCount, timer])

	const handlePrevClick = () => {
		const newIndex = currentSlideIndex - 1

		if (newIndex < 0) {
			setCurrentSlideIndex(0)
			goPreviousReel()
		} else {
			setCurrentSlideIndex(newIndex)
		}
	}

	const handleNextClick = () => {
		const newIndex = currentSlideIndex + 1

		if (newIndex === slideCount) {
			setCurrentSlideIndex(0)
			goNextReel()
		} else {
			setCurrentSlideIndex(newIndex)
		}
	}

	return (
		<>
			{/* Close button */}
			{/* <div className="flex justify-center  ">
				<button className="absolute bottom-16 z-50 w-10 h-10 bg-neutral-800/25  rounded-full flex justify-center items-center">
					<XCircleIcon className="w-7 h-7 text-white" />
				</button>
				<span className="uppercase text-xs font-Intermedium absolute bottom-12 text-white z-50">
					Close
				</span>
			</div> */}

			<div className="flex w-full h-full min-h-full p-1">
				<div className="relative z-40 h-full w-full">
					<Image
						width={1000}
						height={1000}
						className="h-full object-cover opacity-90 rounded-lg"
						src={currentSlide.image}
						alt={thumbnail.alt}
					/>

					<div className="absolute flex top-3 gap-x-3 z-50 w-full px-2">
						{slides.map((slide, index) => (
							<span
								key={`${slide.text}-${index}`}
								className={cn(
									"relative block w-full h-1 rounded-[12px] bg-white/50 overflow-hidden",
									currentSlideIndex > index && "bg-white", // indicator completed
									currentSlideIndex === index &&
										"transition-transform duration-1000 ease before:content-[''] before:w-full before:h-full before:absolute before:bg-white before:animate-indicator-fill" // indicator filling
								)}
							/>
						))}
					</div>

					<div className="absolute top-7 left-3 flex gap-x-2 items-center">
						<Image
							width={800}
							height={800}
							className="rounded-full w-11 h-11 ml-3"
							src={thumbnail.src}
							alt={thumbnail.alt}
						/>

						<div className="flex flex-col">
							<span className="text-neutral-100 font-Intermedium">{topic}</span>
							<span>{currentSlide.text}</span>
						</div>
					</div>

					<button
						className="absolute top-1/2 left-4 md:-left-14 bg-white/70 text-black rounded-full flex justify-center items-center w-10 h-10 active:scale-[85%] transition"
						onClick={handlePrevClick}
					>
						<ChevronLeft />
					</button>

					<button
						className="absolute top-1/2 right-4 md:-right-14 bg-white/70 text-black rounded-full flex justify-center items-center w-10 h-10 active:scale-[85%] transition"
						onClick={handleNextClick}
					>
						<ChevronRight />
					</button>
				</div>
			</div>
		</>
	)
}
