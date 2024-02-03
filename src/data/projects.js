import dccoa from "@public/projects/dccoa.png"
import SandBoxTv from "@public/projects/sandboxtv.png"
import TerpNet from "@public/projects/terpnet.png"

import { TAGS } from "./tags"

export const projectsData = [
  {
    title: "DCCOA Dashboard",
    type: "Work Experience",
    description:
      "Developed a Content Management System for DCCOA. Team leader of four interns.",
    spinClass: "bg-green-400",
    url: "https://dccoa.vercel.app/",
    github: "",
    imageUrl: dccoa,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.MONGODB],
  },

  {
    title: "TerpNet",
    type: "Personal Project",
    spinClass: "bg-purple-400",
    description:
      "Created a high-speed messaging app with real-time features using Next.js, Next Auth, and Redis, emphasizing security, privacy, and optimized performance.",
    url: "https://terpnet.vercel.app/",
    github: "https://github.com/lamula21/next-realtimechat-websocket",
    imageUrl: TerpNet,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.MONGODB],
  },

  {
    title: "SandBox.tv",
    type: "Personal Project",
    spinClass: "bg-purple-400",
    description:
      "A platform for watching +10k content creators' live streams on Twitch and YouTube simultaneously.",
    url: "https://sandboxtv.vercel.app",
    github: "https://github.com/lamula21/next-streaming",
    imageUrl: SandBoxTv,
    tags: [TAGS.REACT, TAGS.NEXT, TAGS.TAILWIND, TAGS.TWITCH, TAGS.YOUTUBE],
  },
]
