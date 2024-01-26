import Image from "next/image"
import Link from "next/link"
import testImage from "@public/projects/react-test-55k.png"
import { Post } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

import {
  Calendar,
  EyeIcon,
  Heart,
  MessageCircleIcon,
  PiIcon,
} from "lucide-react"
import { Badge } from "@/components/Badge"
import { DEVICONS } from "@/components/icons"
import { TAGS } from "@/data/tags"

export function BlogCard({
  title,
  description,
  image,
  date,
  tags,
  views,
  comments,
  likes,
  slug,
}: Post) {
  const formattedDate = format(parseISO(date), "MMM dd, yyyy")

  return (
    <article className="group relative flex w-full flex-col gap-4 p-6 pb-8 transition-transform duration-200 ease-linear will-change-transform hover:-translate-y-[3px] md:w-1/2">
      {/* image */}
      <Link
        href={slug}
        className="relative max-w-full overflow-hidden rounded-2xl group-hover:rounded-md"
        style={{
          transition: "border-radius 400ms ease",
        }}
      >
        <Image
          src={image || testImage}
          width={300}
          height={300}
          className="aspect-video h-full w-full scale-100 rounded-2xl object-cover object-center group-hover:rounded-md"
          alt="Some image here"
          style={{
            transition: "border-radius 400ms ease",
          }}
        />
      </Link>

      <header className="flex items-center justify-between">
        {/* left: time + badges */}
        <div className="flex  items-center gap-2">
          {/* time */}
          <div className="flex shrink-0 gap-1">
            <Calendar className="h-4 w-4" />
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {formattedDate}
            </span>
          </div>

          {/* badges */}
          <div className="flex h-6 w-full flex-wrap gap-1 overflow-y-hidden">
            {tags.map((tag) => {
              const tagInfo = TAGS[tag.toUpperCase()]
              const Icon = DEVICONS[tagInfo.icon]
              return (
                <Badge className={tagInfo.class}>
                  <Icon className="h-4 w-4" />
                  {tagInfo.name}
                </Badge>
              )
            })}
          </div>
        </div>

        {/* right: comments + heart + views */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex shrink-0 gap-1">
            <EyeIcon className="h-4 w-4" />
            <span>{views}</span>
          </div>

          <div className="flex shrink-0 gap-1">
            <MessageCircleIcon className="h-4 w-4" />
            <span>{comments}</span>
          </div>

          <div className="flex shrink-0 gap-1">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </div>
        </div>
      </header>

      {/* title */}
      <Link href={slug} className="flex w-full items-center justify-between">
        <h2 className="line-clamp-2 text-xl font-semibold tracking-tight text-zinc-800 underline decoration-transparent decoration-2 transition-colors duration-300 group-hover:text-mdx-primary group-hover:decoration-mdx-primary  dark:text-zinc-100">
          {title}
        </h2>
      </Link>

      {/* description */}
      <p className="relative z-10 line-clamp-2 text-sm text-zinc-600 transition-colors duration-500 dark:text-zinc-400 dark:group-hover:text-zinc-200 ">
        {description}
      </p>
    </article>
  )
}
