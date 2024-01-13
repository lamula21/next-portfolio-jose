import { cn } from "@/lib/utils"

export function PaymentButton({ className, children, href, ...props }) {
	const Tag = href ? "a" : "div"
	return (
		<Tag
			href={href}
			{...props}
			className={cn(
				"w-full rounded-md border py-3 flex justify-center items-center gap-2 hover:bg-black/50 transition-colors",
				className
			)}
		>
			{children}
		</Tag>
	)
}
