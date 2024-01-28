"use client"

import { useEffect, useState } from "react"
import {
  CommandDialog,
  CommandInputModal,
  CommandItem,
  CommandList,
} from "./ui/command"

import { Button } from "./ui/button"

export function CourseSearch() {
  const [open, setOpen] = useState(false)

  const [input, setInput] = useState("")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="pointer-events-auto relative flex w-full flex-none justify-between gap-2 rounded-md bg-background bg-white text-sm text-muted-foreground dark:bg-gray-900 sm:w-64 lg:w-64 xl:w-96"
        onClick={() => setOpen(true)}
      >
        Search{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen)
          if (!isOpen) setInput("")
        }}
      >
        <CommandInputModal
          onValueChange={(text) => {
            setInput(text)
          }}
          value={input}
          className="h-[38px] border-none outline-none ring-0 focus:border-none focus:outline-none "
          placeholder="Search channels..."
        />

        {input.length > 0 ? (
          <CommandList>
            {
              <CommandItem>TESTING</CommandItem>
              // (results?.data?.length ?? 0) > 0 ? (
              //     {results.data?.map((channel: any) => (
              //       <CommandItem
              //         key={`modal-${channel.channel_id}`}
              //         value={channel.channel_name}
              //       >
              //         <ChannelCardModal
              //           channelName={channel.channel_name}
              //           channelId={channel.channel_id}
              //           thumbnail={channel.thumbnail}
              //           isLive={channel.is_live}
              //           platform={results.platform}
              //         />
              //       </CommandItem>
              //     ))}
              //   </CommandGroup>
              // )
              // :
            }
          </CommandList>
        ) : (
          <CommandList>
            <CommandItem>JS</CommandItem>
            <CommandItem>HTML</CommandItem>
            <CommandItem>CSS</CommandItem>
          </CommandList>
        )}
      </CommandDialog>
    </>
  )
}
