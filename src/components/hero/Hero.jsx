// import { ReactCanvas } from './ReactCanvas'
// import { SectionMotion } from '../SectionMotion'
import { Profile } from "./Profile"
import { Title } from "./Title"
import { DynamicDescription } from "./DynamicDescription"
import { ButtonList } from "./ButtonList"
import { Reels } from "@/features/reels/Reels"
import { stories } from "@/data/stories"
import { Section } from "../Section"
import { NavigationButton } from "./NavigationButton"

export async function Hero() {
	return (
		<Section
			className="relative flex justify-center items-center h-[100dvh]"
			navigation={<NavigationButton />}
			id="hero"
		>
			<Profile />

			<Title />

			<DynamicDescription />

			<ButtonList />

			<Reels stories={stories} />
		</Section>
	)
}

// export default SectionMotion(Hero, 'Hero')
