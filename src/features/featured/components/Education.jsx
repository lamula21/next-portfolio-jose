import { ArrowIcon } from "@/components/icons"
import { educationData } from "@/data/experiences"
import { GraduationCapIcon } from "lucide-react"
import Link from "next/link"

export function Education() {
  return (
    <div className="group mt-14 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <GraduationCapIcon className="h-6 w-6 flex-none text-zinc-500" />

        <span className="ml-3">Education</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {educationData.map((education, index) => (
          <li className="flex gap-4" key={index}>
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-0">
              <img
                alt={`${education} title`}
                className="h-7 w-7 rounded-full"
                data-nimg="1"
                decoding="async"
                height="32"
                loading="lazy"
                src={education.logo.src}
                style={{
                  color: "transparent",
                }}
                width="32"
              />
            </div>

            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {education.title}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {education.location}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                aria-label="2019 until Present"
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              >
                {education.date}
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      <Link
        className="group/icon mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
        href="/about"
      >
        More about me
        <ArrowIcon className="h-4 w-4 -rotate-90 stroke-zinc-400 transition group-hover/icon:translate-x-2 group-active/icon:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active/icon:stroke-zinc-50" />
      </Link>
    </div>
  )
}
