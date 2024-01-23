"use client"

import { cn } from "@/lib/utils"
import { useLoop } from "./hooks/useLoop"
import { DEVICONS } from "@/components/icons"

export const InfiniteLoopCards = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  techs,
}) => {
  const { containerRef, scrollerRef, start } = useLoop(direction, speed)

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller  relative z-10 h-full w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "my-4 flex h-full w-max min-w-full shrink-0 flex-nowrap items-center justify-start gap-20 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {techs.map((tech) => {
          const Icon = DEVICONS[tech.icon]

          return (
            <li
              className="group/icon relative flex h-full flex-shrink-0 flex-col items-center justify-center space-y-3 rounded-2xl"
              key={tech.name}
            >
              <div
                id="shadow-overlay"
                className={cn(
                  "absolute top-12 h-[40px] w-[40px] opacity-0 blur-2xl transition-opacity duration-200 ease-in-out group-hover/icon:opacity-100",
                  tech.shadow,
                )}
              />

              <Icon
                className={cn(
                  "h-[4.5rem] w-[4.5rem] grayscale group-hover/icon:grayscale-0 ",
                  tech.color,
                )}
              />

              <span className="text-white/70 opacity-0 transition-opacity duration-500 group-hover/icon:opacity-100">
                {tech.name}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
