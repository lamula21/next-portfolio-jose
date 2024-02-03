export const links_navigation = [
  {
    name: "About",
    src: "/about",
  },
  {
    name: "Projects",
    src: "/projects",
  },
  {
    name: "Blog",
    src: "/b",
  },
  {
    name: "Courses",
    src: "/c",
  },
  {
    name: "More",
    src: "/more",
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
]

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://josevaldivia.vercel.app"
    : "http://localhost:3000"
