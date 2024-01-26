import SqlCrud from "@public/projects/next-sql-crud.png"
import Twitter from "@public/projects/next-twitter-supabase.png"
import Quizlet from "@public/projects/react-zustand-quizlet.png"
import { TAGS } from "./tags"

export const projectsData = [
  {
    title: "DCCOA Dashboard",
    type: "Work Experience",
    description:
      "Developed a Content Management System for DCCOA, leading a team of four interns.",
    spinClass: "bg-green-400",
    url: "https://trevotv.vercel.app/",
    github: "https://github.com/lamula21/next-streaming",
    imageUrl: SqlCrud,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.MONGODB],
  },

  {
    title: "Trevo.tv",
    type: "Personal Project",
    spinClass: "bg-purple-400",
    description:
      "A platform for watching +10k content creators' live streams on Twitch and YouTube simultaneously.",
    url: "",
    github: "",
    imageUrl: Twitter,
    tags: [TAGS.REACT, TAGS.NEXT, TAGS.TAILWIND],
  },

  {
    title: "Javascript Quiz",
    type: "Personal Project",
    spinClass: "bg-purple-400",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sit expedita cupiditate a, cumque vitae aspernatur debitis consectetur eaque facilis.",
    url: "",
    github: "",
    imageUrl: Quizlet,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.MONGODB],
  },
]
