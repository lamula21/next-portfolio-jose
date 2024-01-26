import { CopyButton } from "@/components/CopyButton"
import { Section } from "@/components/Section"
import { UnderWorkPage } from "@/components/UnderWorkPage"
import {
  DEVICONS,
  GithubIcon,
  LinkedInIcon,
  MailFilledIcon,
  XIcon,
} from "@/components/icons"
import { ABOUT } from "@/data/about"

export default function ProjectsPage() {
  return (
    <Section className="mt-16 sm:mt-32 sm:px-8">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="flex max-w-xs flex-col gap-y-20 px-2.5 lg:max-w-none lg:pl-20">
          {/* rigth 1  */}
          <img
            alt=""
            className="aspect-square rotate-3 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
            data-nimg="1"
            decoding="async"
            height="800"
            loading="lazy"
            sizes="(min-width: 1024px) 32rem, 20rem"
            src="/profile.png"
            style={{
              color: "transparent",
            }}
            width="800"
          />

          {/* right 2 */}
          <ul role="list">
            {ABOUT.follow.map((each, index) => {
              const Icon = DEVICONS[each.icon]

              return (
                <li className="mt-4 flex first:mt-0 last:mt-8 last:border-t last:border-zinc-100 last:pt-8 dark:last:border-zinc-700/40">
                  {ABOUT.follow.length - 1 === index ? (
                    <CopyButton className="group flex justify-normal bg-transparent text-sm font-medium text-zinc-800 transition hover:bg-transparent hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500">
                      <Icon className="h-6 w-6 flex-none fill-zinc-500 text-zinc-500 transition group-hover:fill-sky-500" />
                      <span className="ml-4">{each.name}</span>
                    </CopyButton>
                  ) : (
                    <a
                      className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
                      href="#"
                    >
                      <Icon className="h-6 w-6 flex-none fill-zinc-500 text-zinc-500 transition group-hover:fill-sky-500" />
                      <span className="ml-4">{each.name}</span>
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* left */}
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-[3.5rem]">
            {ABOUT.title}
          </h1>
          <div className="mt-6 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {ABOUT.p.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
