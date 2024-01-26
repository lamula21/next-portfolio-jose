import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
// import { codeImport } from "remark-code-import"
import { preProcess } from "./src/lib/rehype-code-props"

const computedFields: import("contentlayer/source-files").ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `b/**/*.mdx`,
  contentType: "mdx",
  fields: {
    authors: {
      type: "list",
      of: { type: "string" },
      description: "The author of the post",
      required: true,
    },
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the post",
      required: true,
    },
    views: {
      type: "number",
      description: "The number of views of the post",
      default: 0,
    },
    comments: {
      type: "number",
      description: "The number of comments of the post",
      default: 0,
    },
    likes: {
      type: "number",
      description: "The number of likes of the post",
      default: 0,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}))

const rehypeOptions = {
  theme: "github-dark",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitHighlightedLine(node) {
    const nodeClass = node.properties.className

    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push("line--highlighted")
    } else {
      node.properties.className = ["line--highlighted"]
    }
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ["word--highlighted"]
  },
}

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],

    rehypePlugins: [
      rehypeSlug,
      preProcess,
      [rehypePrettyCode as any, rehypeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      // postProcess,
    ],
  },
})
