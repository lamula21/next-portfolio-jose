"use client"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

export function GradientButton({ className, children }) {
  const lottieRef = useRef(null)

  useEffect(() => {
    import("@lottiefiles/lottie-player")
  }, [])

  return (
    <a
      href="#projects"
      id="button-primary"
      className={cn(
        "blue-hover-effect relative cursor-pointer select-none overflow-hidden rounded-xl border border-t-[#ffffff0d] bg-blue-gradient-circle px-[20px] py-4 font-bold text-white backdrop-blur-sm backdrop-brightness-150 transition-shadow duration-400",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-2">{children}</div>
      <lottie-player
        ref={lottieRef}
        autoplay
        loop
        src="https://lottie.host/bfa0e5da-dd55-4c07-a0df-b81e4b443d72/oNUOpcnYvK.json"
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </a>
  )
}
