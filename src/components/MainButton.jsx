import { cn } from '@/lib/utils'

export function MainButton({ className, href, children, onClick }) {
	const Tag = href ? 'a' : 'button'
	return (
		<Tag
			{...(href ? { href } : {})}
			onClick={onClick}
			className={cn(
				'inline-flex items-center gap-2 relative overflow-hidden border rounded-xl px-[20px] py-4 text-white font-bold cursor-pointer transition-shadow duration-400 bg-[rgba(255,255,255,.05)] backdrop-blur-sm blue-hover-effect',
				className
			)}
		>
			<div className="flex justify-center items-center gap-2">{children}</div>
		</Tag>
	)
}
