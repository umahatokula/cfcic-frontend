import { StateCreator } from "zustand";

const initialState = {
  biodata: {
    phone_number: "",
    occupation: "",
    birthday: "",
    marital_status: "",
    marriage_anniversary: "",
    is_church_member: "",
    kids: "",
  }
}

export const createBiodataSlice: StateCreator<BiodataSlice> = (set, get) => ({
  ...initialState,
  setBiodata: (obj) => set({ biodata: obj }),
  addNewKid: () => {
    let newObj: Biodata = { ...get().biodata };
    newObj.kids = String(Number(newObj.kids) + 1);
    set({ biodata: newObj });
  },
  resetBiodata: () => set(() => ({ ...initialState })),
});
