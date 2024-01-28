import { siteConfig } from "@/config/site"
import Link from "next/link"
import { DEVICONS } from "../icons"

export function DocsMainNavRight() {
  return (
    <div className="relative ml-auto hidden flex-1 items-center justify-end space-x-4 sm:justify-end lg:flex">
      <nav className="flex space-x-4">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <DEVICONS.GithubIcon className="h-7 w-7 text-white" />
          <span className="sr-only">GitHub</span>
        </Link>
      </nav>
    </div>
  )
}
