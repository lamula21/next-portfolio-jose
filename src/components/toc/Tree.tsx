import { type TOC } from "@/lib/toc"
import { cn } from "@/lib/utils"

interface TreeProps {
  tree: TOC
  level?: number
  activeItem?: string | null
}

export function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", level !== 1 && "pl-5")}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline transition-colors duration-150 hover:underline ",
                item.url === `#${activeItem}`
                  ? "dark:decoration dark:text-mdx-primary hover:decoration-mdx-primary text-sm font-semibold"
                  : "text-sm hover:decoration-white dark:text-mdx-text dark:hover:text-white",
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
