import { GradientButton } from "@/components/GradientButton"
import { MainButton } from "@/components/MainButton"
import { CoffeeIcon, ContactIcon, DownloadIcon } from "@/components/icons"

export function ButtonList() {
	return (
		<div className="flex gap-5 animate-slowfade">
			<GradientButton className="group">
				{/* <div className="">
					<div className="background-1" />
					<div className="background-2" />
					<div className="background-3" />
				</div> */}
				{"Let's Connect!"}
				<ContactIcon className="w-4 h-4 group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition" />
			</GradientButton>

			<MainButton className="group">
				Download CV
				<DownloadIcon className="w-5 h-5 group-hover:translate-y-[2px] transition" />
			</MainButton>

			<MainButton className="group">
				Buy me a Coffee
				<CoffeeIcon className="w-5 h-5 group-hover:scale-[120%] transition" />
			</MainButton>
		</div>
	)
}
