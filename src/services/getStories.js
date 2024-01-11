import { BASE_URL } from "@/data/config"

export async function getStories() {
	return await (
		await fetch(`${BASE_URL}/stories/stories.json`, {
			cache: "no-store",
		})
	).json()
}
