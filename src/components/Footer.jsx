import { Section } from "./Section"

export function Footer() {
	return (
		<Section className="mt-10 pt-6" footer>
			<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
				<ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-normal text-zinc-800 dark:text-zinc-200">
					<li>About</li>
					<li>Projects</li>
					<li>Courses</li>
				</ul>

				<span className="text-sm text-zinc-400 dark:text-zinc-500">
					© 2024 Jose Valdivia. All right reserved. Made with ❤️ in React.
				</span>
			</div>
		</Section>
	)
}
