import { SectionHero } from '@/components/SectionHero'
import Image from 'next/image'

export default function Home() {
	return (
		<main className="w-full h-full">
			<div className=" w-auto h-auto m-auto ">
				<SectionHero />
				{/* 
				<Section_2 />
				<Section_3 />
				<Section_4 /> */}
			</div>
		</main>
	)
}
