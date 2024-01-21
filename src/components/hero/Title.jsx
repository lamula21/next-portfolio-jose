export function Title() {
	return (
		<div className="flex flex-wrap gap-x-5 gap-y-3 font-bold tracking-tight text-zinc-100 text-4xl sm:text-6xl w-auto h-auto animate-slideleftT2 mt-6">
			<span
				data-content="Software engineer."
				className="relative block before:content-[attr(data-content)] before:w-full before:h-[110%] before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:animate-gradient-background-1 before:text-gradient-white"
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5330ff] to-[#3e20ff] animate-gradient-foreground-1">
					Software engineer.
				</span>

				<span className="shadow-1" />
			</span>

			<span
				data-content="Leader."
				className="relative block before:content-[attr(data-content)] before:w-full before:h-[110%]  before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:animate-gradient-background-2 before:text-gradient-white"
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
					Leader.
				</span>

				<span className="shadow-2" />
			</span>

			<span
				data-content="and Content Creator."
				className="relative block before:content-[attr(data-content)] before:w-full before:h-[110%] before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:animate-gradient-background-3 before:text-gradient-white"
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
					and Content Creator.
				</span>

				<span className="shadow-3" />
			</span>
		</div>
	)
}
