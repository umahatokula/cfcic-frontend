import { create, StateCreator } from "zustand";

const initialState = {
  user: {
    id: "",
    email: "",
    name: "",
    display_picture: "",
    provider: "",
    createdAt: "",
    updatedAt: "",
  },
  access_token: "",
};
export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  ...initialState,
  addUser: (obj, access_token) => set(() => ({ user: obj, access_token: access_token })),
  resetUser: () => set(() => ({ ...initialState })),
});
