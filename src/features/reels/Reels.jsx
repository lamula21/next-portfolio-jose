"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { StoryThumbnail } from "./components/StoryThumbnail"
import { Story } from "./components/Story"
import { useReel } from "./store/useReel"

export function Reels({ stories }) {
	const { currentReel, setCurrentReel } = useReel((state) => state)

	return (
		<div className="mt-6">
			{stories.map((story, index) => (
				<Dialog
					key={`${story}-${index}`}
					open={index === currentReel}
					onOpenChange={(isOpen) => {
						setCurrentReel(isOpen ? index : -1)
					}}
				>
					<DialogTrigger>
						<StoryThumbnail
							key={index}
							index={index}
							thumbnail={story.thumbnail}
							topic={story.topic}
						/>
					</DialogTrigger>

					<DialogContent
						withCloseButton={false}
						className="h-[95%] min-w-[225px] w-[28rem] border border-neutral-700 rounded-lg p-0 bg-white/0"
					>
						<Story
							topic={story.topic}
							slides={story.slides}
							thumbnail={story.thumbnail}
						/>
					</DialogContent>
				</Dialog>
			))}
		</div>
	)
}
