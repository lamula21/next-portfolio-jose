export async function getStories() {
	return await (
		await fetch("http://localhost:3000/stories/stories.json")
	).json()
}
