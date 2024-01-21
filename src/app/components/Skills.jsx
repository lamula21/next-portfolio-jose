import { Section } from "@/components/Section"
import { Heading } from "@/components/Heading"
import { Subheading } from "@/components/Subheading"
import { technologies } from "@/data/technologies"
import { InfiniteLoopCards } from "@/features/inifinite-loop/InfiniteLoop"
import { groupBy } from "lodash"

export function Skills() {
  const grouped = groupBy(technologies, (tech) => tech.category)

  return (
    <Section id="skills" className="mt-40">
      <header className="max-w-2xl space-y-5">
        <Heading className="text-pretty ">
          {`Some of the Technologies I use Regularly and Love Working With 🚀`}
        </Heading>

        <Subheading>
          {`These are my favorites one, but I'm always open to learn new ones. I'm
          a fast learner, adaptable, and committed to continuous improvement to
          contribute effectively to any team or project.`}
        </Subheading>
      </header>

      <div className="relative mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        {/* BORDER LEFT */}
        <div className="top-50 absolute left-[-1px] h-full">
          <div className="sticky left-0 top-[37%] h-[150px] w-[1px] rounded-full bg-gradient-to-b from-[rgba(17,17,17,0)] via-teal-500 to-[rgba(17,17,17,0)] transition-all" />
        </div>

        <div className="flex max-w-5xl flex-col space-y-10">
          {Object.keys(grouped).map((category) => {
            const techs = grouped[category]

            return (
              <article
                className="md:grid md:grid-cols-5 md:items-center"
                key={category}
              >
                <div className="group relative flex h-[200px] flex-col items-start justify-center rounded-3xl border border-zinc-700/40 pt-3 md:col-span-4">
                  {/* overlay */}
                  {/* <div
                    id="overlay"
                    className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
                  /> */}

                  <aside className="relative z-10 mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden">
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 flex items-center capitalize"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    </span>
                    {category}
                  </aside>

                  <InfiniteLoopCards
                    direction="left"
                    speed="fast"
                    pauseOnHover
                    techs={techs}
                  />
                </div>

                <aside className="relative z-10 order-first mb-3 mt-1 hidden items-center text-sm capitalize text-zinc-400 dark:text-zinc-500 md:block">
                  {category}
                </aside>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}