import { cn } from '@/lib/utils'

export function MainButton({ className, href, title, icon: Icon }) {
	return (
		<a
			href={href}
			className={cn(
				'inline-flex items-center gap-2 relative overflow-hidden border rounded-xl px-[20px] py-4 text-white font-bold cursor-pointer transition-shadow duration-400 bg-[rgba(255,255,255,.05)] backdrop-blur-sm blue-hover-effect',
				className
			)}
		>
			{title}
			{Icon && <Icon className="w-4 h-4" />}
		</a>
	)
}
