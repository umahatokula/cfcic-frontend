import { StateCreator } from "zustand";

const initialState = {
  kidsDetails: [],
};

export const createKidsDetailsSlice: StateCreator<KidsDetailsSlice> = (
  set
) => ({
  ...initialState,
  setKidsDetails: (arr) => set({ kidsDetails: arr }),
  resetKidsDetails: () => set(() => ({ ...initialState })),
});
