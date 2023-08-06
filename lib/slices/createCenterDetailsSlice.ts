import { StateCreator } from "zustand"

export const createCenterDetailsSlice: StateCreator<CenterDetailsSlice> = (set) => ({
    centerDetails: {
        church_join_date: "",
        church_centre_id: "",
        growth_track_completed: "",
        service_team: [],
        home_cell_id: "",
        colony_id: "",
        roles_and_responsibilities: []
    },
    setCenterDetails: (obj) => set(
        { centerDetails: obj }
    )
})