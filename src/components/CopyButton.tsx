"use client"

import { cn } from "@/lib/utils"
import { CheckIcon, ClipboardIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface CopyButtonProps {
  text: string
  className?: string
  showIcon?: boolean
  children?: React.ReactNode
}

export function CopyButton({
  text,
  className,
  showIcon = false,
  children,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    toast.success("Copied to clipboard")

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  const Icon = isCopied ? CheckIcon : ClipboardIcon

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={cn(
        "inline-flex h-8 w-8 items-center  justify-center gap-2 whitespace-nowrap rounded-md  text-sm font-medium text-white ring-offset-background transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-80",
        className,
      )}
    >
      {children}
      {showIcon && <Icon className="h-4 w-4" />}
    </button>
  )
}
