"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

import { DEVICONS, Github, Link } from "@/components/icons"
import { Badge } from "@/components/Badge"

export function Project({
  title,
  description,
  tags,
  imageUrl,
  type,
  spinClass,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.37 1", "1.33 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [1, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  // when x is 0, translate should be 50. When x is 100, opacity should be 0.
  const translateYProgress = useTransform(scrollYProgress, [0, 0.75], [70, 0])

  const opacityTextProgess = useTransform(scrollYProgress, [0.48, 1], [0, 1])

  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        translateY: translateYProgress,
        backdropFilter: "blur(4px)",
      }}
      className="group relative flex-initial overflow-hidden rounded-2xl p-[1px]"
    >
      {/* Project Card */}
      <div
        className={cn(
          "group/overlay relative flex h-auto  overflow-hidden rounded-2xl border border-white/10 p-8 transition lg:h-[20rem]",
        )}
      >
        <div className="z-10 flex h-full w-full flex-col sm:group-even:order-2 lg:justify-start">
          <div className="flex items-center gap-3">
            <span className="ml-1.5 flex h-2 w-2 items-center justify-center ">
              <span
                className={cn(
                  "absolute flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75",
                  spinClass,
                )}
              />
              <span
                className={cn(
                  "relative inline-flex h-1 w-1 rounded-full",
                  spinClass,
                )}
              />
            </span>

            <span className="text-base font-semibold uppercase text-zinc-400">
              {type}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-semibold  tracking-tight dark:text-zinc-100">
            {title}
          </h1>

          <motion.p
            style={{
              opacity: opacityTextProgess,
            }}
            className="relative z-10 mt-2 text-base leading-relaxed text-zinc-600 dark:text-white/70 dark:text-zinc-400"
          >
            {description}
          </motion.p>

          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => {
              const Icon = DEVICONS[tag.icon]

              return (
                <li key={index}>
                  <Badge className={tag.class}>
                    <Icon className="h-4 w-4" />
                    {tag.name}
                  </Badge>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="z-20 hidden h-full w-[450px] flex-col gap-4 group-odd:justify-end sm:flex sm:flex-row">
          <span className="group/icon relative z-40 h-6 w-6 group-odd:order-2">
            <Link className="h-6 w-6 text-white group-hover/icon:text-zinc-400" />
          </span>

          <span>
            <Github className="h-6 w-6 text-white" />
          </span>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute -right-60 top-8 z-10 hidden w-[24.25rem] rounded-t-lg shadow-2xl transition group-even:-left-[14rem] group-even:right-[initial]
        group-hover:-translate-x-3 
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3

        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        sm:block

        lg:top-20 lg:w-[28.25rem]"
        />

        {/* Overlay */}
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      </div>
    </motion.article>
  )
}
