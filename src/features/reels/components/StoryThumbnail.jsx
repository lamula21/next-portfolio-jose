import Image from "next/image"
import { useReel } from "@/features/reels/store/useReel"

export function StoryThumbnail({ thumbnail, topic, index }) {
	const { setCurrentReel } = useReel((state) => state)

	return (
		<div className="flex flex-col items-center mx-3">
			<Image
				width={800}
				height={800}
				className="w-14 h-14 rounded-full ring-1 object-cover hover:ring-2 hover:transition-all duration-200 ease-in-out ring-neutral-600 p-1 "
				src={thumbnail.src}
				alt={thumbnail.alt}
				onClick={() => {
					setCurrentReel(index)
				}}
			/>
			<span className="text-white/60 text-sm mt-2 font-Interegular">
				{topic}
			</span>
		</div>
	)
}
