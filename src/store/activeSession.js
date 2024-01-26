import { create } from "zustand"

export const useActiveSectionStore = create((set) => {
  return {
    activeSection: "",
    timeOfLastClick: 0,

    setActiveSection: (section) => set({ activeSection: section }),
    setTimeOfLastClick: (time) => set({ timeOfLastClick: time }),
  }
})
