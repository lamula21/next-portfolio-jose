import { Navbar2 } from "@/components/navbar/Navbar2"
import React from "react"

export default function OthersLayout({ children }) {
  return (
    <>
      <Navbar2 />
      {children}
    </>
  )
}
