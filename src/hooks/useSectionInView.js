import { useActiveSectionStore } from '@/store/activeSession'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * A custom React hook that uses the `useInView` hook from the `react-intersection-observer` library to detect when a element (section) is in view.
 * When the element is in view, it sets the active section in the zustand store.
 * The active section is used to update the navbar effects.
 * @param {string} sectionName - The name of the section to track.
 * @param {number} [threshold=0.75] - The percentage that needs to be visible to trigger the `inView` state change. Defaults to `0.75`.
 * @returns {{ref: React.RefObject<any>}} - An object containing a React ref object.
 */
export function useSectionInView(sectionName, threshold = 0.75) {
	const [ref, inView] = useInView({
		threshold,
	})

	// retrieve from zustand store
	const { setActiveSection, timeOfLastClick } = useActiveSectionStore()

	// Sets the active section (in the zustand store)
	// if the section is in view and
	// if the time since the last click is greater than 1 second.
	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName])

	return { ref }
}
