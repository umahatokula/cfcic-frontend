import { create, StateCreator } from "zustand";

const initialState = {
  currentEvent: {
    id: "",
    name: "",
    tagline: "",
    banner_image: "",
    start_date: "",
    end_date: "",
    createdAt: "",
    updatedAt: "",
  },
};
export const createCurrentEventSlice: StateCreator<EventSlice> = (set) => ({
  ...initialState,
  addEvent: (obj) => set(() => ({ currentEvent: obj })),
  resetEvent: () => set(() => ({ ...initialState })),
});
