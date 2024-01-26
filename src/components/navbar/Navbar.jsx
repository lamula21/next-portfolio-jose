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

export function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionStore()

  return (
    <Section className="fixed top-6 z-50 h-[4.5rem] w-full">
      <header className="flex w-full items-center justify-between">
        <Link className="invisible" href="/">
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
                    "flex w-full cursor-pointer items-center justify-center p-3 text-sm text-black transition hover:text-black dark:text-gray-300 dark:hover:text-gray-50",
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

                  {/* {link.name === activeSection && (
                  <motion.span
                    className="bg-p absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-[#42c1f82b] dark:blur-md"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )} */}
                </Link>

                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSectionLine"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 70,
                    }}
                    className="absolute -inset-x-2 -bottom-px h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0"
                  ></motion.span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Logo className="invisible" />
      </header>
    </Section>
  )
}
