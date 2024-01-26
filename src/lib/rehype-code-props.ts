import { visit } from "unist-util-visit"

export const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children

      if (codeEl.tagName !== "code") return

      const fileRegex = /filepath="(.*)"/

      const match = codeEl.data?.meta.match(fileRegex)

      if (match) {
        node.properties.__filepath__ = match[1]
      }

      node.properties.__raw__ = codeEl.children?.[0].value

      node.properties.__language__ =
        node.children[0].properties.className[0].split("-")[1]
    }
  })
}

// export const postProcess = () => (tree) => {
//   visit(tree, (node) => {
//     if (node?.type === "element" && node?.tagName === "div") {
//       if (!("data-rehype-pretty-code-figure" in node.properties)) {
//         return
//       }

//       for (const child of node.children) {
//         if (child.tagName === "pre") {
//           child.properties["raw"] = node.raw
//         }
//       }
//     }
//   })
// }
