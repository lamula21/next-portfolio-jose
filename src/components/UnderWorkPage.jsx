import Link from "next/link"
import { Section } from "./Section"
import { Button } from "./ui/button"

export function UnderWorkPage() {
  return (
    <Section className="h-full w-full">
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8  rounded-2xl border border-zinc-100 p-6 shadow-md dark:border-zinc-700/40">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              This page is in progress
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {` I'm working hard to bring you something amazing. Please check back
              soon.`}
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
            >
              Go back
            </Link>
          </div>
        </div>
      </main>
    </Section>
  )
}
