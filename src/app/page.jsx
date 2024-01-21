// import { SectionHero } from "@/components/hero/SectionHero"
import { Hero } from "@/components/hero/Hero"
import { Featured } from "./components/Featured"
import { Skills } from "./components/Skills"

export default async function Home() {
  return (
    <main className="relative h-full w-full">
      <div className="absolute left-0 right-0 top-0 -z-10 h-[1000px] w-full overflow-visible bg-[url('/bg-light.svg')] bg-cover shadow-[#030014]/50" />

      <Hero />

      <Featured />

      <Skills />

      {/* Services /> */}

      {/* Contact /> */}
    </main>
  )
}
