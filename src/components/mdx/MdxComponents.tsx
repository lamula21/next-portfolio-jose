import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/lib/utils"
import { Callout } from "@/components/mdx/Callout"
import { MdxCard } from "@/components/mdx/MdxCard"
import { CodeBlockHeader } from "./CodeBlockHeader"
import { LinkIcon } from "../icons"

/**
 * Override HTML elements and create own  MDX components
 */
const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "group mb-[1rem] mt-[8rem] scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight text-white md:text-5xl",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "dark:text-teal-00 group mb-[1rem] mt-[5rem] scroll-m-20  border-b pb-2 text-3xl font-bold tracking-tight text-mdx-marker md:text-4xl dark:[&>a>span>svg]:text-mdx-marker",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "group mt-8 scroll-m-20 text-2xl font-semibold tracking-tight dark:[&>a>span>svg]:text-white",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => {
    return (
      <a
        className={cn(
          "relative font-semibold text-mdx-primary underline decoration-blue-500/30 transition-colors duration-150 hover:decoration-mdx-primary",
          className,
        )}
        {...props}
      />
    )
  },
  span: ({ className, children, ...props }) => {
    const isHeadline = className?.includes("icon-link")

    return (
      <span className={className} {...props}>
        {isHeadline && (
          <LinkIcon className="absolute bottom-0 left-0 top-0 my-auto flex h-6 w-6 translate-x-[-150%] items-center justify-center opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100" />
        )}
        {children}
      </span>
    )
  },
  strong: ({ className, ...props }) => (
    <strong className={cn("font-bold dark:text-white", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "[first:mt-[1.7rem] leading-7 dark:text-mdx-text [&:not(:first-child)]:my-[1.7rem]",
        className,
      )}
      {...props}
    />
  ),

  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc space-y-2", className)} {...props} />
  ),
  ol: ({ className, ...props }) => {
    return (
      <ol
        className={cn("my-6 ml-6 list-decimal space-y-3", className)}
        {...props}
      />
    )
  },
  li: ({ className, ...props }) => {
    return (
      <li
        className={cn("pl-[.875rem] dark:text-mdx-text", className)}
        {...props}
      />
    )
  },
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),

  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-2xl border", className)} alt={alt} {...props} />
  ),

  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-2xl ">
      <table
        className={cn(
          "w-full [&>tbody>tr]:border [&>tbody>tr]:border-zinc-100 dark:[&>tbody>tr]:border-zinc-700/40",
          className,
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0   bg-[#18191b] p-0  [&>th]:bg-[#1f2123]", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),

  figure: ({
    className,
    __language__,
    __filepath__,
    __raw__,
    children,
    ...props
  }) => (
    <figure
      className={cn(
        "mb-4 mt-6 rounded-2xl border border-zinc-100 border-zinc-700/40 bg-black font-geist-mono",
        className,
      )}
      {...props}
    >
      <CodeBlockHeader
        language={__language__}
        filepath={__filepath__}
        raw={__raw__}
      />
      {children}
    </figure>
  ),
  pre: ({ className, children, ...props }) => {
    return (
      <pre className={cn("!bg-black", className)} {...props}>
        {children}
      </pre>
    )
  },
  code: ({ className, ...props }) => {
    const isCodeBlock = props?.["data-language"] ? true : false

    return (
      <code
        className={cn(
          "relative my-4 overflow-x-auto rounded-lg border border-zinc-800 px-[0.3rem] py-[0.2rem] font-mono text-inherit text-white dark:bg-white/10",
          isCodeBlock && "dark:bg-inherit",
          className,
        )}
        {...props}
      />
    )
  },

  Image: (props) => <Image {...props} />,

  Callout,

  Card: MdxCard,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
