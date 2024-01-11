export function useUrl() {
	const BASE_URL =
		process.env.NODE_ENV === "production"
			? "https://josevaldivia.vercel.app"
			: "http://localhost:3000"

	return BASE_URL
}
