import { Post, allPosts } from "contentlayer/generated"

import { Headline1 } from "@/components/Headline1"
import { Headline2 } from "@/components/Headline2"
import SearchInput from "@/components/SearchInput"
import { Section } from "@/components/Section"
import { BlogCard } from "@/features/blog/BlogCard"
import { compareDesc } from "date-fns"

function getPosts(): Post[] {
  return allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}

export default async function ProjectsPage() {
  const posts = getPosts()

  return (
    <Section className="mt-16 sm:mt-32">
      <header className="max-w-2xl space-y-5">
        <Headline1 className="relative sm:font-semibold">
          <div
            id="shadow-overlay"
            className="absolute -left-14 -top-10 h-[100px] w-[90px] bg-gradient-to-tr from-[#cbcccc] to-[#797979]  blur-3xl"
          />
          Writing on software{" "}
          <span className="text-blue-500">engineering, </span>
          best pattern <span className="text-blue-500">designs, </span> and new
          <span className="text-blue-500"> technologies.</span>
        </Headline1>

        <Headline2>
          All of my long-form thoughts on programming, leadership, best design
          patterns, and more, collected in chronological order.
        </Headline2>

        <SearchInput />
      </header>

      <div className="-mx-6 mt-16 flex flex-wrap gap-y-6 sm:mt-20 md:gap-0">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </Section>
  )
}
