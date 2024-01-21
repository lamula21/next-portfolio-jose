import { useEffect, useRef, useState } from "react"

export function useLoop(direction, speed) {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  useEffect(() => {
    addAnimation()
  }, [addAnimation])

  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if ((speed = "normal")) {
        containerRef.current.style.setProperty("--animation-duration", "45s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return { containerRef, scrollerRef, start }
}
