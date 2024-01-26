import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import "@/styles/mdx.css"
// import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getTableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"
import { formatDate } from "@/utils/formatDate"

import { buttonVariants } from "@/components/ui/button"
import {
  ChevronLeft,
  Heart,
  MessageCircleIcon,
  MoreHorizontal,
} from "lucide-react"
import { Mdx } from "@/components/mdx/MdxComponents"
import { Section } from "@/components/Section"
import { TableOfContent } from "@/components/toc/TableOfContent"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

// export async function generateMetadata({
//   params,
// }: PostPageProps): Promise<Metadata> {
//   const post = await getPostFromParams(params)

//   if (!post) {
//     return {}
//   }

//   const url = process.env.NEXT_PUBLIC_DOMAIN

//   const ogUrl = new URL(`${url}/api/og`)
//   ogUrl.searchParams.set("heading", post.title)
//   ogUrl.searchParams.set("type", "Blog Post")
//   ogUrl.searchParams.set("mode", "dark")

//   return {
//     title: post.title,
//     description: post.description,
//     authors: post.authors.map((author) => ({
//       name: author,
//     })),
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       type: "article",
//       url: absoluteUrl(post.slug),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.description,
//       images: [ogUrl.toString()],
//     },
//   }
// }

// export async function generateStaticParams(): Promise<
//   PostPageProps["params"][]
// > {
//   return allPosts.map((post) => ({
//     slug: post.slugAsParams.split("/"),
//   }))
// }

export default async function Blog({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const toc = await getTableOfContents(post.body.raw)

  // const authors = post.authors.map((author) =>
  //   allAuthors.find(({ slug }) => slug === `/authors/${author}`),
  // )

  return (
    <Section className="mt-16 sm:px-8 lg:mt-32">
      <div className="relative">
        <div className="mx-auto max-w-2xl 1160:ml-10 1160:mr-auto 1350:mx-auto">
          <article className="relative">
            {/* left aside */}
            <aside className="absolute -left-[10%] top-4 hidden h-full w-[70px] shrink-0 -translate-x-[50%] flex-col lg:flex">
              <div className="sticky top-6 w-full flex-col items-center gap-y-16 lg:flex">
                <Link
                  href="/b"
                  className="inline-flex h-12 w-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-zinc-900/80 text-sm font-medium ring-offset-background transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Link>

                <div className="flex flex-col items-center gap-y-6">
                  <button
                    className="flex shrink-0 cursor-not-allowed flex-col items-center gap-y-2 disabled:opacity-50"
                    disabled
                  >
                    <Heart className="h-6 w-6" />
                    <span>0</span>
                  </button>

                  <button
                    className="flex shrink-0 cursor-not-allowed flex-col items-center gap-y-2 disabled:opacity-50"
                    disabled
                  >
                    <MessageCircleIcon className="h-6 w-6" />
                    <span>0</span>
                  </button>

                  <button
                    className="flex shrink-0 cursor-not-allowed flex-col items-center gap-y-2 disabled:opacity-50"
                    disabled
                  >
                    <MoreHorizontal className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </aside>

            {/* rigth aside */}
            <aside className="absolute -right-4 top-4 hidden h-full w-[290px] shrink-0 translate-x-[110%] flex-col 1160:flex">
              <div className="sticky top-6 w-full flex-col items-center gap-y-16 lg:flex">
                <TableOfContent toc={toc} />
              </div>
            </aside>

            {/* header */}
            <div>
              {post.date && (
                <time
                  dateTime={post.date}
                  className="block text-sm text-muted-foreground"
                >
                  Published on {formatDate(post.date)}
                </time>
              )}
              <h1 className="mt-6 inline-block text-4xl font-bold leading-tight tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
                {post.title}
              </h1>
            </div>

            {/* post image */}
            {post.image && (
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={720}
                  height={405}
                  className="z-10 my-8 rounded-3xl border bg-muted transition-colors"
                  priority
                />
                <Image
                  src={post.image}
                  alt={post.title}
                  width={720}
                  height={405}
                  className="absolute left-[50%] top-[50%] -z-[1] h-[88%] w-[88%] translate-x-[-50%] translate-y-[-50%]  rounded-3xl border bg-muted blur-3xl transition-colors"
                  priority
                />
              </div>
            )}

            {/* markdown content */}
            <Mdx code={post.body.code} />

            <hr className="mt-12" />

            {/* footer */}
            <div className="flex justify-center py-6 lg:py-10">
              <Link
                href="/b"
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                See all posts
              </Link>
            </div>
          </article>
        </div>
      </div>

      <span className="fixed inset-0 -z-[10] bg-[url('/bg-docs.webp')] bg-fixed bg-right-top bg-no-repeat md:block" />
    </Section>
  )
}
