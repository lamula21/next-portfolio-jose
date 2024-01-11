export function Title() {
	return (
		<div className="flex gap-5 tracking-wide text-[40px] 400:text-md 800:text-7xl font-black w-auto h-auto animate-slideleftT2 mt-[24px] text-white">
			<span
				data-content="Contact."
				className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:animate-gradient-background-1 before:text-gradient-white"
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5330ff] to-[#3e20ff] animate-gradient-foreground-1">
					Contact.
				</span>
			</span>

			<span
				data-content="Build."
				className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:animate-gradient-background-2 before:text-gradient-white"
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
					Build.
				</span>
			</span>

			<span
				data-content="Ship."
				className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:animate-gradient-background-3 before:text-gradient-white"
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
					Ship.
				</span>
			</span>
		</div>
	)
}
