import { useUrl } from "@/hooks/useUrl"

export async function getStories() {
	const BASE_URL = useUrl()

	return await (await fetch(`${BASE_URL}/stories/stories.json`)).json()
}
