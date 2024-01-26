"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import profile from "@public/profile.png"

import { textVariant } from "@/utils/motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DynamicToolTip } from "@/components/hero/DynamicTooltip"
import { ContactList } from "@/components/hero/ContactList"
import { VerifiedIcon } from "../icons"
import { cn } from "@/lib/utils"

export function Profile({ className }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 md:flex-row md:justify-start ",
        className,
      )}
    >
      {/* Avatar */}
      <motion.div
        variants={textVariant(2)}
        className="group relative rounded-full  opacity-[0.9] transition-shadow duration-300 hover:shadow-lg"
      >
        <Avatar className="m-1 h-28 w-28">
          <Image src={profile} className="scale-110" alt="JV profile picture" />
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>

        <DynamicToolTip />
      </motion.div>

      <div className="flex h-full w-full flex-col items-center gap-3 md:min-w-[350px] md:items-start">
        <h2 className="flex items-center text-3xl font-extrabold">
          Jose Valdivia
          <VerifiedIcon className="ml-2 inline-flex text-[#1D9BF0]" />
        </h2>
        <div className="font-Interegular flex items-center justify-center gap-x-2 text-foreground/60">
          <p>Est. 1999</p>
          <span className="h-[3px] w-[3px] rounded-full bg-neutral-600"></span>
          <p>Maryland, US</p>
          <span className="h-[3px] w-[3px] rounded-full bg-neutral-600"></span>
          <p>Full Stack Engineer</p>
        </div>

        <ContactList />
      </div>
    </div>
  )
}
