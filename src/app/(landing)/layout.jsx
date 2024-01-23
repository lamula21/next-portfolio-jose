import { Navbar } from "@/components/navbar/Navbar"

export default function LandingLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
