import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { React3D } from './React3D'
import { Suspense } from 'react'

export function ReactCanvas() {
	return (
		<div className="absolute top-0 left-0 w-full h-full 12 transition-transform 1300:translate-x-10 1300:transition-transform 1660:translate-x-16">
			<Canvas camera={{ position: [0, 0, 8] }}>
				<Suspense fallback={null}>
					<React3D />
					<OrbitControls enableZoom={false} autoRotate />
				</Suspense>
			</Canvas>
		</div>
	)
}
