import { create } from 'zustand'

export const useStarsStore = create((set) => {
	return {
		starColor: '',
		starMode: true,

		setStarColor: (color) => set({ starColor: color }),
		setStarMode: (mode) => set({ starMode: mode }),
	}
})
