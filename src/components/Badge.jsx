import { cn } from "@/lib/utils"

export function Badge({ className, children }) {
  return (
    <span
      className={cn("flex gap-x-2 rounded-full px-2 py-1 text-xs", className)}
    >
      {children}
    </span>
  )
}
