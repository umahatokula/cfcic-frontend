import { StateCreator } from "zustand";

export const createBiodataSlice: StateCreator<BiodataSlice> = (set, get) => ({
  biodata: {
    phone_number: "",
    occupation: "",
    birthday: "",
    marital_status: "married",
    marriage_anniversary: "",
    is_church_member: "",
    kids: "",
  },
  setBiodata: (obj) => set({ biodata: obj }),
  addNewKid: () => {
    let newObj: Biodata = { ...get().biodata };
    newObj.kids = String(Number(newObj.kids) + 1);
    set({ biodata: newObj });
  },
});
