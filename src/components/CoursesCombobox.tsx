import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command"
import { Doc } from "contentlayer/generated"
import { DEVICONS } from "./icons"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface CoursesComboboxProps {
  courses: Doc["breadcrumbs"]
}

export function CoursesCombobox({ courses }: CoursesComboboxProps) {
  const params = useParams()
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const I = DEVICONS[params.slug[0]]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "mb-10 w-full max-w-[220px] justify-between border-none px-4 py-5 text-white focus-visible:ring-blue-500 dark:bg-zinc-700/50  dark:hover:bg-zinc-800",
          )}
        >
          <div className="flex items-center gap-2">
            <I className={cn("mr-2 h-5 w-5")} />
            <span className="text-base capitalize tracking-wider">
              {params.slug[0]}
            </span>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[220px] bg-black p-0">
        <Command className="dark:bg-zinc-700/50">
          <CommandInput placeholder="Search language..." />

          <CommandEmpty>No language found.</CommandEmpty>

          <CommandGroup>
            {courses.map((course) => {
              const Icon = DEVICONS[course]
              return (
                <CommandItem
                  value={course}
                  key={course}
                  className="h-10 text-sm  dark:hover:!bg-blue-700/60"
                  onSelect={(currentValue) => {
                    router.push(`/c/${currentValue}`)
                    setOpen(false)
                  }}
                >
                  <div
                    // maybe use target
                    // "https://tailwindcss.com/docs/hover-focus-and-other-states#target"
                    id={course}
                    className="flex h-full w-full items-center justify-between focus:outline-transparent focus:ring-0"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={cn("mr-2 h-5 w-5")} />
                      <span className="capitalize">{course}</span>
                    </div>

                    <Check
                      className={cn(
                        "h-4 w-4",
                        params.slug[0] === course ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </div>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
