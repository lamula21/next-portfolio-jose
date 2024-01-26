import { useEffect, useState } from "react"

/**
 * Hook that returns the id of the element that is currently in view.
 * @param itemIds - Array of ids of elements to observe.
 * @returns The id of the element that is currently in view.
 */
export function useObserverActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      // callback function that receives a elements[]
      // after setting up `observer.observe(element)`
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      // top%, right%, bottom%, left%
      { rootMargin: `0% 0% -55% 0%` },
    )

    // set up observer on each element
    itemIds?.forEach((id) => {
      if (!id) {
        return
      }

      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // clean up observer when component unmounts
    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return
        }

        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}
