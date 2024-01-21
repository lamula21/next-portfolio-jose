import { ChevronDown } from "lucide-react"

export function NavigationButton() {
	return (
		<div className="absolute bottom-0 left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] ">
			<a
				className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-900/80 h-10 w-10 animate-bounce"
				href="#featured"
			>
				<ChevronDown className="w-6 h-6" />
			</a>
		</div>
	)
}
