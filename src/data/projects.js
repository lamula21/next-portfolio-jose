import dccoa from "@public/projects/dccoa.png"
import SandBoxTv from "@public/projects/sandboxtv.png"
import TerpNet from "@public/projects/terpnet.png"

import { TAGS } from "./tags"

export const projectsData = [
  {
    title: "DCCOA Dashboard",
    type: "Work Experience",
    description: "A Content Management System and MVP website for DCCOA org.",
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
      "TerpNet is a social networking platform exclusively for UMD users, featuring real-time chat and notifications.",
    url: "https://terpnet.vercel.app/",
    github: "https://github.com/lamula21/next-realtimechat-websocket",
    imageUrl: TerpNet,
    tags: [TAGS.NEXT, TAGS.REDIS, TAGS.NEXTAUTH, TAGS.TAILWIND],
  },

  {
    title: "SandBox.tv",
    type: "Personal Project",
    spinClass: "bg-purple-400",
    description:
      "SandBox.tv is a platform for watching +10k content creators' live streams on Twitch and YouTube simultaneously.",
    url: "https://sandboxtv.vercel.app",
    github: "https://github.com/lamula21/next-streaming",
    imageUrl: SandBoxTv,
    tags: [TAGS.REACT, TAGS.NEXT, TAGS.TAILWIND, TAGS.TWITCH, TAGS.YOUTUBE],
  },
]
