'use client'
import { useEffect, useMemo, useState } from 'react'
import { Line, Sphere } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// You can draw the shape in this way if do not want to import a ready-to-use 3D model.
const Shape = () => {
	const points = useMemo(() => {
		return new THREE.EllipseCurve(
			0,
			0,
			3,
			1.15,
			0,
			2 * Math.PI,
			false,
			0
		).getPoints(100)
	}, [])
	return (
		<group>
			{/* // color of the shape */}
			<Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} />
			<Line
				worldUnits
				points={points}
				color="#cae6f1"
				lineWidth={0.3}
				rotation={[0, 0, 1]}
			/>
			<Line
				worldUnits
				points={points}
				color="#cae6f1"
				lineWidth={0.3}
				rotation={[0, 0, -1]}
			/>
			<Sphere args={[0.55, 64, 64]}>
				{/* 6, 0.5, 2 */}
				{/* [3, 2.5, 6] */}
				<meshBasicMaterial color={[2, 2.5, 10]} toneMapped />
			</Sphere>
		</group>
	)
}

export const React3D = () => {
	return (
		<>
			<Shape />
			<EffectComposer>
				<Bloom mipmapBlur luminanceThreshold={1} radius={0.35} />
			</EffectComposer>
		</>
	)
}
