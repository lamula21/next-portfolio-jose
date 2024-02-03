// import { ReactCanvas } from './ReactCanvas'
// import { SectionMotion } from '../SectionMotion'
import { Profile } from "./Profile"
import { Title } from "./Title"
import { DynamicDescription } from "./DynamicDescription"
import { ButtonList } from "./ButtonList"
import { Reels } from "@/features/reels/Reels"
import { reels } from "@/data/reels"
import { Section } from "../Section"
import { NavigationButton } from "./NavigationButton"

export async function Hero() {
  return (
    <Section
      className="relative flex h-full items-center justify-center md:h-[100dvh]"
      navigation={<NavigationButton />}
      id="hero"
    >
      <Profile className="mb-14 mt-[180px]  md:mt-0" />

      <Title />

      <DynamicDescription />

      <ButtonList />

      <Reels stories={reels} />
    </Section>
  )
}

// export default SectionMotion(Hero, 'Hero')
