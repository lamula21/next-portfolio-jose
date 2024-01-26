import { motion } from "framer-motion"
import { useState } from "react"

import {
  GithubIcon,
  MailIcon,
  AtIcon,
  DiscordIcon,
  LinkedInIcon,
  XIcon,
  MailCheckIcon,
} from "@/components/icons"
import { CheckIcon } from "lucide-react"
import { fadeInIcons } from "@/utils/motion"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function ContactList() {
  const [onCopy, setOnCopy] = useState(false)
  const [onDone, setOnDone] = useState(false)

  const copyClipboard = async () => {
    try {
      await navigator.clipboard.writeText("jvaldiv8@terpmail.umd.edu")
      setOnCopy(true)
      toast.success("Copied to clipboard:", {
        description: "jvaldiv8@terpmail.umd.edu",
        duration: 2200,
      })
    } catch (error) {
      // toast here
      toast.error("Error copying to clipboard.")
    }
  }

  return (
    <div className="relative flex h-auto items-end gap-3">
      <div
        variants={fadeInIcons("left", "spring", 2.5, 0)}
        className="cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:shadow-blue-600"
      >
        <a href="https://github.com/lamula21" target="_blank">
          <GithubIcon className="fill-white" />
        </a>
      </div>

      <div
        variants={fadeInIcons("left", "spring", 2.6, 0)}
        className="cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:shadow-blue-600"
      >
        <a href="https://www.linkedin.com/in/joseavr/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>

      <div
        variants={fadeInIcons("left", "spring", 2.7, 0)}
        className="cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:shadow-blue-600"
      >
        <a href="https://twitter.com/josevaldi6" target="_blank">
          <XIcon className="h-6 w-6" />
        </a>
      </div>

      <div
        variants={fadeInIcons("left", "spring", 2.8, 0)}
        className="cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:shadow-blue-600"
      >
        <DiscordIcon />
      </div>

      <button
        variants={fadeInIcons("left", "spring", 2.9, 0)}
        className="relative cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-600"
        onClick={copyClipboard}
        disabled={onCopy || onDone}
      >
        <CheckIcon
          className={cn(
            "text-green-500 transition-all",
            onDone ? "scale-100" : "scale-0",
          )}
          onTransitionEnd={() => {
            setTimeout(() => {
              setOnCopy(false)
              setOnDone(false)
            }, 2000)
          }}
          strokeWidth={3}
        />

        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <MailIcon
            className={cn("transition-all", onCopy ? "scale-0" : "scale-100")}
            onTransitionEnd={() => {
              if (onCopy) {
                setOnDone(true)
              }
            }}
          />
        </div>
      </button>
    </div>
  )
}
