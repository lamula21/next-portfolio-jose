import { SectionHero } from '@/components/(Hero)/SectionHero'
import { Projects } from '@/components/(Projects)/Projects'

export default function Home() {
	return (
		<main className="w-full h-full">
			<div className=" w-auto h-auto m-auto ">
				<SectionHero />

				<Projects />
				{/* <Section_3 /> */}
				{/* <Section_4 /> */}
			</div>
		</main>
	)
}
