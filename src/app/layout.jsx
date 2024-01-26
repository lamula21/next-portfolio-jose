import "../assets/globals.css"

import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/Footer"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

export const metadata = {
  title: "Jose Valdivia",
  description: "Showcasing my latest projects and skills",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen overscroll-none bg-zinc-50 font-sans antialiased dark:bg-black",
          GeistMono.variable,
          GeistSans.variable,
        )}
      >
        {children}
        <Toaster />
        <Footer />
        {/* <Provider>{children}</Provider> */}
        <TailwindIndicator />
      </body>
    </html>
  )
}
