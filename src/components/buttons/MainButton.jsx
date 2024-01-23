import { cn } from "@/lib/utils"

export function MainButton({ className, href, children, onClick }) {
  const Tag = href ? "a" : "button"
  return (
    <Tag
      {...(href ? { href } : {})}
      onClick={onClick}
      className={cn(
        "blue-hover-effect relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl border bg-[rgba(255,255,255,.05)] px-[20px] py-4 font-bold text-white backdrop-blur-sm transition-shadow duration-400",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-2">{children}</div>
    </Tag>
  )
}
