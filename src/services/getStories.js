import { BASE_URL } from "@/data/config"

export async function getStories() {
	return await (
		await fetch(`${BASE_URL}/mock/stories.json`, {
			headers: {
				"Content-Type": "application/json",
			},
		})
	).json()
}
