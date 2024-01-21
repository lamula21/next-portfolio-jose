import { educationData } from "@/data/experiences"
import { GraduationCapIcon } from "lucide-react"

export function Education() {
	return (
		<div className="group rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-14">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<GraduationCapIcon className="w-6 h-6 flex-none text-zinc-500" />

				<span className="ml-3">Education</span>
			</h2>

			<ol className="mt-6 space-y-4">
				{educationData.map((education, index) => (
					<li className="flex gap-4" key={index}>
						<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-0">
							<img
								alt=""
								className="h-7 w-7 rounded-full"
								data-nimg="1"
								decoding="async"
								height="32"
								loading="lazy"
								src={education.logo.src}
								style={{
									color: "transparent",
								}}
								width="32"
							/>
						</div>

						<dl className="flex flex-auto flex-wrap gap-x-2">
							<dt className="sr-only">Company</dt>
							<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
								{education.title}
							</dd>
							<dt className="sr-only">Role</dt>
							<dd className="text-xs text-zinc-500 dark:text-zinc-400">
								{education.location}
							</dd>
							<dt className="sr-only">Date</dt>
							<dd
								aria-label="2019 until Present"
								className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
							>
								{education.date}
							</dd>
						</dl>
					</li>
				))}
			</ol>

			<a
				className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
				href="#"
			>
				More about me
				<svg
					aria-hidden="true"
					className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
					fill="none"
					viewBox="0 0 16 16"
				>
					<path
						d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
					/>
				</svg>
			</a>
		</div>
	)
}
