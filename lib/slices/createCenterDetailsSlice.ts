import { StateCreator } from "zustand";

const initialState = {
    centerDetails: {
        church_join_date: "",
        church_centre_id: "",
        growth_track_completed: "",
        service_team: [],
        home_cell_id: "",
        colony_id: "",
        roles_and_responsibilities: []
    }}

export const createCenterDetailsSlice: StateCreator<CenterDetailsSlice> = (set) => ({
    ...initialState,
    setCenterDetails: (obj) => set(
        { centerDetails: obj }
    ),
    resetCenterDetails: () => set(() => ({ ...initialState })),
})