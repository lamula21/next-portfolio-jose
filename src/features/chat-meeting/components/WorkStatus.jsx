export function WorkStatus() {
	return (
		<span className="inline-flex items-center py-0 text-base font-semibold  pointer-events-auto undefined ">
			<span className="">Available for work</span>

			<span className="ml-1.5 flex justify-center h-2 w-2 items-center ">
				<span className="absolute flex w-2 h-2 rounded-full opacity-75 animate-ping bg-green-400" />
				<span className="relative inline-flex w-1 h-1 rounded-full bg-green-400" />
			</span>
		</span>
	)
}
