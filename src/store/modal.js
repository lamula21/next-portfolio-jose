import { create } from 'zustand'

export const useModalStore = create((set) => {
	return {
		isOpen: false,

		setOpen: (open) => set({ isOpen: open }),
	}
})
