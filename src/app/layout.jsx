import "../assets/globals.css"
import { Inter, Cedarville_Cursive } from "next/font/google"
import localFont from "next/font/local"

import { Navbar } from "@/components/Navbar"
import { cn } from "@/lib/utils"
import { StarsCanvas } from "@/components/Stars"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { Toaster } from "@/components/ui/sonner"

// const inter = Inter({ subsets: ["latin"] })

const cedarville = Cedarville_Cursive({
	subsets: ["latin"],
	variable: "--font-cedarville",
	weight: ["400"],
})

const myFont = localFont({
	src: [
		{
			path: "../../public/CentraNo2-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/CentraNo2-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/CentraNo2-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/CentraNo2-Extrabold.ttf",
			weight: "800",
		},
		{
			path: "../../public/CentraNo2-Black.ttf",
			weight: "900",
			style: "normal",
		},
	],
})

export const metadata = {
	title: "Jose Valdivia",
	description: "Showcasing my latest projects and skills",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={cn(
					"dark bg-[#030014]",
					myFont.className,
					cedarville.variable
				)}
			>
				<Navbar />
				<StarsCanvas />
				{children}
				<Toaster />
				{/* <Provider>{children}</Provider> */}
				<TailwindIndicator />
			</body>
		</html>
	)
}
