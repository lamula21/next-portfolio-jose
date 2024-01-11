import { create } from "zustand"

interface ReelState {
	currentReel: number
	setCurrentReel: (tabIndex: number) => void
	goPreviousReel: () => void
	goNextReel: () => void
	resetReel: () => void
}

export const useReel = create<ReelState>((set, get) => ({
	currentReel: -1,

	setCurrentReel: (tabIndex) => set({ currentReel: tabIndex }),

	// 1. way to retrieve currentReel
	goPreviousReel: () =>
		set((state) => ({ currentReel: state.currentReel - 1 })),

	// 2. way to retrieve currentReel
	goNextReel: () => {
		const { currentReel } = get()
		set({ currentReel: currentReel + 1 })
	},

	resetReel: () => set({ currentReel: -1 }),
}))
