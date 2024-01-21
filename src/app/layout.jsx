import "../assets/globals.css"

import { Navbar } from "@/components/Navbar"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/Footer"

export const metadata = {
	title: "Jose Valdivia",
	description: "Showcasing my latest projects and skills",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={cn("dark bg-black font-sans")}>
				<Navbar />
				{children}
				<Toaster />
				<Footer />
				{/* <Provider>{children}</Provider> */}
				<TailwindIndicator />
			</body>
		</html>
	)
}
