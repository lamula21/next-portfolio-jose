import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function Logo({ className }) {
	return (
		<Link
			href={'/'}
			className={cn('w-auto h-auto flex flex-row items-center', className)}
		>
			<span id="cursive" className=" font-bold  text-gray-300  ml-[10px] flex ">
				Jose Valdvia
			</span>
		</Link>
	)
}
