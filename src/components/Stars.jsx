"use client"

import { useState, useRef, Suspense, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import { useStarsStore } from "@/store/stars"
import { cn } from "@/lib/utils"

function Background_Stars(props) {
	const { starColor } = useStarsStore()
	const ref = useRef(null)

	const [sphere] = useState(() =>
		// Randomingly generate stars
		// Float32Array input must be divisible by 3 because each star has 3 coordinates
		random.inSphere(new Float32Array(1002), { radius: 1.2 })
	)

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10
		ref.current.rotation.y -= delta / 15
	})

	// function getRandomColor() {
	// 	// Generate a random number between 0 and 255 for each RGB component
	// 	const r = Math.floor(Math.random() * 256)
	// 	const g = Math.floor(Math.random() * 256)
	// 	const b = Math.floor(Math.random() * 256)

	// 	// Return the color in the form of a CSS RGB string
	// 	setcolourData(`rgb(${r}, ${g}, ${b})`)
	// }

	/*
  const intervalID = setInterval(() => {
    getRandomColor();
  }, 6000);
  */

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color={starColor}
					size={0.003} // size of stars
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	)
}

export function StarsCanvas() {
	const { starMode } = useStarsStore()

	return starMode ? (
		<div className={cn("w-full h-auto fixed inset-0 z-[-2]")}>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Background_Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	) : null
}
