"use client"

import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"
import { NavItem } from "@/types/global"
import { useState } from "react"

interface MainNavProps {
  items?: NavItem[]
  children?: React.ReactNode
}

export function DocsMainNavLeft({ items, children }: MainNavProps) {
  const segment = usePathname()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="flex flex-1 gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span>📚</span>
        <span className="hidden font-bold sm:inline-block">
          {docsConfig.name}
        </span>
      </Link>

      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-lg font-medium text-white/70 transition-colors hover:text-foreground/80 sm:text-sm",
                segment.startsWith(item.href) && "text-white",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? "❌" : "📚"}
        <span className="font-bold">Menu</span>
      </button>
      {/* {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )} */}
    </div>
  )
}
