"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import profile from "@public/profile.png"
import Image from "next/image"

import { links_navigation } from "@/data/config"
import { cn } from "@/lib/utils"
import { useActiveSectionStore } from "@/store/activeSession"
import { ChevronUp } from "lucide-react"
import { Logo } from "../hero/Logo"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Section } from "../Section"

export function Navbar2() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionStore()

  return (
    <Section className="z-50 mt-6 block h-auto w-full">
      <header className="flex w-full items-center justify-between">
        <Link href="/">
          <Avatar className="m-1 h-9 w-9">
            <Image
              src={profile}
              className="scale-110"
              alt="JV profile picture"
            />
            <AvatarFallback>JV</AvatarFallback>
          </Avatar>
        </Link>

        <nav className="h-[2.5rem] w-auto rounded-none  border-opacity-40 bg-white bg-opacity-80 px-6 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-[#0300145e] dark:bg-opacity-75 sm:top-6 sm:h-[3rem] sm:max-w-[40rem]  sm:rounded-full">
          <ul className="flex h-full w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-semibold text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links_navigation.map((link) => (
              <li
                className="relative flex h-full items-center justify-center "
                key={link.src}
              >
                <Link
                  className={cn(
                    "flex w-full animate-slowfade cursor-pointer items-center justify-center p-3 text-sm text-black transition hover:text-black dark:text-gray-300 dark:hover:text-gray-50",
                    activeSection === link.name &&
                      "text-gray-950 dark:text-gray-200",
                  )}
                  href={link.src}
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now())
                  }}
                >
                  <div className="flex items-center gap-1">
                    {link.name}
                    {link.name === "More" && (
                      <ChevronUp className="block h-full rotate-180" />
                    )}
                  </div>
                </Link>

                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSectionLine"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 70,
                    }}
                    className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                  ></motion.span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Logo />
      </header>
    </Section>
  )
}
