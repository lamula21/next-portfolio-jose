import Image from "next/image"
import Link from "next/link"
import testImage from "@public/projects/react-test-55k.png"
import {
  Calendar,
  EyeIcon,
  Heart,
  MessageCircleIcon,
  PiIcon,
} from "lucide-react"
import { Badge } from "@/components/Badge"

export function BlogCard({
  title,
  description,
  image,
  date,
  tags,
  views,
  comments,
  likes,
}) {
  return (
    <article className="group relative flex w-full flex-col gap-4 p-6 pb-8 transition-transform duration-200 ease-linear will-change-transform hover:-translate-y-[3px] md:w-1/2">
      {/* image */}
      <Link
        href="/"
        className="relative max-w-full overflow-hidden rounded-md group-hover:rounded-2xl"
        style={{
          transition: "border-radius 400ms ease",
        }}
      >
        <Image
          src={testImage}
          width={300}
          height={300}
          className="aspect-video h-full w-full scale-100 rounded-md object-cover object-center group-hover:rounded-2xl"
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
              Jan 22, 2023
            </span>
          </div>

          {/* badges */}
          <div className="flex max-w-[70%] gap-1">
            <Badge className="flex shrink-0 gap-1 rounded-md bg-black px-2 py-[5px] text-xs text-white">
              <PiIcon className="h-4 w-4" />
              Algorithms
            </Badge>
          </div>
        </div>

        {/* right: comments + heart + views */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex shrink-0 gap-1">
            <EyeIcon className="h-4 w-4" />
            <span>1.2K</span>
          </div>

          <div className="flex shrink-0 gap-1">
            <MessageCircleIcon className="h-4 w-4" />
            <span>4</span>
          </div>

          <div className="flex shrink-0 gap-1">
            <Heart className="h-4 w-4" />
            <span>4</span>
          </div>
        </div>
      </header>

      {/* title */}
      <div className="flex w-full items-center justify-between">
        <h2 className="line-clamp-2 text-xl font-semibold tracking-tight text-zinc-800 underline decoration-transparent decoration-2 transition-colors duration-300 group-hover:decoration-white dark:text-zinc-100">
          {title}
        </h2>
      </div>

      {/* description */}
      <p className="relative z-10 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400 ">
        Introduction to Data Structures and Algorithms. This courses introduces
        the basic of computing algorithms and programming. Dive into to learn
        new ways to solve problems
      </p>
    </article>
  )
}
