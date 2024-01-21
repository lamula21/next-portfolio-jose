export function Grid({ children }) {
	return (
		<div className="grid grid-cols-1 gap-y-20 lg:grid-cols-[600px,1fr]">
			{children}
		</div>
	)
}
