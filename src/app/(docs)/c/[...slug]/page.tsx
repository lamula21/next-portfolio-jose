import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"

import "@/styles/mdx.css"
import { Mdx } from "@/components/mdx/MdxComponents"
import { TableOfContent } from "@/components/toc/TableOfContent"
import { DocsPageHeader } from "@/components/mdx/DocsPageHeader"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(params) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}

// export async function generateMetadata({
//   params,
// }: DocPageProps): Promise<Metadata> {
//   const doc = await getDocFromParams(params)

//   if (!doc) {
//     return {}
//   }

//   const url = env.NEXT_PUBLIC_APP_URL

//   const ogUrl = new URL(`${url}/api/og`)
//   ogUrl.searchParams.set("heading", doc.description ?? doc.title)
//   ogUrl.searchParams.set("type", "Documentation")
//   ogUrl.searchParams.set("mode", "dark")

//   return {
//     title: doc.title,
//     description: doc.description,
//     openGraph: {
//       title: doc.title,
//       description: doc.description,
//       type: "article",
//       url: absoluteUrl(doc.slug),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: doc.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: doc.title,
//       description: doc.description,
//       images: [ogUrl.toString()],
//     },
//   }
// }

// export async function generateStaticParams(): Promise<
//   DocPageProps["params"][]
// > {
//   return allDocs.map((doc) => ({
//     slug: doc.slugAsParams.split("/"),
//   }))
// }

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params)

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    // overflow-hidden??
    <main className="relative max-w-full overflow-hidden py-6  lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] xl:overflow-visible">
      <div
        id="scroll-shadow"
        className="pointer-events-none fixed left-[275px] top-7 z-10 h-[100px] w-[100%] select-none bg-[linear-gradient(to_top,transparent,#000000)] blur-sm will-change-transform [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] xl:w-[53%]"
      />

      <div className="relative mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        {/* <DocsPager doc={doc} /> */}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <TableOfContent toc={toc} />
        </div>
      </div>
    </main>
  )
}
