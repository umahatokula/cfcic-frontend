import { number } from "yup";
import { StateCreator } from "zustand";

const initialState = {
  registration: {
    event_id: "",
    user_id: "",
    in_person: "",
    requires_feeding: "",
    requires_accomodation: "",
    requires_transport: "",
    services_required: [],
    dates_attending: [],
    existing_dependents: [],
    new_dependents: [],
  },
  regFormStep: 1
}

export const createEventRegistrationSlice: StateCreator<
  EventReistrationSlice
> = (set) => ({
  ...initialState,
  setRegistration: (obj) => set({ registration: obj }),
  resetRegistration: () => set(() => ({ ...initialState })),
});