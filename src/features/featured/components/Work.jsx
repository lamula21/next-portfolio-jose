import { CVIcon, WorkIcon } from "@/components/icons"
import { experiencesData } from "@/data/experiences"

export function Work() {
  return (
    <div className="group relative mt-14 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="absolute left-3 top-0 flex w-full justify-center">
        <div className="test left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-sky-500 to-[rgba(17,17,17,0)] transition-all group-hover:animate-border-width" />
      </div>

      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <WorkIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {experiencesData.map((experience, index) => (
          <li className="flex gap-4" key={index}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-0">
              <img
                alt=""
                className="h-7 w-7 rounded-full"
                data-nimg="1"
                decoding="async"
                height="32"
                loading="lazy"
                src={experience.logo.src}
                style={{
                  color: "transparent",
                }}
                width="32"
              />
            </div>

            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {experience.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {experience.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                aria-label="2019 until Present"
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              >
                {experience.date}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        className="group/icon mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
        href="#"
      >
        View CV
        <CVIcon className="h-4 w-4 text-zinc-400 transition group-hover/icon:-rotate-[10.5deg] group-active/icon:text-zinc-600 dark:group-hover:text-zinc-50 dark:group-active/icon:text-zinc-50" />
      </a>
    </div>
  )
}
