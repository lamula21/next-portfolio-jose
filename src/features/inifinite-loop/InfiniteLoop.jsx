"use client"

import { cn } from "@/lib/utils"
import { useLoop } from "./hooks/useLoop"
import { DEVLOGOS } from "@/data/technologies"

const testimonials = [
  "/images/img1.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
]

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
        "scroller group relative z-10 h-full w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex h-full w-max min-w-full shrink-0 flex-nowrap items-center justify-start gap-14 py-4",
          start && "animate-scroll ",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {techs.map((tech, idx) => {
          const Icon = DEVLOGOS[tech.icon]

          //
          return (
            <li
              className="group/icon relative flex h-full flex-shrink-0 flex-col items-center justify-center space-y-5 rounded-2xl"
              key={tech.name}
            >
              <div className={cn(tech.shadow)} />
              <Icon
                className={cn(
                  "h-[4.5rem] w-[4.5rem]  grayscale group-hover/icon:grayscale-0",
                  tech.color,
                )}
              />
              <span className="opacity-0 transition-opacity duration-500 group-hover/icon:opacity-100">
                {tech.name}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
