"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchInput() {
  // TODO: Dynamic placeholder
  return (
    <div className="relative flex h-11 w-full items-center rounded-md border border-zinc-100  dark:border-zinc-700/40">
      <Search className="absolute left-4 mr-2 h-4 w-4 shrink-0 opacity-50" />
      <Input
        className="w-full border-none bg-transparent py-3 pl-10 text-sm outline-none placeholder:text-muted-foreground placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-zinc-500"
        placeholder="Search blogs ..."
      />
    </div>
  )
}
