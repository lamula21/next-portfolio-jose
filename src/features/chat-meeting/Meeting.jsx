import { WorkStatus } from "./components/WorkStatus"

export function Meeting() {
	return (
		<div className="hidden lg:flex lg:flex-col shrink w-full h-full rounded-2xl  bg-black p-4 gap-2">
			<WorkStatus />
			<p className="text-sm text-white/80">{"Let's find some time to chat!"}</p>
			<div className="flex gap-4 mt-2 text-sm text-white/90">
				<span>30 min</span>
				<span>google meet</span>
			</div>
		</div>
	)
}
