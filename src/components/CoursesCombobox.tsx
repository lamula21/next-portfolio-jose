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

interface CoursesComboboxProps {
  courses: Doc["breadcrumbs"]
}

export function CoursesCombobox({ courses }: CoursesComboboxProps) {
  const params = useParams()

  const I = DEVICONS[params.slug[0]]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "mb-10 w-full max-w-[220px] justify-between bg-zinc-700/60 px-4 py-5 text-white",
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
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />

          <CommandEmpty>No language found.</CommandEmpty>

          <CommandGroup>
            {courses.map((course) => {
              const Icon = DEVICONS[course]
              return (
                <CommandItem
                  value={course}
                  key={course}
                  className="h-10 text-sm"
                >
                  <Link
                    href={`/c/${course}`}
                    className="flex w-full items-center justify-between"
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
                  </Link>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
