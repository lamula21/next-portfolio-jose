import { cn } from "@/lib/utils"

export const GradIcon = ({ className }) => (
	<svg
		className={className}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth="2"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
		<path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
	</svg>
)

export const GithubIcon = ({ className }) => (
	<svg
		className={className}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="fill"
		color="rgba(0, 0, 0, 1)"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
		></path>
	</svg>
)

export const XIcon = ({ className }) => (
	<svg
		className={className}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
		<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
	</svg>
)

export const AtIcon = ({ className }) => (
	<svg
		className={className}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
		<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
	</svg>
)

export const MailIcon = ({ className, ...props }) => (
	<svg
		className={className}
		{...props}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
		<path d="M3 7l9 6l9 -6" />
	</svg>
)

export const MailCheckIcon = ({ className }) => (
	<svg
		className={className}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
		<path d="M3 7l9 6l9 -6" />
		<path d="M15 19l2 2l4 -4" />
	</svg>
)

export const LinkedInIcon = ({ className }) => (
	<svg
		className="icon icon-tabler icon-tabler-brand-linkedin"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
		<path d="M8 11l0 5"></path>
		<path d="M8 8l0 .01"></path>
		<path d="M12 16l0 -5"></path>
		<path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
	</svg>
)

export const DiscordIcon = ({ className }) => (
	<svg
		className={className}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path
			d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z"
			strokeWidth={0}
			fill="currentColor"
		></path>
	</svg>
)

export const ArrowSvg = ({ className }) => (
	<svg
		className={cn("bi bi-triangle-fill text-[#0c0728]", className)}
		width="16"
		height="16"
		fill="currentColor"
		viewBox="0 0 16 16"
	>
		<path
			fillRule="evenodd"
			d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
		/>
	</svg>
)

export const DownloadIcon = ({ className }) => (
	<svg
		className={className}
		width={24}
		height={24}
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
		<path d="M7 11l5 5l5 -5" />
		<path d="M12 4l0 12" />
	</svg>
)

export const ContactIcon = ({ className }) => (
	<svg className={className} width="1em" height="1em" viewBox="0 0 1792 1792">
		<path
			fill="currentColor"
			d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"
		/>
	</svg>
)

export const CoffeeIcon = ({ className }) => (
	<svg className={className} width="1em" height="1em" viewBox="0 0 24 24">
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<path
				fill="currentColor"
				fillOpacity="0"
				strokeDasharray="48"
				strokeDashoffset="48"
				d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
			>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					dur="0.6s"
					values="48;0"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.8s"
					dur="0.15s"
					values="0;0.3"
				/>
			</path>
			<path
				strokeDasharray="14"
				strokeDashoffset="14"
				d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
			>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.6s"
					dur="0.2s"
					values="14;28"
				/>
			</path>
		</g>
		<mask id="IconifyId18ce49d7e19baefac11">
			<path
				fill="none"
				stroke="#fff"
				strokeWidth="2"
				d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
			>
				<animateMotion
					calcMode="linear"
					dur="3s"
					path="M0 0v-8"
					repeatCount="indefinite"
				/>
			</path>
		</mask>
		<rect
			width="24"
			height="0"
			y="7"
			fill="currentColor"
			mask="url(#IconifyId18ce49d7e19baefac11)"
		>
			<animate
				fill="freeze"
				attributeName="y"
				begin="0.8s"
				dur="0.6s"
				values="7;2"
			/>
			<animate
				fill="freeze"
				attributeName="height"
				begin="0.8s"
				dur="0.6s"
				values="0;5"
			/>
		</rect>
	</svg>
)

export function VerifiedIcon({ className }) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" className={className}>
			<g fill="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M10.054 2.344a3 3 0 0 1 3.892 0l1.271 1.084a1 1 0 0 0 .57.236l1.665.133a3 3 0 0 1 2.751 2.751l.133 1.666a1 1 0 0 0 .236.569l1.084 1.271a3 3 0 0 1 0 3.892l-1.084 1.271a1 1 0 0 0-.236.57l-.133 1.665a3 3 0 0 1-2.751 2.751l-1.666.133a1 1 0 0 0-.569.236l-1.271 1.084a3 3 0 0 1-3.892 0l-1.271-1.084a1 1 0 0 0-.57-.236l-1.665-.133a3 3 0 0 1-2.751-2.751l-.133-1.666a1 1 0 0 0-.236-.569l-1.084-1.271a3 3 0 0 1 0-3.892l1.084-1.271a1 1 0 0 0 .236-.57l.133-1.665a3 3 0 0 1 2.751-2.751l1.666-.133a1 1 0 0 0 .569-.236l1.271-1.084zm5.653 8.363a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
					fill="currentColor"
				/>
			</g>
		</svg>
	)
}

export function CashappIcon(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
			<path
				fill="currentColor"
				d="M31.453 4.625A6.796 6.796 0 0 0 27.385.562c-1.745-.563-3.333-.563-6.557-.563h-9.682c-3.198 0-4.813 0-6.531.531A6.805 6.805 0 0 0 .547 4.613C0 6.347 0 7.946 0 11.144v9.693c0 3.214 0 4.802.531 6.536a6.796 6.796 0 0 0 4.068 4.063c1.734.547 3.333.547 6.536.547h9.703c3.214 0 4.813 0 6.536-.531a6.807 6.807 0 0 0 4.078-4.078c.547-1.734.547-3.333.547-6.536v-9.667c0-3.214 0-4.813-.547-6.547zm-8.224 6.177l-1.245 1.24a.67.67 0 0 1-.891.01a6.715 6.715 0 0 0-4.292-1.573c-1.297 0-2.589.427-2.589 1.615c0 1.198 1.385 1.599 2.984 2.198c2.802.938 5.12 2.109 5.12 4.854c0 2.99-2.318 5.042-6.104 5.266l-.349 1.604a.648.648 0 0 1-.635.516h-2.391l-.12-.01a.668.668 0 0 1-.505-.786l.375-1.693a8.748 8.748 0 0 1-3.844-2.094v-.016a.641.641 0 0 1 0-.906l1.333-1.292a.66.66 0 0 1 .896 0a6.454 6.454 0 0 0 4.521 1.76c1.734 0 2.891-.734 2.891-1.896s-1.172-1.464-3.385-2.292c-2.349-.839-4.573-2.026-4.573-4.802c0-3.224 2.677-4.797 5.854-4.943l.333-1.641a.642.642 0 0 1 .641-.51h2.37l.135.016a.64.64 0 0 1 .495.76l-.359 1.828a9.945 9.945 0 0 1 3.302 1.849l.031.031c.25.266.25.667 0 .906z"
			/>
		</svg>
	)
}

export function StripeIcon(props) {
	return (
		<svg width="2.4em" height="1em" viewBox="0 0 512 214" {...props}>
			<path
				fill="#635BFF"
				d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774"
			/>
		</svg>
	)
}

// export const CVIcon = ({ className }) => (
// 		<svg
// 			className={className}
// 			width={24}
// 			height={24}
// 			viewBox="0 0 24 24"
// 			stroke-width={2}
// 			stroke="currentColor"
// 			fill="none"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		>
// 			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
// 			<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
// 			<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
// 			<path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
// 			<path d="M13 11l1.5 6l1.5 -6"></path>
// 		</svg>
//
// )
