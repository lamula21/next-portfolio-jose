import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function NavigationButton() {
  return (
    <div className="absolute bottom-0 left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%]">
      <Link
        className="inline-flex h-10 w-10 animate-bounce items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors hover:bg-zinc-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        href="#featured"
      >
        <ChevronDown className="h-6 w-6" />
      </Link>
    </div>
  )
}
