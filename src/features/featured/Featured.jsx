import { Section } from "@/components/Section"
import { Experience } from "./components/Experience"
import { Grid } from "@/components/Grid"
import { Projects } from "./components/Projects"

export function Featured() {
  return (
    <Section id="featured" className="mt-32 scroll-mt-20 md:mt-14">
      <Grid>
        <Projects />

        <Experience />
      </Grid>
    </Section>
  )
}
