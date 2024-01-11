// import { ReactCanvas } from './ReactCanvas'
import { Profile } from "./Profile"
import { Title } from "./Title"
import { DynamicDescription } from "./DynamicDescription"
import { ButtonList } from "./ButtonList"
import { Reels } from "@/features/reels/Reels"
import { HeroSectionRef } from "@/components/sections/HeroSectionRef"
import { getStories } from "@/services/getStories"
// import { SectionMotion } from '../SectionMotion'

export async function Hero() {
	const stories = await getStories()

	return (
		<section className="relative w-full h-screen flex flex-col items-center justify-start px-[15px]">
			{/* <Blackhole /> */}

			<HeroSectionRef>
				<Profile />

				<Title />

				<DynamicDescription />

				<ButtonList />

				<Reels stories={stories} />

				{/* animate-slidelefttranfromslow */}
				{/* <motion.div
					variants={slideIn("up", "spring", 3, 3)}
					className="relative w-[50%] h-full hidden 1140:flex flex-row items-center cursor-pointer justify-between "
				>
					<ReactCanvas />
				</motion.div> */}
			</HeroSectionRef>

			{/* {Signup ? <SignupProvider /> : <div></div>} Sign up modal */}
			{/* {Mobilemenu ? <MobileMenu /> : <div></div>} open modal*/}
			{/* {ImageSrc.data ? <Scale_Image src_data={ImageSrc} /> : <div></div>} */}

			<div className="absolute w-full h-[1000px] left-0 right-0 top-0 overflow-visible -z-10  shadow-lg shadow-[#030014]/50 bg-[url('/bg-light.svg')] bg-cover"></div>
		</section>
	)
}

// export default SectionMotion(Hero, 'Hero')
