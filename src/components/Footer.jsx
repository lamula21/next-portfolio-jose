import Link from "next/link"
import { Section } from "./Section"
import { Badge } from "./Badge"
import { DEVICONS } from "./icons"
import { TAGS } from "@/data/tags"

export function Footer() {
  const tag = TAGS["NEXT"]
  const Icon = DEVICONS[tag.icon]

  return (
    <Section className="mt-10 pt-6" footer>
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-normal text-zinc-800 dark:text-zinc-200">
          <li>
            <Link href="/about" className="hover:text-sky-500 hover:underline">
              About
            </Link>
          </li>

          <li>
            <Link href="/b" className="hover:text-sky-500 hover:underline">
              Projects
            </Link>
          </li>

          <li>
            <Link href="/c" className="hover:text-sky-500 hover:underline">
              Courses
            </Link>
          </li>
        </ul>

        <span className="flex items-center text-sm text-zinc-400 dark:text-zinc-500">
          © 2024 Jose Valdivia. All right reserved. Made with
          <Badge className="inline-flex bg-black text-white">
            <Icon className="h-4 w-4" />
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 hover:underline"
            >
              {tag.name}
            </a>
          </Badge>
        </span>
      </div>
    </Section>
  )
}
