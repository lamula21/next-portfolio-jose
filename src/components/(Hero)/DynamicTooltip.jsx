'use client'
import { cn } from '@/lib/utils'
import { ArrowSvg } from '../icons'
import TextEffect from './TextEffect'

export function DynamicToolTip() {
	return (
		<div
			className={cn(
				`hidden absolute z-50 group-hover:flex flex-row items-center justify-center w-[400px] left-[120%] -top-8 rounded-[10px] bg-[#0c0728] p-6 py-4 animate-slideup`
			)}
		>
			{/* <div className="absolute w-[100px] h-[25px] top-[-22px]"></div> */}

			<div className="absolute left-[-13px] top-[70%] -rotate-90">
				<ArrowSvg />
			</div>

			<div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex">
				<div className="flex flex-col text-left">
					<TextEffect />
				</div>
			</div>
		</div>
	)
}
