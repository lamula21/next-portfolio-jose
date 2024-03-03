import { cn } from "@/lib/utils"
import { DangerIcon, InfoIcon, WarningIcon } from "../icons"

interface CalloutProps {
  children?: React.ReactNode
  title?: string
  type?: "default" | "warning" | "danger"
}

export function Callout({
  children,
  type = "default",
  title,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-red-900 bg-red-800/30": type === "danger",
        "border-blue-900 bg-blue-800/30": type === "default",
        "border-yellow-300/30 dark:bg-[#2f2b02]": type === "warning",
      })}
      {...props}
    >
      <div className="flex gap-x-3">
        {type === "warning" && (
          <WarningIcon className="h-4 w-4 shrink-0 text-yellow-300" />
        )}

        {type === "default" && (
          <InfoIcon className="h-4 w-4 shrink-0 text-[#5eb1fa]" />
        )}

        {type === "danger" && (
          <DangerIcon className="h-4 w-4 shrink-0 text-[#f86b6b]" />
        )}

        <div
          className={cn(
            "flex flex-col gap-y-3 ",
            type === "warning" && "dark:text-yellow-400",
            type === "danger" && "dark:text-red-400",
            type === "default" && "dark:text-blue-400",
          )}
        >
          <h3 className="font-bold leading-4">{title}</h3>
          <span
            className={cn(
              type === "warning" && "dark:[&>p]:text-yellow-400",
              type === "danger" && "dark:[&>p]:text-red-400",
              type === "default" && "dark:[&>p]:text-blue-400",
            )}
          >
            {children}
          </span>
        </div>
      </div>
    </div>
  )
}
